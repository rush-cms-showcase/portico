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
			'Transformação total do seu imóvel com planejamento funcional e entrega garantida.',
		pricing: 'A partir de R$ 800/m²',
		features: ['Planejamento completo', 'Gestão total da obra', 'Garantia de 2 anos'],
		popular: true,
		badge: 'Mais Procurado',
		cta: 'Solicitar Orcamento',
	},
	{
		title: 'Ampliação e Redistribuição',
		description: 'Otimização de espaços e criação de novos ambientes pensados para sua rotina.',
		pricing: 'A partir de R$ 600/m²',
		features: ['Projeto arquitetônico', 'Aprovação legal', 'Execução monitorada'],
		cta: 'Solicitar Orçamento',
	},
	{
		title: 'Acabamentos Especiais',
		description: 'Revestimentos, pisos e acabamentos de alta qualidade com execução impecável.',
		pricing: 'Sob consulta',
		features: ['Materiais refinados', 'Mão de obra especializada', 'Detalhamento técnico'],
		cta: 'Solicitar Orçamento',
	},
	{
		title: 'Consultoria na Área de Construção Civil',
		description: 'Diagnóstico funcional e planejamento inteligente antes de qualquer obra.',
		pricing: 'Gratuito na reforma',
		features: ['Visita técnica', 'Diagnóstico comportamental', 'Orçamento detalhado'],
		cta: 'Solicitar Orçamento',
	},
]
