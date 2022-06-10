// global variable, returns navbar_list
const navs = document.getElementById("navbar__list");
// global variable, returns all the sections
const sec = document.querySelectorAll("section");

const navSetup = () => {
  let navView = "";
  // loops over each sections
  sec.forEach((section) => {
    const sid = section.id;
    const sectionData = section.dataset.nav;
    navView += `<li><a class = "menu__link" href = "#${sid}">${sectionData}</a></li>`;
  });
  // to append all the elements to the navs
  navs.innerHTML = navView;
};
navSetup();

//  returns the size of tht element and its position top to the viewport
const tive = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};
// to remove the active class
const removeActiveClass = (section) => {
  section.classList.remove("section.your-active-class");
  section.style.cssText =
    "background-color : linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);;";
};
// to add the active class
const addActiveClass = (conditional, section) => {
  if (conditional) {
    section.classList.add("section.your-active-class");
    section.style.cssText = "background-color : pink;";
  }
};

// to activate it when scroll
const activation = () => {
  sec.forEach((section) => {
    const elementtive = tive(section);

    inviewport = () => elementtive < 100 && elementtive >= -100;
    removeActiveClass(section);
    addActiveClass(inviewport(), section);
  });
};

window.addEventListener("scroll", activation);

