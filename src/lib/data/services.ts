export interface Service {
	title: string
	description: string
	pricing?: string
	features: string[]
	popular?: boolean
	badge?: string
	cta: string
}

export const services: Service[] = [
	{
		title: 'Reforma Residencial Completa',
		description:
			'Transformacao total do seu imovel com planejamento funcional e entrega garantida.',
		pricing: 'A partir de R$ 800/m²',
		features: ['Planejamento completo', 'Gestao total da obra', 'Garantia de 2 anos'],
		popular: true,
		badge: 'Mais Procurado',
		cta: 'Solicitar Orcamento',
	},
	{
		title: 'Ampliacao e Redistribuicao',
		description: 'Otimizacao de espacos e criacao de novos ambientes pensados para sua rotina.',
		pricing: 'A partir de R$ 600/m²',
		features: ['Projeto arquitetonico', 'Aprovacao legal', 'Execucao monitorada'],
		cta: 'Solicitar Orcamento',
	},
	{
		title: 'Acabamento Premium',
		description: 'Revestimentos, pisos e acabamentos de alta qualidade com execucao impecavel.',
		pricing: 'Sob consulta',
		features: ['Materiais premium', 'Mao de obra especializada', 'Detalhamento tecnico'],
		cta: 'Solicitar Orcamento',
	},
	{
		title: 'Consultoria de Projeto',
		description: 'Diagnostico funcional e planejamento inteligente antes de qualquer obra.',
		pricing: 'Gratuito na reforma',
		features: ['Visita tecnica', 'Diagnostico comportamental', 'Orcamento detalhado'],
		cta: 'Solicitar Orcamento',
	},
]
