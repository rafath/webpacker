const chokidar = require('chokidar')

module.exports = {
  resolve: {
    alias: {
      React: 'react',
      ReactDOM: 'react-dom',
    }
  },
  devServer: {
    before: (app, server) => {
      chokidar.watch([
        'config/locales/*.yml',
        'app/views/**/*.haml'
      ]).on('change', () => server.sockWrite(server.sockets, 'content-changed'))
    }
  }
}


// environment.plugins.append("Provide", new webpack.ProvidePlugin({
//   $: 'jquery',
//   jQuery: 'jquery',
//   Popper: ['popper.js', 'default']
// }))
