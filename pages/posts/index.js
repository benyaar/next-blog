import AllPosts from "../../components/posts/all-posts"

function AllPostsPage(){
    const DUMMY_POSTS = [
    { title: 'getting started nextjs', image: 'getting-started-nextjs.png', excerpt: 'Some description', date: '2025-04-10', slug: 'getting-started-nextjs' },
    { title: 'nextjs file based routing', image: 'nextjs-file-based-routing.png', excerpt: 'Some description', date: '2025-06-12' , slug: 'nextjs-file-based-routing', }
]
    return (
        <AllPosts posts={DUMMY_POSTS}  />
    )
}
export default AllPostsPage