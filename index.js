function addComment() {
    var c0 = document.getElementById("comment0"); 
    if(c0 != null) {
        c0.parentNode.removeChild(c0);
    }

    var comField = document.getElementById("newCommentText");
    var comText = comField.value; 

    var li = document.createElement('li');
    li.innerHTML= comText;
    li.className = "newComment";

    document.getElementById("commentList").appendChild(li);

    comField.value = '';
}

