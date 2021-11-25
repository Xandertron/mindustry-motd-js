# note
its probably best you use https://www.npmjs.com/package/mindustry.js and not mine, this was a fun project and im surprised it worked at all

# mindustry-motd-js
Gets the motd of a mindustry server

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
