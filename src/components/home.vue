<template>
    <v-app id="inspire">

    <v-toolbar  height=61px color="#770404" dark extended fixed app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>local_hospital</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>healing</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>hotel</v-icon>
      </v-btn>

      <v-toolbar-title slot="extension" style="text-align:right" class="white--text">

        <v-flex style="background: #383838;">
          <v-card dark height="0px" tile flat color="#212121">
            <v-card-text class="text1">
              ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </v-card-text>
          </v-card>
        </v-flex>

        <v-card dark height=60 tile flat color="#770404">
          <v-card-text class="text-xs-right" style=" font-size: 13px">Welcome ser humaninho<br>IP Address: 192.168.1.1
          </v-card-text>
        </v-card>

      </v-toolbar-title>
    </v-toolbar>


    <v-navigation-drawer
      dark style="background: #770404"
      permanent
      v-model="drawer"
      fixed
      floating
      width="205"
      app
      >

      <v-card height=121px color="#600000">
        <img id="logo" style="margin-left: 55px" src="@/assets/logo.png" alt="">
      </v-card>

      <v-list class="list__tile__title">

        <v-list-tile class="mouse-opacidade">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mouse-opacidade">
          <v-list-tile-action>
            <v-icon>healing</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >Emergency</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mouse-opacidade">
          <v-list-tile-action>
            <v-icon>hotel</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Patient</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mouse-opacidade">
          <v-list-tile-action>
            <v-icon>check_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Discharged</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mouse-opacidade">
          <v-list-tile-action>
            <v-icon>local_hospital</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Blood Stock</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mouse-opacidade">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>



        <v-footer color="#600000" height=112px dark fixed >
          <v-card dark height="110px" width="205px" tile color="#770404">
            <v-card-actions>
              <v-btn block href="/" flat >Log-out</v-btn>
            </v-card-actions>
          </v-card>
        </v-footer>

        <v-footer color="#600000" height=65px dark fixed >
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
        <v-layout align-center justify-center column fill-height>

          <v-flex text-xs-center style="font-size: 20px;">You don’t have to be a doctor to save lives
          </v-flex>

          <v-flex text-xs-center>
          <img  width="436px" height="430px" src="@/assets/help-to-fill.png" alt="">
          </v-flex>

          <v-flex text-xs-center style="font-size: 16px;">Did you know one blood donation can save up to three lives?<br>Do something amazing. Give blood.
          </v-flex>

          <v-btn dark href="/" target="_blank" depressed :loading="loading" id="btn-login" style="width:250px" color="#770404" @click="loader = 'loading'">Become a donator right now</v-btn>

        </v-layout>
      </v-container>
    </v-content>

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

  #btn-login {
    height: 45px;
    border-radius: 7px;
    text-transform: none;
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fefcfc;
  }

  #logo {
    width: 90px;
    height: 90px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 16px;
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
