# mindustry-motd-js
Gets the motd of a mindustry server, very messy

```javascript
mindmotd = require("./motd.js")
mindmotd.getServerInfo("mindustry.io",1000).then(console.log)
```
result:
```
{
  host: '[#ff5252]pvp',
  map: 'Get the core',
  players: 23,
  waves: 1,
  gameversion: 122,
  vertype: 'official',
  gamemode: 3,
  limit: 0,
  desc: 'welcome back',
  modename: ''
}
```
