// Add to Cart button
const cartButtons = document.querySelectorAll('.add-cart');
cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const foodName = button.parentElement.querySelector('h3').textContent;
    alert(`${foodName} has been added to your cart!`);
  });
});

// Add to Cart in home kitchen

document.querySelectorAll(".kitchen-card").forEach(card => {
  card.addEventListener("click", () => {
    const itemName = card.querySelector("h3").textContent;
    alert(`${itemName} has been added to your cart!`);
  });
});


document.querySelectorAll(".kitchen-card").forEach(card => {
  const discountTag = card.querySelector(".discount");
  if (discountTag) {
    discountTag.style.background = "#F3BA00"; // already styled in CSS, but can animate
  }
});

// Carousel functionality
const carousel = document.querySelector('.food-carousel');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let scrollPosition = 0;

nextBtn.addEventListener('click', () => {
  scrollPosition += 220;
  if(scrollPosition >= carousel.scrollWidth - carousel.clientWidth){
    scrollPosition = 0;
  }
  carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  scrollPosition -= 220;
  if(scrollPosition < 0){
    scrollPosition = carousel.scrollWidth - carousel.clientWidth;
  }
  carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});

// Request dish button function
const requestBtn = document.getElementById('requestDishBtn');
const modal = document.getElementById('requestModal');
const closeModal = document.querySelector('.close');
const cancelRequest = document.getElementById('cancelRequest');
const submitRequest = document.getElementById('submitRequest');

function openModal(){
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModalFunc(){
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

requestBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFunc);
cancelRequest.addEventListener('click', closeModalFunc);
submitRequest.addEventListener('click', () => {
  alert('Your dish request has been submitted!');
  closeModalFunc();
});

window.addEventListener('click', (e) => {
  if(e.target === modal){
    closeModalFunc();
  }
});

// Video section
const promoVideo = document.getElementById('promoVideo');
const playOverlay = document.getElementById('playOverlay');

function toggleVideo(){
  if(promoVideo.paused){
    promoVideo.play();
    playOverlay.style.display = 'none';
  } else {
    promoVideo.pause();
    playOverlay.style.display = 'flex';
  }
}

promoVideo.addEventListener('click', toggleVideo);
playOverlay.addEventListener('click', toggleVideo);

promoVideo.addEventListener('pause', () => {
  playOverlay.style.display = 'flex';
});

promoVideo.addEventListener('play', () => {
  playOverlay.style.display = 'none';
});

// Contact form submission
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
  const name = document.querySelector('.contact-form input[type="text"]').value.trim();
  const email = document.querySelector('.contact-form input[type="email"]').value.trim();
  const message = document.querySelector('.contact-form textarea').value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting!");
    return;
  }

  
  alert(`Thank you ${name}! Your message has been received. We will contact you soon.`);
  
  //clear the form after submission
  document.querySelector('.contact-form input[type="text"]').value = "";
  document.querySelector('.contact-form input[type="email"]').value = "";
  document.querySelector('.contact-form textarea').value = "";
});
