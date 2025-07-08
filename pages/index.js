import { Fragment } from "react"
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-posts"
import { getFeaturedPosts } from "../lib/posts-util"
import Head from "next/head"


function HomePage({ posts }) {
    return (
        <Fragment>
            <Head>
                <title>Blog</title>
                <meta
                    name='description'
                    content='Some description'
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={posts} />
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        },
    }
}
export default HomePage