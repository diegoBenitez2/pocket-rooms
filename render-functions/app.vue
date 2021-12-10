<template>
    <div
    id="app">
        <button @click.prevent="toogleHandle">Toggle Modal</button>
        <modal-create-element :show='show'>
          <h1>este es un itutlo</h1>
          <p>Hekllo World</p>
        </modal-create-element>
        <!-- <modal-jsx></modal-jsx> -->
    </div>
</template>
<script>
import modalCreateElement from './modalCreateElement.vue';
// import ModalJsx from './modalJsx.vue';

export default {
  name: 'App',
  components: { modalCreateElement },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toogleHandle() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped="css">
.message{
    color: black;
}
</style>
