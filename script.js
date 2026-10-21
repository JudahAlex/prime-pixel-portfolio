// Prime Pixel contact settings — update these values before sharing the site.
const PRIME_PIXEL_CONTACT = {
  email: "primepixeldigitalagency@gmail.com",
  whatsapp: "254723384089", // Country code + number, digits only. Example: 254712345678
  instagram: "https://www.instagram.com/prime_.pixel_/"
};

document.getElementById("year").textContent = new Date().getFullYear();

const emailLink = document.getElementById("email-link");
const whatsappLink = document.getElementById("whatsapp-link");
const instagramLink = document.getElementById("instagram-link");

emailLink.href = `mailto:${PRIME_PIXEL_CONTACT.email}`;
whatsappLink.href = `https://wa.me/${PRIME_PIXEL_CONTACT.whatsapp}`;
instagramLink.href = PRIME_PIXEL_CONTACT.instagram;

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("is-visible"));
}
