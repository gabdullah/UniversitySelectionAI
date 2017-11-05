<template>
  <div id="container">
    <reqHeader></reqHeader>
    <span>
    <div class="result">
      <!--<p>Testing</p> -->
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
            <td colspan="2">{{ this.$root.college.name[this.$root.pos[0]] }}</td>
            <td>{{ this.$root.college.gpa[this.$root.pos[0]] }}</td>
            <td>{{ this.$root.college.sat[this.$root.pos[0]] }}</td>
            <td>{{ this.$root.college.act[this.$root.pos[0]] }}</td>
            <td>{{ this.$root.college.ielts[this.$root.pos[0]] }}</td>
            <td>{{ this.$root.college.tuition[this.$root.pos[0]] }}</td>
          </tr>
          <tr>
            <td>2</td>
            <td colspan="2">{{ this.$root.college.name[this.$root.pos[1]] }}</td>
            <td>{{ this.$root.college.gpa[this.$root.pos[1]] }}</td>
            <td>{{ this.$root.college.sat[this.$root.pos[1]] }}</td>
            <td>{{ this.$root.college.act[this.$root.pos[1]] }}</td>
            <td>{{ this.$root.college.ielts[this.$root.pos[1]] }}</td>
            <td>{{ this.$root.college.tuition[this.$root.pos[1]] }}</td>
          </tr>
          <tr>
            <td>3</td>
            <td colspan="2">{{ this.$root.college.name[this.$root.pos[2]] }}</td>
            <td>{{ this.$root.college.gpa[this.$root.pos[2]] }}</td>
            <td>{{ this.$root.college.sat[this.$root.pos[2]] }}</td>
            <td>{{ this.$root.college.act[this.$root.pos[2]] }}</td>
            <td>{{ this.$root.college.ielts[this.$root.pos[2]] }}</td>
            <td>{{ this.$root.college.tuition[this.$root.pos[2]] }}</td>
          </tr>
          <tr>
            <td>4</td>
            <td colspan="2">{{ this.$root.college.name[this.$root.pos[3]] }}</td>
            <td>{{ this.$root.college.gpa[this.$root.pos[3]] }}</td>
            <td>{{ this.$root.college.sat[this.$root.pos[3]] }}</td>
            <td>{{ this.$root.college.act[this.$root.pos[3]] }}</td>
            <td>{{ this.$root.college.ielts[this.$root.pos[3]] }}</td>
            <td>{{ this.$root.college.tuition[this.$root.pos[3]] }}</td>
          </tr>
          <tr>
            <td>5</td>
            <td colspan="2">{{ this.$root.college.name[this.$root.pos[4]] }}</td>
            <td>{{ this.$root.college.gpa[this.$root.pos[4]] }}</td>
            <td>{{ this.$root.college.sat[this.$root.pos[4]] }}</td>
            <td>{{ this.$root.college.act[this.$root.pos[4]] }}</td>
            <td>{{ this.$root.college.ielts[this.$root.pos[4]] }}</td>
            <td>{{ this.$root.college.tuition[this.$root.pos[4]] }}</td>
          </tr>
        </table>
      </div>
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
}
  </script>

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
.result{
  position: absolute;
}
</style>
