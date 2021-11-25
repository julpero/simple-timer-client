<template>
  <button class="btn btn-primary" v-on:click="newTimer()">Create New Timer</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TimerDataService from "../services/TimerDataService";

@Options({
  components: {
  },
  props: {
    userName: String,
  },
  methods: {
    newTimer(): boolean {
        const newTimerObj = {
            userName: window.localStorage.getItem("timerUser"),
        };
        TimerDataService.create(newTimerObj);
      return true;
    },
  },
})
export default class NewTimer extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
