<template>
  <div id="app">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item " @click="clearExam" v-show="$store.state.is_show_back"><i class="fa fa-arrow-left"></i></a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <h3 class="is-size-4">{{ $store.state.title }}</h3>
          </a>
        </div>
        <div class="navbar-end">
          <a class="navbar-item" v-show="$store.state.is_show_time">
            <Countdown_time v-bind:end-date="$store.state.you_start_time"></Countdown_time>
          </a>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import Countdown_time from "./components/countdown_time";
export default {
  components: {Countdown_time},
  methods: {
    clearExam(){
      this.$store.dispatch('setExamId',null)
      this.$store.dispatch('setKey',[])
      this.$router.push(this.$store.state.back_url)
    }
  }
}
</script>