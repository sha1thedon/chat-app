const webSocketsServerPort= 8000

const webSocketsServer = require('websocket').server
const http = require('http')
// const wss = new WebSocket.Server({port:8082})

const server = http.createServer()
server.listen(webSocketsServerPort)

console.log('listening on port 8082')

const wsServer = new webSocketsServer({
    httpServer: server
})


const clients = {}

const getUniqueID = () => {
    const s4 = () =>Math.floor((1 + Math.random()) * 0x10000.toString(16).substring(1))
    return s4() + s4() + '-' + s4()
}

wsServer.on('request', function (request){
    let userID = getUniqueID()
    console.log((new Date()) + ' Received a new connection from origin '+ request.origin + '.')

    const connection = request.accept(null, request.origin)
    clients[userID] = connection
    console.log('connected: '+ userID + ' in '+ Object.getOwnPropertyNames(clients))

    connection.on('message', function(message) {
        if (message.type === 'utf8'){
            console.log('Received message: ', message.utf8Data)

            for(const key in clients){
                clients[key].sendUTF(message.utf8Data)
                console.log('sent message to ', clients[key])
            }
        }
    })
})

// wss.on('connection', ws => {
//     console.log('new client connected')

//     ws.on('message', message => {
//         console.log('client has sent ', message)
//         ws.send('message ', message)
//     })

//     ws.on('close', () => {
//         console.log('disconnected')
//     })
// })
// console.log('websocket running')
