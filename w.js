document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  alert('Thank you for your order!');
});
// Get the button
const returnToTopBtn = document.getElementById('returnToTopBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    returnToTopBtn.style.display = 'block';
  } else {
    returnToTopBtn.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
returnToTopBtn.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
