// Responsive script
function handleResponsive() {
  const body = document.body
  const responsiveClass = 'responsive'

  // Add or remove the responsive class based on screen width
  if (window.innerWidth <= 375) {
    if (!body.classList.contains(responsiveClass)) {
      body.classList.add(responsiveClass)
    }
  } else {
    if (body.classList.contains(responsiveClass)) {
      body.classList.remove(responsiveClass)
    }
  }
}

// Attach the function to the window resize event
window.addEventListener('resize', handleResponsive)

// Call the function on page load
window.addEventListener('load', handleResponsive)
