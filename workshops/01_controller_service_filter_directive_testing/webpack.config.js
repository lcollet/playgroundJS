module.exports = {
  entry : './components/index.js',
  output : {
    filename : 'bookstore.js',
    path : __dirname,
  },
  module : {
    loaders : [
      {
        test : '/\.js$/',
        loader : 'babel',
        exclude : '/node_modules/',
        query : {preset : ['es2015']}
      }
    ]
  }
}
