const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 500,
      height: 800
    })
  
    win.loadFile('index.html')
    //win.loadURL('https://samuel-tech22.github.io/Woedel-Con-API-y-Mejoras/')
}

app.whenReady().then(() => {
    createWindow()
  })