// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const menuIcon = document.getElementById("menuIcon")
const closeIcon = document.getElementById("closeIcon")
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
  menuIcon.classList.toggle("hidden")
  closeIcon.classList.toggle("hidden")
})

// Close mobile menu when clicking a link
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  })
})

// Navbar scroll effect
const navbar = document.getElementById("navbar")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Skills Tab Functionality
const tabButtons = document.querySelectorAll(".tab-button")
const tabContents = document.querySelectorAll(".tab-content")

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.getAttribute("data-tab")

    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    tabContents.forEach((content) => content.classList.remove("active"))

    // Add active class to clicked button and corresponding content
    button.classList.add("active")
    document.getElementById(`${tabName}-content`).classList.add("active")
  })
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all fade-in sections
const fadeInSections = document.querySelectorAll(".fade-in-section")
fadeInSections.forEach((section) => {
  observer.observe(section)
})

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      const offsetTop = target.offsetTop - 80 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Active nav link highlighting
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-link")

function highlightNavLink() {
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("text-white")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("text-white")
        }
      })
    }
  })
}

window.addEventListener("scroll", highlightNavLink)

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Set initial active tab
  document.querySelector('.tab-button[data-tab="aiml"]').classList.add("active")
  document.getElementById("aiml-content").classList.add("active")

  // Trigger initial nav highlight
  highlightNavLink()
})
