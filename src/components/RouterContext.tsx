import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { BLOG_ARTICLES, CLINIC_INFO, VETERINARY_DOCTORS, VETERINARY_SERVICES } from '../data/clinicData';

export interface BookingPrefill {
  service?: string;
  doctor?: string;
  packageName?: string;
  message?: string;
}

interface RouterContextValue {
  pathname: string;
  navigate: (to: string, options?: { prefill?: BookingPrefill; scrollToId?: string }) => void;
  bookingPrefill: BookingPrefill;
  setBookingPrefill: React.Dispatch<React.SetStateAction<BookingPrefill>>;
}

const RouterContext = createContext<RouterContextValue | null>(null);

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const cleaned = path.replace(/\/+$/, '');
  return cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
}

function getPageSeo(pathname: string): { title: string; description: string } {
  const base = CLINIC_INFO.name;
  if (pathname === '/') {
    return {
      title: `${base} – Advanced Compassionate Pet Healthcare`,
      description:
        'Modern veterinary expertise, preventive diagnostics, surgical precision, and compassionate personalised healthcare for dogs and cats.',
    };
  }
  if (pathname === '/about') {
    return {
      title: `About Us – ${base}`,
      description:
        'Discover Oriel Veterinary Clinic’s clinical philosophy, fear-free low-stress standards, and commitment to evidence-based companion healthcare.',
    };
  }
  if (pathname === '/services') {
    return {
      title: `Veterinary Services – ${base}`,
      description:
        'Explore consultations, preventive check-ups, vaccinations, in-house diagnostics, dental care, soft-tissue surgery, nutrition, and senior pet medicine.',
    };
  }
  if (pathname.startsWith('/services/')) {
    const slug = pathname.replace('/services/', '');
    const service = VETERINARY_SERVICES.find((s) => s.slug === slug);
    if (service) {
      return {
        title: `${service.title} – ${base}`,
        description: service.summary,
      };
    }
  }
  if (pathname === '/doctors') {
    return {
      title: `Our Veterinary Doctors – ${base}`,
      description:
        'Meet our dedicated DVM and BVSc clinicians specialising in internal medicine, soft-tissue surgery, dentistry, and feline care.',
    };
  }
  if (pathname.startsWith('/doctors/')) {
    const slug = pathname.replace('/doctors/', '');
    const doctor = VETERINARY_DOCTORS.find((d) => d.slug === slug);
    if (doctor) {
      return {
        title: `${doctor.name}, ${doctor.credentials} – ${base}`,
        description: doctor.shortBio,
      };
    }
  }
  if (pathname === '/facilities') {
    return {
      title: `Clinic Facilities & Gallery – ${base}`,
      description:
        'Tour our species-separated arrival lounges, low-stress consultation suites, in-house diagnostics lab, and sterile surgical theatre.',
    };
  }
  if (pathname === '/book') {
    return {
      title: `Book an Appointment – ${base}`,
      description:
        'Schedule a consultation, preventive check-up, vaccination, dental care, or senior assessment at Oriel Veterinary Clinic.',
    };
  }
  if (pathname === '/packages') {
    return {
      title: `Pricing & Wellness Packages – ${base}`,
      description:
        'Transparent life-stage wellness plans for puppies, kittens, adult companions, and senior pets with itemised clinical inclusions.',
    };
  }
  if (pathname === '/blog') {
    return {
      title: `Pet Health Journal – ${base}`,
      description:
        'Clinician-written educational guides on pet vaccination, nutrition, dental hygiene, puppy and kitten care, and senior wellness.',
    };
  }
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '');
    const article = BLOG_ARTICLES.find((a) => a.slug === slug);
    if (article) {
      return {
        title: `${article.title} – ${base}`,
        description: article.excerpt,
      };
    }
  }
  if (pathname === '/faqs') {
    return {
      title: `Frequently Asked Questions – ${base}`,
      description:
        'Clear clinical answers on first visits, vaccinations, routine check-ups, dental anaesthesia, nutrition, booking, and clinic hours.',
    };
  }
  if (pathname === '/contact') {
    return {
      title: `Contact Us – ${base}`,
      description:
        'Reach Oriel Veterinary Clinic by phone, WhatsApp, email, or visit us at 418 Alder Crescent in San Francisco.',
    };
  }
  if (pathname === '/privacy-policy') {
    return {
      title: `Privacy Policy – ${base}`,
      description: 'How Oriel Veterinary Clinic safeguards client information and veterinary medical records.',
    };
  }
  if (pathname === '/terms') {
    return {
      title: `Terms and Conditions – ${base}`,
      description: 'Appointment booking, cancellation, clinical estimates, and website terms for Oriel Veterinary Clinic.',
    };
  }
  return {
    title: `Page Not Found – ${base}`,
    description: 'The requested page could not be located. Return to Oriel Veterinary Clinic home or book an appointment.',
  };
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(() => normalizePath(window.location.pathname));
  const [bookingPrefill, setBookingPrefill] = useState<BookingPrefill>({});

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const seo = getPageSeo(pathname);
    document.title = seo.title;

    const updateMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    updateMeta('meta[name="description"]', seo.description);
    updateMeta('meta[property="og:title"]', seo.title);
    updateMeta('meta[property="og:description"]', seo.description);
    updateMeta('meta[name="twitter:title"]', seo.title);
    updateMeta('meta[name="twitter:description"]', seo.description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${pathname}`;
  }, [pathname]);

  const navigate = useCallback(
    (to: string, options?: { prefill?: BookingPrefill; scrollToId?: string }) => {
      const target = normalizePath(to);
      if (options?.prefill) {
        setBookingPrefill(options.prefill);
      }
      if (target !== pathname) {
        window.history.pushState({}, '', target);
        setPathname(target);
      }
      if (options?.scrollToId) {
        setTimeout(() => {
          const el = document.getElementById(options.scrollToId!);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [pathname]
  );

  return (
    <RouterContext.Provider value={{ pathname, navigate, bookingPrefill, setBookingPrefill }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('useRouter must be used inside RouterProvider');
  }
  return ctx;
}
