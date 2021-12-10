<script>
export default {
  name: 'ModalJsx',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      require: true,
      default: 'Hello World',
    },
  },
  render() {
    return <div id="modal">
    <p>{this.message}</p>
    <button>Cancelar</button>
    <button>Ok</button>
    </div>;
  },
};
</script>
