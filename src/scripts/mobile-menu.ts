type MobileMenuElements = {
	button: HTMLElement
	menu: HTMLElement
}

function getMobileMenuElements(): MobileMenuElements | null {
	const button = document.getElementById('mobile-menu-button')
	const menu = document.getElementById('mobile-menu')

	if (!button || !menu) {
		console.warn('Mobile menu: required elements not found')
		return null
	}

	return { button, menu }
}

function toggleMenu(menu: HTMLElement): void {
	menu.classList.toggle('hidden')
}

function closeMenu(menu: HTMLElement): void {
	menu.classList.add('hidden')
}

function isMenuOpen(menu: HTMLElement): boolean {
	return !menu.classList.contains('hidden')
}

function handleOutsideClick(e: MouseEvent, elements: MobileMenuElements): void {
	if (!isMenuOpen(elements.menu)) return

	const target = e.target as HTMLElement

	const clickedOutside = !elements.button.contains(target) && !elements.menu.contains(target)

	if (clickedOutside) {
		closeMenu(elements.menu)
	}
}

export function initMobileMenu(): void {
	const elements = getMobileMenuElements()
	if (!elements) return

	elements.button.addEventListener('click', () => {
		toggleMenu(elements.menu)
	})

	document.addEventListener('click', (e: MouseEvent) => {
		handleOutsideClick(e, elements)
	})
}

initMobileMenu()
