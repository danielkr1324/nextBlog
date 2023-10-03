import AllPosts from "../../cmps/posts/all-posts"

const DUMMY_DATA = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for building production-ready web apps. It is built on top of React and is a great choice for beginners.",
    date: "2023-04-01",
  },
]

function AllPostsPage() {
  return <AllPosts posts={DUMMY_DATA} />
}

export default AllPostsPage
