<template>
        <div class="column is-4 is-offset-4">
          <table class="table is-bordered is-fullwidth is-hoverable">
              <thead>
                <td>#</td>
                <td>Name</td>
                <td></td>
              </thead>
              <tbody>
                <tr v-for="(value, index) in exams" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ value.name }}</td>
                  <td>
                    <a class="button is-small" @click="takeExam(index)">
                      <span class="icon is-small">
                        <i class="fas fa-chevron-right"></i>
                      </span>
                    </a>
                    </td>
                </tr>
              </tbody>
          </table>
        </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {

  },
  computed: {
    exams() {
      return this.$store.state.exams
    }
  },
  methods: {
    takeExam(index){
      this.$store.dispatch('setExamId',index)            
      this.$store.state.title =this.$store.state.exams[index]['name']
      this.$store.dispatch('setKey',this.$store.state.exams[index]['key'])
      this.$router.push('/do-exam')
    }
  },
  created(){
    this.$store.state.is_show_back = false
    this.$store.state.title = 'Select Exam'
    this.$store.dispatch('bindExams')
  },
}
</script>
