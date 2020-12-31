const dgram = require(`dgram`)
const pingbuffer = new Int8Array(2)
pingbuffer[0] = -2
pingbuffer[1] = 1

function readString(buffer) {
    var length = buffer[0] & 0xff
    var text = ""
    for (i = 1; i < length+1; i++) {
        text += String.fromCharCode(buffer[i])
    }
    return [text, length+1]
}
exports.getServerInfo = async (address, port) => {
    socket = dgram.createSocket(`udp4`)
    socket.send(pingbuffer, 0, 2, port, address)
    return new Promise(resolve => {
        socket.on('message', (msg, rinfo) => {
            //host
            var str = readString(msg)
            host = str
            msg = msg.subarray(str[1])
            //map
            var str = readString(msg)
            map = str
            msg = msg.subarray(str[1])
            //players
            players = msg.readInt32BE()
            msg = msg.subarray(4)
            //waves
            waves = msg.readInt32BE()
            msg = msg.subarray(4)
            //version
            gameversion = msg.readInt32BE()
            msg = msg.subarray(4)
            //version type
            var str = readString(msg)
            vertype = str
            msg = msg.subarray(str[1])
            //gamemode byte, who knows
            gamemode = msg[0]
            msg = msg.subarray(1)
            //limit??
            limit = msg.readInt32BE()
            msg = msg.subarray(4)
            //description
            var str = readString(msg)
            desc = str
            msg = msg.subarray(str[1])
            //mode name
            var str = readString(msg)
            modename = str
            msg = msg.subarray(str[1])
            var info = {
                host: host[0],
                map: map[0],
                players: players,
                waves: waves,
                gameversion: gameversion,
                vertype: vertype[0],
                gamemode: gamemode,
                limit: limit,
                desc: desc[0],
                modename: modename[0]
            }
            resolve(info)
        })
    })
}