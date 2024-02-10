gsap.to("#zoom-in h1", {
    scale: 50, stagger: 0.25, duration: 3,
    scrollTrigger: {
        trigger: "#zoom-in",
        endTrigger: "bottom",
        end: 1000,
        scrub: 5,
        pin: true,
    }
});

gsap.to("h4", {
    scrollTrigger: {
        trigger: "h4",
    },
    y: -10,
    opacity: 1,
    duration: 1
});

gsap.to(".ease_of_use_content_text_subtitle", {
    scrollTrigger: {
        trigger: ".ease_of_use_content_text_subtitle",
    },
    y: -10,
    opacity: 1,
    duration: 1
});