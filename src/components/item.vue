<template>
  <section>
    <header class="header">
      <span>第{{ itemCount }}个单词, 你目前共认识 {{ knowCount }}个</span>
    </header><!-- /header -->
    <div class="container">
      <div class="word">
        {{items[itemCount-1]}}
      </div>
      <div class="buttons">
        <button class="unknow green-button" @click="nextWord">不认识</button>
        <button class="know green-button" @click="addKnowCount();nextWord()">认识</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {

  name: 'item',

  data () {
    return {

    }
  },

  computed: mapState([
    'itemCount',
    'knowCount',
    'items',
    'numEveryTime'
  ]),

  methods: {
    ...mapMutations([
      'init',
      'addCount',
      'addKnowCount'
    ]),
    nextWord() {
      if (this.itemCount == this.numEveryTime) {
        this.$router.push({path: '/result'})
      } else {
        this.addCount()
      }
    }
  },

  created(){
    this.init()
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

.word {
  height: 200px;
  line-height: 200px;
  font-size: 2rem;
}

.unknow {
  margin-right: 20px;
}

.know {
  margin-left: 20px;
}

.green-button {
  border: 0;
  padding: 10px;
  background-color: lightgreen;
  color: white;
  font-weight: bold;
}

</style>