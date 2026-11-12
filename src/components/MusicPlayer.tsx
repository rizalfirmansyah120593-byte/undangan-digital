'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { wedding } from '@/config/wedding.config';
import { GESTURE_EVENT, useInvitation } from './InvitationProvider';
import Icon from './ui/Icon';
import { asset } from '@/lib/asset';
import { toast } from './ui/Toast';

export default function MusicPlayer() {
  const { opened } = useInvitation();
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  // Pemutaran baru dimulai setelah interaksi membuka sampul.
  const wanted = useRef(true);

  const playAudio = useCallback(() => {
    const el = audio.current;
    if (!el) return;

    void el.play().catch((error: unknown) => {
      const errorName =
        typeof error === 'object' && error !== null && 'name' in error ? String(error.name) : '';
      if (errorName === 'AbortError') return;

      wanted.current = false;
      setPlaying(false);
      if (errorName === 'NotAllowedError') {
        toast('Browser memblokir backsound. Ketuk tombol musik untuk memutarnya.');
      } else {
        toast('Backsound gagal diputar. Periksa file audio dan pengaturan music.src.');
      }
    });
  }, []);

  // Mulai tepat saat tamu mengetuk "buka" (izin autoplay dari browser)
  useEffect(() => {
    const onGesture = () => {
      if (wanted.current) playAudio();
    };
    window.addEventListener(GESTURE_EVENT, onGesture);
    return () => window.removeEventListener(GESTURE_EVENT, onGesture);
  }, [playAudio]);

  // Jeda saat tamu pindah aplikasi / layar dikunci, lanjut lagi saat kembali
  useEffect(() => {
    const onVisibility = () => {
      const el = audio.current;
      if (!el || !opened) return;
      if (document.hidden) el.pause();
      else if (wanted.current) playAudio();
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [opened, playAudio]);

  if (!wedding.music.enabled) return null;

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    wanted.current = el.paused;
    if (el.paused) playAudio();
    else el.pause();
  };

  return (
    <>
      <audio
        ref={audio}
        src={asset(wedding.music.src)}
        loop
        preload="none"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {opened && (
        <button
          onClick={toggle}
          aria-label={playing ? 'Jeda musik' : 'Putar musik'}
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/90 text-primary shadow-lg backdrop-blur"
        >
          <span className={`grid h-8 w-8 place-items-center rounded-full bg-[repeating-radial-gradient(circle,rgb(var(--c-ink)/.85)_0_1px,rgb(var(--c-ink))_1px_3px)] ${playing ? 'animate-spin-slow' : ''}`}>
            <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-accent">
              <span className="h-1 w-1 rounded-full bg-surface" />
            </span>
          </span>
          <span className="sr-only">{playing ? 'Jeda' : 'Putar'}</span>
          {!playing && <Icon name="play" className="absolute h-3 w-3 translate-x-3 translate-y-3 fill-current" />}
        </button>
      )}
    </>
  );
}
