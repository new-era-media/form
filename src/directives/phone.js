export default {
  bind(el) {
    el.oninput = function() {
      if (this.value[0] != 7 && this.value.length < 2) {
        this.value = 7;
      }
      if (this.value.length <= 11) {
        this.value = this.value.replace(/[^\d]/g, "").replace(
          /(\d{01})(\d{3})(\d{3})(\d{4})/,
          "$1 ($2) $3-$4"
        );
      }
    };
  },
};
