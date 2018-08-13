// Slide in MENU (TOP)

let openMenu = () => {
  // alert('working');
  document.getElementById('popMenu').style.width = "100%";
}

let closeMenu = () => {
  // alert('are you working?');
  document.getElementById('popMenu').style.width = "0";
}

// Slide in Right catchphrase

let firstAnimate = () => {

  let catchText = document.getElementById('catch-txt');
  catchText.classList.remove('hidden');
  catchText.classList.add('slide-right');

  let contact = document.getElementById('catch-btn');
  contact.classList.add('zoom-in');
}


// Scroll Event to load about page

const screenWidth = window.innerWidth;
const about = document.getElementById('about');
const client = document.getElementById('client');
const target = document.getElementById('target');
const events = document.getElementById('event-txt');

let scrollDown = () => {
  let scrollPos = window.scrollY;
  
  if (screenWidth > 768) {
    if (scrollPos > 30 && scrollPos <= 80) {

      about.classList.remove('hidden');
      about.classList.add('fade-in-up');
  
    } else if (scrollPos > 400 && scrollPos <= 600) {
  
      client.classList.remove('hidden');
      client.classList.add('roll-in');
  
    } else if (scrollPos > 700 && scrollPos <= 1000) {
  
      target.classList.remove('hidden');
      target.classList.add('fade-in');
  
    } else if (scrollPos > 1300 ) {
  
      events.classList.remove('hidden');
      events.classList.add('fade-in-left');
    }
  } else {
    about.classList.remove('hidden');
    client.classList.remove('hidden');
    target.classList.remove('hidden');
    events.classList.remove('hidden');
  }

}

  window.addEventListener('scroll', scrollDown);

// EVENTS AREA FUNCTION

let eventOne = document.getElementById('eventOne');
let eventTwo = document.getElementById('eventTwo');

let showEventOne = () => {
  // alert('are you working?');
  eventOne.classList.add('first-event');
}

let hideEventOne = () => {
  eventOne.classList.remove('first-event');
}

let showEventTwo = () => {
  // alert('are you working?');
  eventTwo.classList.add('second-event');
}

let hideEventTwo = () => {
  eventTwo.classList.remove('second-event');
}

eventOne.addEventListener('mouseover', showEventOne);
eventOne.addEventListener('mouseout', hideEventOne);

eventTwo.addEventListener('mouseover', showEventTwo);
eventTwo.addEventListener('mouseout', hideEventTwo);

// CONTACT form

function openContact() {
  document.getElementById('contactForm').style.display = "block";
}

function closeContact() {
  document.getElementById('contactForm').style.display = "none";
}
