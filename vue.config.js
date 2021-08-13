module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    proxy: "http://130.211.247.58:8088/"
  }
}
