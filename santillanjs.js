function addComment() {
    var userCommentInput = document.getElementById("comment");
    var userRatingInput = document.querySelector('input[name="rating"]:checked');

    if (userCommentInput && userRatingInput) {
        var userComment = userCommentInput.value;
        var userRating = userRatingInput.value;

        if (userComment && userRating) {
            var newComment = {
                comment: userComment,
                rating: userRating
            };

            var savedComments = JSON.parse(localStorage.getItem("comments")) || [];
            savedComments.push(newComment);
            localStorage.setItem("comments", JSON.stringify(savedComments));

            alert("Thank you for rating me");
            displayTestimonials();

            userCommentInput.value = "";
            userRatingInput.checked = false;
        } else {
            alert("Please provide both a comment and a rating.");
        }
    } else {
        alert("Please provide both a comment and a rating.");
    }
}

function displayTestimonials() {
    var testimonialContainer = document.getElementById("testimonial-container");
    var savedComments = JSON.parse(localStorage.getItem("comments")) || [];

    
    savedComments.sort(function (a, b) {
        return b.rating - a.rating;
    });

    testimonialContainer.innerHTML = "";

    savedComments.forEach(function (comment) {
        var testimonialDiv = document.createElement("div");
        testimonialDiv.classList.add("testimonial");
        testimonialDiv.innerHTML = "<p>" + comment.comment + "</p>" +
            "<p class='comment-rating'><span class='star-icon' data-rating='" + comment.rating + "'></span></p>";

        testimonialContainer.appendChild(testimonialDiv);
    });
}

function clearSavedComments() {
    localStorage.removeItem("comments");
    displayTestimonials(); 
}

function showPopup() {
    var moreContent = document.getElementById('moreContent');
    moreContent.style.display = 'block';
    displayTestimonials(); 
}

function hidePopup() {
    var moreContent = document.getElementById('moreContent');
    moreContent.style.display = 'none';
}

function exitPopup() {
    hidePopup(); 
}


