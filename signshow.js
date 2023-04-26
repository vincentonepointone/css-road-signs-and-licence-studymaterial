document.querySelectorAll(".sign-container").forEach(container => {
    container.addEventListener("click", (e) => {
        container.lastChild.previousSibling.childNodes[1].classList.toggle("display");
    })
});
let showText = true;

document.getElementById("showAllButton").addEventListener("click", (e) => {
    document.querySelectorAll(".sign-container").forEach((container) => {
        let signCaption = container.lastChild.previousSibling.childNodes[1];
        if(showText){
        if (!signCaption.classList.contains("display")) {
            signCaption.classList.toggle("display");
        }        
        } else {
            if(signCaption.classList.contains("display")){
                signCaption.classList.toggle("display")
            }
        }

    });
    if(showText){
        document.getElementById("showAllButton").innerText=  "Hide All Meanings";
    } else {
        document.getElementById("showAllButton").innerText = "Show All Meanings";
    }
    showText= !showText;
})