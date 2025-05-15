
// getElementsByTagName/className -
// array like object : vitorer lekha dhorte hole [2].innerHTML lekhte hbe


let heading = document.getElementById("heading")
let inputDlt = document.getElementById("inputDlt")
let dltBtn = document.getElementById("dltBtn")

inputDlt.addEventListener("keyup", ()=>{
    if (inputDlt.value == "delete") {
        dltBtn.removeAttribute("disabled")
    }
    else{
        dltBtn.setAttribute("disabled", true)
    }
})

dltBtn.addEventListener("click", ()=>{
    heading.style.display= "none"
})