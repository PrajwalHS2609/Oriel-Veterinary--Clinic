import React, { useState, useEffect } from 'react';
import { CheckCircle2, Calendar, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import { VETERINARY_DOCTORS, VETERINARY_SERVICES, CLINIC_INFO } from '../data/clinicData';
import { useRouter } from './RouterContext';

interface AppointmentFormProps {
  surface?: 'dark' | 'light';
  compact?: boolean;
}

interface FormState {
  parentName: string;
  phone: string;
  email: string;
  petName: string;
  petType: string;
  service: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const TIME_SLOTS = [
  '08:30 AM',
  '09:30 AM',
  '10:30 AM',
  '11:30 AM',
  '01:30 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
  '06:30 PM',
];

const PET_TYPES = ['Dog', 'Cat', 'Puppy (under 1 yr)', 'Kitten (under 1 yr)', 'Senior Dog', 'Senior Cat', 'Other Companion'];

function getDefaultDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

export function AppointmentForm({ surface = 'dark', compact = false }: AppointmentFormProps) {
  const { bookingPrefill, setBookingPrefill } = useRouter();

  const [form, setForm] = useState<FormState>({
    parentName: '',
    phone: '',
    email: '',
    petName: '',
    petType: 'Dog',
    service: bookingPrefill.service || VETERINARY_SERVICES[0].title,
    doctor: bookingPrefill.doctor || 'First Available Veterinarian',
    preferredDate: getDefaultDate(),
    preferredTime: '10:30 AM',
    message: bookingPrefill.message || (bookingPrefill.packageName ? `Interested in the ${bookingPrefill.packageName}.` : ''),
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [confirmedRef, setConfirmedRef] = useState<string | null>(null);

  useEffect(() => {
    if (bookingPrefill.service || bookingPrefill.doctor || bookingPrefill.packageName || bookingPrefill.message) {
      setForm((prev) => ({
        ...prev,
        service: bookingPrefill.service || prev.service,
        doctor: bookingPrefill.doctor || prev.doctor,
        message:
          bookingPrefill.message ||
          (bookingPrefill.packageName ? `Enquiry regarding ${bookingPrefill.packageName}.` : prev.message),
      }));
    }
  }, [bookingPrefill]);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.parentName.trim()) nextErrors.parentName = 'Please enter your full name.';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 7) {
      nextErrors.phone = 'Please enter a valid contact phone number.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.petName.trim()) nextErrors.petName = 'Please enter your pet’s name.';
    if (!form.preferredDate) nextErrors.preferredDate = 'Please select a preferred date.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      const refCode = `ORL-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedRef(refCode);
      setSubmitting(false);
      setBookingPrefill({});
    }, 450);
  };

  const resetForm = () => {
    setConfirmedRef(null);
    setForm({
      parentName: '',
      phone: '',
      email: '',
      petName: '',
      petType: 'Dog',
      service: VETERINARY_SERVICES[0].title,
      doctor: 'First Available Veterinarian',
      preferredDate: getDefaultDate(),
      preferredTime: '10:30 AM',
      message: '',
    });
    setErrors({});
  };

  const isDark = surface === 'dark';
  const labelClass = isDark
    ? 'block text-xs font-medium text-[#A8C6B5] mb-1.5'
    : 'block text-xs font-medium text-[#123A3E] mb-1.5';
  const inputClass = isDark
    ? 'w-full rounded-xl bg-[#123A3E]/55 border border-[#F7F4EC]/15 px-4 py-3 text-sm text-[#F7F4EC] placeholder:text-[#87979A] focus:border-[#5DE0C1] focus:outline-none transition-colors'
    : 'w-full rounded-xl bg-white border border-[#123A3E]/18 px-4 py-3 text-sm text-[#11191B] placeholder:text-[#667A7C] focus:border-[#123A3E] focus:outline-none transition-colors';

  if (confirmedRef) {
    return (
      <div
        className={`rounded-2xl p-8 sm:p-10 border ${
          isDark
            ? 'bg-[#123A3E]/70 border-[#5DE0C1]/35 text-[#F7F4EC]'
            : 'bg-white border-[#123A3E]/15 text-[#11191B]'
        }`}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-4">
          <CheckCircle2 className={`w-8 h-8 shrink-0 mt-0.5 ${isDark ? 'text-[#5DE0C1]' : 'text-[#174D46]'}`} />
          <div className="space-y-4 w-full">
            <div>
              <p className={`text-xs font-medium tabular-nums ${isDark ? 'text-[#D6B77A]' : 'text-[#8A6B32]'}`}>
                Appointment Request Received · Ref {confirmedRef}
              </p>
              <h3 className="font-display text-2xl font-bold mt-1">
                We look forward to welcoming {form.petName}.
              </h3>
              <p className={`text-sm mt-2 leading-relaxed ${isDark ? 'text-[#A8C6B5]' : 'text-[#425A5C]'}`}>
                Our clinical reception team will confirm your exact suite time via phone or email within two operating hours.
              </p>
            </div>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t text-sm ${
                isDark ? 'border-[#F7F4EC]/12' : 'border-[#123A3E]/10'
              }`}
            >
              <div>
                <p className={`text-xs ${isDark ? 'text-[#87979A]' : 'text-[#5B7072]'}`}>Pet & Type</p>
                <p className="font-medium mt-0.5">
                  {form.petName} · {form.petType}
                </p>
              </div>
              <div>
                <p className={`text-xs ${isDark ? 'text-[#87979A]' : 'text-[#5B7072]'}`}>Selected Service</p>
                <p className="font-medium mt-0.5">{form.service}</p>
              </div>
              <div>
                <p className={`text-xs ${isDark ? 'text-[#87979A]' : 'text-[#5B7072]'}`}>Preferred Date & Time</p>
                <p className="font-medium mt-0.5 tabular-nums">
                  {form.preferredDate} · {form.preferredTime}
                </p>
              </div>
              <div>
                <p className={`text-xs ${isDark ? 'text-[#87979A]' : 'text-[#5B7072]'}`}>Clinician Preference</p>
                <p className="font-medium mt-0.5">{form.doctor}</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={resetForm}
                className={`px-5 py-2.5 rounded-full text-sm font-display font-semibold cursor-pointer transition-colors ${
                  isDark
                    ? 'bg-[#5DE0C1] text-[#11191B] hover:bg-[#7CEBD0]'
                    : 'bg-[#123A3E] text-[#F7F4EC] hover:bg-[#174D46]'
                }`}
              >
                Book Another Appointment
              </button>
              <a
                href={CLINIC_INFO.phoneHref}
                className={`text-sm font-medium underline underline-offset-4 tabular-nums ${
                  isDark ? 'text-[#D6B77A]' : 'text-[#123A3E]'
                }`}
              >
                Urgent? Call {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`rounded-2xl p-6 sm:p-8 lg:p-10 border ${
        isDark
          ? 'bg-[#123A3E]/55 border-[#F7F4EC]/12'
          : 'bg-white border-[#123A3E]/12'
      }`}
    >
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${compact ? 'gap-4' : 'gap-5'}`}>
        <div>
          <label htmlFor="parentName" className={labelClass}>
            Pet Parent&apos;s Full Name *
          </label>
          <input
            id="parentName"
            type="text"
            value={form.parentName}
            onChange={(e) => setForm({ ...form, parentName: e.target.value })}
            placeholder="e.g. Elena Rostova"
            className={inputClass}
          />
          {errors.parentName && (
            <p className="mt-1.5 text-xs text-[#F28B82] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.parentName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+1 (415) 555-0192"
            className={`${inputClass} tabular-nums`}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-[#F28B82] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-[#F28B82] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="petName" className={labelClass}>
            Pet&apos;s Name *
          </label>
          <input
            id="petName"
            type="text"
            value={form.petName}
            onChange={(e) => setForm({ ...form, petName: e.target.value })}
            placeholder="e.g. Barnaby"
            className={inputClass}
          />
          {errors.petName && (
            <p className="mt-1.5 text-xs text-[#F28B82] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.petName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="petType" className={labelClass}>
            Pet Type *
          </label>
          <select
            id="petType"
            value={form.petType}
            onChange={(e) => setForm({ ...form, petType: e.target.value })}
            className={inputClass}
          >
            {PET_TYPES.map((type) => (
              <option key={type} value={type} className="bg-[#11191B] text-[#F7F4EC]">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Required Service *
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={inputClass}
          >
            {VETERINARY_SERVICES.map((svc) => (
              <option key={svc.slug} value={svc.title} className="bg-[#11191B] text-[#F7F4EC]">
                {svc.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferredDate" className={labelClass}>
            Preferred Date *
          </label>
          <div className="relative">
            <input
              id="preferredDate"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              value={form.preferredDate}
              onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
              className={`${inputClass} tabular-nums`}
            />
          </div>
          {errors.preferredDate && (
            <p className="mt-1.5 text-xs text-[#F28B82] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.preferredDate}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className={labelClass}>
            Preferred Time Window *
          </label>
          <select
            id="preferredTime"
            value={form.preferredTime}
            onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
            className={`${inputClass} tabular-nums`}
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot} className="bg-[#11191B] text-[#F7F4EC]">
                {slot}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="doctor" className={labelClass}>
            Preferred Veterinarian (Optional)
          </label>
          <select
            id="doctor"
            value={form.doctor}
            onChange={(e) => setForm({ ...form, doctor: e.target.value })}
            className={inputClass}
          >
            <option value="First Available Veterinarian" className="bg-[#11191B] text-[#F7F4EC]">
              First Available Veterinarian
            </option>
            {VETERINARY_DOCTORS.map((doc) => (
              <option key={doc.slug} value={`${doc.name}, ${doc.credentials}`} className="bg-[#11191B] text-[#F7F4EC]">
                {doc.name} — {doc.role}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Clinical Notes or Additional Message
          </label>
          <textarea
            id="message"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Share any symptoms, anxiety triggers, or questions so our team can prepare a calm suite..."
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className={`flex items-center gap-4 text-xs ${isDark ? 'text-[#A8C6B5]' : 'text-[#4B6365]'}`}>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#D6B77A]" />
            No prepayment required
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#D6B77A]" />
            Confirmed within 2 hrs
          </span>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-display text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60 ${
            isDark
              ? 'bg-[#5DE0C1] text-[#11191B] hover:bg-[#7CEBD0]'
              : 'bg-[#123A3E] text-[#F7F4EC] hover:bg-[#174D46]'
          }`}
        >
          {submitting ? 'Confirming Request...' : 'Book an Appointment'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
