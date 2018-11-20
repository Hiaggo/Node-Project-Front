
<template>
  <v-app id="background">
    <v-content >
      <v-container fluid fill-height color="primary">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            
            <v-card flat color="transparent" dark>
              <img id="logo" class="mb-3" src="@/assets/logo.png" alt="">
              <v-card-text>
                <v-form>
                  <v-text-field append-icon="perm_identity" name="login" label="Endereço de E-mail" type="text"></v-text-field>
                  <v-text-field id="password" append-icon="lock" name="password" label="Senha" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn id="btn-login" block color="#00A230"><div id="btn-login-text">Entrar</div></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer
      dark
      height="auto"
    >
      <v-card
        flat
        tile
        class="grey darken-4 lighten-1 white--text text-xs-center"
      >
        <v-card-text class="grey darken-3 pb-2 pt-3">
          <img class="mx-1" src="@/assets/facebook.png" alt="" height=4% width=4% >
          <img class="mx-1" src="@/assets/instagram.png" alt="" height=4% width=4% >
          <img class="mx-1" src="@/assets/twitter.png" alt="" height=4% width=4%>
          <img class="mx-1" src="@/assets/cellphone.png" alt="" height=4% width=4%>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text pt-4">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

      </v-card>
    </v-footer>

  </v-app>

</template>

<script>
  export default {
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
  width: 150px;
  height: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#btn-login {
    width: 426px;
    height: 51px;
    border-radius: 10px;
    text-transform: none;
}
#btn-login-text {
  width: 41px;
  font-family: Arial;
  font-size: 17px;
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
    background: rgb(0,0,0); /* Old browsers */
    background: -moz-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(92,0,9,1) 50%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, rgba(0,0,0,1) 0%,rgba(92,0,9,1) 50%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, rgba(0,0,0,1) 0%,rgba(92,0,9,1) 50%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

</style>
