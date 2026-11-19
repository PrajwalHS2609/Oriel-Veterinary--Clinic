import heroEditorialImg from '../assets/images/hero_vet_editorial_1795097714101.jpg';
import sculpturalArtImg from '../assets/images/sculptural_3d_pet_art_1795098254969.jpg';
import clinicReceptionImg from '../assets/images/clinic_architecture_suite_1795097697531.jpg';
import diagnosticsSuiteImg from '../assets/images/diagnostics_lab_suite_1795097699819.jpg';
import doctorLeadImg from '../assets/images/doctor_lead_portrait_1795097810248.jpg';
import doctorSurgeonImg from '../assets/images/doctor_surgeon_portrait_1795097706441.jpg';
import doctorFelineImg from '../assets/images/doctor_feline_portrait_1795097737774.jpg';
import companionPortraitImg from '../assets/images/companion_wellness_portrait_1795097747193.jpg';

export const CLINIC_IMAGES = {
  heroEditorial: heroEditorialImg,
  sculpturalArt: sculpturalArtImg,
  clinicReception: clinicReceptionImg,
  diagnosticsSuite: diagnosticsSuiteImg,
  doctorLead: doctorLeadImg,
  doctorSurgeon: doctorSurgeonImg,
  doctorFeline: doctorFelineImg,
  companionPortrait: companionPortraitImg,
} as const;

export const CLINIC_INFO = {
  name: 'Oriel Veterinary Clinic',
  shortName: 'Oriel Veterinary',
  tagline: 'Advanced Veterinary Care. Genuine Compassion. A Healthier Life for Every Paw.',
  phoneDisplay: '+1 (415) 890-4210',
  phoneHref: 'tel:+14158904210',
  urgentPhoneDisplay: '+1 (415) 890-4299',
  urgentPhoneHref: 'tel:+14158904299',
  email: 'care@orielveterinary.com',
  emailHref: 'mailto:care@orielveterinary.com',
  whatsappHref: 'https://wa.me/14158904210?text=Hello%20Oriel%20Veterinary%20Clinic%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.',
  addressLine1: '418 Alder Crescent, Suite 100',
  addressLine2: 'San Francisco, CA 94115',
  coordinates: '37.7858° N, 122.4364° W',
  googleMapsUrl: 'https://maps.google.com/?q=418+Alder+Crescent+San+Francisco+CA+94115',
  hours: [
    { days: 'Monday – Friday', time: '08:00 – 20:00' },
    { days: 'Saturday', time: '09:00 – 18:00' },
    { days: 'Sunday', time: '10:00 – 16:00' },
    { days: 'Urgent Triage Line', time: 'Daily during clinic hours' },
  ],
};

export type MedicalArtKey =
  | 'consultation'
  | 'preventive'
  | 'vaccination'
  | 'diagnostics'
  | 'dental'
  | 'surgery'
  | 'nutrition'
  | 'parasite'
  | 'puppy'
  | 'senior'
  | 'emergency';

export interface VeterinaryService {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  category: 'Preventive & Primary' | 'Diagnostics & Surgery' | 'Life-Stage & Specialty';
  summary: string;
  clinicalOverview: string;
  duration: string;
  artKey: MedicalArtKey;
  image: string;
  imageAlt: string;
  leadDoctorSlug: string;
  included: string[];
  whenToBook: string[];
  preparation: string[];
  featured?: boolean;
}

