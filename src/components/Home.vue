<template> 
    <div>
    <v-container fluid>
        <v-layout row> 
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item 	
                     v-for="ad in ads"
                     :key="ad.id"
                     :src="ad.src"
                     >
                        <div class="ad-link">
                         <v-btn class="error" :to="'/ad/' + ad.id">
                         {{ ad.title }}
                         </v-btn>
                        </div> 
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout> 
    </v-container>
    <v-container grid-list-lg>
        <v-layout row wrap> 
            <v-flex xs12 sm6 md4
                v-for="ad in ads"
                :key="ad.id">
                <v-card>
                    <v-img
                     :src="ad.src"
                     height="200px"
                    ></v-img>
                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb0">{{ad.title}}</h3>
                        <div>{{ad.desc}}</div>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text:to="'/ad/' + ad.id">Open</v-btn>
                    <v-btn raised color="#973e95">
                        Buy
                    </v-btn>
                    </v-card-actions>				
                </v-card>
            </v-flex>
        </v-layout> 
    </v-container>
    </div>
</template>



<script>
export default {
    data () { 
    return {
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
    } 	
}
} 
</script>
<style scoped>
    .ad-link {
        position:absolute;
        bottom: 50px;
        left:50%;
        background: rgb(0,0,0,0.5);
        transform: translate(-50%,0);
        padding: 5px 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
</style>
