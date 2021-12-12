export default{
    state:{
        ads:[
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
            
        ]
    },
    mutations:{},
    actions:{},
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
    }
}