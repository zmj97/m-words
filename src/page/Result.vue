<template>
  <section>
    <h1>测试完成</h1>
    <p>共{{ numEveryTime }}个单词<br />您认识{{ knowCount }}个单词</p>
    <router-link to="item">再来一次</router-link>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'Result',

  data () {
    return {

    }
  },
  computed: {
    ...mapState(['numEveryTime', 'knowCount'])
  }
}
</script>

<style lang="css" scoped>
section {
  position: absolute;
  top: 50%;
  left: 50%;
  color: green;
  transform: translate(-50%, -50%);
}

p {
  display: table-cell;
  vertical-align: middle;
  height: 200px;
  line-height: 2rem;
}

a {
  text-decoration: none;
  border: 0;
  padding: 10px;
  background-color: lightgreen;
  color: white;
  font-weight: bold;
}

</style>