export const VETERINARY_SERVICES: VeterinaryService[] = [
  {
    slug: 'general-veterinary-consultation',
    index: '01',
    title: 'General Veterinary Consultation',
    shortTitle: 'General Consultation',
    category: 'Preventive & Primary',
    summary:
      'Unhurried nose-to-tail clinical examinations in acoustically calm consultation suites, with clear written care plans for every pet parent.',
    clinicalOverview:
      'Every clinical decision starts with attentive listening and a thorough physical examination. Our 30-to-45-minute appointments allow your veterinarian to assess cardiopulmonary health, dermatology, musculoskeletal comfort, ocular and oral condition, and behavioural cues without rushing your pet.',
    duration: '30–45 minutes',
    artKey: 'consultation',
    image: CLINIC_IMAGES.heroEditorial,
    imageAlt: 'Veterinarian gently examining a golden retriever in a calm consultation suite',
    leadDoctorSlug: 'dr-clara-lindholm',
    featured: true,
    included: [
      'Complete nose-to-tail physical and cardiopulmonary assessment',
      'Baseline weight, body condition, and muscle mass scoring',
      'Ophthalmic, otoscopic, and oral cavity examination',
      'Detailed discussion of home observations and behaviour',
      'Written clinical summary and transparent next-step treatment plan',
    ],
    whenToBook: [
      'Changes in appetite, thirst, energy, or sleep patterns',
      'Skin irritation, ear discomfort, limping, or digestive upset',
      'Establishing care with a dedicated primary veterinarian',
      'Second-opinion reviews for chronic or complex conditions',
    ],
    preparation: [
      'Bring prior vaccination records or recent laboratory reports if available',
      'Note current food brands, treats, and any supplements or medications',
      'Arrive 10 minutes early for calm check-in in our separate dog and cat lounges',
    ],
  },
  {
    slug: 'preventive-health-check-ups',
    index: '02',
    title: 'Preventive Health Check-ups',
    shortTitle: 'Preventive Check-ups',
    category: 'Preventive & Primary',
    summary:
      'Proactive annual and bi-annual wellness evaluations designed to detect subtle metabolic, organ, or mobility changes before symptoms emerge.',
    clinicalOverview:
      'Pets age significantly faster than humans and instinctively mask early discomfort. Our structured preventive check-ups pair physical diagnostics with age-tailored laboratory baselines so we can intervene early and gently.',
    duration: '40 minutes',
    artKey: 'preventive',
    image: CLINIC_IMAGES.companionPortrait,
    imageAlt: 'Healthy dog and cat resting calmly after a preventive wellness visit',
    leadDoctorSlug: 'dr-clara-lindholm',
    included: [
      'Comprehensive multi-system physical evaluation',
      'Baseline haematology, organ chemistry, and urinalysis review',
      'Blood pressure screening for adult and mature pets',
      'Tailored lifestyle risk review for travel, parks, and boarding',
      'Updated preventive calendar for vaccines, dental, and parasite control',
    ],
    whenToBook: [
      'Once yearly for healthy adult dogs and cats aged 1 to 7 years',
      'Every six months for senior pets or breeds prone to metabolic conditions',
      'Prior to seasonal travel or household changes',
    ],
    preparation: [
      'If advised for fasting bloodwork, withhold food for 8 hours while keeping fresh water available',
      'Bring a fresh morning urine sample if requested by our care desk',
    ],
  },
  {
    slug: 'vaccination',
    index: '03',
    title: 'Vaccination & Immunity Protocols',
    shortTitle: 'Vaccination',
    category: 'Preventive & Primary',
    summary:
      'Evidence-based core and lifestyle immunisations tailored to your pet’s age, environment, and exposure profile, including titre discussions.',
    clinicalOverview:
      'We follow international veterinary immunisation guidelines to protect pets without unnecessary over-vaccination. Every vaccination appointment begins with a full physical check to confirm your companion is healthy enough to respond well to immunisation.',
    duration: '25 minutes',
    artKey: 'vaccination',
    image: CLINIC_IMAGES.heroEditorial,
    imageAlt: 'Calm canine patient receiving a pre-vaccination health check',
    leadDoctorSlug: 'dr-naomi-osei',
    included: [
      'Pre-vaccination physical health clearance examination',
      'Core canine (DHPP, Rabies) and feline (FVRCP, Rabies) protocols',
      'Lifestyle risk assessment for Bordetella, Leptospirosis, Lyme, and FeLV',
      'Low-stress, gentle administration techniques',
      'Digital immunisation certificate and automated booster reminders',
    ],
    whenToBook: [
      'Puppy and kitten primary series starting from 8 weeks of age',
      'Annual or triennial adult booster renewals',
      'Before dog park visits, grooming, daycare, or international travel',
    ],
    preparation: [
      'Bring your pet’s existing vaccination booklet or breeder/shelter records',
      'Inform our team if your pet has ever had a sensitivity after a prior vaccine',
    ],
  },
  {
    slug: 'diagnostic-services',
    index: '04',
    title: 'Diagnostic Services & Imaging',
    shortTitle: 'Diagnostics',
    category: 'Diagnostics & Surgery',
    summary:
      'In-house haematology, biochemistry, digital radiography, and point-of-care ultrasound delivering accurate clinical answers rapidly.',
    clinicalOverview:
      'When your pet is unwell, waiting days for clarity adds unnecessary stress. Our on-site diagnostic wing combines automated clinical pathology with low-dose digital X-ray and abdominal and thoracic ultrasound for timely, evidence-led decisions.',
    duration: '45–60 minutes',
    artKey: 'diagnostics',
    image: CLINIC_IMAGES.diagnosticsSuite,
    imageAlt: 'Modern veterinary diagnostic ultrasound and digital imaging equipment',
    leadDoctorSlug: 'dr-marcus-vance',
    included: [
      'In-house complete blood count (CBC) and comprehensive organ biochemistry',
      'Digital low-radiation radiography (orthopaedic, thoracic, abdominal)',
      'High-resolution abdominal ultrasound and point-of-care echocardiography',
      'Cytology, urinalysis, and dermatological microscopy',
      'Same-day clinical walkthrough of imaging findings with your doctor',
    ],
    whenToBook: [
      'Unexplained weight loss, lethargy, coughing, or persistent GI signs',
      'Pre-anaesthetic safety screening before surgery or dentistry',
      'Ongoing monitoring of endocrine, renal, cardiac, or hepatic conditions',
    ],
    preparation: [
      'Fasting for 8–12 hours is often recommended for abdominal ultrasound and chemistry panels',
      'Our care coordinator will confirm specific preparation instructions upon booking',
    ],
  },
  {
    slug: 'dental-care',
    index: '05',
    title: 'Veterinary Dental Care',
    shortTitle: 'Dental Care',
    category: 'Diagnostics & Surgery',
    summary:
      'Full-mouth dental radiography, ultrasonic scaling, periodontal therapy, and pain-free oral surgery under dedicated anaesthetic monitoring.',
    clinicalOverview:
      'Periodontal disease affects the majority of adult dogs and cats and directly impacts kidney, heart, and daily comfort. We perform full-mouth dental charts and sub-gingival X-rays to treat hidden root pathology, not merely polish visible crowns.',
    duration: 'Day procedure',
    artKey: 'dental',
    image: CLINIC_IMAGES.diagnosticsSuite,
    imageAlt: 'Veterinary clinical suite prepared for precision dental care and monitoring',
    leadDoctorSlug: 'dr-marcus-vance',
    included: [
      'Pre-procedure blood screening and individualised anaesthetic plan',
      'Full-mouth intraoral dental X-rays to inspect below the gumline',
      'Ultrasonic scaling, sub-gingival curettage, and enamel polishing',
      'Gentle extractions and local nerve blocks when clinically required',
      'Post-procedure pain management and home oral hygiene guidance',
    ],
    whenToBook: [
      'Persistent bad breath, visible tartar build-up, or reddened gums',
      'Dropping kibble, chewing on one side, or pawing at the mouth',
      'Routine periodontal maintenance advised during annual check-ups',
    ],
    preparation: [
      'Pre-anaesthetic fasting after midnight; water remains available until morning check-in',
      'Morning admission between 08:00 and 09:00 with afternoon discharge after full recovery',
    ],
  },
  {
    slug: 'surgical-services',
    index: '06',
    title: 'Surgical Services',
    shortTitle: 'Surgical Services',
    category: 'Diagnostics & Surgery',
    summary:
      'Soft-tissue, reproductive, mass removal, and minimally invasive procedures performed in a sterile theatre with multiparameter monitoring.',
    clinicalOverview:
      'Surgical safety depends on preparation, sterile technique, continuous physiological monitoring, and compassionate pain control. Every patient receives dedicated nursing oversight from pre-medication through warm, quiet post-operative recovery.',
    duration: 'Day procedure or monitored stay',
    artKey: 'surgery',
    image: CLINIC_IMAGES.diagnosticsSuite,
    imageAlt: 'Sterile veterinary surgical theatre with overhead illumination and monitoring systems',
    leadDoctorSlug: 'dr-marcus-vance',
    included: [
      'Dedicated pre-surgical consultation and risk stratification',
      'Continuous ECG, capnography, pulse oximetry, temperature, and blood pressure monitoring',
      'Active warming blankets and IV fluid support throughout anaesthesia',
      'Multimodal analgesia tailored to procedure and species',
      'Post-operative discharge briefing and scheduled suture check included',
    ],
    whenToBook: [
      'Elective spay and neuter procedures with tailored timing guidance',
      'Lump, dermal mass, or biopsy excisions with histopathology',
      'Gastrointestinal, bladder, wound reconstruction, and soft-tissue surgery',
    ],
    preparation: [
      'Follow your surgeon’s written fasting and morning medication schedule',
      'Prepare a calm, warm recovery area at home ahead of evening discharge',
    ],
  },
  {
    slug: 'pet-nutrition',
    index: '07',
    title: 'Clinical Pet Nutrition',
    shortTitle: 'Pet Nutrition',
    category: 'Life-Stage & Specialty',
    summary:
      'Evidence-based dietary consultations for growth, weight optimisation, food sensitivities, renal support, and gastrointestinal health.',
    clinicalOverview:
      'Nutrition is foundational medicine. Whether guiding a rapidly growing large-breed puppy, resolving chronic skin or digestive sensitivities, or formulating therapeutic diets for renal or cardiac health, our recommendations rely on verifiable nutritional science.',
    duration: '35 minutes',
    artKey: 'nutrition',
    image: CLINIC_IMAGES.companionPortrait,
    imageAlt: 'Healthy energetic dog and cat reflecting balanced clinical nutrition',
    leadDoctorSlug: 'dr-clara-lindholm',
    included: [
      'Caloric requirement calculation and body condition trajectory plan',
      'Evaluation of current commercial, therapeutic, or home-prepared diets',
      'Structured elimination diet trials for suspected food allergies',
      'Targeted therapeutic nutrition for kidney, urinary, liver, or joint care',
      'Follow-up weigh-ins and gradual transition schedules',
    ],
    whenToBook: [
      'Gradual weight gain, unexplained weight loss, or fussy eating',
      'Chronic itching, recurrent ear infections, or sensitive digestion',
      'Transitioning from puppy/kitten formulas to adult or senior nutrition',
    ],
    preparation: [
      'Take photos of current food ingredient panels and treat packages',
      'Measure exact daily portion amounts for 3 days prior to your appointment',
    ],
  },
  {
    slug: 'parasite-prevention',
    index: '08',
    title: 'Parasite Prevention',
    shortTitle: 'Parasite Prevention',
    category: 'Preventive & Primary',
    summary:
      'Year-round, region-aware protection against fleas, ticks, heartworm, and intestinal parasites with routine diagnostic screening.',
    clinicalOverview:
      'External and internal parasites pose serious risks to both pets and human family members. We build streamlined, easy-to-follow prevention protocols matched to your pet’s weight, breed sensitivities, and local seasonal risks.',
    duration: '20 minutes',
    artKey: 'parasite',
    image: CLINIC_IMAGES.sculpturalArt,
    imageAlt: 'Refined sculptural study of a dog and cat representing holistic protection',
    leadDoctorSlug: 'dr-naomi-osei',
    included: [
      'Annual heartworm and tick-borne pathogen blood screening',
      'Faecal flotation and intestinal parasite microscopy',
      'Individualised flea, tick, heartworm, and deworming schedule',
      'Safe product selection for multi-pet and indoor/outdoor households',
      'Environmental guidance if an active infestation occurs',
    ],
    whenToBook: [
      'Before hiking, travel, or warm-season tick exposure',
      'When welcoming a newly adopted puppy, kitten, or rescue pet',
      'Annually alongside preventive health check-ups',
    ],
    preparation: [
      'Bring a fresh faecal sample if screening is due',
      'Note the last date any topical or oral preventive was administered',
    ],
  },
  {
    slug: 'puppy-and-kitten-care',
    index: '09',
    title: 'Puppy & Kitten Care',
    shortTitle: 'Puppy & Kitten Care',
    category: 'Life-Stage & Specialty',
    summary:
      'Gentle early-life veterinary visits designed to build lifelong confidence, complete immunity, healthy growth, and positive clinic associations.',
    clinicalOverview:
      'The first sixteen weeks shape a pet’s health and emotional comfort for life. Our visits use gentle handling, warm surfaces, and calm pacing while covering congenital screening, vaccination milestones, microchipping, nutrition, and socialisation guidance.',
    duration: '40 minutes',
    artKey: 'puppy',
    image: CLINIC_IMAGES.companionPortrait,
    imageAlt: 'Young dog and silver tabby kitten seated calmly on a warm stone bench',
    leadDoctorSlug: 'dr-naomi-osei',
    included: [
      'Early congenital heart, palate, umbilical, and orthopaedic checks',
      'Staged vaccination and intestinal deworming schedule',
      'ISO microchip implantation and registration support',
      'Growth-rate monitoring and large-breed or feline dietary guidance',
      'Evidence-based socialisation, toilet training, and carrier-comfort coaching',
    ],
    whenToBook: [
      'Within 3 to 5 days of bringing your new puppy or kitten home',
      'At 8, 12, and 16 weeks for staged immunisation and growth checks',
      'At 6 months for dental occlusion and spay/neuter timing consultation',
    ],
    preparation: [
      'Bring all breeder, rescue, or adoption paperwork',
      'Pack favourite high-value treats and a familiar soft blanket in the carrier',
    ],
  },
  {
    slug: 'senior-pet-healthcare',
    index: '10',
    title: 'Senior Pet Healthcare',
    shortTitle: 'Senior Pet Care',
    category: 'Life-Stage & Specialty',
    summary:
      'Compassionate geriatric medicine focused on mobility, joint comfort, organ preservation, cognitive health, and serene quality of life.',
    clinicalOverview:
      'Age itself is not a disease, yet older companions benefit immensely from proactive monitoring. We focus on preserving vitality through bi-annual organ panels, osteoarthritis pain management, blood pressure checks, and tailored home-comfort strategies.',
    duration: '45 minutes',
    artKey: 'senior',
    image: CLINIC_IMAGES.heroEditorial,
    imageAlt: 'Veterinarian performing a gentle, thorough examination on a mature golden retriever',
    leadDoctorSlug: 'dr-clara-lindholm',
    included: [
      'Bi-annual senior physical, orthopaedic, and neurological exams',
      'Comprehensive renal, hepatic, thyroid, and metabolic laboratory panels',
      'Non-invasive Doppler blood pressure and ocular screening',
      'Individualised osteoarthritis and mobility support programmes',
      'Quality-of-life assessments and compassionate long-term care planning',
    ],
    whenToBook: [
      'Starting at age 7 for most dogs (age 6 for giant breeds) and age 8 for cats',
      'If you notice stiffness after rest, hesitation on stairs, or night-time restlessness',
      'Increased thirst, weight shifts, or subtle changes in hearing or vision',
    ],
    preparation: [
      'Short smartphone videos of how your pet walks or rises at home are very helpful',
      'Bring a full list of current medications and joint supplements',
    ],
  },
  {
    slug: 'urgent-and-emergency-care',
    index: '11',
    title: 'Urgent & Same-Day Triage',
    shortTitle: 'Urgent Triage',
    category: 'Diagnostics & Surgery',
    summary:
      'Priority same-day medical assessment and stabilisation during clinic hours for acute illness, injury, toxin ingestion, or sudden distress.',
    clinicalOverview:
      'When unexpected health concerns arise during our operating hours, we reserve dedicated same-day urgent triage slots. Our clinical team rapidly stabilises acute patients, performs immediate diagnostics, and coordinates seamless transfer to a 24-hour critical-care hospital if overnight ICU care is required.',
    duration: 'Immediate triage during clinic hours',
    artKey: 'emergency',
    image: CLINIC_IMAGES.diagnosticsSuite,
    imageAlt: 'Clinical treatment and diagnostic monitoring bay ready for urgent veterinary care',
    leadDoctorSlug: 'dr-marcus-vance',
    included: [
      'Rapid nursing triage and vital-sign stabilisation on arrival',
      'Immediate pain relief, oxygen therapy, and IV fluid resuscitation',
      'Rapid in-house bloodwork, ultrasound FAST scans, and radiography',
      'Acute wound repair, toxin decontamination, and nausea control',
      'Direct clinical handover to partner 24/7 overnight ICU facilities when needed',
    ],
    whenToBook: [
      'Repeated vomiting, sudden collapse, breathing difficulty, or pale gums',
      'Suspected ingestion of chocolate, grapes, lilies, xylitol, or human medications',
      'Sudden lameness, bite wounds, eye trauma, or urinary straining',
    ],
    preparation: [
      'Call our Urgent Triage Line before travelling so our team can prepare immediately',
      'Bring packaging of any suspected ingested substance if safe to do so',
    ],
  },
];

