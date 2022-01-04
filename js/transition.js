console.log("transition.js");

import Highway from '@dogstudio/highway';
// import { TimelineLite } from 'gsap';
import { gsap } from "gsap";

class Fade extends Highway.Transition {
    in({ from, to, done }) {
        const tl = new gsap.timeline();
        tl.fromTo(
            to,
            0.5,
            {
                left: "-100%",
                top: "40%"
            },
            {
                left: "0%",
            }
        )
            .fromTo(
                to,
                0.5,
                {
                    height: "2vh"
                },
                {
                    height: "70vh",
                    top: "5%",
                    onComplete: function () {
                        from.remove();
                        done();
                    }
                }
            )
            .fromTo(to.children[0], 2, { opacity: 0 }, { opacity: 1 })
    }
    out({ from, done }) {
        done();
    }
}

export default Fade;