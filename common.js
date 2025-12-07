// Common header and footer code for all pages (works offline)

document.addEventListener("DOMContentLoaded", function () {
  // HEADER HTML  <a href="index.html"><img src="Stacklylogoo.jpeg" alt="stacklylogo"></a> 

  const headerHTML = `
    <header>             
        <nav class="navbar">
           <div class="logo">
           
           </div>
           <div class="menu-toggle" id="menu-toggle">☰</div>
            <ul class="nav-links" id="nav-links">
            <li class="dropdown">
            <a href="index1.html">Home</a>
            <span class="dropdown-symbol">▼</span>
            <div class="dropdown-content">
            <a href="home2.html">Home Page2</a>
            </div>
            </li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contactus.html">Contact Us</a></li>
        </ul>
        </nav>
    </header> 
  `;

  // FOOTER HTML
  const footerHTML = `
    <footer>
        <h3> Stackly Agriculture Industry</h3>
        <p>@2025 Stackly Agriculture Industry. All rights reserved.</p>
        <div class="social">
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://x.com/?lang=en">Twitter</a>
            <a href="https://www.instagram.com/">Instagram</a>
        </div>
     </footer>

  `;

  // Insert header and footer
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // Menu toggle (for mobile)
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});




 const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    menuToggle.addEventListener("click" , ()=>{
        navLinks.classList.toggle("active");
    });