export interface VeterinaryDoctor {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  experience: string;
  specializations: string[];
  education: string[];
  languages: string[];
  consultationDays: string;
  portrait: string;
  portraitAlt: string;
  shortBio: string;
  fullBio: string[];
  clinicalPhilosophy: string;
  relatedServiceSlugs: string[];
}

export const VETERINARY_DOCTORS: VeterinaryDoctor[] = [
  {
    slug: 'dr-clara-lindholm',
    name: 'Dr. Clara Lindholm',
    credentials: 'DVM, MRCVS',
    role: 'Medical Director & Lead Veterinarian',
    experience: '12 years in small animal internal & preventive medicine',
    specializations: ['Internal Medicine', 'Preventive Healthcare', 'Geriatric Medicine', 'Clinical Nutrition'],
    education: [
      'Doctor of Veterinary Medicine (DVM), University of California, Davis',
      'Member of the Royal College of Veterinary Surgeons (MRCVS)',
      'Postgraduate Certificate in Small Animal Internal Medicine',
    ],
    languages: ['English', 'Swedish'],
    consultationDays: 'Monday, Tuesday, Thursday, Friday',
    portrait: CLINIC_IMAGES.doctorLead,
    portraitAlt: 'Portrait of Dr. Clara Lindholm, Medical Director at Oriel Veterinary Clinic',
    shortBio:
      'Dr. Lindholm leads clinical standards at Oriel Veterinary, focusing on calm, evidence-driven internal medicine and lifelong preventive care plans.',
    fullBio: [
      'Dr. Clara Lindholm founded the clinical care protocols at Oriel Veterinary Clinic around a simple conviction: exceptional diagnostic rigour and unhurried emotional warmth belong in the same room.',
      'Over twelve years in progressive small-animal hospitals, she has developed particular expertise in complex endocrine disorders, chronic kidney disease management, senior mobility planning, and evidence-based clinical nutrition.',
      'Pet parents appreciate her lucid, jargon-free explanations—ensuring every family leaves an appointment understanding not just what is recommended, but why it matters for their companion’s comfort.',
    ],
    clinicalPhilosophy:
      'Listening carefully to a pet parent is often our most powerful diagnostic instrument. When we pair attentive observation with modern diagnostics, we catch quiet changes years earlier.',
    relatedServiceSlugs: [
      'general-veterinary-consultation',
      'preventive-health-check-ups',
      'senior-pet-healthcare',
      'pet-nutrition',
    ],
  },
  {
    slug: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance',
    credentials: 'BVSc, MANZCVS (Small Animal Surgery)',
    role: 'Senior Veterinary Surgeon & Diagnostics Lead',
    experience: '14 years in soft-tissue surgery, dentistry & imaging',
    specializations: ['Soft-Tissue Surgery', 'Veterinary Dentistry', 'Diagnostic Ultrasound', 'Urgent Triage'],
    education: [
      'Bachelor of Veterinary Science (BVSc), University of Sydney',
      'Membership in Small Animal Surgery (MANZCVS)',
      'Advanced Training in Veterinary Dental Radiography & Oral Surgery',
    ],
    languages: ['English'],
    consultationDays: 'Monday, Wednesday, Thursday, Saturday',
    portrait: CLINIC_IMAGES.doctorSurgeon,
    portraitAlt: 'Portrait of Dr. Marcus Vance, Senior Veterinary Surgeon at Oriel Veterinary Clinic',
    shortBio:
      'Dr. Vance oversees our surgical theatre, dental suite, and imaging wing, combining meticulous anaesthesia safety with gentle, pain-focused recovery.',
    fullBio: [
      'With fourteen years dedicated to soft-tissue surgery, advanced dentistry, and abdominal diagnostic imaging, Dr. Marcus Vance leads all procedural care at Oriel Veterinary Clinic.',
      'He champions modern multimodal pain control and individualised anaesthesia protocols, ensuring that even senior or medically sensitive patients undergo necessary dental or surgical procedures with calm precision.',
      'Before every procedure, Dr. Vance walks families through imaging findings step by step and provides direct post-operative updates as soon as each patient wakes comfortably in recovery.',
    ],
    clinicalPhilosophy:
      'Surgical excellence is measured long before the first incision—in careful diagnostics, tailored anaesthesia, and how peacefully a patient wakes up without pain.',
    relatedServiceSlugs: [
      'surgical-services',
      'dental-care',
      'diagnostic-services',
      'urgent-and-emergency-care',
    ],
  },
  {
    slug: 'dr-naomi-osei',
    name: 'Dr. Naomi Osei',
    credentials: 'DVM, Fear Free Certified',
    role: 'Associate Veterinarian — Feline & Early-Life Care',
    experience: '9 years in feline medicine, paediatrics & dermatology',
    specializations: ['Feline Medicine', 'Puppy & Kitten Wellness', 'Vaccination Protocols', 'Dermatology'],
    education: [
      'Doctor of Veterinary Medicine (DVM), Cornell University',
      'Fear Free Certified Veterinary Professional',
      'Continuing Clinical Focus in Feline Internal Medicine & Behaviour',
    ],
    languages: ['English', 'French'],
    consultationDays: 'Tuesday, Wednesday, Friday, Sunday',
    portrait: CLINIC_IMAGES.doctorFeline,
    portraitAlt: 'Portrait of Dr. Naomi Osei holding a calm tabby cat at Oriel Veterinary Clinic',
    shortBio:
      'Dr. Osei specialises in low-stress feline medicine, early puppy and kitten development, and compassionate management of allergic skin conditions.',
    fullBio: [
      'Dr. Naomi Osei brings nine years of clinical experience and deep dedication to feline-friendly, low-stress veterinary medicine. She designed Oriel’s quiet feline consultation protocols, incorporating warm examination surfaces, species-specific pheromones, and patient-paced handling.',
      'Beyond feline healthcare, Dr. Osei guides new pet parents through the vital first year of puppy and kitten life, tailoring immunisations, parasite prevention, and dermatology care with patience and clarity.',
      'Her consultations are known for putting even the most anxious pets—and their families—immediately at ease.',
    ],
    clinicalPhilosophy:
      'A calm pet allows a far more accurate examination. Respecting an animal’s body language transforms veterinary visits from stressful errands into trusted routines.',
    relatedServiceSlugs: [
      'puppy-and-kitten-care',
      'vaccination',
      'parasite-prevention',
      'general-veterinary-consultation',
    ],
  },
];

