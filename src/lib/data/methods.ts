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
		title: 'Planejamento Cirurgico',
		subtitle: 'Diagnostico Comportamental',
		description:
			'Mapeamento funcional da sua rotina ANTES do orcamento. Entendemos como voce vive cada ambiente para projetar espacos que funcionam para VOCE.',
		features: ['Diagnostico funcional', 'Mapeamento de fluxos', 'Design comportamental'],
	},
	{
		letter: 'P',
		number: '02',
		title: 'Previsibilidade Total',
		subtitle: 'Cronograma Blindado',
		description:
			'Datas fixas de entrega em contrato. Planejamento reverso com margem de seguranca tecnica — nao otimismo ingenuo.',
		features: ['Cronograma contratual', 'Multa por atraso', 'Margem de seguranca'],
	},
	{
		letter: 'P',
		number: '03',
		title: 'Protecao Contratual',
		subtitle: 'Risco Transferido',
		description:
			'Orcamento travado por escrito. O risco de imprevistos e 100% nosso. Seguro de obra + garantia estendida inclusos.',
		features: ['Orcamento fixo', 'Seguro incluido', 'Zero surpresas'],
	},
	{
		letter: 'P',
		number: '04',
		title: 'Prestacao de Contas',
		subtitle: 'Transparencia Semanal',
		description:
			'Relatorio fotografico toda sexta no seu WhatsApp. Checklist de etapas + proximas acoes. Voce sabe EXATAMENTE o que esta acontecendo.',
		features: ['Relatorios semanais', 'Fotos de progresso', '100% rastreavel'],
	},
]
