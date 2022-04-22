const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720
    });

    win.loadFile('./public/index.html');
}

app.whenReady().then(() => {
  createWindow()
})

// quit program when window is closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})