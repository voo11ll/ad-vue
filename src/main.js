import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
    var firebaseConfig={ 
      apiKey : "AIzaSyB6VXkXKlF97wCNRzSXc2OVpgmCN7ggbh4" , 
      authDomain : "ad-vue-3a74f.firebaseapp.com" , 
      projectId : "ad-vue-3a74f" , 
      storageBucket : "ad-vue-3a74f.appspot.com" , 
      messagingSenderId : "582047514078" , 
      appId : "1: 582047514078: web: d859246530c684f921b14f" , 
      measurementId : "G-L85J855MSL" 
    };
    // Initialize Firebase
    fb.initializeApp(firebaseConfig);
    fb.analytics();
  }
}).$mount('#app')
