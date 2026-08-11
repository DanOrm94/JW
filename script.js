document.addEventListener("DOMContentLoaded", () => {

    /* --------------------------------
       Mobile Navigation
    -------------------------------- */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });


    /* --------------------------------
       Fancy Button Mouse Glow
    -------------------------------- */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mousemove", event => {

            const rect = button.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            button.style.setProperty("--mouse-x", `${x}px`);
            button.style.setProperty("--mouse-y", `${y}px`);

        });

        button.addEventListener("mouseleave", () => {
            button.style.removeProperty("--mouse-x");
            button.style.removeProperty("--mouse-y");
        });

    });


    /* --------------------------------
       Scroll Reveal
    -------------------------------- */

    const revealElements = document.querySelectorAll(
        ".service-card, .step, .about-heading, .about-text, .section-intro"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        observer.observe(element);
    });


    /* --------------------------------
       Gentle Parallax
    -------------------------------- */

    const visual = document.querySelector(".hero-visual");
    const cards = document.querySelectorAll(".floating-card");

    if (visual && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {

        window.addEventListener("mousemove", event => {

            const x = (event.clientX / window.innerWidth - 0.5);
            const y = (event.clientY / window.innerHeight - 0.5);

            cards.forEach((card, index) => {

                const intensity = index === 0 ? 12 : -10;

                card.style.marginLeft = `${x * intensity}px`;
                card.style.marginTop = `${y * intensity}px`;

            });

        });

    }


    /* --------------------------------
       Smooth Anchor Scrolling
    -------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", event => {

            const targetId = anchor.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* --------------------------------
       Subtle Navbar Background
    -------------------------------- */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.style.transform = "translateY(-3px)";
        } else {
            navbar.style.transform = "translateY(0)";
        }

    });

});
