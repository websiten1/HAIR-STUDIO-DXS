export const SALON = {
  name: "Hair Studio Dxs",
  tagline: "Unde fiecare tăietură spune o poveste",
  phone: "0747 533 806",
  phoneRaw: "0747533806",
  address: "Rond Târgu Cucu, Poziția 10",
  city: "700259 Iași, România",
  rating: "5.0",
  reviews: "513",
  experience: "10+",
  googleMapsUrl: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjw99W39O-TAxUAAAAAHQAAAAAQPg..i&sca_esv=042d98b02a14ad67&udm=1&client=safari&hs=td2U&pvq=Cg0vZy8xMWM1NWgwZHRxIgsKBXNhbG9uEAIYAw&lqi=CgpzYWxvbiBpYXNpSLbmwNeUq4CACFoQEAAYASIKc2Fsb24gaWFzaZIBC2JhcmJlcl9zaG9w&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=ro&sa=X&ftid=0x40cafb9d275fba8b:0xc806b886566c90e0",
  schedule: [
    { day: "Luni – Vineri", hours: "09:00 – 19:00" },
    { day: "Sâmbătă", hours: "09:00 – 17:00" },
    { day: "Duminică", hours: "Închis" },
  ],
} as const;

export const SERVICES = [
  {
    category: "TUNSORI",
    ghost: "01",
    startingFrom: "DIN 60 RON",
    items: [
      { name: "Tunsoare clasică", price: "60 RON" },
      { name: "Tunsoare fade cut", price: "70 RON" },
      { name: "Tunsoare cu lamă", price: "65 RON" },
      { name: "Tunsori personalizate", price: "80 RON" },
      { name: "Tuns pe linia părului", price: "50 RON" },
      { name: "Tuns păr lung", price: "90 RON" },
    ],
  },
  {
    category: "BĂRBIERIT & BARBĂ",
    ghost: "02",
    startingFrom: "DIN 40 RON",
    items: [
      { name: "Bărbierit clasic cu lamă", price: "50 RON" },
      { name: "Bărbierit simplu", price: "40 RON" },
      { name: "Tuns bărbi", price: "35 RON" },
      { name: "Tratament balsam barbă", price: "30 RON" },
      { name: "Tuns sprâncene", price: "20 RON" },
      { name: "Vopsire sprâncene", price: "40 RON" },
    ],
  },
  {
    category: "TRATAMENTE PREMIUM",
    ghost: "03",
    startingFrom: "DIN 120 RON",
    items: [
      { name: "Botox & Keratină", price: "300 RON" },
      { name: "Vopsire păr", price: "150 RON" },
      { name: "Extensii de păr", price: "200 RON" },
      { name: "Epilat cu ceară", price: "40 RON" },
      { name: "Șampon & balsam", price: "30 RON" },
      { name: "Ras pe cap", price: "40 RON" },
    ],
  },
] as const;

export const ALL_SERVICE_NAMES = SERVICES.flatMap((cat) =>
  cat.items.map((item) => item.name)
);

export const NAV_LINKS = [
  { label: "Servicii", href: "/servicii" },
  { label: "Galerie", href: "/galerie" },
  { label: "Rezervare", href: "/rezervare" },
  { label: "Contact", href: "/contact" },
] as const;
