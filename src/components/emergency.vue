<template>
    <v-app id="inspire">
      
    <v-toolbar  height=61px color="#770404" dark extended fixed app>
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

        <v-list-tile router to="/home" class="mouse-opacidade" @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider id="divider"></v-divider>

        <v-list-tile class="mouse-opacidade-off" @click="">
          <v-list-tile-action>
            <v-icon>healing</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title 
            router
            to="/emergency">
              Emergency
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider id="divider"></v-divider>

        <v-list-tile class="mouse-opacidade" @click="">
          <v-list-tile-action>
            <v-icon>hotel</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Patient</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider id="divider"></v-divider>

        <v-list-tile class="mouse-opacidade" @click="">
          <v-list-tile-action>
            <v-icon>check_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Discharged</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider id="divider"></v-divider>

        <v-list-tile class="mouse-opacidade" @click="">
          <v-list-tile-action>
            <v-icon>local_hospital</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Blood Stock</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider id="divider"></v-divider>

        <v-list-tile class="mouse-opacidade" @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>            
        <v-divider id="divider"></v-divider>



        <v-footer color="#600000" height=112px dark fixed >
          <v-card dark router to="/" class="mouse-opacidade-logout" height="110px" width="205px" tile color="#770404">
            <v-card-actions style="margin-left: 57px; margin-top: 4px; font-weight: bold; font-size: 15px; font-family: Arial">
              LOG-OUT
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
        <v-layout ml-4 mr-4 mt-2justify-center column fill-height>
          <v-flex style=" font-size: 19px; color: #6c6c6c; font-weight: bold;";>List of patients in the waiting room:
          </v-flex>

          <v-flex xs11>
            <v-toolbar height=55px flat color="#e0d8ce">
              <v-toolbar-title>My CRUD</v-toolbar-title>
              <v-divider
                class="mx-2"
                inset
                vertical
              ></v-divider>
              
              <v-card-title >
                <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Search Patient"
                  single-line
                  hide-details
                  solo
                  flat
                ></v-text-field>
              </v-card-title>
              <v-spacer></v-spacer>

              <v-dialog v-model="dialog" max-width="500px">
                <v-btn slot="activator" depressed color="grey lighten-4" class="mb-2">New Patient</v-btn>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.name" label="Patient name"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.age" label="Age"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.cardio" label="Cardio (bpm)"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.temperature" label="Temperature (ºC)"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                          <v-text-field v-model="editedItem.time" label="Arrival Time (00/00/2000 - 00:00)"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#e0d8ce" @click="close">Cancel</v-btn>
                    <v-btn color="#e0d8ce" @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
            
            <v-data-table
              :headers="headers"
              :items="patients"
              :search="search"
              class="elevation-1"
              prev-icon="keyboard_arrow_left"
              next-icon="keyboard_arrow_right"
              sort-icon="keyboard_arrow_down"
              page-icon="keyboard_arrow_down"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-center">{{ props.item.age }}</td>
                <td class="text-xs-right">{{ props.item.cardio }}</td>
                <td class="text-xs-center">{{ props.item.temperature }}</td>
                <td class="text-xs-right">{{ props.item.time }}</td>
                <td class="justify-center layout px-0">
                  
                  <v-icon small class="mr-2" @click="hopitalItem(props.item)">
                    local_hospital
                  </v-icon>
                  <v-icon small class="mr-2" @click="editItem(props.item)">
                    edit
                  </v-icon>
                  <v-icon small @click="deleteItem(props.item)">
                    delete
                  </v-icon>
                </td>
              </template>
              <template slot="footer">
                  <td :colspan="headers.length">
                    <v-layout justify-space-around row>  
                      <v-card-action >
                        <v-icon style="background: #388E3C;" flat>n
                        </v-icon>
                        - Can wait forever and ever
                      </v-card-action>

                      <v-card-action>
                        <v-icon style="background: #FBC02D;" flat>n
                        </v-icon>
                        - Moderate risk of life
                      </v-card-action>
                      
                      <v-card-action>
                        <v-icon style="background: #B71C1C;" flat>n
                        </v-icon>
                        - RIsk of imminent death
                      </v-card-action>

                    </v-layout>
                  </td>
              </template>
              <template slot="no-data">
                <v-btn color="#e0d8ce" @click="initialize">Reset</v-btn>
              </template>
              
              <v-alert slot="no-results" :value="true" color="error" icon="warning">Your search for "{{ search }}" found no results.
              </v-alert>

            </v-data-table>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      search: '',
      headers: [
        {
          text: 'Patient Full Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Age', value: 'age' },
        { text: 'Cardio (bpm)', value: 'cardio' },
        { text: 'Temperature (ºC)', value: 'temperature' },
        { text: 'Arrival Time', value: 'time' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      patients: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        age: 0,
        cardio: 0,
        temperature: 0,
        time: 0
      },
      defaultItem: {
        name: '',
        age: 0,
        cardio: 0,
        temperature: 0,
        time: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.patients = [
          {
            name: 'Leonardo Machado',
            age: 24,
            cardio: 6.0,
            temperature: 24,
            time: 4.0
          },
          {
            name: 'Ice cream sandwich',
            age: 237,
            cardio: 9.0,
            temperature: 37,
            time: 4.3
          },
          {
            name: 'Eclair',
            age: 237,
            calories: 262,
            cardio: 16.0,
            temperature: 23,
            time: 6.0
          },
          {
            name: 'Cupcake',
            age: 237,
            calories: 305,
            cardio: 3.7,
            temperature: 67,
            time: 4.3
          },
          {
            name: 'Gingerbread',
            age: 237,
            calories: 356,
            cardio: 16.0,
            temperature: 49,
            time: 3.9
          },
          {
            name: 'Jelly bean',
            age: 237,
            calories: 375,
            cardio: 0.0,
            temperature: 94,
            time: 0.0
          },
          {
            name: 'Lollipop',
            age: 237,
            calories: 392,
            cardio: 0.2,
            temperature: 98,
            time: 0
          },
          {
            name: 'Honeycomb',
            age: 237,
            calories: 408,
            cardio: 3.2,
            temperature: 87,
            time: 6.5
          },
          {
            name: 'Donut',
            age: 237,
            calories: 452,
            cardio: 25.0,
            temperature: 51,
            time: 4.9
          },
          {
            name: 'KitKat',
            age: 237,
            calories: 518,
            cardio: 26.0,
            temperature: 65,
            time: 7
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.patients.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.patients.indexOf(item)
        confirm('Are you sure you want to delete this patient?') && this.patients.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.patients[this.editedIndex], this.editedItem)
        } else {
          this.patients.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>

<style scoped>
  #divider{
    border-color: #5e0000;
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

  .mouse-opacidade-logout:hover{
      opacity: 0.4;
      background: rgba(0 ,0 ,0, 0.5);
  }

  .mouse-opacidade-off{
      opacity: 0.8;
      background: rgba(0 ,0 ,0, 0.3);
  }

</style>