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

// Function to display the Description tab initially
function showDescriptionTab() {
  openTab(event, 'Description');
}

// Call the function to show the Description tab when the page loads
window.addEventListener('load', showDescriptionTab);
// Function to display the Description tab initially
function showDescriptionTab() {
  openTab(event, 'Description');
}

// Attach the showDescriptionTab function to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', showDescriptionTab);
