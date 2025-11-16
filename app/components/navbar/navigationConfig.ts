export interface NavLink {
  href: string;
  text: string;
}

export const mainNavLinks: NavLink[] = [
  { href: '/#herausforderungen', text: 'Herausforderungen' },
  { href: '/#kinder', text: 'Kinder' },
  { href: '/#loesungen', text: 'Lösungen' },
  { href: '/#aktiv-werden', text: 'Aktiv werden' },
];

export const secondaryNavLinks: NavLink[] = [
  { href: '/ueber-uns', text: 'Team & Netzwerk' },
  { href: '/mitwirken', text: 'Mitwirken' },
  { href: '/kontakt', text: 'Kontakt' },
  { href: '/presse-und-fakten', text: 'Presse & Fakten' }
];

// Petition Button
export const petitionButton = {
  href: '/petition',
  textDesktop: 'Petition lesen/unterzeichnen',
  textMobile: 'Petition unterzeichnen',
};
