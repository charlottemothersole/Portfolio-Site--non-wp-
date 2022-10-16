let nav = document.getElementById('nav-list');
let navbar=document.getElementById('navbar');
let navBarToggle = document.getElementById('navbar-toggle');

navBarToggle.addEventListener('click', function () {
    nav.classList.toggle('active');    
});