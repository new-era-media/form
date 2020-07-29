export default {
  bind(el, bindings) {
    el.oninput = function() {
      if (bindings.value == "number") {
        console.log("number");
        this.value = this.value.replace(/[^\d]/g, "");
      } else if (bindings.value == "string") {
        console.log("string");
        this.value = this.value.replace(/[^[A-Za-zА-яЁё]/g, "");
      }
    };
  },
};
