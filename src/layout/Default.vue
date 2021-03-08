<template>
  <div class="wrapper">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <slot />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="sass" scoped>
.wrapper{
  background-color: red;
}
</style>
