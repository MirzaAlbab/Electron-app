# Electron-app

An Electron desktop wrapper that opens a configured website in a constrained browser window.

[Repository](https://github.com/MirzaAlbab/Electron-app)

## Features

- Window sized to the primary display work area
- Always-on-top window and disabled resizing/minimizing
- Multiple-display and Windows RDP checks
- Electron Builder packaging configuration

## Technology

JavaScript, Electron 32, Electron Builder

## Getting started

Install Node.js compatible with Electron 32.

```bash
git clone https://github.com/MirzaAlbab/Electron-app.git
cd Electron-app
```

```bash
npm install
```

Before launching, add `globalShortcut` to the import from `electron` in `main.js` and set `mainWindow.loadURL(...)` to the website you intend to open.

```bash
npx electron .
```

To package the desktop app, review the app ID/product name and then run:

```bash
npm run dist
```

## Development and checks

The `npm test` command is a placeholder. Manually check window creation, navigation, display detection, and packaged-app launch on each supported operating system.

## Project notes

main.js references globalShortcut without importing it. Add globalShortcut to the destructured electron import before launch. Review and replace the hard-coded loadURL destination for your environment. The display checks do not establish a secure kiosk boundary.

## License

No root `LICENSE` file was present in the reviewed repository. Consult the repository owner about reuse; dependencies and third-party assets retain their own terms.
