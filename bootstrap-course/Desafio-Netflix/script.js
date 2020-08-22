const btn = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");

btn.addEventListener("click", (e) => {
  navbar.classList.toggle("sidebar-open");

  if (navbar.classList.contains("sidebar-open")) {
    const backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");

    backdrop.addEventListener("click", (e) => {
      navbar.classList.remove("sidebar-open");
      document.querySelector(".backdrop").remove();
    });

    document.querySelector("body").append(backdrop);
  } else {
    document.querySelector(".backdrop").remove();
  }
});