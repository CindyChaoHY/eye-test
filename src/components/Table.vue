<template>
  <!-- Vuetify data tabel -->
  <v-data-table
    :headers="headers"
    :items="memberList"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
        class="table--bar"
      >
        <v-toolbar-title>會員列表</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              outlined
              text
              class="table--btn"
            >
              匯入
            </v-btn>
            <v-btn
              outlined
              text
              class="table--btn"
            >
              匯出
            </v-btn>
            <v-btn
              outlined
              text
              class="table--btn"
            >
              欄位設定
            </v-btn>
            <v-btn
              outlined
              text
              class="table--btn"
              v-bind="attrs"
              v-on="on"
            >
            <!-- 
              v-bind="attrs"
              v-on="on"
            -->
              新增
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="姓名"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.phone"
                      label="手機"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.club"
                      label="社團"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.tag"
                      label="標籤"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.time"
                      label="建立時間"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                儲存
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                取消
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">確定要刪除嗎？</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">確定</v-btn>
              <v-btn color="blue darken-1" text @click="closeDelete">取消</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: '姓名',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: '手機', value: 'phone' },
        { text: '社團', value: 'club' },
        { text: '標籤', value: 'tag' },
        { text: '建立時間', value: 'time' },
        { text: '', value: 'actions', sortable: false },
      ],
      memberList: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        phone: 0,
        club: 0,
        tag: 0,
        time: 0,
      },
      defaultItem: {
        name: '',
        phone: 0,
        club: 0,
        tag: 0,
        time: 0,
      },
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新增' : '編輯'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.memberList = [
        {
          name: 'Leo',
          phone: '0987654321',
          club: '華山派',
          tag: '愛唱歌',
          time: '2021-07-12 18:26:3',
        },
        {
          name: 'Fish',
          phone: '0912345678',
          club: '明教',
          tag: '個性孤僻/獨居',
          time: '2020-10-11 19:25:11',
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.memberList.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.memberList.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.memberList.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.memberList[this.editedIndex], this.editedItem)
      } else {
        this.memberList.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style lang="scss">
.table--bar .v-toolbar__content {
  padding: 10px 10px !important;
}

.table--btn {
  background: transparent !important;
  box-shadow: none !important;
  margin: 0px 5px !important;
  border: 1px solid #000;
}
</style>