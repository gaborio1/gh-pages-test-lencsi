console.log("transition.js");

import Highway from '@dogstudio/highway';
// import { TimelineLite } from 'gsap';
import { gsap } from "gsap";

class Fade extends Highway.Transition {
    in({ from, to, done }) {
        const tl = new gsap.timeline();
        tl.fromTo(
            to,
            1,
            { left: "-100%", top: "50%" },
            { left: "0%", }
        )
            .fromTo(
                to,
                0.5,
                { height: "2%" },
                {
                    height: "90%",
                    top: "5%",
                    onComplete: function () {
                        from.remove();
                        done();
                    }
                }
            )
            .fromTo(
                to.children[0],
                1,
                { opacity: 0.3 },
                { opacity: 1 },
                "-=0.5"
            )
            // CURRENT CONTENT START TO FADE OUT BEFORE NEW SLIDES IN ("-=1.5")
            .fromTo(
                from,
                1.2,
                { opacity: 1 },
                { opacity: 0 },
                "-=1.5");
    }
    out({ from, done }) {
        done();
    }
}

export default Fade;