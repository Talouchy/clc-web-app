<template>
    <v-layout ma-0 row wrap class="ice_app_color">
      <!-- flex layout for avatar -->
      <v-flex
        xs12 
        sm8 offset-sm2
        md6 offset-md3
        lg6 offset-lg3
        text-xs-center pb-0 pt-0
        px-3
        py-3
        v-for="i in 5" :key="`1${i}`"
      >
      <v-card elivation-10 class="rounded-corner">
        <v-layout row wrap pa-2 align-center>
          <!-- flex layout for avatar -->
          <v-flex xs4 sm5 pr-2 pt-3 pb-2
            text-xs-right>
            <v-avatar 
              :tile="tile"
              :size="size"
              color="grey lighten-4">
              <img src="https://i.ibb.co/FBCFyC9/00000-PORTRAIT-00000-BURST20180321151620375.jpg" alt="00000-PORTRAIT-00000-BURST20180321151620375">
            </v-avatar>
          </v-flex>

          <!-- flex layout for student name -->
          <v-flex xs8 sm7
            align-self-center
            text-xs-left>
            <v-card flat>
              <v-card-text class="title black--text font-weight-medium pb-0">Hey Khushal</v-card-text>
              <v-card-text class="body-1 font-weight-regular pt-1 grey_font_color--text">January 24, 2019</v-card-text>
            </v-card>
            <!-- Layout for read more button -->
            <v-layout justify-end>
              <v-flex xs12 text-xs-right>
                  <v-btn flat color="" to="/Event_Details">
                    <v-icon left dark>arrow_forward</v-icon>Read more
                  </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
      </v-flex>
    </v-layout>

</template>

<script>
  export default {
    name: 'events',
    data () {
      return {
        tile: false,
        t:true,
        size: 100,
      }
    }
  }
</script>

<style>

</style>
