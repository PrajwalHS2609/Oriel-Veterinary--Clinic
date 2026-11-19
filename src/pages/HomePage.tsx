import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Check,
  Quote,
} from 'lucide-react';
import {
  BLOG_ARTICLES,
  CLIENT_CARE_STORIES,
  CLINIC_FACILITIES,
  CLINIC_FAQS,
  CLINIC_IMAGES,
  CLINIC_INFO,
  CLINIC_PILLARS,
  VETERINARY_DOCTORS,
  VETERINARY_SERVICES,
  WELLNESS_JOURNEY,
  WELLNESS_PACKAGES,
} from '../data/clinicData';
import { MedicalIllustration, PulseLineGraphic } from '../components/MedicalArtwork';
import { MediaFrame } from '../components/MediaFrame';
import { AppointmentForm } from '../components/AppointmentForm';
import { useRouter } from '../components/RouterContext';

export function HomePage() {
  const { navigate } = useRouter();

  // Interactive Services spotlight state
  const [activeServiceSlug, setActiveServiceSlug] = useState<string>(VETERINARY_SERVICES[0].slug);
  const activeService =
    VETERINARY_SERVICES.find((s) => s.slug === activeServiceSlug) || VETERINARY_SERVICES[0];

  // Interactive Wellness Journey milestone state
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState<number>(0);
  const activeMilestone = WELLNESS_JOURNEY[activeMilestoneIdx];

  // Interactive Facilities switcher
  const [activeFacilityId, setActiveFacilityId] = useState<string>(CLINIC_FACILITIES[0].id);
  const activeFacility =
    CLINIC_FACILITIES.find((f) => f.id === activeFacilityId) || CLINIC_FACILITIES[0];

  // Testimonials carousel & client feedback submission
  const [storyIdx, setStoryIdx] = useState<number>(0);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackDraft, setFeedbackDraft] = useState({ name: '', pet: '', note: '' });

  // FAQ accordion state
  const [openFaqId, setOpenFaqId] = useState<string>(CLINIC_FAQS[0].id);

  // About clinic philosophy tab
  const [philosophyTab, setPhilosophyTab] = useState<'philosophy' | 'mission' | 'vision'>('philosophy');

  const currentStory = CLIENT_CARE_STORIES[storyIdx];
  const featuredArticle = BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[0];
  const secondaryArticles = BLOG_ARTICLES.filter((a) => a.slug !== featuredArticle.slug).slice(0, 5);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackDraft.name.trim() || !feedbackDraft.note.trim()) return;
    setFeedbackSubmitted(true);
    setFeedbackDraft({ name: '', pet: '', note: '' });
  };

  return (
    <div>
      {/* SECTION 2: CINEMATIC EDITORIAL ASYMMETRICAL HERO (Obsidian Black -> Midnight Teal) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#11191B] via-[#123A3E] to-[#11191B] text-[#F7F4EC]">
        <div
          className="pointer-events-none absolute -top-32 right-0 w-[560px] h-[560px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #5DE0C1 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #D6B77A 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 pt-12 pb-16 lg:pt-18 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Editorial Narrative Column */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-between"
            >
              <div>
                <p className="text-sm font-medium text-[#D6B77A] tracking-wide mb-5">
                  San Francisco · Small Animal Medicine &amp; Surgery
                </p>

                <h1 className="font-display font-bold tracking-tight text-[#F7F4EC] leading-[1.06] text-[clamp(2.4rem,4.6vw,4.15rem)]">
                  Exceptional Care for Every{' '}
                  <span className="font-editorial italic font-medium text-[#5DE0C1]">Little Life.</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-[#DDF1EB]/88 leading-relaxed max-w-xl">
                  Modern veterinary expertise, compassionate attention and personalised healthcare for your beloved pets.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => navigate('/book')}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold hover:bg-[#7CEBD0] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Book an Appointment
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/services')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#D6B77A]/50 text-[#F7F4EC] font-display text-sm font-medium hover:border-[#5DE0C1] hover:text-[#5DE0C1] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Explore Our Services
                  </button>
                </div>
              </div>

              {/* Subtle animated medical pulse line + grounded clinic facts */}
              <div className="mt-12 pt-8 border-t border-[#F7F4EC]/12">
                <PulseLineGraphic className="w-64 h-7 mb-5 opacity-90" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="font-display font-semibold text-[#F7F4EC]">30–45 Min Suites</p>
                    <p className="text-xs text-[#A8C6B5] mt-1">Unhurried, species-separated consultations</p>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-[#F7F4EC]">In-House Diagnostics</p>
                    <p className="text-xs text-[#A8C6B5] mt-1">Rapid bloodwork, X-ray &amp; ultrasound</p>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-[#F7F4EC] tabular-nums">7 Days a Week</p>
                    <p className="text-xs text-[#A8C6B5] mt-1">Same-day urgent triage during hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Asymmetric Layered Photography + 3D Sculptural Inset */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative flex flex-col justify-center"
            >
              <div className="relative">
                {/* Main oversized photographic composition with asymmetric mask */}
                <div className="relative rounded-[32px] overflow-hidden border border-[#D6B77A]/25 shadow-2xl">
                  <MediaFrame
                    src={CLINIC_IMAGES.heroEditorial}
                    alt="Lead veterinarian examining a calm golden retriever on a walnut and travertine table at Oriel Veterinary Clinic"
                    loading="eager"
                    className="aspect-[16/11] lg:aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11191B]/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs text-[#D6B77A]">Private Consultation Suite</p>
                      <p className="font-display text-sm sm:text-base font-semibold text-[#F7F4EC]">
                        Calm handling &amp; diagnostic precision under one roof
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overlapping 3D Sculptural Brand Study (Desktop offset) */}
                <div className="hidden sm:block sm:absolute -bottom-8 -left-8 w-48 lg:w-52 rounded-2xl overflow-hidden border border-[#5DE0C1]/30 bg-[#11191B] shadow-2xl">
                  <MediaFrame
                    src={CLINIC_IMAGES.sculpturalArt}
                    alt="Sculptural 3D study of a hound and cat in matte obsidian, champagne gold, and mint glass"
                    loading="eager"
                    className="aspect-[4/3]"
                  />
                  <div className="px-3.5 py-2.5 bg-[#11191B]/95 border-t border-[#F7F4EC]/10">
                    <p className="text-xs font-medium text-[#F7F4EC]">Canine &amp; Feline Specialists</p>
                    <p className="text-[11px] text-[#A8C6B5]">Preventive · Surgical · Senior</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CLINIC INTRODUCTION (Warm Ivory Light Contrast Section) */}
      <section className="bg-[#F7F4EC] text-[#11191B] py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Layered Editorial Architecture Photography */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4 items-end">
                <div className="col-span-8">
                  <MediaFrame
                    src={CLINIC_IMAGES.clinicReception}
                    alt="Sunlit architectural reception and calm waiting lounge at Oriel Veterinary Clinic"
                    className="aspect-[4/5] editorial-arch-mask border border-[#123A3E]/12"
                  />
                </div>
                <div className="col-span-4 space-y-4">
                  <MediaFrame
                    src={CLINIC_IMAGES.companionPortrait}
                    alt="Healthy Australian Shepherd dog and silver tabby cat seated together"
                    className="aspect-square rounded-2xl border border-[#123A3E]/12"
                  />
                  <div className="rounded-2xl bg-[#123A3E] text-[#F7F4EC] p-4 sm:p-5">
                    <p className="font-editorial italic text-lg text-[#D6B77A]">Fear-Free</p>
                    <p className="text-xs text-[#DDF1EB]/85 mt-1 leading-relaxed">
                      Separate canine &amp; feline arrival alcoves and quiet acoustic suites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Split-Screen Editorial Narrative */}
            <div className="lg:col-span-6">
              <p className="text-sm font-medium text-[#174D46] mb-3">About Oriel Veterinary Clinic</p>
              <h2 className="font-display font-bold text-[#11191B] tracking-tight leading-[1.1] text-[clamp(2rem,3.6vw,3.25rem)]">
                Where Science Meets{' '}
                <span className="font-editorial italic font-medium text-[#174D46]">Compassion.</span>
              </h2>

              <p className="mt-6 text-base text-[#354B4D] leading-relaxed">
                Oriel Veterinary Clinic was founded to reimagine how veterinary medicine feels—for pets, their families,
                and the clinicians who care for them. By uniting hospital-grade diagnostics with calm architectural spaces
                and unhurried consultation times, we make proactive animal healthcare deeply reassuring.
              </p>

              {/* Interactive Philosophy / Mission / Vision Switcher */}
              <div className="mt-8">
                <div
                  role="tablist"
                  aria-label="Clinic philosophy, mission, and vision"
                  className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#DDF1EB]/75 border border-[#123A3E]/10"
                >
                  {(
                    [
                      { id: 'philosophy', label: 'Veterinary Philosophy' },
                      { id: 'mission', label: 'Our Mission' },
                      { id: 'vision', label: 'Our Vision' },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      role="tab"
                      type="button"
                      aria-selected={philosophyTab === tab.id}
                      onClick={() => setPhilosophyTab(tab.id)}
                      className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-display font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                        philosophyTab === tab.id
                          ? 'bg-[#123A3E] text-[#F7F4EC]'
                          : 'text-[#123A3E] hover:bg-white/60'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-[#123A3E]/12 min-h-[108px]">
                  {philosophyTab === 'philosophy' && (
                    <p className="text-sm sm:text-base text-[#2B4042] leading-relaxed">
                      Every examination begins at your pet&apos;s pace. We combine low-stress clinical handling with
                      rigorous evidence-based medicine—prioritising preventive clarity, gentle pain management, and open
                      communication at every step.
                    </p>
                  )}
                  {philosophyTab === 'mission' && (
                    <p className="text-sm sm:text-base text-[#2B4042] leading-relaxed">
                      To deliver trustworthy, transparent small-animal healthcare that extends both lifespan and daily
                      comfort—empowering pet parents with clear clinical guidance rather than rushed appointments.
                    </p>
                  )}
                  {philosophyTab === 'vision' && (
                    <p className="text-sm sm:text-base text-[#2B4042] leading-relaxed">
                      To set a new benchmark for contemporary neighbourhood veterinary hospitals: spaces where advanced
                      diagnostics, ethical clinical judgement, and warmth coexist effortlessly.
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => navigate('/about')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#123A3E] text-[#F7F4EC] font-display text-sm font-semibold hover:bg-[#174D46] transition-colors cursor-pointer"
                >
                  Discover Our Clinic
                  <ArrowUpRight className="w-4 h-4 text-[#5DE0C1]" />
                </button>
                <a
                  href="/facilities"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/facilities');
                  }}
                  className="text-sm font-display font-semibold text-[#123A3E] underline underline-offset-4 decoration-[#D6B77A] hover:text-[#174D46]"
                >
                  Tour our facilities
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VETERINARY SERVICES (Deep Pine Dark Luxury Section — Asymmetric Featured + Directory) */}
      <section className="bg-[#174D46] text-[#F7F4EC] py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#F7F4EC]/14">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#D6B77A] mb-3">Clinical Capabilities</p>
              <h2 className="font-display font-bold tracking-tight text-[#F7F4EC] leading-[1.1] text-[clamp(2rem,3.6vw,3.25rem)]">
                Complete Healthcare for Every{' '}
                <span className="font-editorial italic font-medium text-[#5DE0C1]">Paw.</span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#5DE0C1] hover:text-[#F7F4EC] transition-colors cursor-pointer self-start lg:self-auto whitespace-nowrap"
            >
              Explore all 11 clinical services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Large Featured Spotlight Panel (Interactive) */}
            <div className="lg:col-span-5 rounded-3xl bg-[#11191B] border border-[#D6B77A]/25 overflow-hidden lg:sticky lg:top-24">
              <div className="relative">
                <MediaFrame
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  className="aspect-[16/10]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11191B] via-[#11191B]/25 to-transparent" />
                <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-[#11191B]/85 backdrop-blur-sm border border-[#D6B77A]/30 flex items-center justify-center">
                  <MedicalIllustration artKey={activeService.artKey} className="w-10 h-10" tone="dark" />
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-[#D6B77A]">
                  <span className="tabular-nums">{activeService.index}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeService.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeService.duration}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F7F4EC] mt-2">
                  {activeService.title}
                </h3>

                <p className="mt-3 text-sm text-[#A8C6B5] leading-relaxed">
                  {activeService.clinicalOverview}
                </p>

                <div className="mt-5 pt-5 border-t border-[#F7F4EC]/10">
                  <p className="text-xs font-medium text-[#D6B77A] mb-3">What this visit includes</p>
                  <ul className="space-y-2 text-sm text-[#DDF1EB]/90">
                    {activeService.included.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#5DE0C1] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      navigate('/book', { prefill: { service: activeService.title } })
                    }
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold hover:bg-[#7CEBD0] transition-colors cursor-pointer"
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(`/services/${activeService.slug}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#F7F4EC]/20 text-[#F7F4EC] text-sm font-medium hover:border-[#5DE0C1] hover:text-[#5DE0C1] transition-colors cursor-pointer"
                  >
                    Clinical Details
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Asymmetric Editorial Directory of all 11 Services */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VETERINARY_SERVICES.map((service) => {
                const isSelected = service.slug === activeService.slug;
                return (
                  <div
                    key={service.slug}
                    onMouseEnter={() => setActiveServiceSlug(service.slug)}
                    className={`group rounded-2xl p-5 sm:p-6 border transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#123A3E] border-[#5DE0C1]/65'
                        : 'bg-[#123A3E]/45 border-[#F7F4EC]/12 hover:border-[#D6B77A]/45'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setActiveServiceSlug(service.slug)}
                          className="text-left cursor-pointer"
                        >
                          <span className="text-xs font-medium text-[#D6B77A] tabular-nums">
                            {service.index} · {service.duration}
                          </span>
                          <h3 className="font-display text-lg font-semibold text-[#F7F4EC] mt-1 group-hover:text-[#5DE0C1] transition-colors">
                            {service.shortTitle}
                          </h3>
                        </button>
                        <MedicalIllustration
                          artKey={service.artKey}
                          className="w-10 h-10 shrink-0 opacity-90"
                          tone="dark"
                        />
                      </div>
                      <p className="mt-2.5 text-sm text-[#DDF1EB]/80 leading-relaxed line-clamp-2">
                        {service.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-[#F7F4EC]/10 flex items-center justify-between gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => navigate(`/services/${service.slug}`)}
                        className="font-display font-semibold text-[#5DE0C1] hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        Read inclusions
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => navigate('/book', { prefill: { service: service.title } })}
                        className="text-[#F7F4EC]/80 hover:text-[#D6B77A] transition-colors cursor-pointer"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE OUR CLINIC (Pale Aqua Light Section with Obsidian Anchor Panels) */}
      <section className="bg-[#DDF1EB] text-[#11191B] py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Editorial Anchor */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <p className="text-sm font-medium text-[#174D46] mb-3">The Oriel Standard</p>
              <h2 className="font-display font-bold text-[#11191B] tracking-tight leading-[1.1] text-[clamp(2rem,3.4vw,3rem)]">
                Care That Goes Beyond{' '}
                <span className="font-editorial italic font-medium text-[#174D46]">Expectations.</span>
              </h2>
              <p className="mt-5 text-base text-[#2E4648] leading-relaxed">
                Every clinical protocol, room surface, and appointment schedule is engineered around measurable medical
                safety and gentle emotional respect.
              </p>

              <div className="mt-8 rounded-2xl overflow-hidden bg-[#11191B] text-[#F7F4EC] border border-[#123A3E]/15">
                <MediaFrame
                  src={CLINIC_IMAGES.sculpturalArt}
                  alt="Obsidian and champagne gold sculptural artwork representing veterinary craft"
                  className="aspect-[16/10]"
                />
                <div className="p-6">
                  <p className="text-xs text-[#D6B77A]">Clinical Integrity</p>
                  <p className="font-display text-base font-semibold text-[#F7F4EC] mt-1">
                    Written diagnostic explanations and transparent estimates before every procedure.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Asymmetric Dark Content Panels */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {CLINIC_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.index}
                  className={`rounded-2xl p-7 border transition-colors ${
                    idx % 3 === 0
                      ? 'bg-[#11191B] text-[#F7F4EC] border-[#D6B77A]/25'
                      : 'bg-[#F7F4EC] text-[#11191B] border-[#123A3E]/12'
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`font-display text-sm font-bold tabular-nums ${
                        idx % 3 === 0 ? 'text-[#5DE0C1]' : 'text-[#174D46]'
                      }`}
                    >
                      {pillar.index}
                    </span>
                    <span
                      className={`w-8 h-[1px] ${
                        idx % 3 === 0 ? 'bg-[#D6B77A]/60' : 'bg-[#123A3E]/25'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold leading-snug">{pillar.title}</h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      idx % 3 === 0 ? 'text-[#A8C6B5]' : 'text-[#395254]'
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: MEET OUR VETERINARY TEAM (Obsidian Black Luxury Medical Presentation) */}
      <section className="bg-[#11191B] text-[#F7F4EC] py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#F7F4EC]/12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#D6B77A] mb-3">Clinical Leadership</p>
              <h2 className="font-display font-bold tracking-tight leading-[1.1] text-[clamp(2rem,3.6vw,3.25rem)]">
                Dedicated Doctors.{' '}
                <span className="font-editorial italic font-medium text-[#5DE0C1]">
                  Healthier, Happier Pets.
                </span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/doctors')}
              className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#5DE0C1] hover:text-[#F7F4EC] transition-colors cursor-pointer self-start lg:self-auto"
            >
              Meet our full medical team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-14 space-y-12">
            {VETERINARY_DOCTORS.map((doctor, idx) => (
              <article
                key={doctor.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pb-12 border-b border-[#F7F4EC]/10 last:border-b-0 last:pb-0"
              >
                {/* Portrait Frame (Alternating left/right editorial rhythm on desktop) */}
                <div className={`lg:col-span-4 ${idx === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-[#D6B77A]/25 bg-[#123A3E]">
                    <MediaFrame
                      src={doctor.portrait}
                      alt={doctor.portraitAlt}
                      className="aspect-[3/4]"
                      imgClassName="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Clinical Biography & Credentials */}
                <div className={`lg:col-span-8 ${idx === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#D6B77A]">
                    <span>{doctor.credentials}</span>
                    <span aria-hidden="true">·</span>
                    <span>{doctor.experience}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F7F4EC] mt-2">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-medium text-[#5DE0C1] mt-1">{doctor.role}</p>

                  <p className="mt-5 text-base text-[#DDF1EB]/85 leading-relaxed max-w-2xl">
                    {doctor.shortBio}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#F7F4EC]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-xs text-[#87979A]">Specialisations</p>
                      <p className="text-[#F7F4EC] mt-1">{doctor.specializations.join(' · ')}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#87979A]">Consultation Days</p>
                      <p className="text-[#F7F4EC] mt-1">{doctor.consultationDays}</p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => navigate(`/doctors/${doctor.slug}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#5DE0C1]/50 text-[#5DE0C1] font-display text-sm font-semibold hover:bg-[#5DE0C1] hover:text-[#11191B] transition-colors cursor-pointer"
                    >
                      View Clinical Profile
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        navigate('/book', {
                          prefill: { doctor: `${doctor.name}, ${doctor.credentials}` },
                        })
                      }
                      className="text-sm font-medium text-[#D6B77A] hover:text-[#F7F4EC] transition-colors cursor-pointer"
                    >
                      Request visit with {doctor.name.split(' ')[0]} {doctor.name.split(' ')[1]}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: PET WELLNESS JOURNEY (Warm Ivory Interactive Curved Timeline) */}
      <section className="bg-[#F7F4EC] text-[#11191B] py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#174D46] mb-3">Lifelong Care Pathway</p>
            <h2 className="font-display font-bold tracking-tight leading-[1.1] text-[clamp(2rem,3.6vw,3.25rem)]">
              Every Stage of Their Life Deserves{' '}
              <span className="font-editorial italic font-medium text-[#174D46]">Attention.</span>
            </h2>
          </div>

          {/* Interactive Curved Milestone Track */}
          <div className="mt-12 relative">
            <svg
              viewBox="0 0 1200 64"
              fill="none"
              className="hidden lg:block w-full h-14 mb-2"
              aria-hidden="true"
            >
              <path
                d="M60 44 C 240 6, 360 6, 540 34 C 720 60, 880 8, 1140 36"
                stroke="#123A3E"
                strokeOpacity="0.2"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {WELLNESS_JOURNEY.map((stage, idx) => {
                const active = idx === activeMilestoneIdx;
                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => setActiveMilestoneIdx(idx)}
                    className={`text-left rounded-2xl p-4 sm:p-5 border transition-all cursor-pointer ${
                      active
                        ? 'bg-[#123A3E] text-[#F7F4EC] border-[#123A3E]'
                        : 'bg-white text-[#11191B] border-[#123A3E]/12 hover:border-[#123A3E]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-display text-xs font-bold tabular-nums ${
                          active ? 'text-[#5DE0C1]' : 'text-[#8A6B32]'
                        }`}
                      >
                        Stage {stage.step}
                      </span>
                      <MedicalIllustration
                        artKey={stage.artKey}
                        className="w-8 h-8"
                        tone={active ? 'dark' : 'light'}
                      />
                    </div>
                    <p className="font-display text-sm sm:text-base font-bold mt-3 leading-snug">
                      {stage.title}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        active ? 'text-[#A8C6B5]' : 'text-[#556B6D]'
                      }`}
                    >
                      {stage.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Milestone Detail Showcase */}
            <div className="mt-6 rounded-3xl bg-white border border-[#123A3E]/12 p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs text-[#8A6B32] font-medium">
                  <span className="tabular-nums">Milestone {activeMilestone.step}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeMilestone.recommendedInterval}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#11191B] mt-2">
                  {activeMilestone.title}
                </h3>
                <p className="mt-4 text-base text-[#364D4F] leading-relaxed">
                  {activeMilestone.description}
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-[#123A3E]">
                  {activeMilestone.clinicalFocus.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#174D46] mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-5 bg-[#DDF1EB]/55 rounded-2xl p-6 border border-[#123A3E]/10">
                <MedicalIllustration artKey={activeMilestone.artKey} className="w-16 h-16 shrink-0" tone="light" />
                <div>
                  <p className="font-display text-base font-bold text-[#11191B]">
                    Ready to begin at this stage?
                  </p>
                  <p className="text-sm text-[#354E50] mt-1">
                    Our doctors tailor every care plan around your companion&apos;s age, history, and daily comfort.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate('/book')}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-display font-semibold text-[#123A3E] hover:text-[#174D46] underline underline-offset-4 decoration-[#D6B77A] cursor-pointer"
                  >
                    Schedule a consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: MODERN CLINIC FACILITIES (Midnight Teal Asymmetric Gallery) */}
      <section className="bg-[#123A3E] text-[#F7F4EC] py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#F7F4EC]/12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#D6B77A] mb-3">Architectural Care Spaces</p>
              <h2 className="font-display font-bold tracking-tight leading-[1.1] text-[clamp(2rem,3.6vw,3.25rem)]">
                A Better Environment for{' '}
                <span className="font-editorial italic font-medium text-[#5DE0C1]">
                  Better Pet Healthcare.
                </span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/facilities')}
              className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#5DE0C1] hover:text-[#F7F4EC] transition-colors cursor-pointer self-start lg:self-auto"
            >
              Open full facilities gallery
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Room Selector List */}
            <div className="lg:col-span-5 flex flex-col divide-y divide-[#F7F4EC]/12 border-t border-b border-[#F7F4EC]/12">
              {CLINIC_FACILITIES.map((room) => {
                const active = room.id === activeFacility.id;
                return (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setActiveFacilityId(room.id)}
                    className={`w-full text-left py-5 px-4 transition-colors cursor-pointer flex items-start justify-between gap-4 ${
                      active ? 'bg-[#11191B]/55' : 'hover:bg-[#11191B]/25'
                    }`}
                  >
                    <div>
                      <p className="text-xs text-[#D6B77A] tabular-nums">
                        {room.index} · {room.area}
                      </p>
                      <p
                        className={`font-display text-lg font-semibold mt-1 ${
                          active ? 'text-[#5DE0C1]' : 'text-[#F7F4EC]'
                        }`}
                      >
                        {room.name}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 mt-2 shrink-0 transition-transform ${
                        active ? 'text-[#5DE0C1] translate-x-1' : 'text-[#A8C6B5]/50'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Oversized Architectural Photograph + Details */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              <div className="rounded-3xl overflow-hidden border border-[#D6B77A]/25">
                <MediaFrame
                  src={activeFacility.image}
                  alt={activeFacility.imageAlt}
                  className="aspect-[16/10]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-7">
                  <p className="text-xs text-[#D6B77A]">{activeFacility.area}</p>
                  <h3 className="font-display text-2xl font-bold text-[#F7F4EC] mt-1">
                    {activeFacility.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#DDF1EB]/85 leading-relaxed">
                    {activeFacility.description}
                  </p>
                </div>
                <ul className="md:col-span-5 space-y-2 text-xs sm:text-sm text-[#A8C6B5]">
                  {activeFacility.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#5DE0C1] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: PET HEALTH EDUCATION (Warm Ivory Editorial Magazine Showcase) */}
      <section className="bg-[#F7F4EC] text-[#11191B] py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#123A3E]/12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#174D46] mb-3">Pet Health Journal</p>
              <h2 className="font-display font-bold tracking-tight leading-[1.1] text-[clamp(2rem,3.6vw,3.25rem)]">
                Helping Pet Parents Make{' '}
                <span className="font-editorial italic font-medium text-[#174D46]">
                  Informed Decisions.
                </span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#123A3E] hover:text-[#174D46] transition-colors cursor-pointer self-start lg:self-auto"
            >
              Browse all clinical articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Lead Featured Essay */}
            <article className="lg:col-span-7 group">
              <a
                href={`/blog/${featuredArticle.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/blog/${featuredArticle.slug}`);
                }}
                className="block"
              >
                <div className="rounded-3xl overflow-hidden border border-[#123A3E]/12">
                  <MediaFrame
                    src={featuredArticle.image}
                    alt={featuredArticle.imageAlt}
                    className="aspect-[16/10]"
                    imgClassName="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-xs text-[#546B6D]">
                    <span className="font-medium text-[#174D46]">{featuredArticle.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredArticle.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#11191B] mt-2 group-hover:text-[#174D46] transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="mt-3 text-base text-[#395153] leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-display font-semibold text-[#123A3E] underline underline-offset-4 decoration-[#D6B77A]">
                    Read Clinical Guide
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </article>

            {/* Right Column: Editorial Reading Index */}
            <div className="lg:col-span-5 divide-y divide-[#123A3E]/12 border-t border-b border-[#123A3E]/12">
              {secondaryArticles.map((article) => (
                <article key={article.slug} className="py-5 group">
                  <a
                    href={`/blog/${article.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/blog/${article.slug}`);
                    }}
                    className="block"
                  >
                    <div className="flex items-center gap-2 text-xs text-[#5B7072]">
                      <span className="font-medium text-[#174D46]">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#11191B] mt-1.5 group-hover:text-[#174D46] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#496163] line-clamp-2">{article.excerpt}</p>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: TESTIMONIALS / CLIENT STORIES (Midnight Teal Dark Section + Warm Ivory Cards) */}
      <section className="bg-[#123A3E] text-[#F7F4EC] py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#D6B77A] mb-3">Pet Parent Voices</p>
              <h2 className="font-display font-bold tracking-tight leading-[1.1] text-[clamp(2rem,3.6vw,3.25rem)]">
                Trusted by Pet Parents.{' '}
                <span className="font-editorial italic font-medium text-[#5DE0C1]">
                  Inspired by Every Paw.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setStoryIdx((prev) => (prev - 1 + CLIENT_CARE_STORIES.length) % CLIENT_CARE_STORIES.length)
                }
                aria-label="Previous client story"
                className="w-11 h-11 rounded-full border border-[#F7F4EC]/25 flex items-center justify-center text-[#F7F4EC] hover:border-[#5DE0C1] hover:text-[#5DE0C1] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-medium text-[#A8C6B5] tabular-nums px-1">
                0{storyIdx + 1} / 0{CLIENT_CARE_STORIES.length}
              </span>
              <button
                type="button"
                onClick={() => setStoryIdx((prev) => (prev + 1) % CLIENT_CARE_STORIES.length)}
                aria-label="Next client story"
                className="w-11 h-11 rounded-full border border-[#F7F4EC]/25 flex items-center justify-center text-[#F7F4EC] hover:border-[#5DE0C1] hover:text-[#5DE0C1] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Warm Ivory Featured Story Card */}
          <div className="rounded-3xl bg-[#F7F4EC] text-[#11191B] overflow-hidden border border-[#D6B77A]/35 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <MediaFrame
                src={currentStory.image}
                alt={currentStory.imageAlt}
                className="h-full min-h-[280px] aspect-[4/3] lg:aspect-auto"
              />
            </div>
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <Quote className="w-9 h-9 text-[#D6B77A] mb-6" aria-hidden="true" />
                <blockquote className="font-editorial text-xl sm:text-2xl text-[#11191B] leading-relaxed">
                  &ldquo;{currentStory.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-[#123A3E]/12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="font-display text-base font-bold text-[#11191B]">
                    {currentStory.ownerName}
                  </p>
                  <p className="text-sm text-[#174D46] mt-0.5">
                    {currentStory.petName} · {currentStory.petDetails}
                  </p>
                  <p className="text-xs text-[#5D7375] mt-1">{currentStory.visitContext}</p>
                </div>
                <p className="text-xs text-[#6B7E80]">{currentStory.verifiedNote}</p>
              </div>
            </div>
          </div>

          {/* Authentic Post-Visit Feedback Invitation */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#F7F4EC]/12">
            <p className="text-sm text-[#A8C6B5]">
              We publish genuine client stories only after direct visit verification and pet parent permission.
            </p>
            <button
              type="button"
              onClick={() => {
                setShowFeedbackForm((prev) => !prev);
                setFeedbackSubmitted(false);
              }}
              className="text-sm font-display font-semibold text-[#5DE0C1] hover:underline cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              {showFeedbackForm ? 'Close feedback form' : 'Share your clinic experience'}
            </button>
          </div>

          {showFeedbackForm && (
            <div className="mt-6 rounded-2xl bg-[#11191B] border border-[#F7F4EC]/12 p-6 sm:p-8">
              {feedbackSubmitted ? (
                <p className="text-sm text-[#5DE0C1]">
                  Thank you for sharing your feedback. Our care desk reviews every note directly with your veterinarian.
                </p>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={feedbackDraft.name}
                    onChange={(e) => setFeedbackDraft({ ...feedbackDraft, name: e.target.value })}
                    className="rounded-xl bg-[#123A3E]/55 border border-[#F7F4EC]/15 px-4 py-2.5 text-sm text-[#F7F4EC] placeholder:text-[#87979A]"
                  />
                  <input
                    type="text"
                    placeholder="Pet's name & breed"
                    value={feedbackDraft.pet}
                    onChange={(e) => setFeedbackDraft({ ...feedbackDraft, pet: e.target.value })}
                    className="rounded-xl bg-[#123A3E]/55 border border-[#F7F4EC]/15 px-4 py-2.5 text-sm text-[#F7F4EC] placeholder:text-[#87979A]"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold px-5 py-2.5 cursor-pointer hover:bg-[#7CEBD0]"
                  >
                    Submit Visit Feedback
                  </button>
                  <textarea
                    required
                    rows={2}
                    placeholder="Tell us about your companion's visit..."
                    value={feedbackDraft.note}
                    onChange={(e) => setFeedbackDraft({ ...feedbackDraft, note: e.target.value })}
                    className="sm:col-span-3 rounded-xl bg-[#123A3E]/55 border border-[#F7F4EC]/15 px-4 py-2.5 text-sm text-[#F7F4EC] placeholder:text-[#87979A]"
                  />
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 12: PRICING & WELLNESS PACKAGES (Pale Aqua Light Section) */}
      <section className="bg-[#DDF1EB] text-[#11191B] py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#123A3E]/12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#174D46] mb-3">Transparent Preventive Care</p>
              <h2 className="font-display font-bold tracking-tight leading-[1.1] text-[clamp(2rem,3.6vw,3.25rem)]">
                Structured Wellness{' '}
                <span className="font-editorial italic font-medium text-[#174D46]">Packages.</span>
              </h2>
              <p className="mt-4 text-base text-[#324B4D]">
                Clear, itemised annual care plans designed for each life stage—with transparent starting fee guidance
                and full written confirmation at your onboarding consultation.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/packages')}
              className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#123A3E] hover:text-[#174D46] cursor-pointer self-start lg:self-auto"
            >
              Compare package inclusions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
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
                  <p
                    className={`text-xs font-medium ${
                      pkg.highlighted ? 'text-[#D6B77A]' : 'text-[#174D46]'
                    }`}
                  >
                    {pkg.tierLabel}
                  </p>
                  <h3 className="font-display text-2xl font-bold mt-2">{pkg.name}</h3>
                  <p
                    className={`text-xs mt-1 ${
                      pkg.highlighted ? 'text-[#A8C6B5]' : 'text-[#51686A]'
                    }`}
                  >
                    {pkg.targetPet}
                  </p>

                  <div
                    className={`mt-6 pt-5 border-t ${
                      pkg.highlighted ? 'border-[#F7F4EC]/12' : 'border-[#123A3E]/10'
                    }`}
                  >
                    <p className="text-xs opacity-75">Starting guide</p>
                    <p className="font-display text-4xl font-bold tabular-nums mt-1">
                      {pkg.startingPrice}
                    </p>
                    <p
                      className={`text-xs mt-1.5 ${
                        pkg.highlighted ? 'text-[#A8C6B5]' : 'text-[#556B6D]'
                      }`}
                    >
                      {pkg.billingNote}
                    </p>
                  </div>

                  <p
                    className={`mt-5 text-sm leading-relaxed ${
                      pkg.highlighted ? 'text-[#DDF1EB]/85' : 'text-[#354E50]'
                    }`}
                  >
                    {pkg.summary}
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
                </div>

                <div className="mt-8 pt-6 border-t border-current/10">
                  <button
                    type="button"
                    onClick={() =>
                      navigate('/book', {
                        prefill: {
                          service: 'Preventive Health Check-ups',
                          packageName: pkg.name,
                        },
                      })
                    }
                    className={`w-full py-3.5 px-5 rounded-full font-display text-sm font-semibold transition-colors cursor-pointer ${
                      pkg.highlighted
                        ? 'bg-[#5DE0C1] text-[#11191B] hover:bg-[#7CEBD0]'
                        : 'bg-[#123A3E] text-[#F7F4EC] hover:bg-[#174D46]'
                    }`}
                  >
                    Enquire About This Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: APPOINTMENT BOOKING (Obsidian Black Conversion Showcase) */}
      <section id="book-appointment" className="bg-[#11191B] text-[#F7F4EC] py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-sm font-medium text-[#D6B77A] mb-3">Schedule a Visit</p>
              <h2 className="font-display font-bold tracking-tight leading-[1.1] text-[clamp(2rem,3.6vw,3.25rem)]">
                Let&apos;s Make Their Next Chapter{' '}
                <span className="font-editorial italic font-medium text-[#5DE0C1]">Healthier.</span>
              </h2>
              <p className="mt-5 text-base text-[#A8C6B5] leading-relaxed">
                Whether you are welcoming a new puppy, planning an annual diagnostic baseline, or seeking calm answers
                for a specific symptom, our care team will prepare a serene consultation suite tailored to your pet.
              </p>

              <div className="mt-8 space-y-4 pt-6 border-t border-[#F7F4EC]/10 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#5DE0C1] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-[#87979A]">Direct Care Desk &amp; Same-Day Triage</p>
                    <a
                      href={CLINIC_INFO.phoneHref}
                      className="font-display font-semibold text-base text-[#F7F4EC] hover:text-[#5DE0C1] tabular-nums"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#5DE0C1] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-[#87979A]">Clinic Hours</p>
                    <p className="text-[#F7F4EC] tabular-nums">
                      Mon–Fri 08:00–20:00 · Sat 09:00–18:00 · Sun 10:00–16:00
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#5DE0C1] mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-[#87979A]">Quick WhatsApp Desk</p>
                    <a
                      href={CLINIC_INFO.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5DE0C1] hover:underline"
                    >
                      Message our reception coordinators
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AppointmentForm surface="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQS (Warm Ivory Clean Editorial Accordion) */}
      <section className="bg-[#F7F4EC] text-[#11191B] py-20 lg:py-28">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <p className="text-sm font-medium text-[#174D46] mb-3">Clinical Questions</p>
              <h2 className="font-display font-bold tracking-tight leading-[1.1] text-[clamp(2rem,3.4vw,3rem)]">
                Clear Answers for{' '}
                <span className="font-editorial italic font-medium text-[#174D46]">Pet Parents.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#395153] leading-relaxed">
                Straightforward guidance on first visits, vaccination protocols, dental anaesthesia, and appointment
                preparation.
              </p>
              <button
                type="button"
                onClick={() => navigate('/faqs')}
                className="mt-6 inline-flex items-center gap-2 text-sm font-display font-semibold text-[#123A3E] underline underline-offset-4 decoration-[#D6B77A] cursor-pointer"
              >
                View full FAQ directory
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#123A3E]/15 border-t border-b border-[#123A3E]/15">
              {CLINIC_FAQS.map((item) => {
                const isOpen = openFaqId === item.id;
                return (
                  <div key={item.id} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? '' : item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-6 text-left cursor-pointer group"
                    >
                      <div>
                        <span className="text-xs font-medium text-[#8A6B32]">{item.category}</span>
                        <h3 className="font-display text-lg font-bold text-[#11191B] mt-1 group-hover:text-[#174D46] transition-colors">
                          {item.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#123A3E] mt-2 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-3.5 text-sm sm:text-base text-[#354E50] leading-relaxed pr-8">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14 PRE-FOOTER LOCATION & MAP BAND (Midnight Teal) */}
      <section className="bg-[#123A3E] text-[#F7F4EC] py-16">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="rounded-3xl bg-[#11191B]/65 border border-[#D6B77A]/25 p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-medium text-[#D6B77A]">Visit Oriel Veterinary Clinic</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mt-2">
                {CLINIC_INFO.addressLine1}, {CLINIC_INFO.addressLine2}
              </h2>
              <p className="mt-3 text-sm text-[#A8C6B5] leading-relaxed">
                Ground-level step-free entrance with dedicated off-street drop-off bays for senior pets and cat carriers.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold hover:bg-[#7CEBD0] transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Directions in Google Maps
                </a>
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#F7F4EC]/25 text-[#F7F4EC] text-sm font-medium hover:border-[#5DE0C1] hover:text-[#5DE0C1] transition-colors cursor-pointer"
                >
                  Send General Enquiry
                </button>
              </div>
            </div>

            {/* Clean Architectural Location Map Card */}
            <div className="lg:col-span-6">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden border border-[#5DE0C1]/25 bg-[#123A3E] p-6 group"
                aria-label="Open Oriel Veterinary Clinic location in Google Maps"
              >
                <svg
                  viewBox="0 0 540 210"
                  fill="none"
                  className="w-full h-44 opacity-85"
                  aria-hidden="true"
                >
                  <path d="M0 45 H540 M0 115 H540 M0 175 H540" stroke="#5DE0C1" strokeOpacity="0.16" strokeWidth="1" />
                  <path d="M90 0 V210 M210 0 V210 M345 0 V210 M460 0 V210" stroke="#5DE0C1" strokeOpacity="0.16" strokeWidth="1" />
                  <path d="M30 185 C 140 140, 210 115, 290 105 C 370 95, 430 60, 520 25" stroke="#D6B77A" strokeOpacity="0.5" strokeWidth="2.5" />
                  <path d="M95 10 C 145 75, 225 110, 290 105 C 335 145, 395 170, 480 198" stroke="#5DE0C1" strokeOpacity="0.35" strokeWidth="2" />
                  <circle cx="290" cy="105" r="24" fill="#5DE0C1" fillOpacity="0.18" />
                  <circle cx="290" cy="105" r="10" fill="#5DE0C1" />
                  <circle cx="290" cy="105" r="4" fill="#11191B" />
                </svg>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-[#F7F4EC] font-medium">
                    Pacific Heights / Fillmore District · San Francisco
                  </span>
                  <span className="text-[#D6B77A] tabular-nums group-hover:text-[#5DE0C1] transition-colors">
                    {CLINIC_INFO.coordinates} ↗
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
