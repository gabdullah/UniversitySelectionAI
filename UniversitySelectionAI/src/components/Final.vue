<template>
  <div id="container">
    <reqHeader></reqHeader>

    <span>
      <h5> Show me</h5>
    <div class="result">
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

td {
  min-width: 10%;
  margin: 5px;
  padding: 10px;
}

table {
  width: 75%;
  position: center;
  position: absolute;
  color: #bad8a3;
  font-family: "Arial Black", Gadget, sans-serif;
}

</style>
