<template> 
    <v-container>
        <v-layout row> 
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3 mt-3">My ads</h1>
              <v-card 
                  class="elevation-10 mb-5" v-for="ad in ads" :key="ad.id">
                  <v-layout row>
                        <v-flex xs4 class="pl-3">
                          <v-img :src="ad.src" height="175px"></v-img>	
                        </v-flex>
                       <v-flex xs8 class="pr-3">
                          <v-card-text>
                             <h2 class="text--purple">{{ad.title}}</h2>
                             <p>{{ad.desc}}</p>
                          </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="purple" :to="'/ad/' + ad.id">
                                 Open
                              </v-btn>
                           </v-card-actions>	
                       </v-flex>
                   </v-layout>
              </v-card>
            </v-flex>
        </v-layout> 
    </v-container>
</template>
<script>




export default {
    data () { 
        return {
        ads:[
            {
                title:"First",
                desc:"This type of keyboard was invented before others, when the convenience of printing and simplicity of design were in the first place. But even today, when a variety of other types of keyboards have flooded the device market, the mechanical one remains the best. Each key is equipped with a separate switch and LED. When pressed, the contacts are closed, the logical signal is transmitted to the processing nodes. Because of this, the print quality is noticeably higher – a clear knock is heard when pressed. It is recognized from half a stroke, speeding up printing and improving accuracy. The keys return to their original position due to the spring mechanism.",
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
