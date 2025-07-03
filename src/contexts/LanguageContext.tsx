
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ro';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    projects: 'Our Projects',
    completedProjects: 'Completed Projects',
    donation: 'Donate',
    contact: 'Contact',
    
    // Homepage
    heroTitle: 'Building Hope, One Home at a Time',
    heroSubtitle: 'Helping extremely poor families by providing homes and supporting their critical needs through faith and community.',
    donateNow: 'Donate Now',
    supportFamily: 'Support a Family',
    currentFamilies: 'Current Families We\'re Helping',
    
    // About
    aboutTitle: 'About A House in Heavens',
    mission: 'To listen to God\'s commandment to help the ones in need. Love your neighbour as yourself.',
    aboutDescription: 'We are a faith-driven organization dedicated to building homes for extremely poor families and supporting their critical needs. Our work is guided by compassion, community, and the belief that everyone deserves a safe place to call home.',
    
    // Projects
    projectsTitle: 'Our Projects in Course',
    projectsDescription: 'Current active projects where we are building homes and supporting families in need.',
    
    // Completed Projects
    completedTitle: 'Our Completed Projects',
    completedDescription: 'Homes we have built and families we have helped find hope and stability.',
    
    // Donation
    donationTitle: 'Make a Difference Today',
    donationDescription: 'Your donation directly helps families in need. Every contribution makes a difference.',
    donationTiers: {
      tier1: '€25 - 100 Bricks',
      tier2: '€50 - 200 Bricks + Cement',
      tier3: '€100 - 1 Door',
      tier4: '€250 - 1 Window',
      tier5: '€500 - Roof Materials',
      tier6: '€1000 - Complete Room'
    },
    
    // Contact
    contactTitle: 'Contact Us',
    contactDescription: 'Get in touch with us to learn more about our mission or to volunteer.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    
    // Footer
    newsletter: 'Subscribe to our newsletter',
    subscribe: 'Subscribe',
    enterEmail: 'Enter your email',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    
    // Gallery items
    family1Title: 'Family of 7 needs a new home',
    family1Desc: 'This large family is currently living in a one-room shelter. We are building them a 3-bedroom home.',
    family2Title: 'Single mother with 3 children',
    family2Desc: 'Maria works hard to support her children but cannot afford proper housing. We are helping her build a safe home.',
    family3Title: 'Elderly couple needs shelter',
    family3Desc: 'After losing their home in a flood, this elderly couple needs our help to rebuild their lives.',
    family4Title: 'Young family with newborn',
    family4Desc: 'This young couple just welcomed their first child and needs a safe, warm home to raise their family.',
  },
  ro: {
    // Navigation
    home: 'Acasă',
    about: 'Despre Noi',
    projects: 'Proiectele Noastre',
    completedProjects: 'Proiecte Finalizate',
    donation: 'Donează',
    contact: 'Contact',
    
    // Homepage
    heroTitle: 'Construim Speranță, Câte o Casă Odată',
    heroSubtitle: 'Ajutăm familiile extrem de sărace prin oferirea de case și sprijinirea nevoilor lor critice prin credință și comunitate.',
    donateNow: 'Donează Acum',
    supportFamily: 'Sprijină o Familie',
    currentFamilies: 'Familiile pe Care le Ajutăm Acum',
    
    // About
    aboutTitle: 'Despre A House in Heavens',
    mission: 'Să ascultăm porunca lui Dumnezeu de a-i ajuta pe cei în nevoie. Iubește-ți aproapele ca pe tine însuți.',
    aboutDescription: 'Suntem o organizație ghidată de credință, dedicată construirii de case pentru familii extrem de sărace și sprijinirii nevoilor lor critice. Munca noastră este ghidată de compasiune, comunitate și credința că toată lumea merită un loc sigur pe care să-l numească acasă.',
    
    // Projects
    projectsTitle: 'Proiectele Noastre în Curs',
    projectsDescription: 'Proiecte active actuale unde construim case și sprijinim familii în nevoie.',
    
    // Completed Projects
    completedTitle: 'Proiectele Noastre Finalizate',
    completedDescription: 'Case pe care le-am construit și familii cărora le-am ajutat să găsească speranță și stabilitate.',
    
    // Donation
    donationTitle: 'Fă o Diferență Astăzi',
    donationDescription: 'Donația ta ajută direct familiile în nevoie. Fiecare contribuție face diferența.',
    donationTiers: {
      tier1: '€25 - 100 Cărămizi',
      tier2: '€50 - 200 Cărămizi + Ciment',
      tier3: '€100 - 1 Ușă',
      tier4: '€250 - 1 Fereastră',
      tier5: '€500 - Materiale pentru Acoperiș',
      tier6: '€1000 - Cameră Completă'
    },
    
    // Contact
    contactTitle: 'Contactează-ne',
    contactDescription: 'Ia legătura cu noi pentru a afla mai multe despre misiunea noastră sau pentru a deveni voluntar.',
    name: 'Nume',
    email: 'Email',
    message: 'Mesaj',
    send: 'Trimite Mesaj',
    
    // Footer
    newsletter: 'Abonează-te la newsletter-ul nostru',
    subscribe: 'Abonează-te',
    enterEmail: 'Introdu email-ul',
    quickLinks: 'Link-uri Rapide',
    followUs: 'Urmărește-ne',
    
    // Gallery items
    family1Title: 'Familie de 7 are nevoie de casă nouă',
    family1Desc: 'Această familie mare locuiește acum într-un adăpost cu o singură cameră. Le construim o casă cu 3 dormitoare.',
    family2Title: 'Mamă singură cu 3 copii',
    family2Desc: 'Maria muncește din greu să-și întrețină copiii dar nu își poate permite o locuință adecvată. O ajutăm să construiască o casă sigură.',
    family3Title: 'Cuplu în vârstă are nevoie de adăpost',
    family3Desc: 'După ce și-au pierdut casa într-o inundație, acest cuplu în vârstă are nevoie de ajutorul nostru pentru a-și reconstrui viața.',
    family4Title: 'Familie tânără cu nou-născut',
    family4Desc: 'Acest cuplu tânăr tocmai și-a întâmpinat primul copil și are nevoie de o casă sigură și caldă pentru a-și crește familia.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
