<template>
  <div id="container">
      <reqHeader></reqHeader>

    <span>
      <div class="boxes">
        <h1>Input your scores:</h1>
        <input type="text" placeholder="GRE" class="textbox">
        <input type="text" placeholder="IELTS" class="textbox">
        <br>
        <input type="text" placeholder="SAT" class="textbox">
        <input type="text" placeholder="ACT" class="textbox">
        <br>
        <input type="text" placeholder="GPA" class="textbox" id="gpa">
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

    <button v-on:click="s();" id="button1">Submit</button>

      <!--<div class="result" v-if="buttonPressed">
        <p>Testing</p>
          <table class="smallTable">
            <tr>
              <td colspan="2">Rank</td>
              <td>School Name</td>
              <td>Min. GPA</td>
              <td>Min. SAT</td>
              <td>Min. ACT</td>
              <td>Min. IELTS</td>
              <td>Avg. Tuition</td>
            </tr>
            <tr>
              <td>1</td>
              <td colspan="2">{{ this.$root.college.name[p[0]] }}</td>
              <td>{{ this.$root.college.gpa[p[0]] }}</td>
              <td>{{ this.$root.college.sat[p[0]] }}</td>
              <td>{{ this.$root.college.act[p[0]] }}</td>
              <td>{{ this.$root.college.ielts[p[0]] }}</td>
              <td>{{ this.$root.college.tuition[p[0]] }}</td>
            </tr>
            <tr>
              <td>2</td>
              <td colspan="2">{{ this.$root.college.name[p[1]] }}</td>
              <td>{{ this.$root.college.gpa[p[1]] }}</td>
              <td>{{ this.$root.college.sat[p[1]] }}</td>
              <td>{{ this.$root.college.act[p[1]] }}</td>
              <td>{{ this.$root.college.ielts[p[1]] }}</td>
              <td>{{ this.$root.college.tuition[p[1]] }}</td>
            </tr>
            <tr>
              <td>3</td>
              <td colspan="2">{{ this.$root.college.name[p[2]] }}</td>
              <td>{{ this.$root.college.gpa[p[2]] }}</td>
              <td>{{ this.$root.college.sat[p[2]] }}</td>
              <td>{{ this.$root.college.act[p[2]] }}</td>
              <td>{{ this.$root.college.ielts[p[2]] }}</td>
              <td>{{ this.$root.college.tuition[p[2]] }}</td>
            </tr>
            <tr>
              <td>4</td>
              <td colspan="2">{{ this.$root.college.name[p[3]] }}</td>
              <td>{{ this.$root.college.gpa[p[3]] }}</td>
              <td>{{ this.$root.college.sat[p[3]] }}</td>
              <td>{{ this.$root.college.act[p[3]] }}</td>
              <td>{{ this.$root.college.ielts[p[3]] }}</td>
              <td>{{ this.$root.college.tuition[p[3]] }}</td>
            </tr>
            <tr>
              <td>5</td>
              <td colspan="2">{{ this.$root.college.name[p[4]] }}</td>
              <td>{{ this.$root.college.gpa[p[4]] }}</td>
              <td>{{ this.$root.college.sat[p[4]] }}</td>
              <td>{{ this.$root.college.act[p[4]] }}</td>
              <td>{{ this.$root.college.ielts[p[4]] }}</td>
              <td>{{ this.$root.college.tuition[p[4]] }}</td>
            </tr>
          </table>
        </div>-->

  </span>

</div>
</template>

<script>
import reqHeader from './reqHeader.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      //msg: 'Welcome to Your Vue.js App',
      buttonPressed: false,
      p: [],
      best: ''
    }
  },
  components:{
    reqHeader
  },

  methods: {
    s: function(){
      var q = [-1, -1, -1, -1, -1];
      //console.log(p[2]);

      //var best = -1;
      var userGpa = document.getElementById('gpa').value;
      //console.log(userGpa);

      for (var i = 0; i < 5; i++){
        var best = -1;

        for (var j = 0; j < 11; j++){
          if (userGpa >= this.$root.college.gpa[j]){
            if ((this.$root.college.gpa[best] < this.$root.college.gpa[j]) || best == -1)
              if (q[i] != j && q[i-1] != j && q[i-2] != j && q[i-3] != j && q[i-4] != j)
                best = j;
          }
        }
        q[i] = best;
        console.log(q[i]);
      }

      this.p = q;
      this.$root.pos = q;
      this.buttonPressed = true;
      //return buttonPressed = true;
      this.$router.push('/final');

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#container{
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  padding: 0px;
  justify-content: center;
  flex-flow: column;
  background: #303e47;
}

h1{
  margin-top: 0px;
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 40px;
  color: #a0f4d9;
}

.result {
  width: 70%;
  margin-left: 50%;
  margin: auto;
}

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

button {
  background-color: ##4d746d;
  border: 2px solid #69fbff;
  color: #303e47;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  width: 150px;
  height: 50px;
  margin-top: 10px;
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
