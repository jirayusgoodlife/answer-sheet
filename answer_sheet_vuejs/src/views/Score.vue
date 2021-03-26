<template>
  <section class="section">
    <div class="container is-widescreen">
      <div class="columns">
        <div class="column is-one-third"></div>
        <div class="column is-one-third has-text-centered">
          <h2 class="is-size-2">Listening Scores : {{ 123 }}</h2>
          <h2 class="is-size-2">Reading Scores : {{ 123 }}</h2>
        </div>
        <div class="column is-one-third"></div>
      </div>
      <hr />
      <div class="columns">
        <div class="column is-half">
          <h1 class="title">Listening Section</h1>
          <div class="columns is-gapless">
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(1, 25)"
                v-bind:key="item.num"
                v-bind:num="item.num"
                choice_type="checkScore"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(26, 50)"
                v-bind:key="item.num"
                v-bind:num="item.num"
                choice_type="checkScore"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(51, 75)"
                v-bind:key="item.num"
                v-bind:num="item.num"
                choice_type="checkScore"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(76, 100)"
                v-bind:key="item.num"
                v-bind:num="item.num"
                choice_type="checkScore"
              ></Choice>
            </div>
          </div>
        </div>
        <div class="divider is-vertical"><i class="fa fa-heart"></i></div>
        <div class="column is-half">
          <h1 class="title">Reading Section</h1>
          <div class="columns is-gapless">
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(101, 125)"
                v-bind:key="item.num"
                v-bind:num="item.num"
                choice_type="checkScore"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(126, 150)"
                v-bind:key="item.num"
                v-bind:num="item.num"
                choice_type="checkScore"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(151, 175)"
                v-bind:key="item.num"
                v-bind:num="item.num"
                choice_type="checkScore"
              ></Choice>
            </div>
            <div class="column is-one-quarter">
              <Choice
                v-for="item in $store.getters.getYouChoice(176, 200)"
                v-bind:key="item.num"
                v-bind:num="item.num"
                choice_type="checkScore"
              ></Choice>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Choice from "../components/choice";
export default {
  components: { Choice },
  name: "Score",
  data() {
    return {
      table_score: [
        { score: 100, listening: 495, reading: 495 },
        { score: 99, listening: 495, reading: 490 },
        { score: 98, listening: 495, reading: 485 },
        { score: 97, listening: 495, reading: 485 },
        { score: 96, listening: 495, reading: 475 },
        { score: 95, listening: 495, reading: 470 },
        { score: 94, listening: 495, reading: 460 },
        { score: 93, listening: 495, reading: 455 },
        { score: 92, listening: 490, reading: 450 },
        { score: 91, listening: 485, reading: 440 },
        { score: 90, listening: 480, reading: 435 },
        { score: 89, listening: 475, reading: 425 },
        { score: 88, listening: 465, reading: 420 },
        { score: 87, listening: 460, reading: 415 },
        { score: 86, listening: 455, reading: 405 },
        { score: 85, listening: 445, reading: 395 },
        { score: 84, listening: 440, reading: 390 },
        { score: 83, listening: 435, reading: 385 },
        { score: 82, listening: 430, reading: 375 },
        { score: 81, listening: 425, reading: 370 },
        { score: 80, listening: 420, reading: 360 },
        { score: 79, listening: 415, reading: 355 },
        { score: 78, listening: 405, reading: 345 },
        { score: 77, listening: 400, reading: 340 },
        { score: 76, listening: 395, reading: 335 },
        { score: 75, listening: 385, reading: 330 },
        { score: 74, listening: 375, reading: 325 },
        { score: 73, listening: 370, reading: 320 },
        { score: 72, listening: 365, reading: 315 },
        { score: 71, listening: 360, reading: 310 },
        { score: 70, listening: 355, reading: 300 },
        { score: 69, listening: 350, reading: 295 },
        { score: 68, listening: 345, reading: 295 },
        { score: 67, listening: 340, reading: 290 },
        { score: 66, listening: 335, reading: 285 },
        { score: 65, listening: 330, reading: 280 },
        { score: 64, listening: 325, reading: 275 },
        { score: 63, listening: 320, reading: 270 },
        { score: 62, listening: 310, reading: 260 },
        { score: 61, listening: 300, reading: 255 },
        { score: 60, listening: 295, reading: 250 },
        { score: 59, listening: 290, reading: 245 },
        { score: 58, listening: 285, reading: 240 },
        { score: 57, listening: 275, reading: 230 },
        { score: 56, listening: 265, reading: 220 },
        { score: 55, listening: 260, reading: 215 },
        { score: 54, listening: 255, reading: 210 },
        { score: 53, listening: 245, reading: 205 },
        { score: 52, listening: 235, reading: 195 },
        { score: 51, listening: 230, reading: 185 },
        { score: 50, listening: 225, reading: 175 },
        { score: 49, listening: 220, reading: 170 },
        { score: 48, listening: 215, reading: 160 },
        { score: 47, listening: 205, reading: 155 },
        { score: 46, listening: 200, reading: 145 },
        { score: 45, listening: 190, reading: 140 },
        { score: 44, listening: 180, reading: 135 },
        { score: 43, listening: 175, reading: 130 },
        { score: 42, listening: 170, reading: 125 },
        { score: 41, listening: 160, reading: 120 },
        { score: 40, listening: 150, reading: 115 },
        { score: 39, listening: 140, reading: 105 },
        { score: 38, listening: 135, reading: 95 },
        { score: 37, listening: 125, reading: 90 },
        { score: 36, listening: 115, reading: 85 },
        { score: 35, listening: 105, reading: 80 },
        { score: 34, listening: 100, reading: 75 },
        { score: 33, listening: 95, reading: 70 },
        { score: 32, listening: 90, reading: 65 },
        { score: 31, listening: 85, reading: 60 },
        { score: 30, listening: 80, reading: 55 },
        { score: 29, listening: 70, reading: 45 },
        { score: 28, listening: 60, reading: 40 },
        { score: 27, listening: 55, reading: 35 },
        { score: 26, listening: 50, reading: 30 },
        { score: 25, listening: 45, reading: 25 },
        { score: 24, listening: 40, reading: 20 },
        { score: 23, listening: 35, reading: 15 },
        { score: 22, listening: 30, reading: 10 },
        { score: 21, listening: 25, reading: 5 },
        { score: 20, listening: 20, reading: 5 },
        { score: 19, listening: 15, reading: 5 },
        { score: 18, listening: 10, reading: 5 },
        { score: 17, listening: 5, reading: 5 },
        { score: 16, listening: 5, reading: 5 },
        { score: 15, listening: 5, reading: 5 },
        { score: 14, listening: 5, reading: 5 },
        { score: 13, listening: 5, reading: 5 },
        { score: 12, listening: 5, reading: 5 },
        { score: 11, listening: 5, reading: 5 },
        { score: 10, listening: 5, reading: 5 },
        { score: 9, listening: 5, reading: 5 },
        { score: 8, listening: 5, reading: 5 },
        { score: 7, listening: 5, reading: 5 },
        { score: 6, listening: 5, reading: 5 },
        { score: 5, listening: 5, reading: 5 },
        { score: 4, listening: 5, reading: 5 },
        { score: 3, listening: 5, reading: 5 },
        { score: 2, listening: 5, reading: 5 },
        { score: 1, listening: 5, reading: 5 },
      ],
    };
  },
  created() {
    if (this.$store.state.you_exams_id == null) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
</style>