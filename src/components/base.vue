<template>
  <v-app style="background-color: #FFFFFF;">
    <v-layout>
      <!-- SIDEBAR -->
      <v-flex xs2>
        <my-sidebar/>
      </v-flex>
      <!-- END SIDEBAR -->
      <v-flex xs10>
        <v-layout column wrap>
          <!-- HEADER -->
          <v-flex>
            <my-header/>
          </v-flex>
          <!-- END HEADER -->
          <!-- WRAPPER -->
          <v-flex>
            <component :is="this.wrapper" />
          </v-flex>
          <!-- END WRAPPER -->
        </v-layout>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  export default {
    data() {  
      return {
        wrapper: null
      };
    },
    computed: {
      loader() {
        return () => System.import(`@/components/` + this.$route.name + `_wrapper`);
      }
    },
  
    mounted() {
      this.$root.$on("updateWrapper", (to) => {
        this.wrapper = () => this.loader();
        }),

        this.loader()
        .then(() => {
          this.wrapper = () => this.loader();
        })
        .catch(() => {
          this.wrapper = () =>
            import ("@/components/home_wrapper");
        });
    }
  };
</script>

<style scoped>
  
</style>