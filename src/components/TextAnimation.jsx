import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function TextAnimation() {
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    const cleanup = initialiseTextAnim();

    return () => {
      cleanup();
    };
  }, []);

  return <div></div>;
}
//   useGSAP(() => {
//     if (siteLoaded) {
//       const cleanup = initialiseTextAnim();

//       return () => {
//         cleanup();
//       };
//     }
//   }, [siteLoaded]);

//   return <div></div>;
// }

export function initialiseTextAnim() {
  const allSplits = []; // Store all SplitText instances
  const allTimelines = []; // Store all timelines

  function splitLines(el) {
    const split = SplitText.create(el, {
      type: "lines",
      mask: "lines",
      linesClass: "animLine",
      autoSplit: true,
      onSplit: (self) => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 91%",
            },
          })
          .to(el, { opacity: 1, duration: 0 })
          .from(self.lines, {
            yPercent: 110,
            stagger: 0.08,
            // delay: el.classList.contains("hero-text") ? 0.6 : 0,
            ease: "power3.out",
            duration: 1,
            onComplete: (e) => {
              const lineMasks = el.querySelectorAll(".animLine-mask");
              lineMasks.forEach((mask) => {
                mask.classList.add("no-clip");
              });
            },
          });

        allTimelines.push(tl);
        return tl;
      },
    });

    allSplits.push(split);
    return split;
  }

  document.querySelectorAll(".text-anim").forEach((el) => {
    splitLines(el);
  });

  // Hero text animation (word by word)
  document.querySelectorAll(".hero-text").forEach((el, idx) => {
    const heroSplit = SplitText.create(el, {
      type: "words",
      mask: "words",
      wordsClass: "animWord",
      autoSplit: true,
    });

    allSplits.push(heroSplit); // Store the hero split

    const words = el.querySelectorAll(".animWord");
    gsap.set(".hero-arrow", { opacity: 0, x: -50 });

    const heroTl = gsap
      .timeline()
      .to(el, { opacity: 1, duration: 0, delay: 0.1 })
      .from(words, {
        yPercent: 110,
        delay: idx * 0.06,
        ease: "power2.out",
        duration: 0.8,
        stagger: 0.05,
      })
      .to(
        ".hero-arrow",
        {
          opacity: 1,
          x: 0,
          ease: "power2.out", // Removed duplicate duration property
          duration: 0.7,
        },
        "<",
      )
      .to(".work-cards-cont", {
        opacity: 1,
        duration: 0.7,
        ease: "power1.out",
      });

    allTimelines.push(heroTl); // Store the hero timeline
  });

  // Fixes line splitting bug on ios ipad on load
  const handleLoad = () => {
    window.dispatchEvent(new Event("resize"));
  };

  window.addEventListener("load", handleLoad);

  // Return cleanup function
  return () => {
    // Kill all timelines
    allTimelines.forEach((tl) => tl?.kill());

    // Revert all SplitText instances
    allSplits.forEach((split) => split?.revert());

    // Kill any remaining tweens on these elements
    gsap.killTweensOf(".text-anim, .hero-text, .hero-arrow, .work-cards-cont");

    // Remove event listener
    window.removeEventListener("load", handleLoad);
  };
}
