class StoreStandoff2 {
	constructor(userId) {
		this.api = "https://store.standoff2.com/api"
		this.headers = {
			"content-type": "application/json",
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
		}
		this.userId = userId
	}

	async getAccountInfo() {
		const response = await fetch(
			`${this.api}/v2/accounts`, {
				method: "POST",
				headers: this.headers,
				body: JSON.stringify({ uid: this.userId })
			})
		return response.json()
	}

	async getProductsConfig() {
		const response = await fetch(
			`${this.api}/v2/productsConfig/${this.userId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getComponents() {
		const response = await fetch(
			`${this.api}/v2/components`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getEvents() {
		const response = await fetch(
			`${this.api}/events/${this.userId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async activateCoupon(coupon) {
		const response = await fetch(
			`${this.api}/v1/coupon`, {
				method: "POST",
				body: JSON.stringify({
					uid: this.userId,
					coupon: coupon
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getPaymentForm(inApps = []) {
		const response = await fetch(
			`${this.api}/v1/payments/getPaymentForm`, {
				method: "POST",
				body: JSON.stringify({
					inapps: inApps,
					uid: this.userId
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getPaymentTokens() {
		const response = await  fetch(
			`${this.api}/v1/payments/tokens`, {
				method: "POST",
				headers: this.headers,
				body: JSON.stringify({ uid: this.userId })
			})
		return response.json()
	}
 }

module.exports = {StoreStandoff2}
