document.querySelectorAll(".sign-container").forEach(container => {
    container.addEventListener("click", (e) => {
        container.lastChild.previousSibling.classList.toggle("display");
        
    })
});
