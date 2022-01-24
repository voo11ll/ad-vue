import fb from 'firebase'
class Ad{
    constructor (title, desc, ownerId, src='', promo=false, id=null){
        this.title = title
        this.desc = desc
        this.ownerId = ownerId
        this.src = src
        this.promo = promo
        this.id = id
      }
  }
export default{
    state:{
        ads:[/*
            {
                title:"First",
                desc:"First Desc",
                promo: true,
                src: "https://i.pinimg.com/originals/bf/7c/9b/bf7c9b58e6e32ee5ee717bbf781371be.jpg",
                id:"1"
            },
            {
                title:"Second",
                desc:"Second Desc",
                promo: true,
                src: "https://pbs.twimg.com/media/Cd04xs9XEAEaDp2.jpg:large",
                id:"2"
            },
            {
                title:"Third",
                desc:"Thitd Desc",
                promo: true,
                src: "https://i.pinimg.com/originals/16/e3/8d/16e38d23dbe5927be999baaa4cd525f4.jpg",
                id:"3"
            },
            {
                title:"Fouth",
                desc:"Fouth Desc",
                promo: true,
                src: "https://massdrop-s3.imgix.net/product-images/godspeed-custom-sa-keycap-set/MD-25045_20160922122915_05fdde153872c9e1.jpg?auto=format&fm=jpg&fit=crop&w=1023&dpr=2",
                id:"4"
            },
            {
                title:"Fifth",
                desc:"Fifth Desc",
                promo: true,
                src: "https://www.androidpolice.com/wp-content/uploads/2017/12/nexus2cee_wwu4.jpg",
                id:"5"
            },
            {
                
                title:"Sixth",
                desc:"Sixth Desc",
                promo: true,
                src: "https://i.pinimg.com/originals/e1/dc/04/e1dc042dac8eb434881c897ea2337449.jpg",
                id:"6"
            }
            
        */]
    },
    mutations:{
        createAd(state, payload){
            state.ads.push(payload)
        },
        loadAds(state, payload){
            state.ads = payload
        },
        updateAd(state, {title, desc, id}){
            const ad = state.ads.find(a =>{
                return a.id === id
            })
            ad.title = title
            ad.desc = desc
        }
    },
    actions:{
        createAd({commit},payload){
            payload.id = Math.random()
                commit('createAd', payload)
        },
        async createAd ({commit, getters}, payload) {
            commit('clearError')
            commit('setLoading', true)
            const image = payload.image
            try {
              const newAd = new Ad(
                  payload.title,
                  payload.desc,
                  getters.user.id,
                  "", // При создании объявления отправляем пустая строку вместо адреса картинки
                  payload.promo,
                  payload.id
              )
              const fbValue = await fb.database().ref('ads').push(newAd)
              const imageExt = image.name.slice(image.name.lastIndexOf("."))
              
              await fb.storage().ref().child(`ads/${fbValue.key}.${imageExt}`).put(image).then(
                  snapshot => {
                      snapshot.ref.getDownloadURL().then((downloadURL) =>{
                          const src = downloadURL
                          fb.database().ref("ads").child(fbValue.key).update({ src })
                          commit('setLoading', false)
                          commit('createAd',{
                              ...newAd,
                              id: fbValue.key,
                              src
                            })
                        })
                    })
                } catch (error) {
                 commit('setError', error.message)
                 commit('setLoading', false)
                 throw error
                }
        },
        async fetchAds({commit}) {
    		commit('clearError')
      	    commit('setLoading', true)
      	   try {
      		//Здесь запрос к базе данных
              const fbVal = await fb.database().ref('ads').once('value')
              const ads = fbVal.val()
              console.log(ads)
              //val()
              const resultAds = []
              Object.keys(ads).forEach(key => {
                  const ad = ads[key]
                  resultAds.push(
                    new Ad(
                      ad.title,
                      ad.desc,
                      ad.ownerId,
                      ad.src,
                      ad.promo,
                      key
                    )
                  )
                })
                commit('loadAds', resultAds)
      		 commit('setLoading', false)
      	    }  catch (error) {
      		  commit('setError', error.message)
        	  commit('setLoading', false)
        	  throw error
      	   }
        },
        async updateAd ({commit},{title,desc,id}) {
            commit('clearError')
              commit('setLoading', true)
              try {
                  await fb.database().ref("ads").child(id).update({title, desc})
                  commit('updateAd',{title, desc, id})
                  commit('setLoading', false)
              } catch (error) {
                  commit('setError', error.message)
                commit('setLoading', false)
                throw error
              }
        }
    },
    getters:{
        ads(state){
            return state.ads
        },
        promoAds(state){
            return state.ads.filter(ad=>{return ad.promo})
        },
        myAds(state){
            return state.ads
        },
        adById(state){
            return id=>{
                return state.ads.find(ad=>ad.id==id)
            }
        }
    },
    /*computed: {
        loading() {
                return this.$store.getters.loading
            }
        },*/

}