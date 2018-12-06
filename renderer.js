// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// In renderer process (web page).
var tlid = require('tlid');

const { ipcRenderer } = require('electron')
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg) // prints "pong"
})

ipcRenderer.send('asynchronous-message', 'ping')


ipcRenderer.send('asynchronous-message', tlid.get())

