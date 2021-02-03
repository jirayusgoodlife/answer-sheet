import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyANrX-5CgZDZmoa2xS7JJDOI6BUwAP2oAY",
  authDomain: "simple-answer-sheet.firebaseapp.com",
  databaseURL: "https://simple-answer-sheet.firebaseio.com",
  projectId: "simple-answer-sheet",
  storageBucket: "simple-answer-sheet.appspot.com",
  messagingSenderId: "277125676234",
  appId: "1:277125676234:web:d22cebdff3f9f8a7c78833",
  measurementId: "G-V8TFXSL7GT"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