export interface WellnessMilestone {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  clinicalFocus: string[];
  artKey: MedicalArtKey;
  recommendedInterval: string;
}

export const WELLNESS_JOURNEY: WellnessMilestone[] = [
  {
    step: '01',
    title: 'First Consultation',
    subtitle: 'Calm arrival & baseline trust',
    description:
      'We begin with an unhurried introduction in a species-separated suite—giving your pet time to settle while we review medical history, nutrition, daily routines, and your goals as a pet parent.',
    clinicalFocus: [
      'Zero-rush 40-minute onboarding appointment',
      'Gentle handling & fear-free acclimatisation',
      'Complete review of prior health records',
    ],
    artKey: 'puppy',
    recommendedInterval: 'First visit or adoption week',
  },
  {
    step: '02',
    title: 'Health Assessment',
    subtitle: 'Comprehensive clinical baseline',
    description:
      'A systematic nose-to-tail examination paired with age-appropriate blood, urine, and oral baselines establishes what "healthy normal" looks like uniquely for your companion.',
    clinicalFocus: [
      'Cardiopulmonary, ophthalmic, and musculoskeletal exam',
      'Baseline metabolic & organ reference markers',
      'Dental grading and body condition scoring',
    ],
    artKey: 'consultation',
    recommendedInterval: 'Annually (bi-annually for seniors)',
  },
  {
    step: '03',
    title: 'Preventive Healthcare',
    subtitle: 'Proactive protection by lifestyle',
    description:
      'Rather than one-size-fits-all templates, we tailor vaccination schedules, parasite protection, dental maintenance, and nutrition directly to your pet’s age, breed, and daily environment.',
    clinicalFocus: [
      'Targeted core & lifestyle immunisations',
      'Year-round parasite & heartworm prevention',
      'Evidence-based weight and nutritional guidance',
    ],
    artKey: 'preventive',
    recommendedInterval: 'Ongoing seasonal & annual cadence',
  },
  {
    step: '04',
    title: 'Diagnosis & Treatment',
    subtitle: 'Clarity without anxious waiting',
    description:
      'When illness or injury occurs, our in-house laboratory, digital radiography, ultrasound, and surgical theatre allow rapid diagnosis and transparent, pain-conscious treatment.',
    clinicalFocus: [
      'Same-day clinical pathology & imaging review',
      'Clear written estimates before every procedure',
      'Multimodal pain management and sterile surgical safety',
    ],
    artKey: 'diagnostics',
    recommendedInterval: 'Same-day urgent & scheduled care',
  },
  {
    step: '05',
    title: 'Follow-up & Wellness',
    subtitle: 'Continuity through every life stage',
    description:
      'Care never ends at discharge. Our clinicians follow up directly after procedures or new medications and adapt preventive plans smoothly as companions move into their golden years.',
    clinicalFocus: [
      'Direct post-treatment clinical check-ins',
      'Senior mobility, joint, and organ longevity care',
      'Continuous digital health record access',
    ],
    artKey: 'senior',
    recommendedInterval: 'Continuous lifelong partnership',
  },
];

