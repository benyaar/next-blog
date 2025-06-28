import { Fragment } from "react"
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-posts"

const DUMMY_POSTS = [
    { title: 'getting started nextjs', image: 'getting-started-nextjs.png', excerpt: 'Some description', date: '2025-04-10', slug: 'getting-started-nextjs' },
    { title: 'nextjs file based routing', image: 'nextjs-file-based-routing.png', excerpt: 'Some description', date: '2025-06-12' , slug: 'nextjs-file-based-routing', }
]

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    )
}
export default HomePage