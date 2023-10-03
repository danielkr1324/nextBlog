import PostHeader from "./post-header"
import classes from "./post-content.module.css"

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2023-04-01",
}

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  return (
    <article className={classes.content}>
      <PostHeader
        title={DUMMY_POST.title}
        imageSrc={imagePath}
      />
    </article>
  )
}

export default PostContent
