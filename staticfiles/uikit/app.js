document.addEventListener('DOMContentLoaded', function () {
  // Highlight code blocks using Highlight.js
  hljs.highlightAll();

  // Select the alert wrapper and close button
  let alertWrapper = document.querySelector('.alert');
  let alertClose = document.querySelector('.alert__close');

  // Check if the alert wrapper exists
  if (alertWrapper) {
    console.log('Alert Wrapper clicked');
    // Add event listener to the close button
    alertClose.addEventListener('click', () => {
      // Hide the alert when the close button is clicked
      alertWrapper.style.display = 'none';
    });
  }
});