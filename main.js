const { app, BrowserWindow, screen, dialog } = require("electron");

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize; // Get usable area excluding the taskbar

  const mainWindow = new BrowserWindow({
    width: width, // 100% of available width
    height: height, // 100% of available height (below the taskbar)
    frame: true, // Keep the frame with exit button
    alwaysOnTop: true, // Optional: Keep the window on top of other windows
    minimizable: false,
    resizable: false, // Disable resizing
    movable: false, // Prevent the window from being moved
    fullscreenable: false, // Disable fullscreen (so it won't hide the taskbar)
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  // Load your website URL
  mainWindow.loadURL("https://210.57.216.108/login");
  // Prevent Ctrl + M from minimizing the window
  mainWindow.webContents.on("before-input-event", (event, input) => {
    if (input.control && input.key.toLowerCase() === "m") {
      event.preventDefault();
    }
  });
}

app.whenReady().then(() => {
  const displays = screen.getAllDisplays();
  if (process.env.SESSIONNAME && process.env.SESSIONNAME.startsWith("RDP")) {
    console.log("Remote Desktop connection detected. Exiting the app.");
    app.quit(); // Exit the app if a remote desktop session is detected
  }

  // Check if the device has more than one display
  if (displays.length > 1) {
    // Show a dialog before exiting
    dialog.showErrorBox(
      "Multiple Displays Detected",
      "This application does not support multiple displays."
    );
    app.quit(); // Exit the app if more than one display is detected
  } else {
    createWindow(); // Create the window if only one display is detected
    globalShortcut.register("Ctrl+M", () => {
      // Optionally handle the shortcut here
    });
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