export interface ClinicFacility {
  id: string;
  index: string;
  name: string;
  area: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export const CLINIC_FACILITIES: ClinicFacility[] = [
  {
    id: 'reception',
    index: '01',
    name: 'Reception & Calm Arrival Lounge',
    area: 'Species-Separated Hospitality',
    description:
      'Designed with acoustic fluted timber, natural daylight, and separate canine and feline seating alcoves so pets experience quiet serenity from the moment they step inside.',
    highlights: [
      'Elevated feline carrier perches away from canine traffic',
      'Sound-absorbing pale aqua acoustic wall panels',
      'Smooth, slip-resistant warm stone flooring for senior joints',
    ],
    image: CLINIC_IMAGES.clinicReception,
    imageAlt: 'Oriel Veterinary Clinic sunlit reception and calm waiting lounge',
  },
  {
    id: 'consultation',
    index: '02',
    name: 'Private Consultation Suites',
    area: 'Low-Stress Examination Rooms',
    description:
      'Warm travertine and walnut consultation tables, dimmable architectural lighting, and subtle pheromone diffusion transform routine check-ups into unhurried clinical conversations.',
    highlights: [
      'Dedicated feline-only suite free from canine scents',
      'Floor-level cushioned exam mats for large or arthritic dogs',
      'In-room diagnostic displays to review imaging side by side',
    ],
    image: CLINIC_IMAGES.heroEditorial,
    imageAlt: 'Private dark teal and walnut veterinary consultation suite with golden retriever',
  },
  {
    id: 'diagnostics',
    index: '03',
    name: 'In-House Diagnostic Laboratory & Imaging',
    area: 'Rapid Clinical Pathology',
    description:
      'Automated haematology, biochemistry, microscopy, low-dose digital radiography, and high-resolution ultrasound deliver same-day medical clarity under one roof.',
    highlights: [
      'Results in 15–20 minutes for urgent blood chemistry panels',
      'High-definition abdominal ultrasound and cardiac imaging',
      'Low-radiation digital X-ray with instant image review',
    ],
    image: CLINIC_IMAGES.diagnosticsSuite,
    imageAlt: 'Veterinary diagnostic ultrasound and clinical monitoring suite',
  },
  {
    id: 'surgery',
    index: '04',
    name: 'Sterile Surgical & Dental Theatre',
    area: 'Procedural Precision',
    description:
      'Positive-pressure sterile surgical theatre equipped with multiparameter anaesthetic monitoring, intraoral dental radiography, and active patient warming throughout every procedure.',
    highlights: [
      'Continuous ECG, capnography, oxygen saturation, and blood pressure telemetry',
      'Dedicated dental radiography and ultrasonic periodontal workstation',
      'Heated recovery sanctuary with direct visual nursing supervision',
    ],
    image: CLINIC_IMAGES.diagnosticsSuite,
    imageAlt: 'Sterile veterinary surgical theatre with overhead precision lighting',
  },
  {
    id: 'recovery',
    index: '05',
    name: 'Quiet Day-Care & Recovery Sanctuary',
    area: 'Post-Operative Comfort',
    description:
      'Sound-insulated glass-fronted recovery suites with individualised radiant heating, soft orthopaedic bedding, and gentle ambient illumination for peaceful waking after anaesthesia.',
    highlights: [
      'Separate dog and cat recovery bays for quiet rest',
      'Continuous nurse observation during emergence and pain scoring',
      'Scheduled photo and text updates to pet parents during day stays',
    ],
    image: CLINIC_IMAGES.clinicReception,
    imageAlt: 'Calm sunlit interior corridor leading to private treatment and recovery suites',
  },
];

export interface BlogArticle {
  slug: string;
  title: string;
  category:
    | 'Pet Vaccination'
    | 'Puppy & Kitten Care'
    | 'Pet Nutrition'
    | 'Common Health Concerns'
    | 'Dental Hygiene'
    | 'Preventive Healthcare'
    | 'Senior Pet Wellness';
  readTime: string;
  publishedDate: string;
  authorSlug: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  keyTakeaways: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'understanding-core-and-lifestyle-pet-vaccinations',
    title: 'Understanding Core vs. Lifestyle Vaccinations: A Clear Guide for Pet Parents',
    category: 'Pet Vaccination',
    readTime: '5 min read',
    publishedDate: 'November 2026',
    authorSlug: 'dr-naomi-osei',
    featured: true,
    excerpt:
      'How modern veterinary immunisation balances durable immunity with minimal intervention—tailored to whether your companion explores trails or prefers sunlit windowsills.',
    image: CLINIC_IMAGES.heroEditorial,
    imageAlt: 'Veterinarian performing a gentle pre-vaccination examination on a golden retriever',
    keyTakeaways: [
      'Core vaccines protect every dog and cat against widespread, life-threatening diseases regardless of lifestyle.',
      'Non-core (lifestyle) vaccines are chosen strictly around local exposure risks such as parks, boarding, or wildlife.',
      'A physical exam before every vaccine ensures your pet’s immune system is healthy and ready.',
    ],
    sections: [
      {
        heading: 'Why modern vaccine schedules are no longer one-size-fits-all',
        paragraphs: [
          'Veterinary immunology has progressed substantially over the past two decades. Today, international veterinary guidelines distinguish clearly between core vaccines—essential for every dog or cat—and lifestyle vaccines chosen specifically for an individual pet’s daily environment.',
          'An indoor city cat has a very different exposure profile from a hiking Labrador who swims in freshwater lakes or visits group boarding. Reviewing your pet’s routine annually lets us protect them thoroughly without unnecessary injections.',
        ],
      },
      {
        heading: 'Core protection for dogs and cats',
        paragraphs: [
          'For dogs, core immunisation covers Canine Distemper, Adenovirus, Parvovirus (DHPP), and Rabies. After the primary puppy series and a one-year booster, many adult core vaccines maintain strong protection on a three-year interval.',
          'For cats, core vaccines protect against Feline Panleukopenia, Herpesvirus, and Calicivirus (FVRCP), alongside Rabies according to regional public health regulations.',
        ],
      },
      {
        heading: 'What to expect in the 24 hours after immunisation',
        paragraphs: [
          'Mild drowsiness or slight tenderness at the injection site for 24 hours is a normal sign of an active immune response. Offer a quiet resting spot and fresh water, and contact your clinic promptly if you ever observe facial swelling, hives, or persistent vomiting.',
        ],
      },
    ],
  },
  {
    slug: 'first-sixteen-weeks-puppy-and-kitten-wellness-roadmap',
    title: 'The First Sixteen Weeks: Building Lifelong Health and Confidence in Puppies & Kittens',
    category: 'Puppy & Kitten Care',
    readTime: '6 min read',
    publishedDate: 'November 2026',
    authorSlug: 'dr-naomi-osei',
    excerpt:
      'From early congenital checks and socialisation windows to stress-free carrier training, here is how to set your newest family member up for a thriving life.',
    image: CLINIC_IMAGES.companionPortrait,
    imageAlt: 'Young dog and silver tabby kitten seated calmly on a warm stone bench',
    keyTakeaways: [
      'Schedule an onboarding exam within the first week of adoption to establish growth and heart baselines.',
      'Staged immunisations at 8, 12, and 16 weeks bridge the fade of maternal antibodies safely.',
      'Positive, low-stress early clinic visits prevent adult veterinary anxiety.',
    ],
    sections: [
      {
        heading: 'Why the early socialisation window matters clinically',
        paragraphs: [
          'Between 3 and 14 weeks of age, puppies and kittens form enduring impressions of the world around them. Gentle, reward-based veterinary visits during this window teach young companions that stethoscopes, gentle ear checks, and clinic rooms are safe, predictable places.',
          'At home, leaving a cat carrier open in a sunlit room with soft bedding and occasional treats transforms travel days from stressful chases into calm routines.',
        ],
      },
      {
        heading: 'Balancing immunisation milestones with safe exploration',
        paragraphs: [
          'Maternal antibodies protect newborns early on, yet gradually decline at slightly different weeks for each animal. Administering vaccines in spaced visits ensures continuous coverage while allowing safe, controlled socialisation with vaccinated, healthy companions.',
        ],
      },
    ],
  },
  {
    slug: 'clinical-pet-nutrition-reading-labels-and-body-condition',
    title: 'Beyond Marketing Claims: How to Evaluate Pet Food and Body Condition Objectively',
    category: 'Pet Nutrition',
    readTime: '5 min read',
    publishedDate: 'October 2026',
    authorSlug: 'dr-clara-lindholm',
    excerpt:
      'Learn how veterinarians assess nutritional completeness, calculate daily caloric needs, and recognise the quiet signs of healthy lean muscle mass.',
    image: CLINIC_IMAGES.clinicReception,
    imageAlt: 'Calm veterinary clinic interior where clinical nutrition consultations take place',
    keyTakeaways: [
      'Look for complete-and-balanced nutritional adequacy statements verified by feeding trials or veterinary nutritionists.',
      'Maintaining a lean body condition score (4–5 out of 9) is one of the strongest predictors of lifespan.',
      'Transition between diets gradually over 7–10 days to protect gut microbiome stability.',
    ],
    sections: [
      {
        heading: 'Reading past front-of-bag headlines',
        paragraphs: [
          'Pet food packaging often emphasises boutique buzzwords rather than nutrient bioavailability. Clinically, what matters most is whether the formula provides complete, balanced amino acids, fatty acids, vitamins, and minerals verified for your pet’s specific life stage.',
          'Large-breed puppies, for example, require strictly controlled calcium-to-phosphorus ratios to support steady skeletal growth without joint strain.',
        ],
      },
      {
        heading: 'Checking body condition at home',
        paragraphs: [
          'You should be able to feel your pet’s ribs easily beneath a thin covering of tissue—similar to brushing across the back of your knuckles—and observe a gentle waist tuck when viewing from above. Keeping treats below 10% of daily calories prevents slow, unnoticed weight creep.',
        ],
      },
    ],
  },
  {
    slug: 'subtle-signs-your-pet-needs-a-veterinary-check',
    title: 'Seven Subtle Clinical Signs Your Dog or Cat May Be Hiding Discomfort',
    category: 'Common Health Concerns',
    readTime: '4 min read',
    publishedDate: 'October 2026',
    authorSlug: 'dr-clara-lindholm',
    excerpt:
      'Animals instinctively conceal pain and early illness. Recognising quiet shifts in thirst, grooming, posture, or sleep allows far gentler intervention.',
    image: CLINIC_IMAGES.sculpturalArt,
    imageAlt: 'Sculptural anatomical study of a calm hound and cat',
    keyTakeaways: [
      'Increased water intake or larger litter clumps often signal early metabolic or kidney shifts.',
      'Reduced grooming in cats or hesitation before jumping frequently indicates joint or dental pain.',
      'Short videos taken at home help your veterinarian evaluate intermittent symptoms accurately.',
    ],
    sections: [
      {
        heading: 'Why subtle behaviour changes matter more than dramatic symptoms',
        paragraphs: [
          'Dogs and cats rarely vocalise chronic discomfort. Instead, discomfort shows up as quieter rituals: choosing a softer bed, pausing before hopping onto the sofa, chewing only on one side of the mouth, or seeking more solitude than usual.',
          'Tracking changes in water bowl refills, coat gloss, and daily enthusiasm provides invaluable early clues long before an acute crisis develops.',
        ],
      },
      {
        heading: 'When to arrange a same-day assessment',
        paragraphs: [
          'Laboured breathing at rest, repeated unproductive retching, pale gums, sudden collapse, or straining in the litter tray are always reasons to telephone our urgent triage line immediately.',
        ],
      },
    ],
  },
  {
    slug: 'why-dental-radiography-transforms-pet-oral-health',
    title: 'Beneath the Gumline: Why Full-Mouth Dental Radiography Matters for Dogs and Cats',
    category: 'Dental Hygiene',
    readTime: '5 min read',
    publishedDate: 'October 2026',
    authorSlug: 'dr-marcus-vance',
    excerpt:
      'More than half of each tooth sits hidden below the gumline. Discover how dental X-rays uncover silent root pathology and protect systemic organ health.',
    image: CLINIC_IMAGES.diagnosticsSuite,
    imageAlt: 'Veterinary diagnostic and dental imaging suite with precision equipment',
    keyTakeaways: [
      'Over 60% of each tooth’s structure is invisible to the naked eye during an awake oral exam.',
      'Untreated periodontal inflammation seeds bacteria into the bloodstream and causes silent daily pain.',
      'Daily brushing with veterinary-safe enzymatic toothpaste slows plaque mineralisation dramatically.',
    ],
    sections: [
      {
        heading: 'The hidden half of periodontal health',
        paragraphs: [
          'A tooth can appear bright white on the surface while harbouring root resorption, bone loss, or a painful abscess beneath the gumline. This is especially common in cats, where feline tooth resorption often hides right below an inflamed gum edge.',
          'Full-mouth intraoral radiography during a professional dental procedure allows our surgical team to diagnose with certainty and resolve painful pathology in a single, calm anaesthetic event.',
        ],
      },
      {
        heading: 'Practical home dental care that actually works',
        paragraphs: [
          'Soft-bristled brushing three to seven times weekly using pet-formulated toothpaste remains the gold standard. Pair brushing with VOHC-accepted dental chews and avoid overly hard antlers or cooked bones that fracture carnassial teeth.',
        ],
      },
    ],
  },
  {
    slug: 'annual-bloodwork-power-of-personal-health-baselines',
    title: 'The Quiet Power of Annual Preventive Diagnostics and Personal Baselines',
    category: 'Preventive Healthcare',
    readTime: '4 min read',
    publishedDate: 'September 2026',
    authorSlug: 'dr-clara-lindholm',
    excerpt:
      'Why comparing your pet’s laboratory trends against their own healthy baseline reveals early organ shifts months before reference ranges turn red.',
    image: CLINIC_IMAGES.diagnosticsSuite,
    imageAlt: 'In-house veterinary laboratory and diagnostic imaging instruments',
    keyTakeaways: [
      'Healthy reference intervals span wide populations; your pet’s personal baseline is far more sensitive.',
      'Early kidney, liver, and thyroid trends can often be managed with simple dietary adjustments.',
      'Preventive diagnostics reduce both emergency visits and long-term medical costs.',
    ],
    sections: [
      {
        heading: 'Trends tell a clearer story than isolated numbers',
        paragraphs: [
          'Standard laboratory reference ranges reflect averages across thousands of healthy dogs or cats. Yet an individual pet’s kidney value might sit consistently at the low end of normal for years—so a subtle upward drift, even while technically still inside the broad normal range, can be an early signal worth investigating.',
          'Building a longitudinal baseline during healthy adult check-ups gives our clinicians remarkable clarity whenever your companion ages or feels under the weather.',
        ],
      },
    ],
  },
  {
    slug: 'supporting-senior-dogs-and-cats-with-dignity-and-comfort',
    title: 'Golden Years, Gentle Science: Supporting Senior Dogs and Cats Through Every Season',
    category: 'Senior Pet Wellness',
    readTime: '6 min read',
    publishedDate: 'September 2026',
    authorSlug: 'dr-clara-lindholm',
    excerpt:
      'Practical clinical strategies for arthritis relief, blood pressure screening, cognitive enrichment, and home adaptations that keep mature pets joyful.',
    image: CLINIC_IMAGES.companionPortrait,
    imageAlt: 'Calm mature dog and cat resting comfortably in soft natural light',
    keyTakeaways: [
      'Bi-annual check-ups for pets over 7–8 years old catch age-related shifts twice as quickly.',
      'Modern osteoarthritis therapies offer safe, targeted relief that restores playful movement.',
      'Simple home tweaks—rugs on slick floors, raised bowls, low-entry litter trays—make an immediate difference.',
    ],
    sections: [
      {
        heading: 'Reframing "just slowing down"',
        paragraphs: [
          'One of the most common misconceptions in pet care is assuming stiffness, sleeping all day, or reluctance to climb stairs is simply unavoidable ageing. In reality, many senior companions are experiencing treatable osteoarthritis or subtle metabolic shifts.',
          'Through gentle weight optimisation, targeted joint therapies, physiotherapy exercises, and regular comfort check-ins, senior dogs and cats frequently regain spark and mobility that surprises their families.',
        ],
      },
      {
        heading: 'Designing a senior-friendly home',
        paragraphs: [
          'Add non-slip runners across hardwood corridors, position orthopaedic beds away from cold draughts, and provide low-sided litter boxes on every floor for older cats. Small architectural kindnesses preserve independence and dignity every day.',
        ],
      },
    ],
  },
];

