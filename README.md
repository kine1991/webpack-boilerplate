* css-loader - импортирует main.css в main.js
* css-loader - загружает css в DOM (inject into DOM)

* -  HtmlWebpackPlugin - создает dist/index.htnl 

```bash
var HtmlWebpackPlugin = require('html-webpack-plugin');


plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
})],
```


* -  html-loader - обязывает загружать  файлы прикрученные к html ?  (By default every local <img src="image.png"> is required (require('./image.png')). )

