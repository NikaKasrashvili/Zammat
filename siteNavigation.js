document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("section[id]");
  let e = document.querySelectorAll(".nav-links a");
  function a() {
    let a = window.location.hash;
    if (a) {
      e.forEach((e) => {
        e.classList.remove("active");
      });
      let t = document.querySelector(`.nav-links a[href="${a}"]`);
      t
        ? t.classList.add("active")
        : document
            .querySelector('.nav-links a[href="#hero"]')
            .classList.add("active");
    } else document.querySelector('.nav-links a[href="#hero"]').classList.add("active");
  }
  e.forEach((a) => {
    a.addEventListener("click", function (a) {
      e.forEach((e) => {
        e.classList.remove("active");
      }),
        this.classList.add("active");
    });
  }),
    a(),
    window.addEventListener("hashchange", a);
});
