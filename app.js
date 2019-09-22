var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

app.use('/public/', express.static('./public/'))

// 配置模板引擎
app.engine('html', require('express-art-template'));

app.get('/', function (req, res) {
	res.render('index.html', {
		comments: comments
	})
})

// 配置 body-parser 中间件 （插件，专门用来解析表单 POST 请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/post', function (req, res) {
	res.render('post.html')
})


// post请求方式
app.post('/post', function (req, res) {
	var comment = req.body
	comment.dateTime = '2019-9-21 21:21:32'
	comments.unshift(comment)
	res.redirect('/')
})

// 原先 get请求
// app.get('/pinglun', function (req, res) {
// 	var comment = req.query
// 	comment.dateTime = '2019-9-21 21:21:32'
// 	comments.unshift(comment)
// 	res.redirect('/')
// })


app.listen(3000, function () {
	console.log('app is running...')
})