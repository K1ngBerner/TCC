import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

const ambientWindSrc = "/assets/audio/Vento.mp3";
const intenseWindSrc = "/assets/audio/Vento%20intenso.mp3";
const whirlwindSrc = "/assets/audio/Redemoinho.mp3";
const targetAmbientVolume = 0.06;

type AmbientAudioContextValue = {
  isAmbientEnabled: boolean;
  isAmbientPlaying: boolean;
  isWhirlwindPlaying: boolean;
  isPitchPlaying: boolean;
  ambientVolume: number;
  burstActive: boolean;
  toggleAmbient: () => void;
  playWindBurst: () => void;
  toggleWhirlwind: () => void;
};

const AmbientAudioContext = createContext<AmbientAudioContextValue | null>(null);

function stopAudio(audio: HTMLAudioElement | null, reset = true) {
  if (!audio) return;
  audio.pause();
  if (reset) {
    audio.currentTime = 0;
  }
}

type Props = {
  children: ReactNode;
};

export function AmbientAudioProvider({ children }: Props) {
  const ambientAudioRef = useRef<HTMLAudioElement | null>(null);
  const intenseAudioRef = useRef<HTMLAudioElement | null>(null);
  const whirlwindAudioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTimerRef = useRef<number | null>(null);
  const burstTimerRef = useRef<number | null>(null);
  const isAmbientEnabledRef = useRef(false);
  const isPitchPlayingRef = useRef(false);
  const [isAmbientEnabled, setIsAmbientEnabled] = useState(false);
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const [isWhirlwindPlaying, setIsWhirlwindPlaying] = useState(false);
  const [isPitchPlaying, setIsPitchPlaying] = useState(false);
  const [ambientVolume, setAmbientVolume] = useState(0);
  const [burstActive, setBurstActive] = useState(false);

  const clearFade = useCallback(() => {
    if (fadeTimerRef.current !== null) {
      window.clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  }, []);

  const fadeAmbientTo = useCallback(
    async (targetVolume: number, afterFade?: () => void) => {
      const ambient = ambientAudioRef.current;
      if (!ambient) return;

      clearFade();

      if (targetVolume > 0) {
        try {
          await ambient.play();
          setIsAmbientPlaying(true);
        } catch {
          setIsAmbientPlaying(false);
          return;
        }
      }

      fadeTimerRef.current = window.setInterval(() => {
        const step = targetVolume > ambient.volume ? 0.01 : -0.012;
        const next = Math.max(0, Math.min(targetVolume, ambient.volume + step));
        ambient.volume = next;
        setAmbientVolume(next);

        if (Math.abs(next - targetVolume) <= 0.012) {
          ambient.volume = targetVolume;
          setAmbientVolume(targetVolume);
          clearFade();
          afterFade?.();
        }
      }, 70);
    },
    [clearFade],
  );

  const stopWhirlwind = useCallback(() => {
    stopAudio(whirlwindAudioRef.current);
    setIsWhirlwindPlaying(false);
  }, []);

  const playWindBurst = useCallback(() => {
    if (!isAmbientEnabledRef.current || isPitchPlayingRef.current) return;

    const intense = intenseAudioRef.current;
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

  const pauseSiteAudioForPitch = useCallback(() => {
    isPitchPlayingRef.current = true;
    setIsPitchPlaying(true);
    clearFade();
    stopAudio(ambientAudioRef.current, false);
    stopAudio(intenseAudioRef.current);
    stopWhirlwind();
    setIsAmbientPlaying(false);
    setBurstActive(false);
  }, [clearFade, stopWhirlwind]);

  const toggleAmbient = useCallback(() => {
    const nextEnabled = !isAmbientEnabledRef.current;
    isAmbientEnabledRef.current = nextEnabled;
    setIsAmbientEnabled(nextEnabled);

    if (nextEnabled) {
      if (!isPitchPlayingRef.current) {
        playWindBurst();
        void fadeAmbientTo(targetAmbientVolume);
      }
      return;
    }

    stopAudio(intenseAudioRef.current);
    void fadeAmbientTo(0, () => {
      stopAudio(ambientAudioRef.current, false);
      setIsAmbientPlaying(false);
    });
    setBurstActive(false);
  }, [fadeAmbientTo, playWindBurst]);

  const toggleWhirlwind = useCallback(async () => {
    const whirlwind = whirlwindAudioRef.current;
    if (!whirlwind) return;
    if (isPitchPlayingRef.current) return;

    if (!whirlwind.paused) {
      stopWhirlwind();
      return;
    }

    whirlwind.currentTime = 0;
    whirlwind.volume = 0.28;
    try {
      await whirlwind.play();
      setIsWhirlwindPlaying(true);
      setBurstActive(true);
      if (burstTimerRef.current !== null) {
        window.clearTimeout(burstTimerRef.current);
      }
      burstTimerRef.current = window.setTimeout(() => setBurstActive(false), 1400);
    } catch {
      setIsWhirlwindPlaying(false);
      setBurstActive(false);
    }
  }, [stopWhirlwind]);

  useEffect(() => {
    const ambient = new Audio(ambientWindSrc);
    const intense = new Audio(intenseWindSrc);
    const whirlwind = new Audio(whirlwindSrc);

    ambient.loop = true;
    ambient.volume = 0;
    intense.volume = 0.22;
    whirlwind.volume = 0.28;

    ambientAudioRef.current = ambient;
    intenseAudioRef.current = intense;
    whirlwindAudioRef.current = whirlwind;

    const handleWhirlwindEnded = () => {
      setIsWhirlwindPlaying(false);
      setBurstActive(false);
    };

    whirlwind.addEventListener("ended", handleWhirlwindEnded);

    return () => {
      whirlwind.removeEventListener("ended", handleWhirlwindEnded);
      clearFade();
      if (burstTimerRef.current !== null) {
        window.clearTimeout(burstTimerRef.current);
      }
      stopAudio(ambientAudioRef.current);
      stopAudio(intenseAudioRef.current);
      stopAudio(whirlwindAudioRef.current);
      ambientAudioRef.current = null;
      intenseAudioRef.current = null;
      whirlwindAudioRef.current = null;
    };
  }, [clearFade]);

  useEffect(() => {
    const handlePitchStart = () => {
      pauseSiteAudioForPitch();
    };

    const handleVisibility = () => {
      if (document.hidden) {
        clearFade();
        stopAudio(ambientAudioRef.current, false);
        stopAudio(intenseAudioRef.current);
        stopWhirlwind();
        setIsAmbientPlaying(false);
        setBurstActive(false);
        return;
      }

      if (isAmbientEnabledRef.current && !isPitchPlayingRef.current) {
        void fadeAmbientTo(targetAmbientVolume);
      }
    };

    window.addEventListener("sussurros:pause-audio", handlePitchStart);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("sussurros:pause-audio", handlePitchStart);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [clearFade, fadeAmbientTo, pauseSiteAudioForPitch, stopWhirlwind]);

  const value = useMemo(
    () => ({
      isAmbientEnabled,
      isAmbientPlaying,
      isWhirlwindPlaying,
      isPitchPlaying,
      ambientVolume,
      burstActive,
      toggleAmbient,
      playWindBurst,
      toggleWhirlwind,
    }),
    [
      ambientVolume,
      burstActive,
      isAmbientEnabled,
      isAmbientPlaying,
      isPitchPlaying,
      isWhirlwindPlaying,
      playWindBurst,
      toggleAmbient,
      toggleWhirlwind,
    ],
  );

  return <AmbientAudioContext.Provider value={value}>{children}</AmbientAudioContext.Provider>;
}

export function useAmbientAudio() {
  const context = useContext(AmbientAudioContext);
  if (!context) {
    throw new Error("useAmbientAudio must be used inside AmbientAudioProvider");
  }
  return context;
}
