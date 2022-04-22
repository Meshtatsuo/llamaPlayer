const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080
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