import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardPackProps {
  onHeroClick: () => void;
  previewContent: React.ReactNode;
}

const cards = [
  { id: 1, content: 'Hero', href: '/' },
  { id: 2, text: 'TBA', href: '#' },
  { id: 3, text: 'TBA', href: '#' },
  { id: 4, content: 'Travian Time Travel Calculator', href: 'https://nopocalypse.com/traviantraveltime/' },
  { id: 5, text: 'TBA', href: '#' },
];

const CardPack = ({ onHeroClick, previewContent }: CardPackProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [hoverCard, setHoverCard] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cardRects, setCardRects] = useState<Record<number, DOMRect>>({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handlePackClick = () => {
    setIsOpen(true);
  };

  const handleCardClick = (cardId: number, href: string) => {
    setSelectedCard(cardId);
    if (href === '/') {
      onHeroClick();
    } else {
      window.location.href = href;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, cardId: number, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleCardClick(cardId, href);
    }
  };

  const cardPositions = [
    { x: 0, y: -400, rotate: 0 }, // Top center (Hero), moved further up
    { x: -300, y: -150, rotate: 0 }, // Top left, moved further left and up
    { x: 300, y: -150, rotate: 0 }, // Top right, moved further right and up
    { x: -150, y: 250, rotate: 0 }, // Bottom left center, moved further left and down
    { x: 150, y: 250, rotate: 0 }, // Bottom right center, moved further right and down
  ];

  const getTiltAndShine = (cardId: number, rect: DOMRect) => {
    if (hoverCard !== cardId) return { rotateX: 0, rotateY: 0, shineX: 0, shineY: 0 };
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = cursorPosition.x - centerX;
    const mouseY = cursorPosition.y - centerY;
    const rotateX = (mouseY / rect.height) * 20;
    const rotateY = (mouseX / rect.width) * -20;
    const shineX = (mouseX / rect.width) * 100;
    const shineY = (mouseY / rect.height) * 100;
    return { rotateX, rotateY, shineX, shineY };
  };

  return (
    <AnimatePresence>
      {!isOpen ? (
        <motion.div
          key="card-pack"
          className="fixed inset-0 flex items-center justify-center bg-portfolio-dark z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          style={{ willChange: 'opacity' }}
          onClick={handlePackClick}
          onKeyDown={(e) => handleKeyPress(e, 0, '/')}
          tabIndex={0}
          role="button"
          aria-label="Open card pack"
        >
          <motion.div
            className="relative w-64 h-96 bg-gradient-to-br from-portfolio-accent to-portfolio-highlight rounded-lg shadow-md"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: 'transform' }}
          >
            {/* Plastic Wrap */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[rgba(255,255,255,0.7)] to-transparent rounded-lg"
              style={{ filter: 'blur(1px)', border: '1px solid rgba(255,255,255,0.3)' }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            />
            {/* "Click to Open" Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold font-inter z-40">
              Click to Open
            </div>
            {/* Particles (Stars/Sparkles) */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Add star/sparkle effects here using CSS or framer-motion */}
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="cards"
          className="fixed inset-0 flex items-center justify-center bg-portfolio-dark z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ willChange: 'opacity' }}
        >
          {/* Prompt to pick a card */}
          <motion.div
            className="absolute top-[42%] left-[47%] transform -translate-x-1/2 text-white text-3xl font-bold font-inter z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            Pick a card
          </motion.div>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="absolute w-64 h-96 bg-gradient-to-br from-portfolio-accent to-portfolio-highlight rounded-lg shadow-md flex items-center justify-center text-white text-2xl font-bold font-inter cursor-pointer perspective-[1000px]"
              style={{
                x: cardPositions[index].x,
                y: cardPositions[index].y,
                willChange: 'transform',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => handleCardClick(card.id, card.href)}
              onKeyDown={(e) => handleKeyPress(e, card.id, card.href)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setCardRects((prevRects) => ({ ...prevRects, [card.id]: rect }));
                const { rotateX, rotateY, shineX, shineY } = getTiltAndShine(card.id, rect);
                setHoverCard(card.id);
              }}
              onMouseLeave={() => setHoverCard(null)}
              tabIndex={0}
              role="button"
              aria-label={`Card ${card.content || card.text} (${card.id})`}
            >
              <motion.div
                className="relative w-full h-full rounded-lg flex items-center justify-center"
                style={{
                  transform: hoverCard === card.id ? `rotateX(${getTiltAndShine(card.id, cardRects[card.id]).rotateX}deg) rotateY(${getTiltAndShine(card.id, cardRects[card.id]).rotateY}deg)` : 'rotateX(0deg) rotateY(0deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {card.content === 'Hero' ? (
                  <div className="w-full h-full">
                    {previewContent}
                  </div>
                ) : card.content === 'Travian Time Travel Calculator' ? (
                  <div className="w-full h-full flex items-center justify-center text-center text-white text-2xl font-bold font-inter bg-gradient-to-br from-portfolio-accent to-portfolio-highlight p-4 rounded-lg shadow-lg">
                    Travian Time Travel Calculator
                  </div>
                ) : (
                  card.text
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CardPack;