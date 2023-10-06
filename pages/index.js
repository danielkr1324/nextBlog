import FeaturedPosts from "../cmps/home-page/featured-posts"
import Hero from "../cmps/home-page/hero"
import { postService } from "../services/post.service"

function HomePage(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = postService.getFeaturedPosts()
  console.log(featuredPosts)
  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default HomePage
