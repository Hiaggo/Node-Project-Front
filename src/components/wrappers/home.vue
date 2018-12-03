<template>
  <!-- WRAPPER -->
  <v-content class="mt-3">
    <v-container fluid fill-height style="background-color: #FFFFFF;">
      <v-layout align-center justify-center column fill-height>
        <v-flex>
          <div
            text-xs-center
            style="font-size: 22px; color: #6c6c6c; font-weight: bold;"
          >You don’t have to be a doctor to save lives</div>
        </v-flex>

        <v-flex>
          <img class="my-5" height="430px" width="436px" src="@/assets/help-to-fill.png" alt>
        </v-flex>

        <v-flex>
          <div id="text2">Did you know one blood donation can save up to three lives?</div>
          <div id="text2" class="my-3 text-xs-center">Do something amazing. Give blood.</div>
        </v-flex>
        <v-flex>
          <v-btn
            id="btn-donator"
            href="http://www.prosangue.sp.gov.br/home/Default.html"
            target="_blank"
            depressed
          >Become a donator right now</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

  <!-- END WRAPPER -->
</template>

<script>
</script>

<style scoped>
#btn-donator {
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
  background-color: #b2000d;
}

#text2 {
  font-family: Arial;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6c6c6c;
}
</style>