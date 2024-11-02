

//function for display the cards of food
function handleClick(e) {
    var hideId = e.target.getAttribute('data-hide-id'); // get the id

  
    var cardsContainer = document.getElementById(hideId); 

    if (cardsContainer.style.display == "none" || cardsContainer.style.display == "") {
        cardsContainer.style.display = "flex"; // if the cards not show, show the cards
    } else {
        cardsContainer.style.display = "none"; // else, hide the cards
    }
}

var clickableElements = document.querySelectorAll('.word');

clickableElements.forEach(function(element) {
    element.addEventListener('click', handleClick);
});

//function to pop up the recipe
function handlePopUp(event) {
    var targetId = event.target.getAttribute('data-target');// get the id
    
    var popup = document.getElementById(targetId);
    
    if (popup) {
        popup.classList.add("active");
    }
}

var popUpElements = document.querySelectorAll('span');
popUpElements.forEach(function(element) {
    element.addEventListener('click', handlePopUp);
});

// use for close the pop up of recipe
document.querySelectorAll(".popup .close-btn").forEach(function(button) {
    button.addEventListener("click", function() {

        // find the parent popup of the close button
        var popup = button.closest(".popup");
        if (popup) {
            popup.classList.remove("active");//remove active to close the pop up 
        }
    });
});

