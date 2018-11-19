
<template>
  <v-app id="background">
    <v-content >
      <v-container fluid fill-height color="primary">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card flat color="transparent" dark>
              <v-card-text>
                <v-form>
                  <v-text-field append-icon="perm_identity" name="login" label="E-mail Address" type="text"></v-text-field>
                  <v-text-field id="password" append-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn id="btn-login" block color="#00A230"><div id="btn-login-text">Log in</div></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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

#btn-login {
    width: 426px;
    height: 51px;
    border-radius: 10px;
    text-transform: none;
}

#btn-login-text {
  width: 41px;
  height: 14px;
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
    background: rgb(0,0,0); /* Old browsers */
    background: -moz-linear-gradient(-45deg, rgba(0,0,0,1) 0%, rgba(92,0,9,1) 50%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, rgba(0,0,0,1) 0%,rgba(92,0,9,1) 50%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, rgba(0,0,0,1) 0%,rgba(92,0,9,1) 50%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

</style>
