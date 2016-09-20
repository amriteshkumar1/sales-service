var config = {
   context: __dirname + '',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
   entry: './app/app.jsx',
   output: {path: './dist', 
            filename: 'bundle.js'},
      watch: true,      
	
   devServer: {
      inline: true,
      port:8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;