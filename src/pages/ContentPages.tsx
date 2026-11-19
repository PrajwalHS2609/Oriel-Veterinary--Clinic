import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  Search,
  AlertCircle,
} from 'lucide-react';
import {
  BLOG_ARTICLES,
  CLINIC_FAQS,
  CLINIC_INFO,
  VETERINARY_DOCTORS,
} from '../data/clinicData';
import { MediaFrame } from '../components/MediaFrame';
import { useRouter } from '../components/RouterContext';

/* 9. BLOG ARCHIVE PAGE */
export function BlogArchivePage() {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [query, setQuery] = useState<string>('');

  const categories = [
    'All',
    'Pet Vaccination',
    'Puppy & Kitten Care',
    'Pet Nutrition',
    'Common Health Concerns',
    'Dental Hygiene',
    'Preventive Healthcare',
    'Senior Pet Wellness',
  ];

  const filtered = BLOG_ARTICLES.filter((article) => {
    const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      !query.trim() ||
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      <section className="bg-[#123A3E] text-[#F7F4EC] py-20">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <p className="text-sm font-medium text-[#D6B77A] mb-3">Pet Health Journal</p>
          <h1 className="font-display font-bold tracking-tight leading-[1.08] text-[clamp(2.25rem,4vw,3.6rem)] max-w-3xl">
            Clinician-Written Guides for{' '}
            <span className="font-editorial italic font-medium text-[#5DE0C1]">Confident Care.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-[#DDF1EB]/85 max-w-2xl leading-relaxed">
            Evidence-based veterinary education authored by our doctors—helping you understand vaccination timing,
            nutrition, dental health, early symptoms, and senior comfort.
          </p>

          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-display font-medium transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#5DE0C1] text-[#11191B]'
                      : 'bg-[#11191B]/45 text-[#F7F4EC] hover:bg-[#11191B]/75'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-[#A8C6B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search topics..."
                aria-label="Search pet health articles"
                className="w-full rounded-xl bg-[#11191B]/65 border border-[#F7F4EC]/15 pl-10 pr-4 py-2.5 text-sm text-[#F7F4EC] placeholder:text-[#87979A] focus:border-[#5DE0C1] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EC] text-[#11191B] py-18 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          {filtered.length === 0 ? (
            <div className="rounded-3xl bg-white border border-[#123A3E]/12 p-12 text-center">
              <p className="font-display text-xl font-bold">No matching articles found.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setQuery('');
                }}
                className="mt-4 text-sm font-display font-semibold text-[#174D46] underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((article, idx) => {
                const author = VETERINARY_DOCTORS.find((d) => d.slug === article.authorSlug);
                return (
                  <article
                    key={article.slug}
                    className={`group rounded-3xl bg-white border border-[#123A3E]/12 overflow-hidden flex flex-col justify-between ${
                      idx === 0 && filtered.length > 2 ? 'md:col-span-2 md:grid md:grid-cols-12' : ''
                    }`}
                  >
                    <div className={idx === 0 && filtered.length > 2 ? 'md:col-span-6' : ''}>
                      <a
                        href={`/blog/${article.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/blog/${article.slug}`);
                        }}
                        className="block h-full"
                      >
                        <MediaFrame
                          src={article.image}
                          alt={article.imageAlt}
                          className="aspect-[16/10] h-full"
                          imgClassName="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </a>
                    </div>

                    <div
                      className={`p-7 sm:p-8 flex flex-col justify-between ${
                        idx === 0 && filtered.length > 2 ? 'md:col-span-6' : ''
                      }`}
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#546B6D]">
                          <span className="font-medium text-[#174D46]">{article.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{article.publishedDate}</span>
                          <span aria-hidden="true">·</span>
                          <span>{article.readTime}</span>
                        </div>
                        <a
                          href={`/blog/${article.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`/blog/${article.slug}`);
                          }}
                          className="block mt-2"
                        >
                          <h2 className="font-display text-2xl font-bold text-[#11191B] group-hover:text-[#174D46] transition-colors leading-snug">
                            {article.title}
                          </h2>
                        </a>
                        <p className="mt-3 text-sm sm:text-base text-[#395153] leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="mt-6 pt-5 border-t border-[#123A3E]/10 flex items-center justify-between gap-4 text-xs">
                        {author && <span className="text-[#4B6365]">By {author.name}, {author.credentials}</span>}
                        <button
                          type="button"
                          onClick={() => navigate(`/blog/${article.slug}`)}
                          className="inline-flex items-center gap-1 font-display font-semibold text-[#123A3E] hover:text-[#174D46] cursor-pointer whitespace-nowrap"
                        >
                          Read More
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* 10. INDIVIDUAL BLOG ARTICLE PAGE */
export function BlogArticlePage({ slug }: { slug: string }) {
  const { navigate } = useRouter();
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="bg-[#11191B] text-[#F7F4EC] py-28 text-center px-5">
        <h1 className="font-display text-3xl font-bold">Article not found</h1>
        <button
          type="button"
          onClick={() => navigate('/blog')}
          className="mt-6 px-6 py-3 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold cursor-pointer"
        >
          Return to Pet Health Journal
        </button>
      </div>
    );
  }

  const author = VETERINARY_DOCTORS.find((d) => d.slug === article.authorSlug);
  const related = BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article>
      <header className="bg-[#11191B] text-[#F7F4EC] py-16 lg:py-22">
        <div className="max-w-[960px] mx-auto px-5 sm:px-8">
          <button
            type="button"
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-sm text-[#A8C6B5] hover:text-[#5DE0C1] mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Pet Health Journal
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs text-[#D6B77A]">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-display font-bold tracking-tight leading-[1.1] text-[clamp(2rem,3.8vw,3.3rem)] mt-3">
            {article.title}
          </h1>

          <p className="mt-5 text-lg text-[#DDF1EB]/85 leading-relaxed">{article.excerpt}</p>

          {author && (
            <div className="mt-7 pt-6 border-t border-[#F7F4EC]/12 flex items-center gap-4">
              <MediaFrame
                src={author.portrait}
                alt={author.portraitAlt}
                className="w-12 h-12 rounded-full border border-[#D6B77A]/40 shrink-0"
                imgClassName="w-full h-full object-cover object-top"
              />
              <div>
                <button
                  type="button"
                  onClick={() => navigate(`/doctors/${author.slug}`)}
                  className="font-display text-sm font-bold text-[#F7F4EC] hover:text-[#5DE0C1] cursor-pointer"
                >
                  {author.name}, {author.credentials}
                </button>
                <p className="text-xs text-[#A8C6B5]">{author.role}</p>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="bg-[#F7F4EC] text-[#11191B] py-16 lg:py-20">
        <div className="max-w-[960px] mx-auto px-5 sm:px-8">
          <MediaFrame
            src={article.image}
            alt={article.imageAlt}
            className="aspect-[16/9] rounded-3xl border border-[#123A3E]/12 mb-12"
          />

          {/* Clinical Key Takeaways */}
          <div className="rounded-2xl bg-[#DDF1EB]/65 border border-[#123A3E]/12 p-7 mb-12">
            <h2 className="font-display text-lg font-bold text-[#123A3E]">Clinical Key Takeaways</h2>
            <ul className="mt-3.5 space-y-2.5 text-sm sm:text-base text-[#1F3739]">
              {article.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="text-[#174D46] font-bold">·</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10 max-w-3xl">
            {article.sections.map((sec) => (
              <section key={sec.heading}>
                <h2 className="font-display text-2xl font-bold text-[#11191B]">{sec.heading}</h2>
                <div className="mt-4 space-y-4 text-base text-[#2E4648] leading-relaxed">
                  {sec.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-[#123A3E] text-[#F7F4EC] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold">Have questions tailored to your pet?</h3>
              <p className="text-sm text-[#DDF1EB]/85 mt-1">
                Book a calm consultation with our clinical team for individualised medical guidance.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/book')}
              className="px-6 py-3 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold cursor-pointer whitespace-nowrap"
            >
              Book Consultation
            </button>
          </div>

          {/* Related Reading */}
          <div className="mt-16 pt-12 border-t border-[#123A3E]/12">
            <h2 className="font-display text-2xl font-bold mb-6">Further Clinical Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <button
                  key={rel.slug}
                  type="button"
                  onClick={() => navigate(`/blog/${rel.slug}`)}
                  className="text-left rounded-2xl bg-white border border-[#123A3E]/12 p-5 hover:border-[#123A3E]/40 transition-colors cursor-pointer"
                >
                  <p className="text-xs text-[#174D46] font-medium">{rel.category}</p>
                  <p className="font-display font-bold text-base mt-1.5 leading-snug">{rel.title}</p>
                  <p className="text-xs text-[#5B7072] mt-2">{rel.readTime}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* 11. FAQS PAGE */
export function FaqPage() {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string>(CLINIC_FAQS[0].id);

  const categories = ['All', 'First Visits', 'Vaccinations', 'Routine Check-ups', 'Pet Nutrition', 'Dental Care', 'Booking & Hours'];
  const filteredFaqs =
    activeCategory === 'All'
      ? CLINIC_FAQS
      : CLINIC_FAQS.filter((f) => f.category === activeCategory);

  return (
    <div>
      <section className="bg-[#123A3E] text-[#F7F4EC] py-20">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <p className="text-sm font-medium text-[#D6B77A] mb-3">Frequently Asked Questions</p>
          <h1 className="font-display font-bold tracking-tight leading-[1.08] text-[clamp(2.25rem,4vw,3.6rem)] max-w-3xl">
            Everything You Need Before Your{' '}
            <span className="font-editorial italic font-medium text-[#5DE0C1]">Next Visit.</span>
          </h1>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-display font-medium cursor-pointer transition-colors ${
                  activeCategory === cat
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
        <div className="max-w-[960px] mx-auto px-5 sm:px-8">
          <div className="divide-y divide-[#123A3E]/15 border-t border-b border-[#123A3E]/15">
            {filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-6">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? '' : item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 text-left cursor-pointer"
                  >
                    <div>
                      <span className="text-xs font-medium text-[#8A6B32]">{item.category}</span>
                      <h2 className="font-display text-lg sm:text-xl font-bold mt-1">{item.question}</h2>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#123A3E] mt-2 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-sm sm:text-base text-[#354E50] leading-relaxed pr-6">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl bg-[#11191B] text-[#F7F4EC] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold">Still have a clinical question?</h3>
              <p className="text-sm text-[#A8C6B5] mt-1">
                Our care coordinators are glad to advise before you travel to the clinic.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-6 py-3 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold cursor-pointer whitespace-nowrap"
            >
              Contact Care Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* 12. CONTACT US PAGE */
export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: 'General Enquiry', message: '' });
  const [error, setError] = useState<string>('');
  const [sent, setSent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message.trim()) {
      setError('Please enter your name, a valid email address, and your enquiry.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <div>
      <section className="bg-[#11191B] text-[#F7F4EC] py-20">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#D6B77A] mb-3">Contact Us</p>
            <h1 className="font-display font-bold tracking-tight leading-[1.08] text-[clamp(2.25rem,4vw,3.5rem)]">
              Speak Directly With Our{' '}
              <span className="font-editorial italic font-medium text-[#5DE0C1]">Care Team.</span>
            </h1>
            <p className="mt-5 text-base text-[#A8C6B5] leading-relaxed">
              Reach our reception desk for consultations, prescription refills, medical record transfers, or same-day
              urgent triage guidance.
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#5DE0C1] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#F7F4EC]">{CLINIC_INFO.addressLine1}</p>
                  <p className="text-[#A8C6B5]">{CLINIC_INFO.addressLine2}</p>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#5DE0C1] hover:underline mt-1"
                  >
                    Open Google Maps Directions
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#5DE0C1] shrink-0" />
                <a href={CLINIC_INFO.phoneHref} className="text-[#F7F4EC] hover:text-[#5DE0C1] tabular-nums">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#5DE0C1] shrink-0" />
                <a href={CLINIC_INFO.emailHref} className="text-[#F7F4EC] hover:text-[#5DE0C1]">
                  {CLINIC_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#5DE0C1] shrink-0" />
                <a
                  href={CLINIC_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5DE0C1] hover:underline"
                >
                  Chat on WhatsApp Care Desk
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F7F4EC]/10 space-y-2.5 text-sm">
              <p className="text-xs text-[#D6B77A] flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Opening Hours
              </p>
              {CLINIC_INFO.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <span className="text-[#A8C6B5]">{h.days}</span>
                  <span className="tabular-nums text-[#F7F4EC]">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#123A3E]/55 border border-[#F7F4EC]/12 p-7 sm:p-10">
              {sent ? (
                <div className="py-8 space-y-4" role="status">
                  <CheckCircle2 className="w-10 h-10 text-[#5DE0C1]" />
                  <h2 className="font-display text-2xl font-bold">Enquiry Received</h2>
                  <p className="text-sm text-[#DDF1EB]/85 leading-relaxed">
                    Thank you, {form.name}. Our clinic reception team will reply to {form.email} shortly during
                    operating hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', email: '', phone: '', topic: 'General Enquiry', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h2 className="font-display text-2xl font-bold">Send a General Enquiry</h2>
                  {error && (
                    <p className="text-xs text-[#F28B82] flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="c-name" className="block text-xs text-[#A8C6B5] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl bg-[#11191B]/65 border border-[#F7F4EC]/15 px-4 py-3 text-sm text-[#F7F4EC]"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="block text-xs text-[#A8C6B5] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl bg-[#11191B]/65 border border-[#F7F4EC]/15 px-4 py-3 text-sm text-[#F7F4EC]"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-phone" className="block text-xs text-[#A8C6B5] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-xl bg-[#11191B]/65 border border-[#F7F4EC]/15 px-4 py-3 text-sm text-[#F7F4EC] tabular-nums"
                      />
                    </div>
                    <div>
                      <label htmlFor="c-topic" className="block text-xs text-[#A8C6B5] mb-1.5">
                        Subject
                      </label>
                      <select
                        id="c-topic"
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        className="w-full rounded-xl bg-[#11191B]/65 border border-[#F7F4EC]/15 px-4 py-3 text-sm text-[#F7F4EC]"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Wellness Packages">Wellness Packages</option>
                        <option value="Medical Record Transfer">Medical Record Transfer</option>
                        <option value="Prescription Refill">Prescription Refill</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-msg" className="block text-xs text-[#A8C6B5] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="c-msg"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl bg-[#11191B]/65 border border-[#F7F4EC]/15 px-4 py-3 text-sm text-[#F7F4EC]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold hover:bg-[#7CEBD0] cursor-pointer"
                  >
                    Send Enquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* 13. PRIVACY POLICY PAGE */
export function PrivacyPolicyPage() {
  return (
    <section className="bg-[#F7F4EC] text-[#11191B] py-20">
      <div className="max-w-[840px] mx-auto px-5 sm:px-8 space-y-8">
        <div>
          <p className="text-xs font-medium text-[#174D46]">Legal Documentation · Effective November 2026</p>
          <h1 className="font-display text-4xl font-bold mt-2">Privacy Policy</h1>
        </div>
        <div className="space-y-6 text-sm sm:text-base text-[#2E4648] leading-relaxed">
          <p>
            {CLINIC_INFO.name} respects the privacy of every pet parent and safeguards all personal contact details and
            veterinary medical records entrusted to us.
          </p>
          <div>
            <h2 className="font-display text-xl font-bold text-[#11191B]">1. Information We Collect</h2>
            <p className="mt-2">
              When you book an appointment or submit an enquiry, we collect your name, telephone number, email address,
              pet details, and relevant clinical notes solely to coordinate veterinary healthcare and appointment
              reminders.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-[#11191B]">2. Clinical Confidentiality</h2>
            <p className="mt-2">
              Veterinary records, laboratory findings, and diagnostic images are shared only with you, authorised
              specialist referral hospitals, or pet insurance providers when explicitly requested by you.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-[#11191B]">3. Client Rights &amp; Requests</h2>
            <p className="mt-2">
              You may request copies of your companion&apos;s medical records, update contact preferences, or ask about
              data retention at any time by emailing{' '}
              <a href={CLINIC_INFO.emailHref} className="text-[#123A3E] underline">
                {CLINIC_INFO.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 14. TERMS & CONDITIONS PAGE */
export function TermsPage() {
  return (
    <section className="bg-[#F7F4EC] text-[#11191B] py-20">
      <div className="max-w-[840px] mx-auto px-5 sm:px-8 space-y-8">
        <div>
          <p className="text-xs font-medium text-[#174D46]">Legal Documentation · Effective November 2026</p>
          <h1 className="font-display text-4xl font-bold mt-2">Terms &amp; Conditions</h1>
        </div>
        <div className="space-y-6 text-sm sm:text-base text-[#2E4648] leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-bold text-[#11191B]">1. Appointments &amp; Cancellations</h2>
            <p className="mt-2">
              Online appointment requests are confirmed by our care desk once suite availability is verified. We kindly
              ask for at least 12 hours&apos; notice for rescheduling so another companion may use the reserved suite.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-[#11191B]">2. Clinical Estimates &amp; Fees</h2>
            <p className="mt-2">
              Indicative wellness package pricing and consultation guides are provided for transparency. Every
              diagnostic, dental, or surgical plan is accompanied by a written itemised estimate approved prior to
              treatment.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-[#11191B]">3. Educational Content Notice</h2>
            <p className="mt-2">
              Articles published in the Oriel Pet Health Journal provide general veterinary education and do not
              substitute for an in-person clinical examination by a licensed veterinarian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 15. CUSTOM 404 PAGE */
export function NotFoundPage() {
  const { navigate } = useRouter();

  return (
    <section className="bg-[#11191B] text-[#F7F4EC] py-28 lg:py-36 min-h-[70vh] flex items-center">
      <div className="max-w-[760px] mx-auto px-5 sm:px-8 text-center">
        <p className="font-display text-sm font-semibold text-[#D6B77A] tabular-nums">Error 404</p>
        <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mt-3">
          This page has wandered{' '}
          <span className="font-editorial italic font-medium text-[#5DE0C1]">off the trail.</span>
        </h1>
        <p className="mt-5 text-base text-[#A8C6B5] leading-relaxed">
          The page you are looking for may have moved or no longer exists. Return to our clinic homepage, explore our
          veterinary services, or book an appointment directly.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full bg-[#5DE0C1] text-[#11191B] font-display text-sm font-semibold hover:bg-[#7CEBD0] cursor-pointer"
          >
            Return Home
          </button>
          <button
            type="button"
            onClick={() => navigate('/services')}
            className="px-6 py-3 rounded-full border border-[#D6B77A]/50 text-[#F7F4EC] font-display text-sm font-medium hover:border-[#5DE0C1] cursor-pointer"
          >
            View Services
          </button>
          <button
            type="button"
            onClick={() => navigate('/book')}
            className="px-6 py-3 rounded-full border border-[#F7F4EC]/20 text-[#F7F4EC] font-display text-sm font-medium hover:border-[#5DE0C1] cursor-pointer"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
