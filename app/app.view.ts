namespace $.$$ {
	export class $mynamespace_myapp_app extends $.$mynamespace_myapp_app {
		@$mol_mem
		greeting() {
			const name = this.name()
			return name ? `Привет, ${name}!` : 'Введите имя ниже'
		}

		@$mol_mem
		count(next?: number) {
			return next ?? 0
		}

		@$mol_mem
		count_text() {
			return `Кликов: ${this.count()}`
		}

		increment(next?: any) {
			this.count(this.count() + 1)
		}

		reset(next?: any) {
			this.count(0)
		}
	}
}
