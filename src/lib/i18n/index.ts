export const translations = {
	pt_BR: {
		site: {
			title: 'Pórtico Reformas',
			description: 'Reforma residencial em Porto Alegre e região com prazo e orçamento garantidos',
		},
		nav: {
			home: 'Home',
			services: 'Serviços',
			about: 'Sobre',
			method: 'Método',
			contact: 'Contato',
		},
		buttons: {
			requestQuote: 'Solicitar Orçamento',
			learnMore: 'Saiba mais',
			sendMessage: 'Enviar Mensagem',
			sending: 'Enviando...',
			backToServices: 'Voltar para Serviços',
		},
		home: {
			seoTitle: 'Pórtico Reformas - Sua reforma em Porto Alegre e região com prazo e orçamento garantidos',
			seoDescription: 'Antes de reformar, a gente entende como você vive. Reforma residencial em Porto Alegre e região com planejamento inteligente, prazo garantido e orçamento fixo em contrato.',
			contactSubtitle: 'Escolha como prefere falar com a gente',
			hero: {
				headline: 'Antes de reformar, a gente entende como você vive',
				subheadline:
					'A sua reforma em Porto Alegre e região com prazo e orçamento garantidos em contrato',
			},
		},
		services: {
			title: 'Nossos Serviços',
			description:
				'Soluções completas para transformar seu imóvel com inteligência e planejamento',
			noServices: 'Nenhum serviço cadastrado no momento.',
			ctaTitle: 'Pronto para começar sua reforma?',
			ctaDescription:
				'Entre em contato e receba um orçamento personalizado para o seu projeto',
			included: 'O que está incluído',
			interested: 'Interessado em',
			headerBadge: 'Soluções Completas',
			servicePrefix: 'Serviço',
			viewService: 'Ver Serviço',
		},
		contact: {
			title: 'Entre em Contato',
			seoDescription: 'Entre em contato com a Pórtico Reformas. Agende um diagnóstico pelo WhatsApp, e-mail ou formulário.',
			headerBadge: 'Fale Conosco',
			headerDescription: 'Escolha como prefere falar com a gente',
			name: 'Nome completo',
			email: 'E-mail',
			phone: 'Telefone',
			subject: 'Assunto',
			message: 'Mensagem',
			success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
			error: 'Erro ao enviar mensagem. Por favor, tente novamente.',
			required: 'Campo obrigatório',
		},
		footer: {
			company: 'Empresa',
			copyright: 'Todos os direitos reservados',
			description:
				'Transformando espaços com inteligência e planejamento há mais de 20 anos em Porto Alegre e região.',
		},
		portfolio: {
			title: 'Portfólio - Pórtico Reformas',
			seoDescription: 'Explore nossos projetos estruturais e de interiores. Conheça a excelência da Pórtico na prática.',
			headerTitle: 'Nossos Projetos',
			headerDescription: 'Uma galeria com os resultados do nosso compromisso com a excelência, segurança estrutural e design inteligente.',
			featuredBadge: 'Destaque',
			featuredTitle: 'Reforma Completa em Apartamento',
			featuredDescription: 'Detalhes de uma execução estrutural minuciosa, onde a precisão técnica encontra o design contemporâneo.',
			galleryBadge: 'Galeria',
			galleryTitle: 'Nossa Trajetória',
			galleryDescription: 'Uma visão geral dos projetos que transformaram espaços e entregaram segurança máxima para nossos clientes.',
			ctaTitle: 'Pronto para construir com segurança?',
			ctaDescription: 'Entre em contato com a Pórtico Reformas e descubra como podemos tornar seu projeto uma realidade estruturalmente impecável.'
		},
		slugPage: {
			ctaTitle: 'Quer fazer parte da nossa história?',
			ctaDescription: 'Entre em contato e vamos começar a transformação do seu espaço'
		},
		blog: {
			seoDescription: 'Artigos, dicas e novidades sobre reforma residencial e construção inteligente.',
			headerBadge: 'Blog',
			headerTitle: 'Artigos & Dicas',
			headerDescription: 'Conteúdo sobre reforma residencial, construção inteligente e planejamento de espaços.',
			noPosts: 'Nenhum post publicado ainda.',
			readMore: 'Ler mais',
			ctaTitle: 'Pronto para transformar seu espaço?',
			ctaDescription: 'Entre em contato e vamos começar o planejamento da sua reforma',
		}
	},
}

export type Locale = keyof typeof translations
export type TranslationKeys = typeof translations.pt_BR

export function useTranslations(locale: Locale = 'pt_BR') {
	return translations[locale] || translations.pt_BR
}
