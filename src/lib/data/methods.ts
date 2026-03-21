export interface Method {
	letter: string
	number: string
	title: string
	subtitle: string
	description: string
	features: string[]
}

export const methods: Method[] = [
	{
		letter: 'P',
		number: '01',
		title: 'Planejamento Cirúrgico',
		subtitle: 'Diagnóstico Comportamental',
		description:
			'Mapeamento funcional da sua rotina ANTES do orçamento. Entendemos como você vive cada ambiente para projetar espaços que funcionam para VOCÊ.',
		features: ['Diagnóstico funcional', 'Mapeamento de fluxos', 'Design comportamental'],
	},
	{
		letter: 'P',
		number: '02',
		title: 'Previsibilidade',
		subtitle: 'Cronograma Blindado',
		description:
			'Previsibilidade Total apenas com todos os documentos entregues e verificáveis. Planejamento reverso com margem de segurança técnica — não otimismo ingênuo.',
		features: ['Cronograma assertivo', 'Gestão eficiente', 'Margem de segurança'],
	},
	{
		letter: 'P',
		number: '03',
		title: 'Proteção Contratual',
		subtitle: 'Risco Transferido',
		description:
			'Orçamento travado por escrito. O risco de imprevistos é 100% nosso. Seguro de obra + garantia estendida inclusos.',
		features: ['Orçamento fixo', 'Seguro incluído', 'Zero surpresas'],
	},
	{
		letter: 'P',
		number: '04',
		title: 'Prestação de Contas',
		subtitle: 'Transparência',
		description:
			'Relatório fotográfico no seu WhatsApp. Checklist de etapas + próximas ações. Você sabe EXATAMENTE o que está acontecendo.',
		features: ['Relatórios fotográficos', 'Fotos de progresso', '100% rastreável'],
	},
]
