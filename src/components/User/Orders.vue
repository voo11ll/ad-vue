<template> 
    <v-container>
        <v-layout row> 
            <v-flex xs12 sm6 offset-sm3>
             <h1 class="text--secondary mb-3 mt-3">Orders</h1>
                <v-list subheader two-line flat>		      
                    <v-list-item v-for="order in orders" :key="order.id" >
                       <v-list-item-action>
                           <v-checkbox
                              :input-value="order.done"
                             color="#800080"
                             @click="markDone(order)"
                             ></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title>{{ order.name }}</v-list-item-title>
                          <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                        </v-list-item-content>
                 <v-list-item-action>
                    <v-btn dark color="#800080" :to="'/ad/' + order.adId">Open</v-btn>
                    </v-list-item-action>
                   </v-list-item>
             </v-list>
           </v-flex>
        </v-layout> 
    </v-container>
</template>>




<script>
export default {
    data () { 
        return {
            orders: [
               {
          id:"10",
          name:"Ignat",
          phone:"+7(929) 999-555-9",
          adId:"5",
          done:false
        },
        {
          id:"11",
          name:"Leonid",
          phone:"+7(925) 888-555-8",
          adId:"24",
          done:false
        },
        {
          id:"12",
          name:"Valentin",
          phone:"+7(969) 900-00-00",
          adId:"30",
          done:false
        },
            ]

        } 	
    },
    methods: {
	markDone(order) {
		order.done = !order.done
		console.log(order.done)
	}
}
} 
</script>

