<template>
  <Timers v-if="okToShowTimers" :userName="userName" />
  <div v-if="!okToShowTimers">
    Who are you?
    <input v-model="userName" />
    &nbsp;
    <button v-on:click="showTimers()">Go to Timers</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Timers from "./components/Timers.vue";

@Options({
  components: {
    Timers,
  },
  methods: {
    showTimers: function () {
      if (this.userName.length > 3) {
        this.okToShowTimers = true;
      }
    },
  },
})
export default class App extends Vue {
  userName: string = "";
  okToShowTimers: boolean = false;
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
