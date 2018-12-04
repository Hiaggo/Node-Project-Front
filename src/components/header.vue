<template>
  <v-card flat tile height="120px" color="#750009">
    <v-layout align-end justify-space-between column>
      <v-flex>
        <v-card width="130px" height="40px" class="mr-5" flat tile color="transparent">
          <v-card-text>
            <v-icon dark class="mx-1">local_hospital</v-icon>
            <v-icon dark class="mx-1">healing</v-icon>
            <v-icon dark class="mx-1">hotel</v-icon>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card dark width="300px" height="200px" class="mr-5" flat tile color="transparent">
          <v-card-text>
            <v-card-text>Welcome {{ firstName + ' ' + lastName }}<br>Role: {{ role }}</v-card-text>

                   
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
       role: ""
    };
  },
  created() {
    const USER_ENDPOINT = "http://localhost:3000/api/user/find";
    const bearer = "Bearer " + localStorage.getItem("user-token");
    let self = this;

    axios
      .post(
        USER_ENDPOINT,
        {},
        {
          headers: { authorization: bearer }
        }
      )
      .then(function(response) {
        self.firstName = response.data.data.firstName;
        self.lastName = response.data.data.lastName;
        self.role = response.data.data.role;
      })
      .catch(function(error) {
        console.log(error);
        console.log("error");
        //console.log("Error on Authentication");
        //console.log(error);
      });
  }
};
</script>

<style scoped>
</style>