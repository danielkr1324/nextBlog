import classes from "./all-posts.module.css"
import PostList from "./post-list"

function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostList posts={posts} />
    </section>
  )
}

export default AllPosts
