import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://cyber3xperim3nt.github.io',
  title: 'Cyber3xperim3nt',
  description:  'Un minimalista tema de Astro para Blog', // 'A minimal Astro blog theme',
  author: 'C3',
  navbarItems: [
    { label: 'Blog', href: '/posts' },
    { label: 'Proyectos', href: '/projects' },
    { label: 'Etiquetas', href: '/tags' },
    //{ label: 'Nosotros', href: '/nosotros' },
    /*
    {
      label: 'Otras paginas',
      children: [
        { label: 'Página de inicio', href: '/' },
        //{ label: '404 page', href: '/404' },
        //{ label: 'Author: FjellOverflow', href: '/authors/FjellOverflow' },
        //{ label: 'Tag: documentation', href: '/tags/documentation' }
      ]
    }*/
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/Cyber3xperim3nt',
      label: 'Github'
    },
    {
      icon: 'tabler--brand-tiktok',
      href: 'https://www.tiktok.com/@cyber3xperiment',
      label: 'TikTok'
    }
  ],

  // optional settings
  locale: 'es',
  mode: 'dark',
  modeToggle: false,
  colorScheme: 'scheme-aurora',
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
