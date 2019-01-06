<template>
  <v-app>
    <!-- Toolbar -->
    <v-container>
      <v-component>
        <Toolbar/>
      </v-component>
    </v-container>

    <!-- Footer -->
    <v-component>
      <Footer/>
    </v-component>
  </v-app>
</template>

<script>
import Toolbar from "./components/toolbar/toolbar"
import Footer from "./components/footer/footer"
export default {
  name: 'App',
  components: {
    Toolbar,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
