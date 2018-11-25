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
      <v-container>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">List of all patients in the waiting room</span>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider class="mx-2"></v-divider>
      <v-container>
        <v-layout align-center justify-center column fill-height>
            <v-toolbar flat color="white">
              <v-toolbar-title >#</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <v-btn slot="activator" color="primary" dark class="mb-2">New Patient</v-btn>
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
                          <v-text-field v-model="editedItem.calories" label="Age"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.fat" label="Cardio"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.carbs" label="Temperature"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field v-model="editedItem.protein" label="Arrival time"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="patients"
              class="elevation-1"
              id="tabelinha"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.age }}</td>
                <td class="text-xs-right">{{ props.item.cardio }}</td>
                <td class="text-xs-right">{{ props.item.temperature }}</td>
                <td class="text-xs-right">{{ props.item.arrivaltime }}</td>
                <td class="justify-center layout px-0">
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(props.item)"
                  >
                    edit
                  </v-icon>
                  <v-icon
                    small
                    @click="deleteItem(props.item)"
                  >
                    delete
                  </v-icon>
                </td>
              </template>
            </v-data-table>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Full Name',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Age', value: 'age' },
        { text: 'Cardio', value: 'cardio' },
        { text: 'Temperature', value: 'temperature' },
        { text: 'Arrival Time', value: 'arrivaltime' },
        { text: 'Priority', value: 'priority' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      patients: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        age: 0,
        cardio: 0,
        temperature: 0,
        arrivaltime: 0,
        priority: ''
      },
      defaultItem: {
        name: '',
        age: 0,
        cardio: 0,
        temperature: 0,
        arrivaltime: 0,
        priority: ''
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Patient' : 'Edit Patient'
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
        this.patients = []
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

  #tabelinha {
    width: 1077px;
    height: 730px;
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
