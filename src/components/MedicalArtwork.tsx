import React from 'react';
import { MedicalArtKey } from '../data/clinicData';

export function OrielCrestMark({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="16.5" stroke="#D6B77A" strokeWidth="1.25" strokeOpacity="0.85" />
      <path
        d="M18 6.5C13.8 10.6 11.5 14.3 11.5 18.2C11.5 22 14.4 25 18 25C21.6 25 24.5 22 24.5 18.2C24.5 14.3 22.2 10.6 18 6.5Z"
        stroke="#5DE0C1"
        strokeWidth="1.5"
      />
      <path d="M18 13V21.5M14.25 17.25H21.75" stroke="#F7F4EC" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18" cy="28.5" r="1.5" fill="#D6B77A" />
    </svg>
  );
}

export function PulseLineGraphic({ className = 'w-full h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 22H128L142 22L152 7L164 34L174 16L182 22H260L272 22L280 12L289 29L296 22H420"
        stroke="url(#pulseGrad)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="pulseGrad" x1="0" y1="20" x2="420" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5DE0C1" stopOpacity="0" />
          <stop offset="30%" stopColor="#5DE0C1" stopOpacity="0.85" />
          <stop offset="68%" stopColor="#D6B77A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D6B77A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MedicalIllustration({
  artKey,
  className = 'w-14 h-14',
  tone = 'dark',
}: {
  artKey: MedicalArtKey;
  className?: string;
  tone?: 'dark' | 'light';
}) {
  const primary = tone === 'dark' ? '#5DE0C1' : '#123A3E';
  const secondary = tone === 'dark' ? '#D6B77A' : '#8A6B32';
  const muted = tone === 'dark' ? '#A8C6B5' : '#4A6664';

  const paths: Record<MedicalArtKey, React.ReactNode> = {
    consultation: (
      <>
        <circle cx="32" cy="32" r="24" stroke={secondary} strokeWidth="1" strokeDasharray="3 4" />
        <path
          d="M21 16V27C21 33.1 25.9 38 32 38C38.1 38 43 33.1 43 27V16"
          stroke={primary}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M18 16H24M40 16H46" stroke={primary} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M32 38V45C32 48.3 34.7 51 38 51C41.3 51 44 48.3 44 45V41" stroke={primary} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="44" cy="38" r="3.5" stroke={secondary} strokeWidth="1.6" />
      </>
    ),
    preventive: (
      <>
        <path
          d="M32 10L48 16.5V30.5C48 41.2 41.2 49.4 32 54C22.8 49.4 16 41.2 16 30.5V16.5L32 10Z"
          stroke={primary}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M25 32L29.5 36.5L39.5 26.5" stroke={secondary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="27" stroke={muted} strokeWidth="0.9" strokeOpacity="0.4" />
      </>
    ),
    vaccination: (
      <>
        <path d="M40 14L50 24" stroke={secondary} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M45 19L41 23" stroke={secondary} strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M37 19L45 27L28 44L20 36L37 19Z"
          stroke={primary}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M24 40L15 49" stroke={primary} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M32 25L35 28M28 29L31 32" stroke={muted} strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="48" cy="44" r="7" stroke={secondary} strokeWidth="1.2" strokeDasharray="2 3" />
      </>
    ),
    diagnostics: (
      <>
        <rect x="12" y="15" width="40" height="28" rx="4" stroke={primary} strokeWidth="1.6" />
        <path
          d="M17 30H24L27.5 22L32 36L36 27L39 30H47"
          stroke={secondary}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M25 49H39M32 43V49" stroke={primary} strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
    dental: (
      <>
        <path
          d="M22 17C17.5 17 15 21 15 26C15 32.5 18.2 37 19.6 44.5C20.2 47.6 22 49.5 24 49.5C26 49.5 27.5 46.8 29 41.5C29.8 38.8 30.8 37.8 32 37.8C33.2 37.8 34.2 38.8 35 41.5C36.5 46.8 38 49.5 40 49.5C42 49.5 43.8 47.6 44.4 44.5C45.8 37 49 32.5 49 26C49 21 46.5 17 42 17C38.5 17 35.5 19.2 32 19.2C28.5 19.2 25.5 17 22 17Z"
          stroke={primary}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M23 24C25.5 25.8 28.5 26.2 31 25.5" stroke={secondary} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="46" cy="14" r="3" stroke={secondary} strokeWidth="1.3" />
      </>
    ),
    surgery: (
      <>
        <circle cx="32" cy="32" r="21" stroke={muted} strokeWidth="1.1" strokeDasharray="4 4" />
        <path d="M32 17V47M17 32H47" stroke={primary} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="32" cy="32" r="9" stroke={secondary} strokeWidth="1.6" />
        <circle cx="32" cy="32" r="2.5" fill={primary} />
      </>
    ),
    nutrition: (
      <>
        <path
          d="M15 34C15 43.4 22.6 50 32 50C41.4 50 49 43.4 49 34H15Z"
          stroke={primary}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M32 34C32 23 39 16 47 16C47 24 41.5 31 32 34Z"
          stroke={secondary}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M32 34C31 26 26 20 19 20C19.5 26.5 24 31.8 32 34Z"
          stroke={primary}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </>
    ),
    parasite: (
      <>
        <circle cx="32" cy="32" r="20" stroke={primary} strokeWidth="1.6" />
        <circle cx="32" cy="32" r="12" stroke={secondary} strokeWidth="1.4" strokeDasharray="3 3" />
        <path d="M32 12V18M32 46V52M12 32H18M46 32H52" stroke={primary} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M27 32L30.5 35.5L38 28" stroke={secondary} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    puppy: (
      <>
        <path
          d="M32 49C32 49 16 39.2 16 26.8C16 20.8 20.5 16.5 25.8 16.5C28.8 16.5 30.8 18 32 19.8C33.2 18 35.2 16.5 38.2 16.5C43.5 16.5 48 20.8 48 26.8C48 39.2 32 49 32 49Z"
          stroke={primary}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="27" cy="27" r="2" fill={secondary} />
        <circle cx="37" cy="27" r="2" fill={secondary} />
        <path d="M28 34.5C29.5 36.2 34.5 36.2 36 34.5" stroke={secondary} strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    senior: (
      <>
        <circle cx="32" cy="32" r="21" stroke={primary} strokeWidth="1.6" />
        <path d="M32 19V32L41 37" stroke={secondary} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 14C21.5 11.2 26.5 9.5 32 9.5" stroke={secondary} strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="32" cy="32" r="2.2" fill={primary} />
      </>
    ),
    emergency: (
      <>
        <rect x="14" y="14" width="36" height="36" rx="8" stroke={primary} strokeWidth="1.6" />
        <path d="M32 22V42M22 32H42" stroke={secondary} strokeWidth="2.1" strokeLinecap="round" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {paths[artKey]}
    </svg>
  );
}
