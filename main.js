window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    document.querySelector("#navigation").classList.add("scroll");
    document.querySelector(".logo img").src = "./assets/MonicaGoncalvesV2.png";
  } else {
    document.querySelector("#navigation").classList.remove("scroll");
    document.querySelector(".logo img").src = "./assets/MonicaGoncalvesV1.png";
  }
}

function showBackToTopOnScroll() {
  if (scrollY > 550) {
    document.querySelector("#backToTopButton").classList.add("show");
  } else {
    document.querySelector("#backToTopButton").classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
  document.querySelector(".logo img").src = "./assets/MonicaGoncalvesV2.png";
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
  document.querySelector(".logo img").src = "./assets/MonicaGoncalvesV1.png";
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
    #home, 
    #home img,
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about,
    #about .header
    #about .content`);
