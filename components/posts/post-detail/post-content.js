import Image from 'next/image'
import classes from './post-content.module.css'
import PostHeader from './post-header'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

function PostContent({ post }) {
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const customRenderers = {
        img({ src, alt }) {
            return (
                <Image
                    className={classes.content}
                    src={`/images/posts/${post.slug}/${src}`}
                    alt={alt}
                    width={600}
                    height={300}
                />
            )
        },
         code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
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
