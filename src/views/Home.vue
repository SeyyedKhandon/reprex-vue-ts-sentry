<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="ff()">inc</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  mounted() {
    setTimeout(() => {
      eval("myfunc();");
    }, 1000);
  }
});
</script>
