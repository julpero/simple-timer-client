<template>
  <div>This is Timers block for {{ userName }}</div>
  <Timer v-for="timer in getTimers()" :key="timer" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Timer from "./Timer.vue";
import TimerDataService from "../services/TimerDataService";

@Options({
  components: {
    Timer,
  },
  props: {
    userName: String,
  },
  methods: {
    getTimers(): number[] {
        TimerDataService.getAll();
      return [1, 2];
    },
  },
})
export default class Timers extends Vue {
  userName!: string;
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
