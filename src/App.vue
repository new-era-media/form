<template>
  <clientForm />
</template>

<script>
import clientForm from "./components/clientForm.vue";

export default {
  name: "App",
  components: {
    clientForm,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
* {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  font-family: "Playfair Display", serif;
}
body {
  width: 100%;
  height: 100%;
}
</style>