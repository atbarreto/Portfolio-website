// Optional: Highlight active nav link while scrolling (basic)
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll("nav a");
  
    let current = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
  