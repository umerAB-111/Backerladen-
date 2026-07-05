"use strict";
export default function Logo({ className = "w-32" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="8"
        y="42"
        fontFamily="Georgia, serif"
        fontSize="32"
        fontWeight="bold"
        fill="#8B5E3C"
      >
        Bäcker
      </text>
      <text
        x="130"
        y="42"
        fontFamily="Georgia, serif"
        fontSize="32"
        fontWeight="300"
        fill="#D4A574"
      >
        laden
      </text>
      <line
        x1="8"
        y1="50"
        x2="192"
        y2="50"
        stroke="#5C7A4A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="46" r="3" fill="#D4A574" />
      <circle cx="100" cy="46" r="3" fill="#D4A574" />
      <circle cx="184" cy="46" r="3" fill="#D4A574" />
    </svg>
  );
}
