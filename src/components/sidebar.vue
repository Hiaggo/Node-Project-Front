<template>
  <v-navigation-drawer dark permanent width="100%" style="background-color: #750009;">
    <v-toolbar flat color="#630007" height="120px">
      <v-list>
        <v-list-tile>
          <img id="logo" src="@/assets/logo.png" alt>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list dense class="pt-0" color="#750009">
      <v-list-tile
        class="sidebar"
        v-for="item in items"
        :key="item.title"
        :to="item.path"
        active-class=""
        :class="item.path === $route.path ? 'sidebar_highlighted' : ''"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class="sidebar_text">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-footer color="#630007" class="justify-center pl-0" inset app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-navigation-drawer>
</template>

<script>
import Base from "@/components/base";

export default {
  name: "sidebar",
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          path: "/home"
        },
        {
          title: "MTS",
          icon: "question_answer",
          path: "/mts"
        },
        {
          title: "Emergency",
          icon: "healing",
          path: "/emergency"
        },
        {
          title: "Patient",
          icon: "hotel",
          path: "/patient"
        },
        {
          title: "Discharged",
          icon: "check_circle",
          path: "/discharged"
        },
        {
          title: "Blood Stock",
          icon: "local_hospital",
          path: "/bloodstock"
        },
        {
          title: "Profile",
          icon: "settings",
          path: "/profile"
        },
        {
          title: "Logout",
          icon: "chevron_left",
          path: "/logout"
        }
      ],
      right: null
    };
  }
};
</script>

<style scoped>
#logo {
  width: 85px;
  height: 85px;
  margin: 0 auto;
}

.sidebar {
  border-bottom: #630007 1px solid;
}

.sidebar_text {
  font-family: Arial;
  font-size: 15.5px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}

.sidebar_highlighted {
  background-color: #570007 !important;
}
</style>