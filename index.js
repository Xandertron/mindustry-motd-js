var Host = `mindustry.io`

var dgram = require(`dgram`)
var buf = new Int8Array(2)
buf[0] = -2
buf[1] = 1
console.log(buf)
socket = dgram.createSocket(`udp4`)
console.log(socket)
socket.send(buf,0,2,6567,Host)

socket.on('message', (msg, rinfo) => {
    console.log(`buffer: ${msg}`)
    console.log(msg)
});

