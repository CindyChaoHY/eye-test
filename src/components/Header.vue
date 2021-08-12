<template>
  <div style="height: 60px;">
    <v-toolbar class="header" dense>

      <v-toolbar-title>
        <v-btn class="header--btn">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-toolbar-title>

      <v-btn class="header--btn">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn class="header--btn">
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn class="header--btn">
        <v-icon>mdi-star</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn class="header--btn">
        <v-icon>mdi-cog</v-icon>
      </v-btn>

      <v-btn class="header--btn">
        <v-icon>mdi-arrow-expand-right</v-icon>
      </v-btn>

      <v-btn
        icon
        class="header--link"
      >
        登出
      </v-btn>

    </v-toolbar>
  </div>

</template>

<script>
export default {
  data () {
    return {

    }
  }

}
</script>

<style lang="scss">
.header {
  height: 60px !important;
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: #FFD700 !important;

  &--btn {
    width: 45px !important;
    height: 60px !important;
    min-width: 45px !important;
    background: transparent !important;
    box-shadow: none !important;
    margin: 0px !important;

    i {
      font-size: 35px !important;
    }
  }

  &--link {
    width: 40px !important;
    margin: 0px !important;
  }
}

.v-toolbar__content {
  height: 60px !important;
  padding: 0px 16px 0px 0px !important;
}

</style>