export interface WellnessPackage {
  id: string;
  tierLabel: string;
  name: string;
  targetPet: string;
  startingPrice: string;
  billingNote: string;
  summary: string;
  highlighted?: boolean;
  inclusions: string[];
  consultationNote: string;
}

export const WELLNESS_PACKAGES: WellnessPackage[] = [
  {
    id: 'puppy-kitten-foundation',
    tierLabel: 'Early Life Plan',
    name: 'Puppy & Kitten Wellness Package',
    targetPet: 'Dogs & cats from 8 weeks to 12 months',
    startingPrice: '$480',
    billingNote: 'Full first-year foundation guide · Final scope confirmed at onboarding',
    summary:
      'Complete first-year preventive foundation covering staged immunisations, early growth exams, microchipping, and calm clinic onboarding.',
    inclusions: [
      'Three comprehensive early-life veterinary consultations (8, 12 & 16 weeks)',
      'Core puppy or kitten primary vaccination series',
      'Intestinal parasite screening and initial deworming protocol',
      'ISO microchip implantation and digital registration',
      'Growth, nutrition, and dental occlusion assessment at 6 months',
      '10% courtesy savings on elective spay or neuter consultation & diagnostics',
    ],
    consultationNote: 'Lifestyle vaccines and breed-specific screenings are tailored individually during your first visit.',
  },
  {
    id: 'preventive-adult-care',
    tierLabel: 'Most Comprehensive Annual Care',
    name: 'Preventive Health Package',
    targetPet: 'Adult dogs & cats aged 1 to 7 years',
    startingPrice: '$395',
    billingNote: 'Annual preventive plan · Itemised clinical breakdown provided upfront',
    summary:
      'Proactive year-round clinical oversight pairing thorough physical diagnostics with annual metabolic bloodwork and personalised prevention.',
    highlighted: true,
    inclusions: [
      'Two scheduled comprehensive wellness consultations per year',
      'Annual in-house complete blood count (CBC) & organ biochemistry baseline',
      'Annual urinalysis and intestinal parasite microscopy',
      'Core vaccination boosters tailored to lifestyle & titre schedule',
      'Comprehensive oral health & periodontal grading assessment',
      'Priority access to same-day urgent triage slots during clinic hours',
    ],
    consultationNote: 'Monthly parasite preventives and dental procedures are quoted transparently as needed.',
  },
  {
    id: 'senior-companion-care',
    tierLabel: 'Mature Companion Care',
    name: 'Senior Pet Wellness Package',
    targetPet: 'Dogs 7+ years (giant breeds 6+) & cats 8+ years',
    startingPrice: '$560',
    billingNote: 'Bi-annual longevity plan · Adapted to individual medical needs',
    summary:
      'Dedicated longevity and comfort monitoring designed to protect organ vitality, ease joint stiffness, and preserve daily joy in mature companions.',
    inclusions: [
      'Two extended 45-minute senior clinical & mobility assessments per year',
      'Comprehensive senior organ chemistry, haematology & thyroid screening',
      'Bi-annual non-invasive blood pressure & ocular screening',
      'Complete urinalysis and early renal biomarker evaluation',
      'Personalised osteoarthritis comfort & nutritional strategy review',
      'Direct quarterly nurse check-ins to monitor home comfort trends',
    ],
    consultationNote: 'Diagnostic imaging or chronic medication protocols are discussed with clear written estimates beforehand.',
  },
];

