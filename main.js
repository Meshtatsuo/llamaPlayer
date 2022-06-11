const { app, BrowserWindow } = require("electron");
// include the Node.js 'path' module at the top of your file
const path = require("path");
const { addListener } = require("process");
const server = require("./server/server");
const libManager = require("./server/utils/libraryManager");
require("dotenv").config();
const testLib = process.env.TESTLIB;

// modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:6969");
  win.on("close", () => {
    win.webContents.send("stop-server");
  });
};

const openSettings = () => {
  const settings = new BrowserWindow({
    width: 600,
    height: 900,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, "preload.js"),
    },
  });

  settings.loadFile("./public/settings.html");
};

async function startServer() {
  await server.initServer();
  await initDatabase();
}

async function initDatabase() {
  return new Promise((resolve) => {
    libManager.addLibrary(testLib);
    resolve(true);
  });
}

// create window if app activated with no windows open
app.whenReady().then(() => {
  createWindow();
  startServer();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// quit program when window is closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
