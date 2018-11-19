<template>
<<<<<<< HEAD
  <v-layout justify-space-around>
    <v-icon small> mdi_outline_home</v-icon>

    <h1>{{ msg }}</h1>
        <router-link to="/">Log me out!</router-link>

  </v-layout>
  
=======
    <v-app id="inspire">
    <v-navigation-drawer
      dark class ="primary"
      permanent
      v-model="drawer"
      fixed
      app
      >
      <v-list dense>
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio="3.0"></v-img>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>healing</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Emergency</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>hotel</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Patient</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>check_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Discharged</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>local_hospital</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Blood Stock</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="#770404" fixed app>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="#600000" dark fixed app>
      <span class="ml-3 white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
>>>>>>> f01425fae5a4dc5d683c1f04788f7833d7448719
</template>



<script>
    export default {
        name: 'home',
        data: () => ({
            drawer: null
        }),

        props: {
            source: String
        }
    }
    
</script>

<style scoped>
</style>