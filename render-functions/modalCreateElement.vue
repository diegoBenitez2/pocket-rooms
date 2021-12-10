<script>
export default {
  name: 'ModalCreateElement',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  render(createElement) {
    return (this.show) ? createElement('div', {
      class: 'modal',
    },
    [
      createElement('div', {
        class: 'content',
      },
      this.$slots.default),
      createElement('button', {
        class: 'btn',
        on: {
          click: this.clickHandleCancel,
        },
      }, 'cancel'),
      createElement('button', {
        class: 'btn',
        on: {
          click: this.clickHandleOk,
        },
      }, 'ok'),
    ]) : null;
  },
  methods: {
    clickHandleCancel() {
      console.log('click');
    },
    clickHandleOk() {
      console.log('click');
    },
  },
};
</script>
