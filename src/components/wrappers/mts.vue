<template>
  <!-- WRAPPER -->
  <v-content class="mt-3">
    <v-container fluid fill-height style="background-color: #FFFFFF;">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat>
            <v-card-text id="header" class="pl-0">Manchester Triage System</v-card-text>
          </v-card>
          <div class="divider mb-5"></div>
        </v-flex>
        <v-flex xs12>
          <v-textarea
            solo
            auto-grow
            clearable
            counter="500"
            name="input-7-4"
            label="Type here..."
            value
            flat
            class="elevation-1 textarea mb-5"
          ></v-textarea>
        </v-flex>

        <v-flex xs12>
          <v-layout justify-space-between row>
            <v-flex xs4>
              <v-card color="transparent" flat width="350px">
                <v-card-text class="subheader pl-0">Patient:</v-card-text>
                <v-text-field label="Fullname" outline></v-text-field>
                <v-text-field label="birthday" outline></v-text-field>
                <v-radio-group v-model="radios" :mandatory="false">
                  <v-radio label="Male" value="male"></v-radio>
                  <v-radio label="Female" value="female"></v-radio>
                </v-radio-group>
              </v-card>
            </v-flex>

            <v-flex xs4>
              <v-card color="transparent" flat width="350px">
                <v-card-text class="subheader pl-0">Nurse:</v-card-text>
                <v-text-field label="Temperature" outline></v-text-field>
                <v-text-field label="Heart Rate" outline></v-text-field>
              </v-card>
            </v-flex>

            <v-flex xs4>
              <v-card color="transparent" flat>
                <v-card-text class="subheader pl-0">Classification:</v-card-text>
                <v-checkbox v-model="ex4" label="Non-Urgent" color="blue" value="blue" hide-details></v-checkbox>
                <v-checkbox v-model="ex4" label="Standard" color="green" value="green" hide-details></v-checkbox>
                <v-checkbox v-model="ex4" label="Urgent" color="yellow" value="yellow" hide-details></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Very Urgent"
                  color="orange"
                  value="orange"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Immediate Resuscitation"
                  color="red"
                  value="red"
                  hide-details
                ></v-checkbox>
              </v-card>
            </v-flex>
          </v-layout>
          <div style="width: 100% !important;" class="divider mb-2"></div>
        </v-flex>
        <v-flex xs12>
          <v-card flat class="text-xs-right">
            <v-btn color="#00A230" class="btn-mts" href="/" target="_blank" depressed>Register</v-btn>
              <v-btn color="#B20009" class="btn-mts" href="/" target="_blank" depressed>Cancel</v-btn>
          </v-card>
          
              
          
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  <!-- END WRAPPER -->
</template>

<script>
</script>

<style scoped>
#header {
  font-family: Arial;
  font-size: 22px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6c6c6c;
}

.divider {
  width: 400px;
  height: 1px;
  background-color: #6a0000;
}

.textarea {
  font-family: Arial;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
}

.subheader {
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6c6c6c;
}

.btn-mts {
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fefcfc !important;
  border-radius: 7px;
  width: 150px;
}
</style>