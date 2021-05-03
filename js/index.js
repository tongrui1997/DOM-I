const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Set nav
let nav = Array.from(document.querySelectorAll("nav a"));
nav[0].textContent = "Service";
nav[1].textContent = "Product";
nav[2].textContent = "Vision";
nav[3].textContent = "Features";
nav[4].textContent = "About";
nav[5].textContent = "Contact";

// cta
let ctaText = document.querySelector(".cta-text");
let h1 = document.querySelector(".cta-text h1");
h1.textContent = "DOM\nIS\nAWESOME";
let button = document.querySelector("button");
button.textContent = "Get Started";
let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// main content
let h4 = Array.from(document.querySelectorAll("h4"));
h4[0].textContent = "Features";
h4[1].textContent = "About";
h4[2].textContent = "Services";
h4[3].textContent = "Product";
h4[4].textContent = "Vision";
let middleImg = document.querySelector(".middle-img");
middleImg.setAttribute("src", "img/mid-page-accent.jpg");
let mainP = Array.from(document.querySelectorAll(".main-content p"));
mainP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainP[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainP[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainP[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// contact
let bottomH = document.querySelector(".contact h4");
bottomH.textContent = "Contact";
let bottomP = Array.from(document.querySelectorAll(".contact p"));
bottomP[0].textContent = "123 Way 456 Street Somewhere, USA";
bottomP[1].textContent = "1 (888) 888-8888";
bottomP[2].textContent = "sales@greatidea.io";

// footer
let footer = document.querySelector("footer");
footer.textContent =  "Copyright Great Idea! 2018";

// add new content
let a = Array.from(document.querySelectorAll("a"));
a.forEach(item => item.style.color = "green");
let navigation = document.querySelector("nav");
let newA = document.createElement("a");
newA.href = "#";
newA.textContent = "Gallery";
let newB = document.createElement("a");
newB.href = "#";
newB.textContent = "Activities";
navigation.appendChild(newA);
navigation.prepend(newB);









