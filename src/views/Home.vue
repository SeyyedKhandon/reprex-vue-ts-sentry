<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="foo()">inc</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import mytsfoo from "@/views/my.ts";
export default Vue.extend({
  name: "Home",
  mounted() {
    mytsfoo.foo2();
    setTimeout(() => {
      eval("myfunc();");
    }, 1000);
  }
});
</script>
