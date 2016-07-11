
const electron = require('electron');
const { app, BrowserWindow, globalShortcut } = electron;
const args = process.argv;

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 700
	});

	mainWindow.setTitle(args[2]);
	mainWindow.loadURL(args[3]);

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
});
