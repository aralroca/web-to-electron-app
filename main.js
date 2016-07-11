
const electron = require('electron');

const { app, BrowserWindow, globalShortcut } = electron;

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 700
	});

	mainWindow.setTitle('Smart Mirror');
	mainWindow.loadURL('http://localhost:4200/');

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
});
