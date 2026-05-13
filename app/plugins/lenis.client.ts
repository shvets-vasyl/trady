import Lenis from "lenis"

export default defineNuxtPlugin(() => {
  const lenis = useState("lenis", () => {
    return new Lenis({
      duration: 1.2,
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
  })
  lenis.value.on("scroll", ({ scroll }) => {
    ScrollTrigger.update()
    window.UnicornStudio?.setScroll?.(scroll)
  })
  gsap.ticker.add((time) => {
    lenis.value.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)
  lenis.value.stop()
})
