<template>
  <section class="section">
    <div class="container is-widescreen">
      <div class="columns">
        <div class="column is-half">
          <h1 class="title">Listening Section</h1>
          <div class="columns is-gapless">
            <div class="column is-one-quarter">
              <Choice v-for="item in $store.getters.getYouChoice(1,25)"
                      v-bind:key="item.num"
                      v-bind:num="item.num"></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice v-for="item in $store.getters.getYouChoice(26,50)"
                      v-bind:key="item.num"
                      v-bind:num="item.num"></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice v-for="item in $store.getters.getYouChoice(51,75)"
                      v-bind:key="item.num"
                      v-bind:num="item.num"></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice v-for="item in $store.getters.getYouChoice(76,100)"
                      v-bind:key="item.num"
                      v-bind:num="item.num"></Choice>
            </div>
          </div>
        </div>
        <div class="divider is-vertical"><i class="fa fa-heart"></i></div>
        <div class="column is-half">
          <h1 class="title">Reading Section</h1>
          <div class="columns is-gapless">
            <div class="column is-one-quarter">
              <Choice v-for="item in $store.getters.getYouChoice(101,125)"
                      v-bind:key="item.num"
                      v-bind:num="item.num"></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice v-for="item in $store.getters.getYouChoice(126,150)"
                      v-bind:key="item.num"
                      v-bind:num="item.num"></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice v-for="item in $store.getters.getYouChoice(151,175)"
                      v-bind:key="item.num"
                      v-bind:num="item.num"></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice v-for="item in $store.getters.getYouChoice(176,200)"
                      v-bind:key="item.num"
                      v-bind:num="item.num"></Choice>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-third"></div>
        <div class="column is-one-third has-text-centered">
          <button class="button is-success is-medium"> Finish</button>
        </div>
        <div class="column is-one-third"></div>
      </div>
    </div>
  </section>
</template>
<script>
import Choice from "../components/choice";

export default {
  components: {Choice},
  created() {
    this.$store.dispatch('setDefaultYouChoice')
    this.$store.dispatch('pickYouChoice', {num: 1, pick: 'a'})
  }
}
</script>