export interface CareStory {
  id: string;
  petName: string;
  petDetails: string;
  ownerName: string;
  visitContext: string;
  quote: string;
  image: string;
  imageAlt: string;
  verifiedNote: string;
}

export const CLIENT_CARE_STORIES: CareStory[] = [
  {
    id: 'story-barnaby',
    petName: 'Barnaby',
    petDetails: 'Golden Retriever · 8 years',
    ownerName: 'Hannah & David M.',
    visitContext: 'Senior Mobility & Preventive Diagnostics',
    quote:
      'For the first time in his life, Barnaby walked straight into the consultation room without pulling back on his lead. Dr. Lindholm sat on the floor mat beside him, explained every bloodwork trend clearly, and built a joint comfort plan that brought back his morning enthusiasm within weeks.',
    image: CLINIC_IMAGES.heroEditorial,
    imageAlt: 'Barnaby the Golden Retriever seated calmly during his examination',
    verifiedNote: 'Shared with client permission · Post-visit care feedback',
  },
  {
    id: 'story-milo-saffron',
    petName: 'Saffron & Kip',
    petDetails: 'Silver Tabby & Miniature Aussie',
    ownerName: 'Priya S.',
    visitContext: 'Multi-Pet Preventive & Feline Care',
    quote:
      'Bringing a nervous indoor cat to the vet used to mean hours of stress. Having a separate quiet arrival lounge and Dr. Osei taking ten calm minutes before touching the stethoscope completely changed how Saffron handles her check-ups.',
    image: CLINIC_IMAGES.companionPortrait,
    imageAlt: 'Kip the Australian Shepherd and Saffron the silver tabby resting calmly together',
    verifiedNote: 'Shared with client permission · Post-visit care feedback',
  },
  {
    id: 'story-theo',
    petName: 'Theo',
    petDetails: 'Mixed Breed Terrier · 6 years',
    ownerName: 'Martin K.',
    visitContext: 'Dental Radiography & Oral Procedure',
    quote:
      'Dr. Vance walked me through Theo’s full-mouth dental X-rays before and after his procedure, sent an afternoon update as soon as he woke up comfortably, and followed up the next morning. The clarity and calm professionalism were unlike any clinic we have visited.',
    image: CLINIC_IMAGES.clinicReception,
    imageAlt: 'Sunlit calm lounge at Oriel Veterinary Clinic',
    verifiedNote: 'Shared with client permission · Post-visit care feedback',
  },
];

