import fs from "fs"
import path from "path"
import matter from "gray-matter"

export const postService = {
  getAllPosts,
  getFeaturedPosts,
}

const postDir = path.join(process.cwd(), "posts")

function getPostData(fileName) {
  console.log("file name ", fileName)

  const filePath = path.join(postDir, fileName)
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)
  const postSlug = fileName.replace(".md", "")
  console.log("slug ", postSlug)

  const postData = {
    slug: postSlug,
    ...data,
    content,
  }

  return postData
}

function getAllPosts() {
  const postFiles = fs.readdirSync(postDir)
  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile)
  })
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  )

  return sortedPosts
}

function getFeaturedPosts() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter(post => post.isFeatured)
  return featuredPosts
}
