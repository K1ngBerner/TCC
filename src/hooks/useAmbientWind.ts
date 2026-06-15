import { useCallback, useEffect, useRef, useState } from "react";

const ambientWindSrc = "/assets/audio/Vento.mp3";
const intenseWindSrc = "/assets/audio/Vento%20intenso.mp3";
const ambientVolume = 0.06;

function stopAudio(audio: HTMLAudioElement | null, reset = true) {
  if (!audio) return;
  audio.pause();
  if (reset) {
    audio.currentTime = 0;
  }
}

export function useAmbientWind() {
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const intenseRef = useRef<HTMLAudioElement | null>(null);
  const fadeTimerRef = useRef<number | null>(null);
  const burstTimerRef = useRef<number | null>(null);
  const pitchActiveRef = useRef(false);
  const enabledRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [burstActive, setBurstActive] = useState(false);

  const clearFade = useCallback(() => {
    if (fadeTimerRef.current !== null) {
      window.clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  }, []);

  const fadeAmbientTo = useCallback(
    async (targetVolume: number, afterFade?: () => void) => {
      const ambient = ambientRef.current;
      if (!ambient) return;

      clearFade();

      if (targetVolume > 0) {
        ambient.loop = true;
        try {
          await ambient.play();
        } catch {
          return;
        }
      }

      fadeTimerRef.current = window.setInterval(() => {
        const current = ambient.volume;
        const step = targetVolume > current ? 0.01 : -0.012;
        const next = Math.max(0, Math.min(targetVolume, current + step));
        ambient.volume = next;

        if (Math.abs(next - targetVolume) <= 0.012) {
          ambient.volume = targetVolume;
          clearFade();
          afterFade?.();
        }
      }, 70);
    },
    [clearFade],
  );

  const playWindBurst = useCallback(() => {
    if (!enabledRef.current) return;

    const intense = intenseRef.current;
    if (!intense) return;

    setBurstActive(true);
    if (burstTimerRef.current !== null) {
      window.clearTimeout(burstTimerRef.current);
    }
    burstTimerRef.current = window.setTimeout(() => setBurstActive(false), 1400);

    intense.volume = 0.22;
    intense.currentTime = 0;
    void intense.play().catch(() => {
      setBurstActive(false);
    });
  }, []);

  const pauseAll = useCallback(() => {
    clearFade();
    stopAudio(ambientRef.current, false);
    stopAudio(intenseRef.current);
    setBurstActive(false);
  }, [clearFade]);

  const toggleSound = useCallback(() => {
    const nextEnabled = !enabledRef.current;
    enabledRef.current = nextEnabled;
    setEnabled(nextEnabled);

    if (nextEnabled) {
      pitchActiveRef.current = false;
      playWindBurst();
      void fadeAmbientTo(ambientVolume);
      return;
    }

    stopAudio(intenseRef.current);
    void fadeAmbientTo(0, () => stopAudio(ambientRef.current, false));
    setBurstActive(false);
  }, [fadeAmbientTo, playWindBurst]);

  useEffect(() => {
    const ambient = new Audio(ambientWindSrc);
    const intense = new Audio(intenseWindSrc);
    ambient.volume = 0;
    intense.volume = 0.22;
    ambientRef.current = ambient;
    intenseRef.current = intense;

    const handlePitchStart = () => {
      pitchActiveRef.current = true;
      pauseAll();
    };

    const handleVisibility = () => {
      if (document.hidden) {
        pauseAll();
        return;
      }

      if (enabledRef.current && !pitchActiveRef.current) {
        void fadeAmbientTo(ambientVolume);
      }
    };

    window.addEventListener("sussurros:pause-audio", handlePitchStart);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("sussurros:pause-audio", handlePitchStart);
      document.removeEventListener("visibilitychange", handleVisibility);
      clearFade();
      if (burstTimerRef.current !== null) {
        window.clearTimeout(burstTimerRef.current);
      }
      stopAudio(ambientRef.current);
      stopAudio(intenseRef.current);
    };
  }, [clearFade, fadeAmbientTo, pauseAll]);

  return {
    enabled,
    burstActive,
    toggleSound,
    playWindBurst,
  };
}
