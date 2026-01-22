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
        '/': Number(import.meta.env.RUSH_ROUTE_ROOT_ID),
        '/eventos': Number(import.meta.env.RUSH_ROUTE_EVENTS_ID),
        '/blog': Number(import.meta.env.RUSH_ROUTE_BLOG_ID),
        '/servicos': Number(import.meta.env.RUSH_ROUTE_SERVICES_ID),
    },

    defaults: {
        perPage: 12,
    },
}
