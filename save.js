let bookmark = [];

console.log(localStorage.length)


//Getting each save key that was saved from the home page
for (let i = 0; i < localStorage.length; i++) {
  localStorage.getItem(`save${i}`)
}

//Displaying all saved images

const displayImg2 = () => {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    console.log(key)

    //Get elements and items
    let main = document.getElementById("main")
    let imgUrl = localStorage.getItem(key)
    const img = document.createElement("img");
    img.setAttribute("id", `shoe${i}`)
    console.log(imgUrl)

    const bigUrl = `${imgUrl}`

    /*Regex: The regex roughly means the following: match [everything that is not a slash] 
    then a slash, then [everything that is not a slash again] and then end of string.*/
    const [shortUrl] = bigUrl.match(/[^\/]+\/[^\/]+$/)

    //changing the src of the newly created <img> element to the new shortUrl
    img.src = shortUrl
    //Appending this
    main.appendChild(img)
}


//For each item in the local storage, change each shoe image to this size
for(let i = 0; i <localStorage.length; i++){
    let note = document.getElementById(`shoe${i}`)
    note.style.width='30vw'
}


};
