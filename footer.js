function Comment(fname,message){
    this.fname = fname
    this.message = message
}
//Creates comment object


const createComment = () => {
    let newComment = new Comment(
        document.getElementById("fname").value,
        document.getElementById("msg").value,
    )

comments.push(newComment)
    console.log(comments)

}
