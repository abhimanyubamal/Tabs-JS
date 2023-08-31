let t1 = document.querySelector("#tab-1");
let t2 = document.querySelector("#tab-2");
let t3 = document.querySelector("#tab-3");
let s1 = document.querySelector("#span-1-active");
let s2 = document.querySelector("#span-2-active");
let s3 = document.querySelector("#span-3-active");
let tabs = document.querySelectorAll(".tabs");

tabs.forEach((heading) => {
    heading.addEventListener("click", (e) => {

        const show = document.querySelector(".show");

        const b = document.querySelector(".active");
        b && b.classList.remove("active");
        heading.classList.add("active");

        show && show.classList.remove("show");
        show && show.classList.add("d-none");

        if (t1.classList.contains("active")) {
            s1.classList.remove("d-none");
            s1.classList.add("show");
        }
        else if (t2.classList.contains("active")) {
            s2.classList.remove("d-none");
            s2.classList.add("show");
        }
        else {
            s3.classList.remove("d-none");
            s3.classList.add("show");
        }
    });
});

