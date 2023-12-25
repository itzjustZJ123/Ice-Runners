// Function to open tabs
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Function to add a new rating
function addRating() {
  const ratingContainer = document.getElementById("ratingContainer");
  const ratingStars = document.getElementById("ratingStars").value;
  const ratingText = document.getElementById("ratingText").value;
  const username = localStorage.getItem("username") || 'Anonymous';

  // Create a new rating object
  const newRating = {
    stars: ratingStars,
    text: ratingText,
    username: username,
  };

  // Save the rating in localStorage
  const ratings = JSON.parse(localStorage.getItem("ratings")) || [];
  ratings.push(newRating);
  localStorage.setItem("ratings", JSON.stringify(ratings));

  // Create a new rating div
  const ratingDiv = document.createElement("div");
  ratingDiv.className = "rating";

  // Add the star element based on user's selection
  const star = document.createElement("span");
  star.className = "star";
  star.innerHTML = "&#9733;".repeat(ratingStars);
  ratingDiv.appendChild(star);

  // Add the username
  const usernameElement = document.createElement("p");
  usernameElement.className = "username";
  usernameElement.textContent = username + '';
  ratingDiv.appendChild(usernameElement);

  // Add the rating text based on user's input
  const ratingTextElement = document.createElement("p");
  ratingTextElement.textContent = ratingText;
  ratingDiv.appendChild(ratingTextElement);

  // Append the new rating to the container
  ratingContainer.appendChild(ratingDiv);

  // Clear the input fields
  document.getElementById("ratingStars").value = "1";
  document.getElementById("ratingText").value = "";
}

// Add a new rating when the "Add Rating" button is clicked
document.getElementById("addRatingButton").addEventListener("click", addRating);

// Function to create snowflakes
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerHTML = '❄️';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

// Create a new snowflake every 300ms
setInterval(createSnowflake, 300);

// Username popup logic
window.onload = function() {
  if (!localStorage.getItem("username")) {
    document.getElementById("usernamePopup").style.display = "block";
  } else {
    showDescriptionTab(); // Existing function to show the Description tab
  }
};

// Function to display the Description tab initially
function showDescriptionTab() {
  openTab(event, 'Description');
}

// Call the function to show the Description tab when the page loads
window.addEventListener('load', showDescriptionTab);

// Load existing ratings from localStorage
window.addEventListener('load', function() {
  const ratings = JSON.parse(localStorage.getItem("ratings")) || [];
  const ratingContainer = document.getElementById("ratingContainer");

  ratings.forEach(function(rating) {
    const ratingDiv = document.createElement("div");
    ratingDiv.className = "rating";

    const star = document.createElement("span");
    star.className = "star";
    star.innerHTML = "&#9733;".repeat(rating.stars);
    ratingDiv.appendChild(star);

    const usernameElement = document.createElement("p");
    usernameElement.className = "username";
    usernameElement.textContent = rating.username + ' says:';
    ratingDiv.appendChild(usernameElement);

    const ratingTextElement = document.createElement("p");
    ratingTextElement.textContent = rating.text;
    ratingDiv.appendChild(ratingTextElement);

    ratingContainer.appendChild(ratingDiv);
  });
});
// Username popup logic
document.getElementById("submitUsername").addEventListener("click", function() {
  var username = document.getElementById("usernameInput").value;
  if(username) {
    localStorage.setItem("username", username);
    document.getElementById("usernamePopup").style.display = "none"; // Hide the popup
    showDescriptionTab(); // Show the Description tab
  }
});
