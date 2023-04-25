document.querySelectorAll(".sign-container").forEach(container => {
    container.addEventListener("click", (e) => {
           console.log(container.lastChild.previousSibling.childNodes);
        container.lastChild.previousSibling.childNodes[1].classList.toggle("display");
     
        
    })
});
