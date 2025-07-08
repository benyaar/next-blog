import { Fragment } from "react"
import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"
import Head from "next/head"

function AllPostsPage({ posts }) {

    return (
        <Fragment>
            <Head>
                <title>All posts</title>
                <meta
                    name='description'
                    content='all posts'
                />
            </Head>
            <AllPosts posts={posts} />
        </Fragment>

    )
}

export function getStaticProps() {
    const allPosts = getAllPosts()
    return {
        props: {
            posts: allPosts
        },
    }
}
export default AllPostsPage