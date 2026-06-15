type Props = {
  active?: boolean;
  className?: string;
};

export function WindWhirl({ active = false, className = "" }: Props) {
  return (
    <svg
      className={`wind-whirl ${active ? "is-active" : ""} ${className}`.trim()}
      viewBox="0 0 220 220"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M55 70c22-32 100-48 119-12 17 32-37 40-81 41-49 1-65 25-32 44 32 19 92 8 101-18 7-21-20-30-48-24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M74 47c26-18 67-23 95-7M46 105c21-14 54-20 92-12M62 157c28 13 70 10 101-10"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4"
        opacity="0.68"
      />
      <path
        d="M99 132c18 9 47 7 64-8M83 181c21 5 43 2 60-9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        opacity="0.45"
      />
    </svg>
  );
}
