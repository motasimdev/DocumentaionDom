
// getElementsByTagName/className -
// array like object : vitorer lekha dhorte hole [2].innerHTML lekhte hbe


let btn = document.getElementById("btn")
let reviewBox = document.getElementById("reviewBox")
let para = document.querySelector("p")


btn.addEventListener("click", function () {
    
    para.innerHTML = reviewBox.value
    
})