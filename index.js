var Host = `mindustry.io`

var dgram = require(`dgram`)
var buf = new Int8Array(2)
buf[0] = -2
buf[1] = 1
console.log(buf)
socket = dgram.createSocket(`udp4`)
console.log(socket)
socket.send(buf,0,2,6567,Host)

function readString(buf) {
    var length = buf[0] & 0xff
    //console.log(length)
    var text = ""
    for (i = 1; i < length+1; i++) {
        //console.log(i, buf[i])
        text += String.fromCharCode(buf[i])
    }
    //console.log(text)
    return [text, length+1]
}

socket.on('message', (msg, rinfo) => {
    //console.log(`buffer: ${msg}`)
    //console.log(msg[0].toString())
    var str = readString(msg)
    console.log(str)
    msg = msg.subarray(str[1])
    var str = readString(msg)
    console.log(str)
    msg = msg.subarray(str[1])
    console.log(msg.readInt32BE())
    //var map = readString(msg,host[1])
    
    //console.log(`${msg}`)
    console.log(msg)

});

/*
private static String readString(ByteBuffer buffer){
    short length = (short)(buffer.get() & 0xff);
    byte[] bytes = new byte[length];
    buffer.get(bytes);
    return new String(bytes, charset);
}



public static Host readServerData(int ping, String hostAddress, ByteBuffer buffer){
        String host = readString(buffer);
        String map = readString(buffer);
        int players = buffer.getInt();
        int wave = buffer.getInt();
        int version = buffer.getInt();
        String vertype = readString(buffer);
        Gamemode gamemode = Gamemode.all[buffer.get()];
        int limit = buffer.getInt();
        String description = readString(buffer);
        String modeName = readString(buffer);

        return new Host(ping, host, hostAddress, map, wave, players, version, vertype, gamemode, limit, description, modeName.isEmpty() ? null : modeName);
    }
*/