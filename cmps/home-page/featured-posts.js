import classes from "./featured-posts.module.css"
import PostList from "../posts/post-list"

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostList posts={posts} />
    </section>
  )
}

export default FeaturedPosts
