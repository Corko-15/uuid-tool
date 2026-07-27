function generate() {
    let uuid = crypto.randomUUID();
    document.getElementById("uuid").innerHTML = uuid;
    navigator.clipboard.writeText(uuid);
}

generate();

document.getElementById("generate").addEventListener("click", () => {
    generate();
})

function closeApp() {
    window.close();
}