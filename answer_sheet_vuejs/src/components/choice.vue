<template>
  <article class="media">
    <div class="media-left">
      {{ num }}.
    </div>
    <div class="media-content">
      <div class="content">
        <img :src="require('@/assets/img/A-Blank.png')" v-show="pick != 'a'" @click="pickValue('a')">
        <img :src="require('@/assets/img/A-Full.png')" v-show="pick == 'a'">
        &nbsp;
        <img :src="require('@/assets/img/B-Blank.png')" v-show="pick != 'b'" @click="pickValue('b')">
        <img :src="require('@/assets/img/B-Full.png')" v-show="pick == 'b'">
        &nbsp;
        <img :src="require('@/assets/img/C-Blank.png')" v-show="pick != 'c'" @click="pickValue('c')">
        <img :src="require('@/assets/img/C-Full.png')" v-show="pick == 'c'">
        &nbsp;
        <img :src="require('@/assets/img/D-Blank.png')" v-show="pick != 'd'" @click="pickValue('d')">
        <img :src="require('@/assets/img/D-Full.png')" v-show="pick == 'd'">
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