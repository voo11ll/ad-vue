<template> 
    <v-container>
        <v-layout row> 
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3 mt-3">Create Ad</h1>
                <v-form v-model="valid" ref="form" validation>
                  <v-text-field color="#800080"
                     name="title" 
                     label="Ad Title" 
                     type="text" 
                     v-model="title"
                     :rules="[ v => !!v || 'Title is required']">
                 </v-text-field>
                  <v-textarea color="#800080"  
                     name="description" 
                     label="Ad Description" 
                     type="text" 
                     v-model="description"
                     :rules="[ v => !!v || 'Description is required']"
                     class="mb-3" >
                 </v-textarea>
                </v-form>

                <v-layout  row> 
                  <v-flex xs12>
                      <v-btn class="mt-3" color="warning">
                          Upload
                         <v-icon right dark>mdi-cloud-upload</v-icon>
                      </v-btn>

                    </v-flex>
                </v-layout>

                <v-layout  row> 
                 <v-flex xs12>
                      <img src="https://i.pinimg.com/originals/bf/7c/9b/bf7c9b58e6e32ee5ee717bbf781371be.jpg" height="150" class="mt-3">
                 </v-flex>
                </v-layout>

                <v-layout  row> 
                  <v-flex xs12>
                      <v-switch v-model="promo" color="#800080" label="Ad to Promo?"></v-switch>
                    </v-flex>
                </v-layout>

                <v-layout  row> 
                  <v-flex xs12>
                      <v-spacer></v-spacer>
                      <v-btn color="success" 
                      @click="createAd"
                      :loading= "loading"
                      :disabled= "!valid || loading"
                      >Create Ad</v-btn>
                  </v-flex>
                </v-layout>
            </v-flex>
        </v-layout> 
    </v-container>
</template>




<script>
export default {
    data () { 
        return {
            valid: false,
            title: "",
            description: "",
            promo: false
        } 	
    },
    methods: {
      createAd(){
          if (this.$refs.form.validate()){
          const ad = {
         title: this.title,
         desc: this.description,
         promo: this.promo,
         src: "https://i.pinimg.com/originals/2c/0a/b1/2c0ab12aa640e6de5e18315570bc34f5.jpg"
        }
        this.$store.dispatch("createAd", ad)
           .then(()=>{
               this.$router.push("/list")
           })
           .catch(() =>{})
    }
   }
  }
} 
</script>