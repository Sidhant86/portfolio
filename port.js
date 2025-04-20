function hamburg(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(0px)"
}
function cancel(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
  "FRONTEND DEVELOPER",
  "SOFTWARE ENGINEER"
  
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
  if (charcterIndex < texts[textIndex].length){
      textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
      charcterIndex++;
      setTimeout(typeWriter, speed);
  }
  else{
      setTimeout(eraseText, 1000)
  }
}
function eraseText(){
  if(textElements.innerHTML.length > 0){
      textElements.innerHTML = textElements.innerHTML.slice(0,-1);
      setTimeout(eraseText, 50)
  }
  else{
      textIndex = (textIndex + 1) % texts.length;
      charcterIndex = 0;
      setTimeout(typeWriter, 500)
  }
}
window.onload = typeWriter

// Toggle Mobile Menu
function hamburg() {
  document.querySelector(".dropdown").style.display = "block";
}
function cancel() {
  document.querySelector(".dropdown").style.display = "none";
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    e.preventDefault();
  } else {
    alert("Thank you! Message sent.");
  }
});

// Carousel Logic
const images = ["project1.jpg", "project2.jpg", "project3.jpg"];
let current = 0;
const imgElement = document.querySelector(".carousel-image");

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % images.length;
  imgElement.src = images[current];
});
document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  imgElement.src = images[current];
});

// Scroll-to-Top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// *******************

  // Wait until the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const skillsList = document.querySelector('.skills-list');
    const toolsList = document.querySelector('.tools-list');

    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' to the clicked button
        button.classList.add('active');

        // Toggle visibility of lists based on button text
        if (button.textContent === 'Skills') {
          skillsList.classList.remove('hidden');
          skillsList.classList.add('visible');
          toolsList.classList.remove('visible');
          toolsList.classList.add('hidden');
        } else {
          toolsList.classList.remove('hidden');
          toolsList.classList.add('visible');
          skillsList.classList.remove('visible');
          skillsList.classList.add('hidden');
        }
      });
    });
  });

