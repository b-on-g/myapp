namespace $.$$ {
	export class $mynamespace_myapp_app extends $.$mynamespace_myapp_app {
		// === Page 1: Hello $mol ===

		@$mol_mem
		greeting() {
			const name = this.name()
			if (!name) return super.greeting()
			return `Hello, ${name}!`
		}

		@$mol_mem
		count(next?: number) {
			return next ?? 0
		}

		@$mol_mem
		count_text() {
			const count = this.count()
			return `Clicks: ${count}`
		}

		increment(next?: any) {
			this.count(this.count() + 1)
		}

		reset(next?: any) {
			this.count(0)
		}

		// === Page 2: Giper Baza ===

		@$mol_mem
		home_land() {
			return this.$.$giper_baza_glob.home().land()
		}

		@$mol_mem
		profile_node() {
			return this.home_land().Data($mynamespace_myapp_profile)
		}

		@$mol_mem
		profile_id() {
			return this.home_land().link().str
		}

		@$mol_mem
		profile_name(next?: string) {
			const node = this.profile_node()
			if (next !== undefined) {
				node.Name(null)!.val(next)
			}
			return node.Name()?.val() ?? ''
		}

		@$mol_mem
		profile_email(next?: string) {
			const node = this.profile_node()
			if (next !== undefined) {
				node.Email(null)!.val(next)
			}
			return node.Email()?.val() ?? ''
		}

		@$mol_mem
		profile_status() {
			const name = this.profile_name()
			const email = this.profile_email()
			if (name || email) {
				return `Saved: ${name} / ${email}`
			}
			return super.profile_status()
		}
	}
}
