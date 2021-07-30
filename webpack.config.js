module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    clean: true,
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
}
