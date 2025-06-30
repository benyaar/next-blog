import { Fragment } from "react"
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-posts"
import { getFeaturedPosts } from "../lib/posts-util"

// const DUMMY_POSTS = [
//     { title: 'getting started nextjs', image: 'getting-started-nextjs.png', excerpt: 'Some description', date: '2025-04-10', slug: 'getting-started-nextjs' },
//     { title: 'nextjs file based routing', image: 'nextjs-file-based-routing.png', excerpt: 'Some description', date: '2025-06-12' , slug: 'nextjs-file-based-routing', }
// ]

function HomePage({posts}) {
    return (
        <Fragment>
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