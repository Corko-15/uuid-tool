const {
    app,
    BrowserWindow,
    screen
} = require("electron");
function create() {
    let win = new BrowserWindow({
        width: 300,
        height: 400,
        frame: false,
        resizable: false,
        transparent: true,
        alwaysOnTop: true
    });
    win.loadFile(
        "renderer/index.html"
    );
    const display = screen.getPrimaryDisplay();
    const area = display.workArea;
    const x = area.x + 10;
    const y = area.y + area.height - 410;
    win.setPosition(
        x,
        y
    );
};
app.whenReady()
    .then(create);