type SmoothScrollOptions = {
	behavior?: ScrollBehavior
	block?: ScrollLogicalPosition
	inline?: ScrollLogicalPosition
}

const DEFAULT_OPTIONS: SmoothScrollOptions = {
	behavior: 'smooth',
	block: 'start',
	inline: 'nearest',
}

export function initSmoothScroll(options: SmoothScrollOptions = {}): void {
	const scrollOptions = { ...DEFAULT_OPTIONS, ...options }

	document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e: MouseEvent) => {
			e.preventDefault()

			const targetId = anchor.getAttribute('href')?.substring(1)
			if (!targetId) return

			const targetElement = document.getElementById(targetId)
			if (!targetElement) {
				console.warn(`Smooth scroll: target element #${targetId} not found`)
				return
			}

			targetElement.scrollIntoView(scrollOptions)
		})
	})
}

initSmoothScroll()