export interface FaqItem {
  id: string;
  category:
    | 'First Visits'
    | 'Vaccinations'
    | 'Routine Check-ups'
    | 'Pet Nutrition'
    | 'Dental Care'
    | 'Booking & Hours';
  question: string;
  answer: string;
}

export const CLINIC_FAQS: FaqItem[] = [
  {
    id: 'faq-first-visit',
    category: 'First Visits',
    question: 'What should I bring to my pet’s first veterinary visit?',
    answer:
      'Please bring any previous vaccination records, laboratory results, adoption or breeder paperwork, and a list (or photos) of your pet’s current food and medications. Cats should arrive in a secure, covered carrier with a familiar blanket, and dogs on a standard non-retractable lead.',
  },
  {
    id: 'faq-anxious-pets',
    category: 'First Visits',
    question: 'My cat or dog gets anxious at veterinary clinics. How do you help?',
    answer:
      'Our clinic is designed around calm, low-stress visits: separate dog and cat waiting zones, sound-dampened consultation rooms, warm exam surfaces, and unhurried 30-to-45-minute appointments. Let us know when booking if your pet is nervous—we can arrange direct room entry or discuss gentle pre-visit calming support.',
  },
  {
    id: 'faq-vaccinations',
    category: 'Vaccinations',
    question: 'Which vaccinations does my dog or cat actually need?',
    answer:
      'Every pet receives core vaccinations protecting against serious, widespread diseases (DHPP and Rabies for dogs; FVRCP and Rabies for cats). Lifestyle vaccines such as Bordetella, Leptospirosis, Lyme, or FeLV are recommended only after your veterinarian reviews your pet’s specific environment, travel, and social routine.',
  },
  {
    id: 'faq-checkup-frequency',
    category: 'Routine Check-ups',
    question: 'How often should a healthy pet have a routine health check-up?',
    answer:
      'Puppies and kittens visit every 3–4 weeks until 16 weeks of age. Healthy adult dogs and cats benefit from a comprehensive examination once a year, while senior companions (aged 7+ for most dogs, 6+ for giant breeds, and 8+ for cats) thrive best with bi-annual check-ups every six months.',
  },
  {
    id: 'faq-nutrition',
    category: 'Pet Nutrition',
    question: 'Do you provide tailored nutrition guidance for allergies or weight management?',
    answer:
      'Yes. Our clinical nutrition consultations calculate precise caloric targets, evaluate current diets objectively, guide structured elimination trials for suspected food sensitivities, and design therapeutic dietary plans for kidney, urinary, cardiac, and gastrointestinal conditions.',
  },
  {
    id: 'faq-dental',
    category: 'Dental Care',
    question: 'Why does veterinary dental care require general anaesthesia and X-rays?',
    answer:
      'Over 60% of a pet’s tooth lies beneath the gumline, where painful root infections and bone loss occur unseen. Safe, closely monitored general anaesthesia protects the airway, prevents pain or fear, and enables thorough sub-gingival scaling and full-mouth dental radiography.',
  },
  {
    id: 'faq-booking',
    category: 'Booking & Hours',
    question: 'How do I book an appointment, and do you offer same-day urgent care?',
    answer:
      'You can request an appointment online through our booking form at any time or telephone our care desk directly on +1 (415) 890-4210. We reserve dedicated same-day urgent triage slots daily during opening hours—please call ahead so our clinical team can prepare for your arrival.',
  },
  {
    id: 'faq-hours-services',
    category: 'Booking & Hours',
    question: 'What are your opening hours and full range of clinical services?',
    answer:
      'We are open Monday to Friday from 08:00 to 20:00, Saturday from 09:00 to 18:00, and Sunday from 10:00 to 16:00. Our services span primary consultations, preventive health check-ups, vaccinations, in-house diagnostics and imaging, dental care, soft-tissue surgery, clinical nutrition, parasite prevention, puppy/kitten care, senior medicine, and urgent daytime triage.',
  },
];

export const CLINIC_PILLARS = [
  {
    index: '01',
    title: 'Compassionate, Low-Stress Care',
    description:
      'Species-separated arrival zones, unhurried appointment windows, and patient-paced handling that respect your companion’s emotional wellbeing.',
  },
  {
    index: '02',
    title: 'Qualified Veterinary Clinicians',
    description:
      'Experienced DVM and BVSc doctors with dedicated clinical focus across internal medicine, soft-tissue surgery, dentistry, and feline care.',
  },
  {
    index: '03',
    title: 'Proactive Preventive Medicine',
    description:
      'Structured annual baselines, tailored immunisation protocols, and early-detection diagnostics designed to preserve long-term vitality.',
  },
  {
    index: '04',
    title: 'Personalised Treatment Planning',
    description:
      'Every recommendation is adapted to your pet’s unique physiology, lifestyle, and comfort—never generic checklists.',
  },
  {
    index: '05',
    title: 'Modern In-House Facilities',
    description:
      'On-site pathology, digital radiography, high-resolution ultrasound, and a sterile surgical theatre delivering accurate answers under one roof.',
  },
  {
    index: '06',
    title: 'Transparent Pet Parent Communication',
    description:
      'Plain-language explanations, clear written estimates before procedures, and direct clinician follow-ups after every treatment.',
  },
];
