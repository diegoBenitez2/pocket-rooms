import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCWf3OitvpuCC1hHkPVla8uGiREZ4HmvIQ',
  authDomain: 'happy-rooms-2ca01.firebaseapp.com',
  databaseURL: 'https://happy-rooms-2ca01-default-rtdb.firebaseio.com',
  projectId: 'happy-rooms-2ca01',
  storageBucket: 'happy-rooms-2ca01.appspot.com',
  messagingSenderId: '272464279042',
  appId: '1:272464279042:web:cb22e4c66d26be6f86991b',
  measurementId: 'G-HFHL142YYG',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER'); 
  }
});
// firebase.analytics();


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FECTH_USERS', { id: store.state.authId });
    }
  },
}).$mount('#app');
