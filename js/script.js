
// getElementsByTagName/className -
// array like object : vitorer lekha dhorte hole [2].innerHTML lekhte hbe


let heading = document.getElementById("heading")
let inputDlt = document.getElementById("inputDlt")
let dltBtn = document.getElementById("dltBtn")

dltBtn.addEventListener("click", ()=>{
    heading.style.display= "none"
})