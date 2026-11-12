'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInvitation } from '@/components/InvitationProvider';
import type { ThemeName } from '@/config/types';

const REVEALS: Record<ThemeName, { x: number; y: number; rotation: number; scale: number }> = {
  samudra: { x: 0, y: 30, rotation: 0, scale: 0.98 },
  jati: { x: -24, y: 12, rotation: -1.5, scale: 0.98 },
  gading: { x: 0, y: 18, rotation: 0, scale: 0.99 },
  priangan: { x: 0, y: 34, rotation: 0, scale: 0.97 },
  taman: { x: 18, y: 20, rotation: 0, scale: 0.98 },
  langit: { x: 0, y: 14, rotation: 0, scale: 0.95 },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li';
}) {
  const { theme } = useInvitation();
  const element = useRef<HTMLDivElement | HTMLLIElement>(null);
  const setElement = (node: HTMLDivElement | HTMLLIElement | null) => {
    element.current = node;
  };

  useEffect(() => {
    const node = element.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const isHeroPhoto = node.classList.contains('hero-photo');
    const reveal = REVEALS[theme];

    const context = gsap.context(() => {
      gsap.fromTo(
        node,
        {
          autoAlpha: 0,
          x: isHeroPhoto ? 0 : reveal.x,
          y: isHeroPhoto ? 38 : reveal.y,
          rotation: isHeroPhoto ? -2 : reveal.rotation,
          rotationX: isHeroPhoto ? 8 : 0,
          scale: isHeroPhoto ? 0.9 : reveal.scale,
          filter: 'blur(5px)',
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          rotation: 0,
          rotationX: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: isHeroPhoto ? 1.35 : 0.95,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 88%',
            once: true,
          },
        },
      );
    }, node);

    return () => context.revert();
  }, [delay, theme]);

  return as === 'li' ? (
    <li ref={setElement} className={className}>{children}</li>
  ) : (
    <div ref={setElement} className={className}>{children}</div>
  );
}
