<template>
  <section>
    <header class="header">
      这些单词你都认识么？
    </header><!-- /header -->
    <div class="container">
      <router-link to="item">开始测试</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  color: green;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  transform: translate(-50%, -50%);
}

a {
  text-decoration: none;
  color: green;
}
</style>
