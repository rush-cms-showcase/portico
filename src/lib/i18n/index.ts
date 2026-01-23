export const translations = {
  pt_BR: {
    site: {
      title: 'Pórtico Reformas',
      description: 'Reforma residencial em Porto Alegre com prazo e orçamento garantidos',
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
      hero: {
        headline: 'Antes de reformar, a gente entende como você vive',
        subheadline: 'A sua reforma em Porto Alegre com prazo e orçamento garantidos em contrato',
      },
    },
    services: {
      title: 'Nossos Serviços',
      description: 'Soluções completas para transformar seu imóvel com inteligência e planejamento',
      noServices: 'Nenhum serviço cadastrado no momento.',
      ctaTitle: 'Pronto para começar sua reforma?',
      ctaDescription: 'Entre em contato e receba um orçamento personalizado para o seu projeto',
      included: 'O que está incluído',
      interested: 'Interessado em',
    },
    contact: {
      title: 'Entre em Contato',
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
      description: 'Transformando espaços com inteligência e planejamento há mais de 20 anos em Porto Alegre.',
    },
  },
}

export type Locale = keyof typeof translations
export type TranslationKeys = typeof translations.pt_BR

export function useTranslations(locale: Locale = 'pt_BR') {
  return translations[locale] || translations.pt_BR
}

export function getLocale(url: string): Locale {
  return 'pt_BR'
}
