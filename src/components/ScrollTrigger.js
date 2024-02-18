"use client"

import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollTrigger({children}) {
 
  return (
    <ScrollTrigger root>
      {children}
    </ScrollTrigger>
  )
}

export default ScrollTrigger;