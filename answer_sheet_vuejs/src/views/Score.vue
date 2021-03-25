<template></template>

<script>
export default {
  name: "Score",
  created() {
    if (this.$store.state.you_exams_id == null) {
      this.$router.push("/");
    }
    
  },
};
</script>

<style scoped>
</style>