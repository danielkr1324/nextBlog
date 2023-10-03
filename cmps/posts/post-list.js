import classes from "./post-list.module.css"
import PostPreview from "./post-preview"

function PostList({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map(post => (
        <PostPreview
          key={post.slug}
          post={post}
        />
      ))}
    </ul>
  )
}

export default PostList
