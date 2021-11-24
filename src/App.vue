<template>
  <Timers :user=joo />
  Who are you? <input v-model="joo"> {{joo}}
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Timers from "./components/Timers.vue";

@Options({
  components: {
    Timers
  },
})

export default class App extends Vue {
  joo: string = "";
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
