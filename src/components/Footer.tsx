import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { OrielCrestMark } from './MedicalArtwork';
import { CLINIC_INFO, VETERINARY_SERVICES } from '../data/clinicData';
import { useRouter } from './RouterContext';

export function Footer() {
  const { navigate } = useRouter();

  const clinicLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Doctors', path: '/doctors' },
    { label: 'Facilities & Gallery', path: '/facilities' },
    { label: 'Wellness Packages', path: '/packages' },
    { label: 'Pet Health Journal', path: '/blog' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const featuredServices = VETERINARY_SERVICES.slice(0, 6);

  return (
    <footer className="bg-[#11191B] text-[#F7F4EC] border-t border-[#D6B77A]/20">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 pt-16 pb-12">
        {/* Top Philosophy & Direct Action Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-[#F7F4EC]/10 items-end">
          <div className="lg:col-span-7">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <OrielCrestMark className="w-9 h-9" />
              <span className="font-display text-xl font-bold tracking-tight text-[#F7F4EC]">
                {CLINIC_INFO.name}
              </span>
            </a>
            <p className="font-editorial italic text-xl sm:text-2xl text-[#D6B77A] max-w-2xl leading-relaxed">
              &ldquo;{CLINIC_INFO.tagline}&rdquo;
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate('/book')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold hover:bg-[#7CEBD0] transition-colors cursor-pointer whitespace-nowrap"
            >
              Book an Appointment
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={CLINIC_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#5DE0C1]/40 text-[#F7F4EC] text-sm font-medium hover:border-[#5DE0C1] hover:text-[#5DE0C1] transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#5DE0C1]" />
              WhatsApp Desk
            </a>
          </div>
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-14">
          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="font-display text-sm font-semibold text-[#D6B77A] tracking-wide">
              Clinic Contact
            </h3>
            <ul className="space-y-4 text-sm text-[#A8C6B5]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#5DE0C1] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#F7F4EC]">{CLINIC_INFO.addressLine1}</p>
                  <p>{CLINIC_INFO.addressLine2}</p>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#5DE0C1] hover:underline mt-1 text-xs"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#5DE0C1] shrink-0" />
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="text-[#F7F4EC] hover:text-[#5DE0C1] transition-colors tabular-nums"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#5DE0C1] shrink-0" />
                <a
                  href={CLINIC_INFO.emailHref}
                  className="text-[#F7F4EC] hover:text-[#5DE0C1] transition-colors"
                >
                  {CLINIC_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Clinic */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="font-display text-sm font-semibold text-[#D6B77A] tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {clinicLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.path);
                    }}
                    className="text-[#A8C6B5] hover:text-[#5DE0C1] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="font-display text-sm font-semibold text-[#D6B77A] tracking-wide">
              Clinical Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`/services/${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/services/${service.slug}`);
                    }}
                    className="text-[#A8C6B5] hover:text-[#5DE0C1] transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/services');
                  }}
                  className="inline-flex items-center gap-1 text-[#5DE0C1] hover:underline font-medium pt-1"
                >
                  View all 11 services
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="font-display text-sm font-semibold text-[#D6B77A] tracking-wide">
              Opening Hours
            </h3>
            <div className="space-y-3 text-sm">
              {CLINIC_INFO.hours.map((item) => (
                <div
                  key={item.days}
                  className="flex items-center justify-between gap-4 pb-2.5 border-b border-[#F7F4EC]/8"
                >
                  <span className="text-[#A8C6B5]">{item.days}</span>
                  <span className="text-[#F7F4EC] font-medium tabular-nums whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[#87979A] pt-1">
              <Clock className="w-3.5 h-3.5 text-[#D6B77A] mt-0.5 shrink-0" />
              <p>Same-day urgent triage slots available daily during clinic hours. Please call ahead.</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Social Row */}
        <div className="pt-8 border-t border-[#F7F4EC]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#87979A]">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                navigate('/privacy-policy');
              }}
              className="hover:text-[#F7F4EC] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              onClick={(e) => {
                e.preventDefault();
                navigate('/terms');
              }}
              className="hover:text-[#F7F4EC] transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5DE0C1] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5DE0C1] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
