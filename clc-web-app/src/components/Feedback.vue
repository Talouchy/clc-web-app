<template>
  <v-layout row wrap>
    <v-flex md12>
      <v-layout align-content-center row wrap class="rust_app_color lighten-1" pa-2>
        <!-- flex layout for feedback title -->
        <v-flex>
          <v-card flat class="rust_app_color lighten-1">
            <v-card-text class=" text-md-center text-sm-center headline white--text font-weight-medium">
              Please send us your feedback
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- layout for feedback textarea -->
    </v-flex>
    <v-flex
      md6 offset-md3
      sm10 offset-sm1
      xs10 offset-xs1
      text-xs-center pb-0 pt-0 mt-5
      >
      <v-textarea
        outline
        label="Feedback"
        value=""
        placeholder="Write your feedback here..."
        color="purple darken-2"
        height="300px"
      ></v-textarea>
    </v-flex>
    <v-flex
      xs4 offset-xs7
      sm3 offset-sm9
      md3 offset-md8
      lg3 offset-lg8
      xl3 offset-xl9
      >
      <v-btn
        round
        color="success"
        dark
      >
        Send Feedback
      </v-btn>
    </v-flex>

  </v-layout>
</template>

<script>
  export default {
    name: 'feedback',
    data: () => ({
    })
  }
</script>