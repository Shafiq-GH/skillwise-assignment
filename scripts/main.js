// Function to load the header and footer
function loadHeaderAndFooter() {
  fetch("./pages/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
      setActiveNavItem();
    });
  fetch("./pages/footer.html")
    .then((response) => response.text())
    .then((data) => (document.getElementById("footer-placeholder").innerHTML = data));
}

function loadCalendar() {
  fetch("./pages/calendar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("calendar-placeholder").innerHTML = data;
    });
}

// Function to set the active navigation item
function setActiveNavItem() {
  const currentLocation = window.location.pathname;
  const navItems = document.querySelectorAll("nav ul li a");
  navItems.forEach((item) => {
    if (item.href.includes(currentLocation)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

const app = document.getElementById("app");

// Function to load content dynamically
function loadContent(page) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${page}.html`, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      app.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  loadContent("./pages/homepage");
});

// Event listener for navigation links
document.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    e.preventDefault();
    const page = e.target.getAttribute("href");
    loadContent(page);
  }
});

document.addEventListener("click", function (e) {
  if (e.target.includes === "pages/schedule") {
    e.preventDefault();
    loadCalendar();
  }
});

// Call the function to load the header and footer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadHeaderAndFooter);
document.addEventListener("DOMContentLoaded", loadCalendar);
