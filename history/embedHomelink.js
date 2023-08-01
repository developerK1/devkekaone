const bodyTag = document.querySelector("body");

let anchortag =  () => {
    let anchoTag = document.createElement('a');
    anchoTag.setAttribute('href', '../');
    anchoTag.setAttribute('class', 'homeBtn');
    anchoTag.innerText = "BACK";
    anchoTag.style.position = "fixed";
    anchoTag.style.top = "20px";
    anchoTag.style.left = "20px";
    anchoTag.style.backgroundColor = "black";
    anchoTag.style.color = "white";
    anchoTag.style.fontWeight = "700";
    anchoTag.style.padding = "1%";
    anchoTag.style.height = "35px";
    anchoTag.style.width = "100px";
    anchoTag.style.textAlign = "center";
    anchoTag.style.display = "flex";
    anchoTag.style.justifyContent = "center";
    anchoTag.style.alignItems = "center";
    anchoTag.style.transition = "all 0.5s ease-in-out";
   
    return anchoTag;
}

bodyTag.style.position = "relative";
bodyTag.append(anchortag());

window.addEventListener("DOMContentLoaded", function(){

    document.querySelector(".homeBtn").addEventListener("mouseover", function(){
        this.style.backgroundColor = "white";
        this.style.color = "black";
        this.style.letterSpacing = "2px";
        this.style.fontWeight = "700";
    });

    document.querySelector(".homeBtn").addEventListener("mouseout", function(){
        this.style.backgroundColor = "black";
        this.style.color = "white"
        this.style.letterSpacing = "1px";
        this.style.fontWeight = "300";
    });
})

