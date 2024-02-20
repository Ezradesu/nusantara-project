"use client"

import { ReactLenis } from '@studio-freight/react-lenis'

function SmoothScroll({children}) {
  // function Component() {
  //   const lenisRef = useRef()
    
  //   useEffect(() => {
  //     function update(time) {
  //       lenisRef.current?.lenis?.raf(time * 1000)
  //     }
    
  //     gsap.ticker.add(update)
    
  //     return () => {
  //       gsap.ticker.remove(update)
  //     }
  //   })
  // }
 
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll;