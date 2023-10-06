import AllPosts from "../../cmps/posts/all-posts"
import { postService } from "../../services/post.service"

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />
}

export function getStaticProps() {
  const allPosts = postService.getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}

export default AllPostsPage
