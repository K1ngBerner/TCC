type Props = {
  className?: string;
};

export function SectionOrnament({ className = "" }: Props) {
  return (
    <svg
      className={`section-ornament ${className}`.trim()}
      viewBox="0 0 220 54"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M30 31c19-15 42-15 66-2 24 13 47 11 67-7 7-7 17-4 19 5 2 8-5 15-13 12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M65 36c18 8 40 9 61-1 15-7 28-14 45-8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        opacity="0.75"
      />
      <path
        d="M92 18c14-9 30-11 45-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        opacity="0.55"
      />
      <circle cx="44" cy="19" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="185" cy="18" r="3" fill="currentColor" opacity="0.55" />
      <path d="M106 45l7-7 7 7-7 7z" fill="currentColor" opacity="0.65" />
    </svg>
  );
}
