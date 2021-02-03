<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="buttons are-medium is-justify-content-space-between is-hidden">
            <a class="button is-primary">Create Room</a>
            <a class="button is-info">Join Room</a>
          </div>
        </div>
        <div class="column is-4 is-offset-4">
          <table class="table is-bordered is-fullwidth is-hoverable">
              <thead>
                <td>#</td>
                <td>Name</td>
                <td></td>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>TOEIC no</td>
                  <td>
                    <a class="button is-small">
                      <span class="icon is-small">
                        <i class="fas fa-chevron-right"></i>
                      </span>
                    </a>
                    </td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {

  },
  created(){

  }
}
</script>
