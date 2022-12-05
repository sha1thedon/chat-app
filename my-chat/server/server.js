// const webSocketsServerPort= 8000

// const webSocketsServer = require('websocket').server
// const http = require('http')
// // const wss = new WebSocket.Server({port:8082})

// const server = http.createServer()
// server.listen(webSocketsServerPort)


// const wsServer = new webSocketsServer({
//     httpServer: server
// })

const WebSocket = require('ws')

const wss = new WebSocket.Server({port: 8082})

console.log('listening on port 8082')



wss.on('connection', ws => {
    console.log('New client connected')

    ws.on('message', data => {
        console.log(`client has sent:${data}`)

        wss.clients.forEach(function each(client) {
            client.send(data.toString())
        
        })
        const str = data.toString()

        if(str==='button'){
            ws.send('button added')
        }
    })
    ws.on('close', () => {
        console.log('Client disconnected :(')
    })
})
