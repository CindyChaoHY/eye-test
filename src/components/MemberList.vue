<template>
  <v-container>
    <Header/>
  
    <v-layout align-center justify-center>
      <v-flex xs12 sm10 md10>

        <v-card
          class="mx-auto card"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="mb-4">
                目前查詢條件：
                <v-row
                  class="search--tag--row"
                >
                  <v-col
                    cols="12"
                    sm="4"
                    md="4"
                    v-for="(textField, i) in textFields"
                    :key="i"
                    class="search--tag"
                  >
                    <v-chip>
                      <v-btn
                        class="close"
                        @click="remove(i)"
                      >
                        <v-icon>mdi-close-thick</v-icon>
                      </v-btn>
                      {{ textField.field }}：{{ textField.value }}
                    </v-chip>
                  </v-col>
                </v-row>
              </div>

              <!-- 查詢條件 -->
              <div class="search">
                查詢
                <v-btn
                  class="add"
                  @click="add"
                >
                  <v-icon>mdi-plus-circle-outline</v-icon>
                </v-btn>
              </div>

              <div
                v-for="(textField, i) in textFields"
                :key="i"
                class="search--row"
              >
                <v-row align="center">
                  <v-layout class="search--condition">
                  <v-col
                    cols="12"
                    sm="3"
                  >
                    <v-select
                      :items="fields"
                      dense
                      outlined
                      v-model="textField.field"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="3"
                  >
                    <v-select
                      :items="operations"
                      dense
                      outlined
                      v-model="textField.operation"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="3"
                  >
                    <v-text-field
                      type="text"
                      outlined
                      v-model="textField.value"
                    ></v-text-field>
                  </v-col>
                </v-layout>
                </v-row>

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

        <Table />
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Table from '@/components/Table.vue'

export default {
  components: {
    Header,
    Table
  },

  data () {
    return {
      textFields: [],
      fields: ['社團', '標籤', '建立時間', '姓名', '手機'],
      operations: ['等於(=)', '小於(<)', '大於(>)']
    }
  },

  methods: {
    add () {
      this.textFields.push({ 
        field: "社團", 
        operation: "等於(=)",
        value: "",
        // field2: "",
        // value2: "",
        // operation2: "",
      })
    },
  
    remove (index) {
        this.textFields.splice(index, 1)
    }
  }

}
</script>

<style lang="scss">
.card {
  margin: 40px;
}

.search {
  align-items: center;
  display: flex;

  &--tag--row {
    padding-top: 10px;
  }

  &--tag {
    padding: 12px !important;

    .v-chip__content {
      margin-left: -12px;
    }
  }

  &--row {
    height: 60px;
    max-height: 60px;
  }

  &--condition {
    .v-input__slot {
      fieldset {
        height: 45px !important;
      }

      .v-text-field__slot {
        height: 45px !important;
      }
    }
  }
}

.close {
  width: 14px !important;
  min-width: 14px !important;
  background: transparent !important;
  box-shadow: none !important;
  margin: 0px !important;

  i {
    font-size: 14px !important;
  }
}

.add {
  width: 45px !important;
  min-width: 45px !important;
  background: transparent !important;
  box-shadow: none !important;
  margin: 0px !important;

  i {
    font-size: 35px !important;
  }
}
</style>