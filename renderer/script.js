let uuid = ""
function generate() {
    uuid = crypto.randomUUID();
    document.getElementById("uuid").classList.remove("uuid-anim");
    void document.getElementById("uuid").offsetWidth;
    document.getElementById("uuid").classList.add("uuid-anim");
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