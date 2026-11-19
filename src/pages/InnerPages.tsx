import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  GraduationCap,
  Languages,
  Calendar,
  X,
} from 'lucide-react';
import {
  CLINIC_FACILITIES,
  CLINIC_IMAGES,
  CLINIC_INFO,
  CLINIC_PILLARS,
  VETERINARY_DOCTORS,
  VETERINARY_SERVICES,
  WELLNESS_PACKAGES,
} from '../data/clinicData';
import { MediaFrame } from '../components/MediaFrame';
import { MedicalIllustration } from '../components/MedicalArtwork';
import { AppointmentForm } from '../components/AppointmentForm';
import { useRouter } from '../components/RouterContext';

/* 1. ABOUT US PAGE */
export function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div>
      <section className="bg-gradient-to-br from-[#11191B] via-[#123A3E] to-[#11191B] text-[#F7F4EC] py-20 lg:py-26">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-sm font-medium text-[#D6B77A] mb-3">About Oriel Veterinary Clinic</p>
            <h1 className="font-display font-bold tracking-tight leading-[1.08] text-[clamp(2.25rem,4vw,3.6rem)]">
              Built Around Calm{' '}
              <span className="font-editorial italic font-medium text-[#5DE0C1]">Clinical Rigour.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#DDF1EB]/88 leading-relaxed">
              We designed Oriel Veterinary Clinic from the ground up to bridge two worlds that rarely meet: hospital-level
              diagnostic clarity and the quiet warmth of a serene architectural sanctuary.
            </p>
          </div>
          <div className="lg:col-span-6">
            <MediaFrame
              src={CLINIC_IMAGES.clinicReception}
              alt="Sunlit modern architectural interior of Oriel Veterinary Clinic"
              className="aspect-[16/10] rounded-3xl border border-[#D6B77A]/25"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EC] text-[#11191B] py-20 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold leading-tight">
              Our Clinical Philosophy
            </h2>
            <p className="font-editorial italic text-xl text-[#174D46] mt-4 leading-relaxed">
              &ldquo;{CLINIC_INFO.tagline}&rdquo;
            </p>
          </div>
          <div className="lg:col-span-7 space-y-5 text-base text-[#354E50] leading-relaxed">
            <p>
              Traditional veterinary appointments are often hurried and acoustically overwhelming, elevating stress
              hormones that distort heart rates, blood pressure, and clinical findings. At Oriel, calm handling is not an
              aesthetic extra—it is essential medical practice.
            </p>
            <p>
              Every appointment runs 30 to 45 minutes by default. Dogs and cats arrive in separate alcoves, examine on
              warm travertine or floor-level mats, and receive transparent written care plans before any treatment begins.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#123A3E]/12">
              <div>
                <h3 className="font-display text-lg font-bold text-[#11191B]">Mission</h3>
                <p className="text-sm text-[#395153] mt-2 leading-relaxed">
                  Deliver evidence-based preventive, diagnostic, and surgical veterinary care rooted in emotional
                  respect and honest pet-parent partnership.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#11191B]">Vision</h3>
                <p className="text-sm text-[#395153] mt-2 leading-relaxed">
                  Elevate neighbourhood animal healthcare so every dog and cat enjoys longer vitality and genuinely calm
                  clinic visits throughout every stage of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#174D46] text-[#F7F4EC] py-20">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <h2 className="font-display text-3xl font-bold mb-10">Six Clinical Commitments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLINIC_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="rounded-2xl bg-[#11191B]/75 border border-[#F7F4EC]/12 p-7"
              >
                <span className="text-xs font-bold text-[#5DE0C1] tabular-nums">{pillar.index}</span>
                <h3 className="font-display text-lg font-bold mt-2">{pillar.title}</h3>
                <p className="text-sm text-[#A8C6B5] mt-2.5 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => navigate('/doctors')}
              className="px-6 py-3 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold cursor-pointer hover:bg-[#7CEBD0]"
            >
              Meet Our Veterinarians
            </button>
            <button
              type="button"
              onClick={() => navigate('/book')}
              className="px-6 py-3 rounded-full border border-[#D6B77A]/50 text-[#F7F4EC] font-display text-sm font-medium cursor-pointer hover:border-[#5DE0C1]"
            >
              Book a First Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* 2. VETERINARY SERVICES ARCHIVE PAGE */
export function ServicesPage() {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Preventive & Primary', 'Diagnostics & Surgery', 'Life-Stage & Specialty'];

  const filteredServices =
    selectedCategory === 'All'
      ? VETERINARY_SERVICES
      : VETERINARY_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div>
      <section className="bg-[#123A3E] text-[#F7F4EC] py-20">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <p className="text-sm font-medium text-[#D6B77A] mb-3">Veterinary Services</p>
          <h1 className="font-display font-bold tracking-tight leading-[1.08] text-[clamp(2.25rem,4vw,3.6rem)] max-w-3xl">
            Comprehensive Small-Animal{' '}
            <span className="font-editorial italic font-medium text-[#5DE0C1]">Medicine &amp; Surgery.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#DDF1EB]/85 max-w-2xl leading-relaxed">
            Eleven core clinical disciplines delivered under one roof—with clear inclusions, dedicated clinician
            continuity, and transparent written care plans.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-display font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#5DE0C1] text-[#11191B]'
                    : 'bg-[#11191B]/45 text-[#F7F4EC] hover:bg-[#11191B]/75'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EC] text-[#11191B] py-18 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-6">
          {filteredServices.map((service) => (
            <article
              key={service.slug}
              className="rounded-3xl bg-white border border-[#123A3E]/12 p-7 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-3 flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#DDF1EB]/75 flex items-center justify-center shrink-0">
                  <MedicalIllustration artKey={service.artKey} className="w-11 h-11" tone="light" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#8A6B32] tabular-nums">{service.index}</p>
                  <p className="text-xs text-[#546B6D] mt-0.5">{service.category}</p>
                  <p className="text-xs text-[#174D46] mt-0.5">{service.duration}</p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <h2 className="font-display text-2xl font-bold text-[#11191B]">{service.title}</h2>
                <p className="mt-2.5 text-sm sm:text-base text-[#395153] leading-relaxed">
                  {service.summary}
                </p>
              </div>

              <div className="lg:col-span-3 flex flex-wrap lg:flex-col items-start lg:items-end gap-3">
                <button
                  type="button"
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#123A3E] text-[#F7F4EC] font-display text-sm font-semibold hover:bg-[#174D46] transition-colors cursor-pointer"
                >
                  Service Details
                  <ArrowUpRight className="w-4 h-4 text-[#5DE0C1]" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/book', { prefill: { service: service.title } })}
                  className="text-sm font-display font-semibold text-[#174D46] hover:underline cursor-pointer"
                >
                  Book appointment
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

/* 3. INDIVIDUAL SERVICE DETAIL PAGE */
export function ServiceDetailPage({ slug }: { slug: string }) {
  const { navigate } = useRouter();
  const service = VETERINARY_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="bg-[#11191B] text-[#F7F4EC] py-28 text-center px-5">
        <h1 className="font-display text-3xl font-bold">Service not found</h1>
        <button
          type="button"
          onClick={() => navigate('/services')}
          className="mt-6 px-6 py-3 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold cursor-pointer"
        >
          Return to All Services
        </button>
      </div>
    );
  }

  const leadDoctor = VETERINARY_DOCTORS.find((d) => d.slug === service.leadDoctorSlug);
  const relatedServices = VETERINARY_SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  ).slice(0, 3);

  return (
    <div>
      <section className="bg-[#11191B] text-[#F7F4EC] py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <button
            type="button"
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 text-sm text-[#A8C6B5] hover:text-[#5DE0C1] mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            All Veterinary Services
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-xs text-[#D6B77A]">
                <span className="tabular-nums">Service {service.index}</span>
                <span aria-hidden="true">·</span>
                <span>{service.category}</span>
                <span aria-hidden="true">·</span>
                <span>{service.duration}</span>
              </div>
              <h1 className="font-display font-bold tracking-tight leading-[1.08] text-[clamp(2.1rem,3.8vw,3.4rem)] mt-3">
                {service.title}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#DDF1EB]/85 leading-relaxed">
                {service.clinicalOverview}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/book', { prefill: { service: service.title } })}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold hover:bg-[#7CEBD0] cursor-pointer"
                >
                  Book This Service
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#D6B77A]/45 text-[#F7F4EC] text-sm font-medium hover:border-[#5DE0C1] tabular-nums"
                >
                  Call {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <MediaFrame
                src={service.image}
                alt={service.imageAlt}
                className="aspect-[16/10] rounded-3xl border border-[#D6B77A]/25"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EC] text-[#11191B] py-18 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            <div className="rounded-3xl bg-white border border-[#123A3E]/12 p-8">
              <h2 className="font-display text-2xl font-bold">What Is Included</h2>
              <ul className="mt-5 space-y-3 text-sm sm:text-base text-[#2E4648]">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#174D46] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-[#DDF1EB]/60 border border-[#123A3E]/10 p-7">
                <h3 className="font-display text-xl font-bold">When to Schedule</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-[#2B4345]">
                  {service.whenToBook.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#174D46] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-[#123A3E]/12 p-7">
                <h3 className="font-display text-xl font-bold">How to Prepare</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-[#2B4345]">
                  {service.preparation.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#8A6B32] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar: Lead Clinician & Related Services */}
          <aside className="lg:col-span-4 space-y-6">
            {leadDoctor && (
              <div className="rounded-3xl bg-[#123A3E] text-[#F7F4EC] p-7">
                <p className="text-xs text-[#D6B77A]">Lead Clinician for This Service</p>
                <div className="mt-4 flex items-center gap-4">
                  <MediaFrame
                    src={leadDoctor.portrait}
                    alt={leadDoctor.portraitAlt}
                    className="w-16 h-16 rounded-full shrink-0 border border-[#D6B77A]/40"
                    imgClassName="w-full h-full object-cover object-top"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold">{leadDoctor.name}</h3>
                    <p className="text-xs text-[#5DE0C1]">{leadDoctor.credentials}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#DDF1EB]/85 leading-relaxed">{leadDoctor.shortBio}</p>
                <button
                  type="button"
                  onClick={() => navigate(`/doctors/${leadDoctor.slug}`)}
                  className="mt-5 text-sm font-display font-semibold text-[#5DE0C1] hover:underline cursor-pointer"
                >
                  View doctor profile →
                </button>
              </div>
            )}

            <div className="rounded-3xl bg-white border border-[#123A3E]/12 p-7">
              <h3 className="font-display text-lg font-bold">Related Services</h3>
              <ul className="mt-4 divide-y divide-[#123A3E]/10">
                {relatedServices.map((rel) => (
                  <li key={rel.slug} className="py-3">
                    <a
                      href={`/services/${rel.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/services/${rel.slug}`);
                      }}
                      className="text-sm font-display font-semibold text-[#123A3E] hover:text-[#174D46] flex items-center justify-between"
                    >
                      <span>{rel.shortTitle}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#8A6B32]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

/* 4. OUR DOCTORS PAGE */
export function DoctorsPage() {
  const { navigate } = useRouter();

  return (
    <div>
      <section className="bg-[#11191B] text-[#F7F4EC] py-20">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <p className="text-sm font-medium text-[#D6B77A] mb-3">Our Medical Team</p>
          <h1 className="font-display font-bold tracking-tight leading-[1.08] text-[clamp(2.25rem,4vw,3.6rem)] max-w-3xl">
            Experienced Clinicians United by{' '}
            <span className="font-editorial italic font-medium text-[#5DE0C1]">Thoughtful Care.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#A8C6B5] max-w-2xl leading-relaxed">
            Our veterinary doctors collaborate closely on every case—combining internal medicine, soft-tissue surgery,
            dental precision, and feline-friendly primary care.
          </p>
        </div>
      </section>

      <section className="bg-[#123A3E] text-[#F7F4EC] py-18 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {VETERINARY_DOCTORS.map((doc) => (
            <article
              key={doc.slug}
              className="rounded-3xl bg-[#11191B] border border-[#D6B77A]/25 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <MediaFrame
                  src={doc.portrait}
                  alt={doc.portraitAlt}
                  className="aspect-[3/4]"
                  imgClassName="w-full h-full object-cover object-top"
                />
                <div className="p-7">
                  <p className="text-xs text-[#D6B77A]">{doc.credentials}</p>
                  <h2 className="font-display text-2xl font-bold mt-1">{doc.name}</h2>
                  <p className="text-sm text-[#5DE0C1] mt-1">{doc.role}</p>
                  <p className="mt-4 text-sm text-[#A8C6B5] leading-relaxed">{doc.shortBio}</p>
                  <p className="mt-4 text-xs text-[#DDF1EB]/80">{doc.specializations.join(' · ')}</p>
                </div>
              </div>
              <div className="px-7 pb-7 pt-4 border-t border-[#F7F4EC]/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => navigate(`/doctors/${doc.slug}`)}
                  className="text-sm font-display font-semibold text-[#5DE0C1] hover:underline cursor-pointer"
                >
                  Full Profile →
                </button>
                <button
                  type="button"
                  onClick={() =>
                    navigate('/book', {
                      prefill: { doctor: `${doc.name}, ${doc.credentials}` },
                    })
                  }
                  className="px-4 py-2 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-xs font-semibold cursor-pointer hover:bg-[#7CEBD0]"
                >
                  Book Visit
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

/* 5. INDIVIDUAL DOCTOR PROFILE PAGE */
export function DoctorDetailPage({ slug }: { slug: string }) {
  const { navigate } = useRouter();
  const doctor = VETERINARY_DOCTORS.find((d) => d.slug === slug);

  if (!doctor) {
    return (
      <div className="bg-[#11191B] text-[#F7F4EC] py-28 text-center px-5">
        <h1 className="font-display text-3xl font-bold">Doctor profile not found</h1>
        <button
          type="button"
          onClick={() => navigate('/doctors')}
          className="mt-6 px-6 py-3 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold cursor-pointer"
        >
          View All Doctors
        </button>
      </div>
    );
  }

  const services = VETERINARY_SERVICES.filter((s) => doctor.relatedServiceSlugs.includes(s.slug));

  return (
    <div>
      <section className="bg-[#11191B] text-[#F7F4EC] py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <button
            type="button"
            onClick={() => navigate('/doctors')}
            className="inline-flex items-center gap-2 text-sm text-[#A8C6B5] hover:text-[#5DE0C1] mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            All Veterinarians
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <MediaFrame
                src={doctor.portrait}
                alt={doctor.portraitAlt}
                className="aspect-[3/4] rounded-3xl border border-[#D6B77A]/30"
                imgClassName="w-full h-full object-cover object-top"
              />
            </div>

            <div className="lg:col-span-7">
              <p className="text-sm text-[#D6B77A]">{doctor.credentials}</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold mt-2">{doctor.name}</h1>
              <p className="text-lg text-[#5DE0C1] font-medium mt-2">{doctor.role}</p>

              <blockquote className="mt-7 py-5 border-t border-b border-[#F7F4EC]/12 font-editorial italic text-xl text-[#F7F4EC]/95 leading-relaxed">
                &ldquo;{doctor.clinicalPhilosophy}&rdquo;
              </blockquote>

              <div className="mt-7 space-y-4 text-base text-[#DDF1EB]/85 leading-relaxed">
                {doctor.fullBio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#F7F4EC]/12 text-sm">
                <div>
                  <p className="text-xs text-[#D6B77A] flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    Qualifications &amp; Training
                  </p>
                  <ul className="mt-2.5 space-y-1.5 text-[#DDF1EB]/90">
                    {doctor.education.map((edu) => (
                      <li key={edu}>{edu}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-[#D6B77A] flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      Consultation Days
                    </p>
                    <p className="mt-1.5 text-[#F7F4EC]">{doctor.consultationDays}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#D6B77A] flex items-center gap-1.5">
                      <Languages className="w-4 h-4" />
                      Languages
                    </p>
                    <p className="mt-1.5 text-[#F7F4EC]">{doctor.languages.join(', ')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-9">
                <button
                  type="button"
                  onClick={() =>
                    navigate('/book', {
                      prefill: { doctor: `${doctor.name}, ${doctor.credentials}` },
                    })
                  }
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold hover:bg-[#7CEBD0] cursor-pointer"
                >
                  Book Consultation with {doctor.name}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EC] text-[#11191B] py-16">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <h2 className="font-display text-2xl font-bold mb-6">Primary Clinical Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc) => (
              <button
                key={svc.slug}
                type="button"
                onClick={() => navigate(`/services/${svc.slug}`)}
                className="text-left rounded-2xl bg-white border border-[#123A3E]/12 p-5 hover:border-[#123A3E]/40 transition-colors cursor-pointer"
              >
                <p className="text-xs text-[#8A6B32] tabular-nums">{svc.index}</p>
                <p className="font-display font-bold text-base mt-1">{svc.shortTitle}</p>
                <p className="text-xs text-[#4A6264] mt-2 line-clamp-2">{svc.summary}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* 6. FACILITIES & GALLERY PAGE */
export function FacilitiesPage() {
  const { navigate } = useRouter();
  const [lightboxFacilityId, setLightboxFacilityId] = useState<string | null>(null);
  const lightboxItem = CLINIC_FACILITIES.find((f) => f.id === lightboxFacilityId);

  return (
    <div>
      <section className="bg-[#123A3E] text-[#F7F4EC] py-20">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <p className="text-sm font-medium text-[#D6B77A] mb-3">Facilities &amp; Gallery</p>
          <h1 className="font-display font-bold tracking-tight leading-[1.08] text-[clamp(2.25rem,4vw,3.6rem)] max-w-3xl">
            Purpose-Built Spaces for{' '}
            <span className="font-editorial italic font-medium text-[#5DE0C1]">Calm Clinical Care.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#DDF1EB]/85 max-w-2xl leading-relaxed">
            Explore our sunlit arrival lounge, species-separated consultation suites, rapid in-house diagnostic wing,
            and sterile surgical theatre.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F4EC] text-[#11191B] py-18 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
          {CLINIC_FACILITIES.map((room, idx) => (
            <article
              key={room.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 border-b border-[#123A3E]/12 last:border-b-0"
            >
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <button
                  type="button"
                  onClick={() => setLightboxFacilityId(room.id)}
                  className="block w-full rounded-3xl overflow-hidden border border-[#123A3E]/12 group cursor-pointer text-left"
                  aria-label={`Inspect larger photograph of ${room.name}`}
                >
                  <MediaFrame
                    src={room.image}
                    alt={room.imageAlt}
                    className="aspect-[16/10]"
                    imgClassName="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </button>
              </div>
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-xs font-semibold text-[#8A6B32] tabular-nums">
                  {room.index} · {room.area}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mt-2">{room.name}</h2>
                <p className="mt-3 text-base text-[#354E50] leading-relaxed">{room.description}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-[#123A3E]">
                  {room.highlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#174D46] mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <div className="rounded-3xl bg-[#11191B] text-[#F7F4EC] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold">Would you like a pre-visit acclimatisation tour?</h3>
              <p className="text-sm text-[#A8C6B5] mt-1">
                Shy dogs and new puppies are welcome for brief, no-pressure happy visits by appointment.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/book', { prefill: { message: 'Interested in a calm happy visit / tour.' } })}
              className="px-6 py-3 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold cursor-pointer whitespace-nowrap"
            >
              Arrange a Visit
            </button>
          </div>
        </div>
      </section>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-[#11191B]/92 backdrop-blur-sm flex items-center justify-center p-5"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.name}
        >
          <div className="max-w-4xl w-full bg-[#123A3E] rounded-3xl overflow-hidden border border-[#D6B77A]/30">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F7F4EC]/12">
              <div>
                <p className="text-xs text-[#D6B77A]">{lightboxItem.area}</p>
                <p className="font-display text-lg font-bold text-[#F7F4EC]">{lightboxItem.name}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxFacilityId(null)}
                aria-label="Close gallery view"
                className="w-10 h-10 rounded-full border border-[#F7F4EC]/20 flex items-center justify-center text-[#F7F4EC] hover:border-[#5DE0C1] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <MediaFrame src={lightboxItem.image} alt={lightboxItem.imageAlt} className="aspect-[16/10]" />
          </div>
        </div>
      )}
    </div>
  );
}

/* 7. DEDICATED APPOINTMENT BOOKING PAGE */
export function BookingPage() {
  return (
    <section className="bg-[#11191B] text-[#F7F4EC] py-16 lg:py-24 min-h-[80vh]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-[#D6B77A] mb-3">Appointment Booking</p>
          <h1 className="font-display font-bold tracking-tight leading-[1.08] text-[clamp(2.2rem,4vw,3.4rem)]">
            Reserve a Calm{' '}
            <span className="font-editorial italic font-medium text-[#5DE0C1]">Consultation Suite.</span>
          </h1>
          <p className="mt-5 text-base text-[#A8C6B5] leading-relaxed">
            Tell us about your companion and preferred time window. Our care desk confirms every appointment promptly
            and prepares species-specific rooms ahead of your arrival.
          </p>

          <div className="mt-8 rounded-2xl bg-[#123A3E]/55 border border-[#F7F4EC]/12 p-6 space-y-4 text-sm">
            <p className="font-display font-semibold text-[#D6B77A]">Same-Day Urgent Care</p>
            <p className="text-[#DDF1EB]/85 leading-relaxed">
              If your pet is experiencing acute vomiting, trauma, breathing distress, or suspected toxin ingestion,
              please call our triage line immediately rather than waiting for online confirmation.
            </p>
            <a
              href={CLINIC_INFO.urgentPhoneHref}
              className="inline-flex items-center gap-2 font-display font-bold text-[#5DE0C1] tabular-nums hover:underline"
            >
              Urgent Triage: {CLINIC_INFO.urgentPhoneDisplay}
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <AppointmentForm surface="dark" />
        </div>
      </div>
    </section>
  );
}

/* 8. PRICING & WELLNESS PACKAGES PAGE */
export function PackagesPage() {
  const { navigate } = useRouter();

  const consultationFees = [
    { item: 'Initial / Standard Veterinary Consultation (30–45 min)', guide: '$95' },
    { item: 'Follow-Up / Recheck Consultation', guide: '$65' },
    { item: 'Puppy or Kitten Onboarding Exam', guide: '$95' },
    { item: 'Clinical Nutrition & Diet Consultation', guide: '$110' },
    { item: 'Same-Day Urgent Triage Assessment', guide: '$125' },
  ];

  return (
    <div>
      <section className="bg-[#123A3E] text-[#F7F4EC] py-20">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <p className="text-sm font-medium text-[#D6B77A] mb-3">Pricing &amp; Wellness Packages</p>
          <h1 className="font-display font-bold tracking-tight leading-[1.08] text-[clamp(2.25rem,4vw,3.6rem)] max-w-3xl">
            Clear, Transparent{' '}
            <span className="font-editorial italic font-medium text-[#5DE0C1]">Preventive Plans.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#DDF1EB]/85 max-w-2xl leading-relaxed">
            No hidden billing or surprise add-ons. Every package and diagnostic recommendation comes with a plain,
            itemised written estimate approved by you beforehand.
          </p>
        </div>
      </section>

      <section className="bg-[#DDF1EB] text-[#11191B] py-18 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {WELLNESS_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between border ${
                  pkg.highlighted
                    ? 'bg-[#11191B] text-[#F7F4EC] border-[#D6B77A]/45'
                    : 'bg-[#F7F4EC] text-[#11191B] border-[#123A3E]/12'
                }`}
              >
                <div>
                  <p className={`text-xs font-medium ${pkg.highlighted ? 'text-[#D6B77A]' : 'text-[#174D46]'}`}>
                    {pkg.tierLabel}
                  </p>
                  <h2 className="font-display text-2xl font-bold mt-2">{pkg.name}</h2>
                  <p className={`text-xs mt-1 ${pkg.highlighted ? 'text-[#A8C6B5]' : 'text-[#546B6D]'}`}>
                    {pkg.targetPet}
                  </p>
                  <p className="font-display text-4xl font-bold tabular-nums mt-6">{pkg.startingPrice}</p>
                  <p className={`text-xs mt-1 ${pkg.highlighted ? 'text-[#A8C6B5]' : 'text-[#546B6D]'}`}>
                    {pkg.billingNote}
                  </p>

                  <ul className="mt-6 space-y-2.5 text-sm">
                    {pkg.inclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            pkg.highlighted ? 'text-[#5DE0C1]' : 'text-[#174D46]'
                          }`}
                        />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`mt-5 text-xs ${pkg.highlighted ? 'text-[#87979A]' : 'text-[#5D7375]'}`}>
                    {pkg.consultationNote}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    navigate('/book', {
                      prefill: { service: 'Preventive Health Check-ups', packageName: pkg.name },
                    })
                  }
                  className={`mt-8 w-full py-3.5 px-5 rounded-full font-display text-sm font-semibold cursor-pointer ${
                    pkg.highlighted
                      ? 'bg-[#5DE0C1] text-[#11191B] hover:bg-[#7CEBD0]'
                      : 'bg-[#123A3E] text-[#F7F4EC] hover:bg-[#174D46]'
                  }`}
                >
                  Enquire About {pkg.name.split(' ')[0]} Plan
                </button>
              </div>
            ))}
          </div>

          {/* Transparent Standard Consultation Fee Guide */}
          <div className="mt-14 rounded-3xl bg-[#F7F4EC] border border-[#123A3E]/12 p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-[#11191B]">Standard Consultation Fee Guide</h2>
            <p className="text-sm text-[#425A5C] mt-1">
              Diagnostics, laboratory panels, medications, and surgical procedures are always quoted transparently prior
              to proceeding.
            </p>
            <div className="mt-6 divide-y divide-[#123A3E]/12">
              {consultationFees.map((row) => (
                <div key={row.item} className="py-4 flex items-center justify-between gap-4 text-sm sm:text-base">
                  <span className="text-[#11191B] font-medium">{row.item}</span>
                  <span className="font-display font-bold text-[#123A3E] tabular-nums">{row.guide}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
