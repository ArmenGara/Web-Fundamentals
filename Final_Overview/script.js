var likes = 0
function likesButton(){
    likes++
    var likeHeader = document.querySelector("#cartNumber")
    likeHeader.innerText = likes
    console.log(likeHeader)
}

function imageSwap(){
    var oldimage = document.querySelector(".headPhoto")
    oldimage.src = "images/pixel-ninjas-2.png";
    console.log(oldimage)
}

function imageSwap2(){
    var oldimage = document.querySelector(".headPhoto")
    oldimage.src = "images/cafe-neko.png";
    console.log(oldimage)
}