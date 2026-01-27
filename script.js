const scrollContainer = document.querySelector("main[data-scroll-container]");

if (scrollContainer) {
    const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        smoothMobile: true
    });
}
