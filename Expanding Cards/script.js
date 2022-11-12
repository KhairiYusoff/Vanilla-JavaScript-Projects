const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeFirst();
        panel.classList.add("active")
    })
})

function removeFirst() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}
