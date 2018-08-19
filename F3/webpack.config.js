module.exports ={
	entry:[
	'./app/index.js'] ,
	output:{
		path: 'C:\\Users\\lenovo\\Desktop\\lunbo\\dist',
		filename:'bundle.js'
	},
	devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
            	test:/.(jpg|png)$/,
            	use:['url-loader']
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            },
             {
              test: /\.scss$/,
              use: [
                  {
                      loader: "style-loader"
                  }, {
                      loader: "css-loader"
                  },
                  {
                      loader: "sass-loader"
                  }
              ]},
              {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
          }

        ]
    }
};

