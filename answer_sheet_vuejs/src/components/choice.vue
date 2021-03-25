<template>
  <article class="media">
    <div class="media-left">
      {{ num }}.
    </div>
    <div class="media-content">
      <div class="content">
        <img :src="require('@/assets/img/A-Blank.png')" v-show="pick != 'A'" @click="pickValue('A')">
        <img :src="require('@/assets/img/A-Full.png')" v-show="pick == 'A'">
        &nbsp;
        <img :src="require('@/assets/img/B-Blank.png')" v-show="pick != 'B'" @click="pickValue('B')">
        <img :src="require('@/assets/img/B-Full.png')" v-show="pick == 'B'">
        &nbsp;
        <img :src="require('@/assets/img/C-Blank.png')" v-show="pick != 'C'" @click="pickValue('C')">
        <img :src="require('@/assets/img/C-Full.png')" v-show="pick == 'C'">
        &nbsp;
        <img :src="require('@/assets/img/D-Blank.png')" v-show="pick != 'D'" @click="pickValue('D')">
        <img :src="require('@/assets/img/D-Full.png')" v-show="pick == 'D'">
      </div>
    </div>
    <div class="media-right">
    </div>
  </article>
</template>

<script>
export default {
  name: "choice",
  props: {
    num: {
      type: Number,
      default() {
        return 1
      }
    },
    choice_type: {
      type: String,
      default: 'youChoice' // youChoice, keyAnswer
    }
  },
  computed: {
    pick() {
      if (this.choice_type === 'youChoice') {
        return this.$store.getters.getYouChoicePick(this.num)
      }
    }
  },
  methods: {
    pickValue(v) {
      if (this.choice_type === 'youChoice') {
        this.$store.dispatch('pickYouChoice', {num: this.num, pick: v})
      }
    }
  }
}
</script>

<style scoped>
.media-left {
  margin-right: 0.5rem;
}

.media-content > .content {
  white-space: nowrap;
}
</style>