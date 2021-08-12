<template>
  <v-container>
    <Header/>
  
    <v-layout align-center justify-center>
      <v-flex xs12 sm10 md10>

        <v-card
          class="mx-auto"

          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="mb-4">
                目前查詢條件：
              </div>
              <div class="mb-4">
                查詢
              </div>

            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-spacer />
            <v-btn
              outlined
              text
              right
            >
              送出查詢
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },

  data () {
    return {

    }
  }

}
</script>