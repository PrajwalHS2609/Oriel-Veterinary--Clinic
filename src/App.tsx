/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './components/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import {
  AboutPage,
  ServicesPage,
  ServiceDetailPage,
  DoctorsPage,
  DoctorDetailPage,
  FacilitiesPage,
  BookingPage,
  PackagesPage,
} from './pages/InnerPages';
import {
  BlogArchivePage,
  BlogArticlePage,
  FaqPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsPage,
  NotFoundPage,
} from './pages/ContentPages';

function RouteView() {
  const { pathname } = useRouter();

  const renderPage = () => {
    if (pathname === '/') return <HomePage />;
    if (pathname === '/about') return <AboutPage />;
    if (pathname === '/services') return <ServicesPage />;
    if (pathname.startsWith('/services/')) {
      return <ServiceDetailPage slug={pathname.replace('/services/', '')} />;
    }
    if (pathname === '/doctors') return <DoctorsPage />;
    if (pathname.startsWith('/doctors/')) {
      return <DoctorDetailPage slug={pathname.replace('/doctors/', '')} />;
    }
    if (pathname === '/facilities') return <FacilitiesPage />;
    if (pathname === '/book') return <BookingPage />;
    if (pathname === '/packages') return <PackagesPage />;
    if (pathname === '/blog') return <BlogArchivePage />;
    if (pathname.startsWith('/blog/')) {
      return <BlogArticlePage slug={pathname.replace('/blog/', '')} />;
    }
    if (pathname === '/faqs') return <FaqPage />;
    if (pathname === '/contact') return <ContactPage />;
    if (pathname === '/privacy-policy') return <PrivacyPolicyPage />;
    if (pathname === '/terms') return <TermsPage />;
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#11191B] text-[#F7F4EC]">
      <Navbar />
      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <RouteView />
    </RouterProvider>
  );
}
