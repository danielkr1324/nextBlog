import Image from "next/image"
import classes from "./hero.module.css"

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me4.jpg"
          alt="Daniel"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Daniel</h1>
      <p>I blog about web development - especially about frontend frameworks</p>
    </section>
  )
}

export default Hero
