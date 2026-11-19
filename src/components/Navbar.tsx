import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { OrielCrestMark } from './MedicalArtwork';
import { useRouter } from './RouterContext';
import { CLINIC_INFO } from '../data/clinicData';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Journal', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export function Navbar() {
  const { pathname, navigate } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#123A3E]/96 backdrop-blur-md border-b border-[#D6B77A]/20'
          : 'bg-[#123A3E] border-b border-[#F7F4EC]/10'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Clinic Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="flex items-center gap-2.5 text-[#F7F4EC] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          aria-label="Oriel Veterinary Clinic Home"
        >
          <OrielCrestMark className="w-8 h-8 shrink-0" />
          <span className="font-display text-lg font-bold tracking-tight">
            {CLINIC_INFO.shortName}
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path);
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                }}
                className={`relative py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  active ? 'text-[#5DE0C1]' : 'text-[#F7F4EC]/85 hover:text-[#5DE0C1]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-[#5DE0C1] transition-transform duration-200 origin-left ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Prominent Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => navigate('/book')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold hover:bg-[#7CEBD0] transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0"
          >
            Book Appointment
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#F7F4EC]/20 text-[#F7F4EC] hover:border-[#5DE0C1] hover:text-[#5DE0C1] transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Smooth Mobile Navigation Panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#11191B] border-t border-[#D6B77A]/20 px-6 py-6">
          <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#F7F4EC]/10">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.path);
                  }}
                  className={`py-3.5 text-base font-display font-medium flex items-center justify-between ${
                    active ? 'text-[#5DE0C1]' : 'text-[#F7F4EC]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D6B77A]" />
                </a>
              );
            })}
            <a
              href="/packages"
              onClick={(e) => {
                e.preventDefault();
                navigate('/packages');
              }}
              className={`py-3.5 text-base font-display font-medium flex items-center justify-between ${
                isActive('/packages') ? 'text-[#5DE0C1]' : 'text-[#F7F4EC]'
              }`}
            >
              <span>Wellness Packages</span>
              <ArrowUpRight className="w-4 h-4 text-[#D6B77A]" />
            </a>
            <a
              href="/faqs"
              onClick={(e) => {
                e.preventDefault();
                navigate('/faqs');
              }}
              className={`py-3.5 text-base font-display font-medium flex items-center justify-between ${
                isActive('/faqs') ? 'text-[#5DE0C1]' : 'text-[#F7F4EC]'
              }`}
            >
              <span>FAQs</span>
              <ArrowUpRight className="w-4 h-4 text-[#D6B77A]" />
            </a>
          </nav>

          <div className="mt-6 pt-5 border-t border-[#F7F4EC]/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => navigate('/book')}
              className="w-full py-3.5 px-5 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold text-center cursor-pointer"
            >
              Book an Appointment
            </button>
            <a
              href={CLINIC_INFO.phoneHref}
              className="w-full py-3 px-5 rounded-full border border-[#D6B77A]/40 text-[#F7F4EC] text-sm font-medium flex items-center justify-center gap-2 tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#D6B77A]" />
              Call {CLINIC_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
