export default {
	state: {},
	mutations: {},
	actions: {
        async createOrder({commit},{name, phone, adId, ownerId}) {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 4000)
            })
        }
    },
	getters: {}
}