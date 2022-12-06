import express, {json} from 'express'
import cors from 'cors'

const app = express()
app.use(json())
app.use(cors())
let roomList = []
let messengerList = []

let events = []
const maxEvents= 100



const WebSocket = require('ws')

const wss = new WebSocket.Server({port: 8082})

console.log('listening on port 8082')

const getRandomID = () => Math.random().toString(36).slice(2,7).toUpperCase()
let currentRoomID = getRandomID()

wss.on('connection', ws => {
    console.log('New client connected')

    // ws.on('join-lobby', lobbyID => {
    //     if(lobbies.includes(lobbyID)){
    //         ws.join(lobbyID)
            
    //         wss.clients.forEach(function each(client) {
    //             client.send(lobbyID.toString())
            
    //         })
    //     }
    // })

    ws.on('message', data => {
        const receivedObject = JSON.parse(data)
        console.log(`client has sent:${data}`)

        if(receivedObject.type === 'createRoom'){
            console.log('createRoom message')
            const newRoomObj = {
                roomID: ++currentRoomID,
                chatState: {
                    messengerList: []
                }
            }

            newRoomObj.chatState.messengerList.push(receivedObject.player)
            roomList.push(newRoomObj)
            const sendOutRoomObj = {
                type: 'newRoomCreated',
                roomID: newRoomObj.roomID,
                allChatStates: roomList
            }
            console.log('createRoom: sending to client ', sendOutRoomObj)
            ws.send(JSON.stringify(sendOutRoomObj))
        }
        else if(receivedObject.type === 'joinRoom') {
            console.log('joinRoom message: received')
            roomList.forEach(room =>{
                console.log('joinRoom message: room.roomID = ', room.roomID, ' receivedObject.roomID = ', receivedObject.roomID)
                if(room.roomID.toString() === receivedObject.roomID.toString())
                {
                    room.chatState.playerList.push(receivedObject.player)
                }
            })

            const sendOutRoomObj = {
                type: 'updateRoom',
                allChatStates: roomList
            }
            wss.clients.forEach(function each(client) {
                client.send(JSON.stringify(sendOutRoomObj))
                client.send(data.toString())
                    
            })


            roomList.forEach(room => {
                if(room.roomID.toString() === receivedObject.roomID.toString()){
                    const startGameObj = {
                        type: 'startGame',
                        roomID: room.roomID,
                        allChatStates: roomList //TODO we can send only the current room
                    }

                    wss.clients.forEach(function each (client) {
                        console.log('joinRoom message: Server sending message', startGameObj)
                        client.send(JSON.stringify(startGameObj))
                    })
                }
            })
        }

        
        const str = data.toString()

        if(str==='button'){
            ws.send('button added')
        }
    })
    ws.on('close', () => {
        console.log('Client disconnected :(')
    })
})
