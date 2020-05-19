const http = require('http')

const hostname = '127.0.0.1'
const port = process.argv[2]

const server = http.createServer((req, res) => {
  const { method, url } = req
  let result = ''

  if (url === '/api/doggo') {
    const doggo = {
      name: 'Firulais',
      age: '3yo',
      color: 'black and white'
    }

    result = JSON.stringify(doggo)
  }
  else if (url === '/api/kitty') {
    const kitty = {
      name: 'Vampirito',
      age: '1yo',
      color: 'gray'
    }

    result = JSON.stringify(kitty)
  }

  if (method === 'GET' && result) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(result)
  } else if (method === 'POST') {
    res.statusCode = 201
    res.setHeader('Content-Type', 'text/plain')
    res.write('Okey dokey with your data \n')
    req.pipe(res)
  } else {
    res.statusCode = 404
    res.end()
  }

})

server.listen(port, hostname, ()=> {
  console.log('Server up and running at port ' + port)
})