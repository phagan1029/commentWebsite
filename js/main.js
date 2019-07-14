function todoList() {

var username = document.getElementById("username").value
var comment = document.getElementById("comment").value

var userNameText = document.createTextNode("Your username is: " + username)
var commentText = document.createTextNode(" Your Comment is: " + comment)

var newListItem = document.createElement("L1")
newListItem.className = "list-group-item"
var newUserName = document.createElement("H3")
newUserName.appendChild(userNameText)
var newComment = document.createElement("P")
newComment.appendChild(commentText)

newListItem.appendChild(newUserName)
newListItem.appendChild(newComment)
document.getElementById("commentList").appendChild(newListItem)


}