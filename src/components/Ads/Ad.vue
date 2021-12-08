<template> 
    <v-container>
        <v-layout row> 
            <v-flex xs12>
                <v-card class="mt-5">
                   <v-img 
                     height="300px" src="https://i.pinimg.com/originals/bf/7c/9b/bf7c9b58e6e32ee5ee717bbf781371be.jpg">
                   </v-img>
                  <v-card-text>
                      <h1 class="text--primary mb-3">Mechanical keyboard</h1>
                      <p>This type of keyboard was invented before others, when the convenience of printing and simplicity of design were in the first place. But even today, when a variety of other types of keyboards have flooded the device market, the mechanical one remains the best. Each key is equipped with a separate switch and LED. When pressed, the contacts are closed, the logical signal is transmitted to the processing nodes. Because of this, the print quality is noticeably higher – a clear knock is heard when pressed. It is recognized from half a stroke, speeding up printing and improving accuracy. The keys return to their original position due to the spring mechanism.</p>
                  </v-card-text>
                  <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn text class="warning">Edit</v-btn>
                     <v-btn class="success">Buy</v-btn>  
                  </v-card-actions>	
                </v-card>
            </v-flex>
        </v-layout> 
    </v-container>
</template>
<script>
export default {
    data () { 
        return {
        } 	
    }
} 
</script>
