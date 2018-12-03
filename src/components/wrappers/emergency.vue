<template>
  <!-- WRAPPER -->
  <v-content class="mt-3">
    <v-container fluid fill-height style="background-color: #FFFFFF;">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat>
            <v-card-text class="header pl-0">List of all patients in the waiting room</v-card-text>
          </v-card>
          <div class="divider mb-5"></div>
        </v-flex>
        <v-flex xs12>
          <div>
            <v-toolbar flat color="#F7F7F7">
              <v-toolbar-title class="header">#</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field v-model="editedItem.age" label="Age"></v-text-field>
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
            <v-data-table :headers="headers" :items="waiting" class="elevation-1">
              <template slot="items" slot-scope="props">
                <td class="text-xs-left texttable">{{ props.item.name }}</td>
                <td class="text-xs-left texttable">{{ props.item.age }}</td>
                <td class="text-xs-left texttable">{{ props.item.heart_rate }}</td>
                <td class="text-xs-left texttable">{{ props.item.temperature }}</td>
                <td class="text-xs-left texttable">{{ props.item.arrival_time }}</td>
                <td class>
                  <div :class="props.item.priority"></div>
                </td>
                <td class="text-xs-center layout px-0">
                  <v-icon small class="pl-3 mr-2" @click="editItem(props.item)">local_hospital</v-icon>
                  <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                  <v-icon small @click="deleteItem(props.item)">delete</v-icon>
                </td>
              </template>
              <template slot="no-data">
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  <!-- END WRAPPER -->
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Full name",
        align: "left",
        class: "grey--text text--lighten-1",
        sortable: false,
        value: "name"
      },
      {
        text: "Age",
        align: "left",
        class: "grey--text text--lighten-1",
        sortable: false,
        value: "age"
      },
      {
        text: "Cardio",
        align: "left",
        class: "grey--text text--lighten-1",
        sortable: false,
        value: "cardio"
      },
      {
        text: "Temperature",
        align: "left",
        class: "grey--text text--lighten-1",
        sortable: false,
        value: "temperature"
      },
      {
        text: "Arrival Time",
        align: "left",
        class: "grey--text text--lighten-1",
        sortable: false,
        value: "arrival_time"
      },
      {
        text: "Priority",
        align: "center",
        class: "grey--text text--lighten-1",
        sortable: false,
        value: "priority"
      },
      {
        text: "Actions",
        align: "left",
        class: "grey--text text--lighten-1",
        sortable: false,
        value: "actions"
      }
    ],
    waiting: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      age: 0,
      heart_rate: "",
      temperature: "",
      arrival_time: "",
      priority: 0
    },
    defaultItem: {
      name: "",
      age: 0,
      heart_rate: "",
      temperature: "",
      arrival_time: "",
      priority: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.waiting = [
        {
          name: "Leonardo Machado",
          age: 22,
          heart_rate: "60bpm",
          temperature: "38ºC",
          arrival_time: "19/11/2018 - 16:11",
          priority: "priority priority-red"
        },
        {
          name: "Teste 1",
          age: 22,
          heart_rate: "60bpm",
          temperature: "38ºC",
          arrival_time: "19/11/2018 - 16:11",
          priority: "priority priority-orange"
        },
        {
          name: "Teste 2",
          age: 22,
          heart_rate: "60bpm",
          temperature: "38ºC",
          arrival_time: "19/11/2018 - 16:11",
          priority: "priority priority-yellow"
        },
        {
          name: "Teste 3",
          age: 22,
          heart_rate: "60bpm",
          temperature: "38ºC",
          arrival_time: "19/11/2018 - 16:11",
          priority: "priority priority-green"
        },
        {
          name: "Teste 3",
          age: 22,
          heart_rate: "60bpm",
          temperature: "38ºC",
          arrival_time: "19/11/2018 - 16:11",
          priority: "priority priority-blue"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.waiting.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.waiting.indexOf(item);
      confirm("Are you sure you want to delete this person?") &&
        this.waiting.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.waiting[this.editedIndex], this.editedItem);
      } else {
        this.waiting.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style scoped>
.priority {
  width: 20px;
  height: 20px;
  margin: 0 auto;
}

.priority-red {
  background-color: #ff0000;
}

.priority-orange {
  background-color: #ff7e00;
}

.priority-yellow {
  background-color: #ffea00;
}

.priority-green {
  background-color: #199e31;
}

.priority-blue {
  background-color: #0081b8;
}


.header {
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

.texttable {
  font-family: Arial;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #8a8888;
}
</style>