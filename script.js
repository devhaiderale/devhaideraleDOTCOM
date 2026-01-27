(function () {
    const loader = document.getElementById("page-loader");
    const main = document.getElementById("main");

    if (!loader || !main) return;

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.display = "none";
            main.removeAttribute("hidden");

            if (window.LocomotiveScroll) {
                new LocomotiveScroll({
                    el: main,
                    smooth: true
                });
            }
        }, 3000);
    });
})();
