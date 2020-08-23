import { app, BrowserWindow, session, screen } from "electron";

function createWindow () {
    const screenSize = screen.getPrimaryDisplay().workAreaSize;
    const mainWindow = new BrowserWindow({
        width: Math.round(screenSize.width * 0.31),
        height: Math.round(screenSize.height * 0.81),
        autoHideMenuBar: true,
        webPreferences: {
            zoomFactor:1.5
        }
    });
    mainWindow.loadURL('https://learn.lingvist.com/#guess');
}

app.whenReady().then(() => {
    session.defaultSession.setUserAgent("Chrome");

    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });

});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
