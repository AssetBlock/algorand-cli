<template>
  <div class="home">
    <img alt="Algorand logo" src="../assets/logo.svg" />
    <HelloWorld msg="Welcome to Algorand" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
