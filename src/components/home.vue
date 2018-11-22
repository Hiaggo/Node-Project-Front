<template>
    <v-app id="inspire">

    <v-toolbar clipped-left flat height=125px dark color="#600000" fixed app>

      <img id="logo" src="@/assets/logo.png" alt="">
     
      <v-spacer></v-spacer>

      <v-card height=120px color="#300000" flat>
        <flex flex-end>
          <v-btn icon height="15">
            <v-icon>local_hospital</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>healing</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>hotel</v-icon>
          </v-btn>
        </flex>

        <flex>
          <br><br><br>
          <span>Whitehavfasfassadsaden Beach</span><br> 
        </flex>

      </v-card>    
    </v-toolbar>

    <v-navigation-drawer
      dark style="background: #770404"
      permanent
      v-model="drawer"
      fixed
      floating
      width ="205"
      app
      clipped
      >

      <v-list class="list__tile__title">

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

        <v-footer color="#600000" height=70px dark fixed >
          <v-card flat tile color="#600000">
            <v-card-text height=100% class="pt-3 ml-1">
              <img class="mouse-opacidade" id="social-icon" src="@/assets/facebook.png" alt="">
              <img class="mouse-opacidade" id="social-icon" src="@/assets/instagram.png" alt="">
              <img class="mouse-opacidade" id="social-icon" src="@/assets/twitter.png" alt="">
              <img class="mouse-opacidade" id="social-icon" src="@/assets/cellphone.png" alt="">
            </v-card-text>
          </v-card>
        </v-footer>

      </v-list>
    </v-navigation-drawer>

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
<!--
    <v-footer color="#600000" dark fixed app>
      <span class="ml-3 white--text">&copy; 2018</span>
    </v-footer>
-->
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
    width: 90px;
    height: 90px;
    margin-left: 40px;
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