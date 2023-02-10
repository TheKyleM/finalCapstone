//save for later page for the website, earmark articles, images in a personal folder and go back to them
//each image must have the option to save for later
//when an item is added, alert should tell users how many items are in the folder
//create new html page for the save for later section which allows users to see what is in their folder

//create form for users to leave comments
//create form to allow users to like an image
//create a contact form


//Check if page has been ran before

//Since we want to save a jpeg in a session storage, how do we save an image in a key?
//Unlike previous tasks, we aren't trying to create an object
//Do we save the image or maybe the file location OR the element in which the file resides

//save element as a variable, put the variable in the list as a setItem

//Set up the save for later page by adding it into html

//Empty bookmark mark to put items/objects in the storage
let bookmark = [];
let comments = [];
let likeCounter = 0

//Getting all buttons from query selector (to add functions to them later on)
const likeBtn = document.querySelectorAll("#like");
const edit = document.querySelectorAll("#heart");

//Getting all images for later use
const imageTarget = document.querySelectorAll("#thumbnail");

//Check loading to get local storage and session storage
const checkLoading = () => {
    localStorage.getItem("save", JSON.stringify(bookmark));
    localStorage.getItem("comment", JSON.stringify(comments));
    //displayComment()

    //Using session storage for comments and likes. I wanted to use local storage
    //However my initial bookmark save for later code creates separate keys instead of an array within a key
    //I figured out how to fix it but it seemed like it was okay

    //session storage sees if its ran before, if it hasn't then it initialises these keys and values
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("comment", JSON.stringify(comments));
        sessionStorage.setItem("likes", likeCounter)
        sessionStorage.setItem("hasCodeRunBefore", true);
    }

    //if it has then display comments and getitem like counter
    else{ 
        displayComment()
        localStorage.getItem('save', JSON.stringify(bookmark))
        sessionStorage.getItem("likes", likeCounter)

    }
}

//if i is less than edit.length then execute this code
//This code is to save for later
for(let i = 0; i<edit.length; i++){
    //adding an event listener to each
    edit[i].addEventListener("click", (e) => {
        //I was a little confused on this part
        //bookmark = localStorage.getItem("save")
        //I essentially just made a new array which makes the one at the top useless this iss so i can push the image into the local storage
        //Otherwise it was coming up as .push is not a function
        //bookmark = [bookmark]

        console.log(bookmark)

        //Image target[i] lets us pick a specific image correlating to the heart
        let newImage = imageTarget[i]
        //We egt the src of the image by using .src
        
        let element = newImage.src;

        //we push this element into the local storage

        bookmark.push(element)

        console.log(bookmark)

        //we save it as save[i]
        localStorage.setItem(`save${i}`,bookmark)

        let length = localStorage.length

        //Shows us how many bookmarked images are in the local storage
        alert(`You have ${length} saved item(s) in your folder`)
          });
}

//creating a new object
function Comment(fname,message){
    this.fname = fname
    this.message = message
}

//Createnewcomment for the button which gets the values of the form
const createNewComment = () => {
    let newComment = new Comment(
        document.getElementById("fname").value,
        document.getElementById("msg").value,
    )

//Put this into the array
    comments.push(newComment)
    
    console.log(comments)
    console.log(newComment)

    //Save this array into the sessinostorage
    sessionStorage.setItem("comment", JSON.stringify(comments));
}

//To display the comments
const displayComment = () => {
    const comments = JSON.parse(sessionStorage.getItem("comment"))

//For each object in the comment array, do this:
    let i = 0;
    comments.forEach(function (p) {

        //Creating containers and a table 
        //Appending the <tr> into the <table>
        //Appending them all into an existing element within the html file
        const main = document.getElementById("showComment")
        const container = document.createElement("div")
        container.setAttribute("id", "container")
        const commentTable = document.createElement("table")
        commentTable.setAttribute("id", i)
        i = i+1
        const firstRow = document.createElement("tr");
        const secondRow = document.createElement("tr");
        container.appendChild(firstRow)
        container.appendChild(secondRow)
        main.appendChild(container)


        //Showing the comment name and inserting it into the first row innerhtml
        const commentName = document.createElement("td");
        commentName.innerHTML = p.fname
        commentName.setAttribute("id", `commentName${i}`)
        firstRow.appendChild(commentName)

        //Showing the message by doing the same
        const commentValue = document.createElement("td");
        commentValue.innerHTML = p.message
        commentName.setAttribute("id", `commentValue${i}`)
        secondRow.appendChild(commentValue)

        //Doing styling for the comments
        container.style.border='solid 2px #ccc'
        container.style.backgroundColor='#eee'
        container.style.borderRadius='5px'
        container.style.width='100%'
        container.style.margin='16px 0'
        container.style.padding='16px'


        firstRow.style.fontSize='20px'
    })


}

//Like btn, for each like button do this

likeBtn.forEach(function (p){
    p.addEventListener("click", (e) => {
        //Change the image so it shows we've liked it
        let url = "SVG/likeon.svg"
        let img = e.target
        img.src = url

        //Like counter, unfortunately this extra feature did not work
        let likeCounter = sessionStorage.getItem("likes")
        likeCounter = parseInt(likeCounter) + 1
        likeCounter = sessionStorage.setItem("likes", likeCounter)
        })

})
    












