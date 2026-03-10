type SliderElements = {
	container: Element
	slider: HTMLElement
	overlay: HTMLElement
}

type DragState = {
	isDragging: boolean
}

function updateSliderPosition(
	x: number,
	container: Element,
	slider: HTMLElement,
	overlay: HTMLElement
): void {
	const rect = container.getBoundingClientRect()
	const position = Math.max(0, Math.min(x - rect.left, rect.width))
	const percentage = (position / rect.width) * 100

	slider.style.left = `${percentage}%`
	overlay.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`
}

function initSliderForContainer(container: Element): void {
	const slider = container.querySelector('.comparison-slider') as HTMLElement | null
	const overlay = container.querySelector('.comparison-overlay') as HTMLElement | null

	if (!slider || !overlay) {
		console.warn('Image slider: required child elements not found')
		return
	}

	const state: DragState = { isDragging: false }

	const handleMove = (clientX: number) => {
		if (state.isDragging) {
			updateSliderPosition(clientX, container, slider, overlay)
		}
	}

	slider.addEventListener('mousedown', () => {
		state.isDragging = true
	})

	document.addEventListener('mousemove', (e: MouseEvent) => {
		handleMove(e.clientX)
	})

	document.addEventListener('mouseup', () => {
		state.isDragging = false
	})

	slider.addEventListener('touchstart', (e: TouchEvent) => {
		e.preventDefault()
		state.isDragging = true
	})

	document.addEventListener('touchmove', (e: TouchEvent) => {
		if (e.touches[0]) {
			handleMove(e.touches[0].clientX)
		}
	})

	document.addEventListener('touchend', () => {
		state.isDragging = false
	})
}

export function initImageSliders(): void {
	const containers = document.querySelectorAll('.image-comparison')

	if (containers.length === 0) {
		return
	}

	containers.forEach((container) => {
		initSliderForContainer(container)
	})
}

initImageSliders()
