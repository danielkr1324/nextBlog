import Image from "next/image"
import classes from "./post-header.module.css"

function PostHeader({ title, imageSrc }) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image
        src={imageSrc}
        alt={title}
        width={200}
        height={150}
      />
    </header>
  )
}

export default PostHeader