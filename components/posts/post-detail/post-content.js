import Image from 'next/image'
import classes from './post-content.module.css'
import PostHeader from './post-header'
import ReactMarkdown from 'react-markdown'


function PostContent({post}) {
    const imagePath = `/images/posts/${post.slug}/${post.image}`
     const customRenderers = {
        img({ src, alt }) {
            return (
                <Image className={classes.content}
                    src={`/images/posts/${post.slug}/${src}`}
                    alt={alt}
                    width={600}
                    height={300}
                />
            )
        }
    }
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )
}
export default PostContent