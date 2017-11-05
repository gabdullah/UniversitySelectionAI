<template>
  <!--<div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div> -->
<span>
  <div class="boxes">
    <h1>Input your scores:</h1>
    <input type="text" placeholder="GRE" class="textbox">
    <input type="text" placeholder="IELTS" class="textbox">
    <br>
    <input type="text" placeholder="SAT" class="textbox">
    <input type="text" placeholder="ACT" class="textbox">
    <br>
    <input type="text" placeholder="GPA" class="textbox">
  </div>

  <div class="selects">
    <select class="dropdown" placeholder="Grade applying for">
      <option value="freshman">Freshman</option>
      <option value="sophomore">Sophomore</option>
      <option value="junior">Junior</option>
      <option value="senoir">Senior</option>
      <option value="graduate">Graduate</option>
    </select>

    <select class="dropdown" placeholder="Intended Major">
      <option value="undecided">Undecided</option>
      <option value="compsci">Computer Science</option>
      <option value="digsci">Digital Science</option>
      <option value="aeronautics">Aeronautics</option>
      <option value="polsci">Political Science</option>
      <option value="premed">Pre-Med</option>
      <option value="finance">Finance</option>
      <option value="accounting">Accounting</option>
    </select>
  </div>

  <button @click="s(); buttonPressed = false" id="button1">Submit</button>

  <div class="result" v-if="!buttonPressed">
    <p>Testing</p>
  </div>

</span>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    s: function(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.boxes {
  left: 50%;
  top: 50%;
  padding:5px;
}

.textbox {
  padding: 10px;
  position: center;
  margin: 5px;
}

.selects {
  top: 5px;
}

.dropdown {
  padding: 10px;
}

#button1 {
  size:50px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
