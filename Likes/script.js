var likes = 4
function likesButton(){
    likes++
    var likeHeader = document.querySelector("#buyNow")
    likeHeader.innerText = likes + " Like(s)"
    console.log(likeHeader)
}

// var likes2 = 12
// function likesButton2(){
//     likes2++
//     var likeHeader = document.querySelector(".liker2")
//     likeHeader.innerText = likes2 + " Like(s)"
//     console.log(likeHeader)
// }

// var likes3 = 9
// function likesButton3(){
//     likes3++
//     var likeHeader = document.querySelector(".liker3")
//     likeHeader.innerText = likes3 + " Like(s)"
//     console.log(likeHeader)
// }