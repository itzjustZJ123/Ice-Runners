// Function to open tabs
function openTab(tabName) {
  const tabcontent = document.querySelectorAll(".tabcontent");
  const tablinks = document.querySelectorAll(".tablinks");

  tabcontent.forEach(tab => {
    tab.style.display = "none";
  });

  tablinks.forEach(link => {
    link.classList.remove("active");
  });

  document.getElementById(tabName).style.display = "block";
  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");
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

// Call the function to create a new snowflake every 300ms
setInterval(createSnowflake, 300);

// Function to display the Description tab initially
function showDescriptionTab() {
  openTab('Description');
}

// Call the function to show the Description tab when the page loads
window.addEventListener('load', showDescriptionTab);
// Function to open tabs
function openTab(tabName) {
  const tabcontent = document.querySelectorAll(".tabcontent");
  const tablinks = document.querySelectorAll(".tablinks");

  tabcontent.forEach(tab => {
    tab.style.display = "none";
  });

  tablinks.forEach(link => {
    link.classList.remove("active");
  });

  document.getElementById(tabName).style.display = "block";
  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");
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

// Call the function to create a new snowflake every 300ms
setInterval(createSnowflake, 300);

// Function to display the Description tab initially
function showDescriptionTab() {
  openTab('Description');
}

// Call the function to show the Description tab when the page loads
window.addEventListener('load', showDescriptionTab);
const tabButtons = document.querySelectorAll(".tablinks");
tabButtons.forEach(button => {
  button.addEventListener("click", function() {
    const tabName = this.getAttribute("data-tab");
    openTab(tabName);
  });
});
