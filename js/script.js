// Automatically updating the year
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

//Make Mobile Navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const btnHeadEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  btnHeadEl.classList.toggle("nav-open");
});

//Smooth Scrolling Animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    //scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    //scroll to other sections/links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //closing the mobile nav
    if (link.classList.contains("main-nav-link"))
      btnHeadEl.classList.toggle("nav-open");
  });
});

//sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (enteries) {
    const ent = enteries[0];
    if (ent.isIntersecting === false)
      document.querySelector("body").classList.toggle("sticky");
    if (ent.isIntersecting === true)
      document.querySelector("body").classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
