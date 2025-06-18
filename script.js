window.addEventListener("load", () => {
      document.getElementById("title").classList.add("animate");
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  const section = document.elementFromPoint(0, navbar.offsetHeight);
  const isDark = section && section.classList.contains("dark-section");
  navbar.classList.toggle("dark", isDark);
  navbar.classList.toggle("light", !isDark);
})

function animateOnScroll() {
  const animateElements = document.querySelectorAll('[data-animate]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animation = entry.target.getAttribute('data-animate');
        const delay = entry.target.getAttribute('data-delay') || '0';
        
        entry.target.style.animationDelay = delay;
        if (animation) {
          entry.target.classList.add(animation);
          
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  animateElements.forEach(el => observer.observe(el));
}


document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  title.classList.add("animate");

  const navbar = document.querySelector("nav");
  const handleScroll = () => {
    const section = document.elementFromPoint(0, navbar.offsetHeight);
    const isDark = section && section.classList.contains("dark-section");
    navbar.classList.toggle("dark", isDark);
    navbar.classList.toggle("light", !isDark);
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initialize

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });
  animateOnScroll();

  window.removeEventListener("load", () => {
    document.getElementById("title").classList.add("animate");
  });
});