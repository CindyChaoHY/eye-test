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
                          v-model="account"
                          name="login"
                          label="帳號"
                          type="text"
                          outlined
                        ></v-text-field>
                        <v-text-field
                          v-model="passwd"
                          id="password"
                          name="password"
                          label="密碼"
                          type="password"
                          outlined
                        ></v-text-field>
                        <p v-if="msg" class="red--text">{{ msg }}</p>
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
import axios from 'axios'

export default {
  name: 'Login',
  props: {
    source: String,
  },

  data () {
    return {
      account: '',
      passwd: '',
      msg: ''
    }
  },

  methods: {
    login() {
      let params = {
        account: this.account,
        passwd: this.passwd
      }

      axios.post('/auth', params, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(res => {
        // 登入成功
        console.log(res.data)
        sessionStorage.setItem("authenticated", true)
        this.$router.push('/')
      })
      .catch(error => {
        this.msg = error.response ? error.response.data.message : ''
      })
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
