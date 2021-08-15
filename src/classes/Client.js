const fetch = require('node-fetch')

class Client {
	constructor(client, options) {
		Object.defineProperty(this, "client", { value: client, readonly: true })

		this.key = options.key;
	}

	autopost(options={ interval: 3.6e+6, timeout: 7.2e+6 }) {
		return new Promise((resolve,reject) => {
			var loop = setInterval(() => {
				this.postStats()
				.then(bool => {
					return resolve(bool)
				})
				.catch(err => {
					return reject(err)
				})
			}, options.time)

			setTimeout(() => {
				clearInterval(loop)
			}, options.timeout)
		})
	}

	async postStats() {
		return new Promise((resolve,reject) => {
			const r = await fetch(`https://skylinebots.ml/api/bot/${this.client.user.id}/stats`, {
					method: "POST",
					headers: {
						"Authorization": this.key,
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						server_count: this.client.guilds.cache.size
					})
				})

				if (r.ok) {
					resolve(true)
				} else {
					reject(new Error(`Skyapi >> `+ r.statusText))
				}
		})
	}

}

module.exports = Client