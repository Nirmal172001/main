import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    let animId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      setTrailPos((prev) => ({
        x: lerp(prev.x, pos.x, 0.12),
        y: lerp(prev.y, pos.y, 0.12),
      }));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  useEffect(() => {
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    const interactables = document.querySelectorAll('a, button, [role="button"]');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });
    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('a, button, [role="button"]');
      els.forEach((el) => {
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: pos.x - 5,
          top: pos.y - 5,
          width: 10,
          height: 10,
          background: isHovering ? '#22d3ee' : '#ffffff',
          boxShadow: isHovering ? '0 0 12px #22d3ee, 0 0 24px rgba(34, 211, 238, 0.4)' : '0 0 6px rgba(255,255,255,0.8)',
          mixBlendMode: 'difference',
          transition: 'background 0.15s, box-shadow 0.15s, transform 0.1s',
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          left: trailPos.x - 20,
          top: trailPos.y - 20,
          width: 40,
          height: 40,
          border: `1.5px solid ${isHovering ? 'rgba(34, 211, 238, 0.6)' : 'rgba(255,255,255,0.25)'}`,
          background: 'transparent',
          transition: 'border-color 0.2s',
          transform: isHovering ? 'scale(1.4)' : 'scale(1)',
        }}
      />
    </>
  );
}
