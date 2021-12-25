import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




export const Animate = {
    p: ({children,...props})=> <p data-aos="fade-up" data-aos-easing="ease" data-aos-delay="500"  {...props}>{children}</p>,
    h1: ({children,...props})=> <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400"   {...props}>{children}</h1>,
    h2: ({children,...props})=> <h2 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400"  {...props}>{children}</h2>,
    h3: ({children,...props})=> <h3 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400"  {...props}>{children}</h3>,
    h4: ({children,...props})=> <h4 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400"  {...props}>{children}</h4>,
    h5: ({children,...props})=> <h5 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400"  {...props}>{children}</h5>,
    div: ({children,...props})=> <div data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400"  {...props}>{children}</div>,


}