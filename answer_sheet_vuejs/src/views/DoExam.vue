<template>
  <section class="section">
    <div class="container is-widescreen">
      <div class="columns">
        <div class="column is-half">
          <h1 class="title">Listening Section</h1>
          <div class="columns is-gapless" v-show="!$store.state.is_timeout">
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(1, 25)"
                v-bind:key="item.num"
                v-bind:num="item.num"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(26, 50)"
                v-bind:key="item.num"
                v-bind:num="item.num"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(51, 75)"
                v-bind:key="item.num"
                v-bind:num="item.num"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(76, 100)"
                v-bind:key="item.num"
                v-bind:num="item.num"
              ></Choice>
            </div>
          </div>
        </div>
        <div class="divider is-vertical"><i class="fa fa-heart"></i></div>
        <div class="column is-half">
          <h1 class="title">
            Reading Section&emsp;<button
              class="button"
              v-show="!$store.state.is_take_reading"
              @click="start_reading_section"
            >
              start
            </button>
          </h1>
          <div
            class="columns is-gapless"
            v-show="$store.state.is_take_reading && !$store.state.is_timeout"
          >
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(101, 125)"
                v-bind:key="item.num"
                v-bind:num="item.num"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(126, 150)"
                v-bind:key="item.num"
                v-bind:num="item.num"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(151, 175)"
                v-bind:key="item.num"
                v-bind:num="item.num"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(176, 200)"
                v-bind:key="item.num"
                v-bind:num="item.num"
              ></Choice>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-third"></div>
        <div class="column is-one-third has-text-centered">
          <button class="button is-success is-medium" @click="gotoScore">
            Finish
          </button>
        </div>
        <div class="column is-one-third"></div>
      </div>
    </div>
  </section>
</template>
<script>
import Choice from "../components/choice";

export default {
  components: { Choice },
  methods: {
    start_reading_section() {
      this.$store.state.is_take_reading = true;
      let now = new Date();
      let diff = 75;
      this.$store.state.is_show_time = true;
      this.$store.state.you_start_time = new Date(now.getTime() + diff * 60000);
    },
    gotoScore() {
      this.$store.state.is_show_back = true;
      this.$store.state.is_show_time = false;
      this.$router.push("/score");
    },
  },
  created() {
    if (this.$store.state.you_exams_id == null) {
      this.$router.push("/");
    }
    this.$store.state.is_timeout = false;
    this.$store.state.is_show_back = true;
    this.$store.dispatch("setDefaultYouChoice");
  },
};
</script>