import Layout from '../components/Layout'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export default function Info({ frontmatter, markdownBody, siteTitle }) {
  return (
    <Layout
      pathname="info"
      bgColor={frontmatter.background_color}
      siteTitle={siteTitle}
    >
      <section className="info_blurb">
        <ReactMarkdown source={markdownBody} />
      </section>
      <style jsx>{`
        .info_blurb {
          max-width: 800px;
          padding: 1.5rem 1.25rem;
        }

        @media (min-width: 768px) {
          .info_blurb {
            padding: 2rem;
          }
        }

        @media (min-width: 1440px) {
          .info_blurb {
            padding: 3rem;
          }
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const content = await import(`../data/info.md`)
  const config = await import(`../content/site-metadata.md`)
  const contentData = matter(content.default)
  const configData = matter(config.default)

  return {
    props: {
      siteTitle: configData.data.title,
      frontmatter: contentData.data,
      markdownBody: contentData.content,
    },
  }
}
