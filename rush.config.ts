import type { RushSiteConfig } from './src/types/rush'

export const rushConfig: RushSiteConfig = {
    url: import.meta.env.RUSH_URL,
    defaultLocale: 'pt_BR',

    locales: {
		pt_BR: {
			code: 'pt_BR',
			label: 'Português',
			path: '/',
			navs: {
				main: import.meta.env.RUSH_NAV_MAIN_ID,
				footer: import.meta.env.RUSH_NAV_FOOTER_ID,
			},
			forms: {
				contact: import.meta.env.RUSH_FORM_CONTACT_ID,
			},
			taxonomies: {
				categories: 'categorias',
				tags: 'tags',
			},
			pagination: 'pagina',
		},
    },

    routes: {
        '/': 12,
        '/servicos': 13,
        '/blog': 11,
        '/sobre-nos': 12,
    },

    defaults: {
        perPage: 12,
    },
}
