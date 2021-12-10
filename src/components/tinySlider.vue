<template>
    <div class="slider-wrapper">
        <slot></slot>
    </div>
</template>
<script>
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';

export default {
  name: 'TinySlider',
  data() {
    return {
      // variable no dinamica o observable
      $slider: null,
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    if (this.$slider) {
      this.$slider.destroy();
    }
  },
  methods: {
    // la funcion init se dispara en tiempo de ejecucion, inicilizando el componente
    init() {
      const setting = {
        // se accede al elemento padre dentro dentro del componente
        container: this.$el,
        mode: 'gallery',
      };
      this.$slider = tns(setting);
    },
  },
};
</script>
