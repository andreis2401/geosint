export type EventCard = {
  title: string;
  period: string;
  location: string;
  status: "confirmat" | "in pregatire";
  summary: string;
  actionLabel: string;
  actionHref: string;
};

export const navLinks = [
  { href: "/", label: "Acasa" },
  { href: "/evenimente", label: "Evenimente" },
];

export const quickStats = [
  { value: "35+", label: "ani de activitate in comunitate" },
  { value: "45", label: "grupuri IGS la nivel global" },
  { value: "4", label: "editii ale conferintei GeoSint" },
  { value: "9", label: "pagini istorice reorganizate in noua structura" },
];

export const focusAreas = [
  {
    title: "Educatie aplicata",
    description:
      "Workshop-uri si sesiuni tehnice pentru studenti, masteranzi, doctoranzi si specialisti din industrie.",
  },
  {
    title: "Standarde si bune practici",
    description:
      "Promovam utilizarea corecta a materialelor geosintetice in proiecte de infrastructura si mediu.",
  },
  {
    title: "Comunitate profesionala",
    description:
      "Conectam universitati, companii si practicieni pentru colaborari, mentorat si transfer de know-how.",
  },
];

export const upcomingEvents: EventCard[] = [
  {
    title: "IGS Educate the Educators",
    period: "Q3 2026",
    location: "Bucuresti",
    status: "in pregatire",
    summary:
      "Program international pentru cadre didactice, cu sesiuni despre metode moderne de predare in domeniul geosinteticelor.",
    actionLabel: "Pagina program",
    actionHref: "https://geosint.ro/EducateTheEducators.html",
  },
  {
    title: "Workshop GeoSint / Atelierul de Geosintetice",
    period: "Q4 2026",
    location: "Romania (locatia se anunta)",
    status: "in pregatire",
    summary:
      "Format hands-on orientat spre aplicatii practice, experimente de laborator si studii de caz reale.",
    actionLabel: "Vezi editia 2022",
    actionHref: "https://geosint.ro/WGS-ARG.html",
  },
  {
    title: "GeoSint - Conferinta Nationala",
    period: "anual",
    location: "Romania",
    status: "confirmat",
    summary:
      "Conferinta fanion pentru schimb de experienta intre cercetare, proiectare si executie in lucrari cu geosintetice.",
    actionLabel: "Arhiva GeoSint",
    actionHref: "https://geosint.ro/geosint.html",
  },
];

export const membershipTiers = [
  {
    name: "Membru colectiv",
    fee: "400 EUR / an",
    details: "Companii, institute, organizatii profesionale.",
  },
  {
    name: "Membru individual",
    fee: "200 EUR / an",
    details: "Specialisti si practicieni din domeniu.",
  },
  {
    name: "Membru tanar",
    fee: "45 EUR / an",
    details: "Tineri absolventi si debutanti in profesie.",
  },
  {
    name: "Student, masterand, doctorand",
    fee: "0 EUR / an",
    details: "Acces gratuit pentru sustinerea formarii profesionale.",
  },
];

export const timeline = [
  {
    year: "1990",
    title: "Infiintarea ARG",
    summary:
      "Asociatia Romana a Geosinteticelor este constituita ca platforma profesionala dedicata domeniului.",
  },
  {
    year: "1996",
    title: "Afiliere IGS",
    summary:
      "ARG devine membra a International Geosynthetics Society, una dintre primele afilieri din Europa de Est.",
  },
  {
    year: "1998-2007",
    title: "Seria GeoSint",
    summary:
      "Sunt organizate editiile nationale GeoSint, cu participare academica si industriala extinsa.",
  },
  {
    year: "2022",
    title: "Relansare prin Workshop GeoSint",
    summary:
      "Atelier dedicat studentilor si tinerilor specialisti, cu accent pe experimente si colaborare.",
  },
  {
    year: "2024+",
    title: "Consolidare ecosistem",
    summary:
      "Evenimente recurente, continut tehnic structurat si plan de crestere pentru noile generatii.",
  },
];
