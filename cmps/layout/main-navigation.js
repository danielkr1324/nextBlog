import Logo from "./logo"
import Link from "next/link"
import classes from "./main-navigation.module.css"

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default MainNavigation
