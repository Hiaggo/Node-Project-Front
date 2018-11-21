<template>
    <v-app id="inspire" >
    <v-navigation-drawer

      dark style="background: #770404"
      permanent
      v-model="drawer"
      fixed
      width ="210"
      app

      >
      <v-list dense>
        <img id="logo" class="my-5" src="@/assets/logo.png" alt="">
        
        <v-list-tile class="mouse-opacidade" @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mouse-opacidade" @click="">
          <v-list-tile-action>
            <v-icon>healing</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >Emergency</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mouse-opacidade" @click="">
          <v-list-tile-action>
            <v-icon>hotel</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Patient</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mouse-opacidade" @click="">
          <v-list-tile-action>
            <v-icon>check_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Discharged</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mouse-opacidade" @click="">
          <v-list-tile-action>
            <v-icon>local_hospital</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Blood Stock</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mouse-opacidade" @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-footer color="#600000" height=53px dark fixed >
          <v-card height="53px" flat tile color="#600000">
            <v-card-text class="pt-2 ml-2">
              <img class="mouse-opacidade" id="social-icon" src="@/assets/facebook.png" alt="">
              <img class="mouse-opacidade" id="social-icon" src="@/assets/instagram.png" alt="">
              <img class="mouse-opacidade" id="social-icon" src="@/assets/twitter.png" alt="">
              <img class="mouse-opacidade" id="social-icon" src="@/assets/cellphone.png" alt="">
            </v-card-text>
          </v-card>
        </v-footer>

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
  #logo {
    width: 81px;
    height: 81px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  #social-icon{
   height: 30px;
   width: 30;
   margin: 0 5px 0 5px;
  }  

  .mouse-opacidade:hover{
      opacity: 0.7;
      background: rgba(0 ,0 ,0, 0.5);
  }
</style>