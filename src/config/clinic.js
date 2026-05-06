/**
 * DHRITI DENTAL — CLINIC CONFIGURATION
 * Single source of truth. Edit here; propagates everywhere.
 * ─────────────────────────────────────────────────────────
 */

export const DOCTOR = {
  name:       'Dr. B Arvind',
  firstName:  'Arvind',
  title:      'Consultant Oral & Maxillofacial Oncosurgeon',
  shortTitle: 'Oral & Maxillofacial Oncosurgeon',
  initials:   'BA',
  experience: '9+',          // years
  surgeries:  '100+',        // cancer surgeries
  patients:   '5,000+',
  fellowships: 2,
  degrees: ['BDS', 'MDS (Oral & Maxillofacial Surgery)'],
  qualifications: [
    { label: 'BDS',                    inst: 'Kamineni Institute of Dental Sciences' },
    { label: 'MDS – Oral & MF Surgery',inst: 'Kamineni Institute of Dental Sciences' },
    { label: 'Fellowship',             inst: 'RGUHS – Rajiv Gandhi University of Health Sciences' },
    { label: 'Clinical Surgical Fellowship', inst: 'Royal College of Surgeons (RCS), London' },
    { label: 'Oncology Fellowship',    inst: 'HCG Cancer Hospital' },
    { label: 'Consultant Surgeon',     inst: 'PACE Hospitals, Hyderabad' },
  ],
  hospital: {
    name:    'PACE Hospitals',
    city:    'Hyderabad',
    url:     'https://www.pacehospitals.com',
    desc:    'Advanced oncological and surgical care with multi-disciplinary cancer management',
  },
}

export const CLINIC = {
  name:      'Dhriti Dental',
  tagline:   'Ethical, specialist-led care in a comfortable, modern environment.',
  email:     'dhritidentals@gmail.com',
  website:   'https://drbarvind.com',

  branches: {
    nallagandla: {
      id:       'nallagandla',
      label:    'Nallagandla (Main Branch)',
      area:     'West Hyderabad',
      address:  'Nallagandla, Hyderabad, Telangana – 500019',
      phone:    '+91-83310 03232',
      phoneRaw: '918331003232',
      hours: {
        weekday: 'Mon – Sat: 10:00 AM – 9:00 PM',
        sunday:  'Sunday: 11:00 AM – 5:00 PM',
      },
      mapsUrl:  'https://maps.google.com/?q=Dhriti+Dental+Nallagandla+Hyderabad',
      isPrimary: true,
    },
    manikonda: {
      id:       'manikonda',
      label:    'Manikonda',
      area:     'South-West Hyderabad',
      address:  'Manikonda, Hyderabad, Telangana – 500089',
      phone:    '+91-79811 00921',
      phoneRaw: '917981100921',
      hours: {
        weekday: 'Mon – Sat: 10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM',
        sunday:  'Sunday: Closed',
      },
      mapsUrl:  'https://maps.google.com/?q=Dhriti+Dental+Manikonda+Hyderabad',
      isPrimary: false,
    },
  },

  services: [
    'Oral Cancer Surgery',
    'Oral Cancer Screening',
    'Dental Implants',
    'Maxillofacial Reconstruction',
    'TMJ Disorder Management',
    'Wisdom Tooth Removal',
    'Jaw Fracture Surgery',
    'Biopsy & Pathology',
    'Root Canal Treatment',
    'Full Mouth Rehabilitation',
    'Smile Makeover',
    'Orthodontics & Aligners',
    'Gum Treatment',
    'Crowns & Bridges',
    'Preventive Dentistry',
  ],
}

/** Primary branch phone for CTAs */
export const PRIMARY_PHONE     = CLINIC.branches.nallagandla.phone
export const PRIMARY_PHONE_RAW = CLINIC.branches.nallagandla.phoneRaw
export const PRIMARY_EMAIL     = CLINIC.email

/** Pre-filled WhatsApp messages */
export const WA_MSGS = {
  default:     "Hello Dr. Arvind's team, I'd like to book a consultation at Dhriti Dental.",
  appointment: "Hi, I'd like to book an appointment at Dhriti Dental with Dr. B Arvind. Please share available slots.",
  hero:        "Hello! I came across Dr. B Arvind's website and would like to book a specialist consultation at Dhriti Dental.",
  callback:    "Hi, please call me back regarding a consultation with Dr. Arvind at Dhriti Dental.",
  cancer:      "Hi, I'd like to consult Dr. Arvind regarding oral cancer screening / biopsy at Dhriti Dental.",
  implants:    "Hi, I'm interested in getting dental implants done at Dhriti Dental by Dr. B Arvind.",
  tmj:         "Hi, I'm experiencing jaw pain and would like a TMJ consultation with Dr. Arvind.",
}

export const waUrl = (msgKey = 'default') =>
  `https://wa.me/${PRIMARY_PHONE_RAW}?text=${encodeURIComponent(WA_MSGS[msgKey] || WA_MSGS.default)}`
