<template>
  <v-app id="background">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card flat id="wrapper" color="transparent">
              <img id="logo" class="mb-5" src="@/assets/logo.png" alt>
              <v-form>
                <v-text-field solo autocomplete="off" append-icon="perm_identity" name="login" label="E-mail Address" type="text"></v-text-field>
                <v-text-field solo append-icon="lock" name="password" label="password" type="password"></v-text-field>
              </v-form>
              <v-btn href="home" depressed :loading="loading" id="btn-login" class="px-0" block color="#00A230" @click="loader = 'loading'">Log in</v-btn>
  
              <v-card-text class="text1 text-xs-center">The blood you donate gives someone another chance at life.</v-card-text>
              <v-card-text class="text2 text-xs-center py-0">Give the gift of life</v-card-text>
              <v-card-text class="text3 text-xs-center">Donate blood</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  
    <v-footer height="auto">
      <v-layout justify-center row wrap>
        <v-flex xs12>
          <v-card style="background: #383838;" flat tile class="lighten-1 white--text text-xs-center">
            <v-card-text>
              <img class="social-icon" src="@/assets/facebook.png" alt>
              <img class="social-icon" src="@/assets/instagram.png" alt>
              <img class="social-icon" src="@/assets/twitter.png" alt>
              <img class="social-icon" src="@/assets/cellphone.png" alt>
            </v-card-text>
          </v-card>
        </v-flex>
  
        <v-flex xs12>
          <v-card color="#212121" height="220px" tile flat>
            <v-container>
              <v-layout justify-space-between>
                <v-flex md4 xs12>
                  <v-card color="transparent" flat>
                    <v-card-text class="footer_header text-xs-left">About us</v-card-text>
                    <v-card-text class="footer_text text-xs-left pt-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                      book.</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex md4 xs12>
                  <v-card color="transparent" flat>
                    <v-card-text class="footer_header text-xs-left">Our agency</v-card-text>
                    <v-card-text class="footer_text text-xs-left pt-0">Av. Gal. Milton Tavares de Souza, s/nº
                      <br>São Domingos - Niterói - RJ
                      <br>CEP: 24210-346
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex md4 xs12>
                  <v-card color="transparent" flat>
                    <v-card-text class="footer_header text-xs-left">Contact Us</v-card-text>
                    <v-card-text class="footer_text text-xs-left pt-0">Cellphone: (21)92222-2011
                      <br>Whatsapp: (21)91111-4022
                      <br>
                      <br>contact@id.uf.br
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
  
        <v-flex xs12>
          <v-card color="#151515" height="27px"></v-card>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        loader: null,
        loading: false
      };
    },
    watch: {
      loader() {
        const l = this.loader;
        this[l] = !this[l];
  
        setTimeout(() => (this[l] = false), 3000);
  
        this.loader = null;
      }
    }
  };
</script>

<style scoped>
  #logo {
    width: 120px;
    height: 120px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  .social-icon {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    opacity: 0.5;
    filter: alpha(opacity=50);
  }
  
  .social-icon:hover {
    cursor: pointer;
    opacity: 1;
    filter: alpha(opacity=100);
  }
  
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
  
  #background {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,5c0009+50,000000+100 */
    background: rgb(0, 0, 0);
    /* Old browsers */
    background: -moz-linear-gradient( -45deg, rgba(0, 0, 0, 1) 0%, rgba(92, 0, 9, 1) 50%, rgba(0, 0, 0, 1) 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient( -45deg, rgba(0, 0, 0, 1) 0%, rgba(92, 0, 9, 1) 50%, rgba(0, 0, 0, 1) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient( 135deg, rgba(0, 0, 0, 1) 0%, rgba(92, 0, 9, 1) 50%, rgba(0, 0, 0, 1) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#000000', GradientType=1);
    /* IE6-9 fallback on horizontal gradient */
  }
  
  
  /* Painting login labels text  */
  
  .v-input>>>input {
    color: #505050 !important;
  }
  
  .v-input>>>* {
    border-radius: 7px !important;
  }
  
  
  /* Painting login icons when click on it  */
  
  .primary--text>>>.v-icon {
    color: #4f0101 !important;
  }
  
  
  /* Painting login icons when label have any value  */
  
  .v-input--is-label-active>>>.v-icon {
    color: #4f0101 !important;
  }
  
  .text1 {
    font-family: Arial;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
  
  .text2 {
    font-family: Arial;
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
  
  .text3 {
    font-family: Arial;
    font-size: 15.5px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
  
  .footer_header {
    font-family: Arial;
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
  
  .footer_text {
    font-family: Arial;
    font-size: 13.5px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #cec6b2;
  }
  
  .Line-Separator {
    width: 2px;
    height: 171px;
    background-color: #383838;
  }
  
  #wrapper {
    max-width: 426px;
    margin: auto;
  }
</style>