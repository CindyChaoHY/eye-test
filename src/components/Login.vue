<template>
  <v-app id="inspire">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>

              <v-card class="elevation-12 card">
                <v-card-title class="justify-center login--title">系統登入</v-card-title>

                <v-card-text>
                  <v-form>
                    <v-row justify='center' align='center'>
                      <v-col
                        cols="12"
                        sm="8"
                        md="8"
                      >
                        <v-text-field
                          name="login"
                          label="帳號"
                          type="text"
                          outlined
                        ></v-text-field>
                        <v-text-field
                          id="password"
                          name="password"
                          label="密碼"
                          type="password"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    class="login--btn"
                    @click="login"
                  >
                    登入
                  </v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-card>

            </v-flex>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  props: {
    source: String,
  },

  methods: {
    login() {
      let auth = true

      if (auth) {
        this.$router.push('/')
      } else {
        console.log('fail')
      }
    }
  }
}
</script>

<style lang="scss">
.card {
  padding: 10px;
}

.login--title {
  font-size: 25px !important;
  padding: 30px !important;
}

.login--btn {
  color: rgb(147, 112, 219) !important;
  background: #fff !important;
  border: 1px solid rgb(147, 112, 219);
  box-shadow: none !important;
}
</style>
