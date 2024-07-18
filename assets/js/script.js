// tippy.js
tippy("[data-tippy-content]");

// aos.js
AOS.init({
  duration: 700,
  once: true
});

// navbar burger
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

$(document).ready(function() {
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});

// navbar on scroll
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 700) {
      $("nav").addClass("nav-w");
      $(".navbar-menu").addClass("nav-w");
      $(".navbar-item").addClass("nav-dark");
      $(".navbar-link").addClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-white");
      $(".navbar-burger").addClass("has-text-dark");
    } else {
      $("nav").removeClass("nav-w");
      $(".navbar-menu").removeClass("nav-w");
      $(".navbar-item").removeClass("nav-dark");
      $(".navbar-link").removeClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-dark");
      $(".navbar-burger").addClass("has-text-white");
    }
  });
});

// back to top
var btn = $("#backtotop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// copyright year
document.getElementById("cp-year").innerHTML = new Date().getFullYear()

//api function
$(document).ready(function() {
  // Function to fetch data from your API
  function fetchData() {
    $.ajax({
      url: 'https://localhost:3000', 
      method: 'GET',
      success: function(data) {
        // Update elements with fetched data
        $('#servers-count').text(data.servers);
        $('#commands-count').text(data.commands);
        $('#users-count').text(data.users);
      },
      error: function(err) {
        console.error('Error fetching data:', err);
        // Optionally handle errors or show a message
      }
    });
  }

  // Initial fetch on page load
  fetchData();

  // Call fetchData every 5 minutes (adjust as needed)
  setInterval(fetchData, 300000); // 300000 milliseconds = 5 minutes
});
