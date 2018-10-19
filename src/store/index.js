import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemCount: 1, // 第几个单词
    knowCount: 0, // 认识单词数
    items: [],  // 这一次的所有单词
    numEveryTime: 5,  // 每一次测试的单词数
    allWords: [ // 所有可选单词
      "like",
      "think",
      "go",
      "look",
      "him",
      "here",
      "after",
      "ask",
      "next",
      "pay",
      "while",
      "hope",
      "close",
      "white",
      "near",
      "ring",
      "fish",
      "arrive",
      "rise",
      "suit",
      "thick",
      "tool",
      "moon",
      "smart",
      "deaf",
      "clay",
      "drum",
      "meadow",
      "shovel",
      "cradle",
      "respite",
      "shrill",
      "ostrich",
      "ajar",
      "sapling",
      "tureen",
      "bloat",
      "verdure",
      "cenacle",
      "sparge"
    ]
  },
  mutations: {
    init (state) {  // 初始化， 创建本次单词， 
      state.itemCount = 1
      state.knowCount = 0
      state.items = []
      let tmpIndexArr = []
      for (let i = 0; i < state.numEveryTime; i++) {
        let tmpIndex = Math.floor((Math.random() * state.allWords.length))
        while (tmpIndexArr.indexOf(tmpIndex) != -1) tmpIndex = Math.floor((Math.random() * state.allWords.length))
        tmpIndexArr.push(tmpIndex)
        state.items.push(state.allWords[tmpIndex])
      }
    },
    addCount (state) {
      state.itemCount++
    },
    addKnowCount (state) {
      state.knowCount++
    }
  }
})