import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/Layout';


const glob = require('glob');


export default function PageTemplate({ frontmatter, markdownBody, siteTitle }) {
    function reformatDate(fullDate) {
        const date = new Date(fullDate);

        return date.toDateString().slice(4);
    }

    /*
   ** Odd fix to get build to run
   ** It seems like on first go the props
   ** are undefined — could be a Next bug?
   */

    if (!frontmatter) { return <></>; }

    return (
        <Layout siteTitle={siteTitle}>
            <article className="templatedPage">
                <figure className="templatedPage__hero">
                    <img
                        src={frontmatter.hero_image}
                        alt={`templatedPage_hero_${frontmatter.title}`}
                    />
                </figure>
                <div className="templatedPage__info">
                    <h1>{frontmatter.title}</h1>
                    <h3>{reformatDate(frontmatter.date)}</h3>
                </div>
                <div className="templatedPage__body">
                    <ReactMarkdown source={markdownBody} />
                </div>
                <h2 className="templatedPage__footer">Written By: {frontmatter.author}</h2>
            </article>
            <style jsx>
                {`
          .templatedPage h1 {
            margin-bottom: 0.7rem;
          }

          .templatedPage__hero {
            min-height: 300px;
            height: 60vh;
            width: 100%;
            margin: 0;
            overflow: hidden;
          }
          .templatedPage__hero img {
            margin-bottom: 0;
            object-fit: cover;
            min-height: 100%;
            min-width: 100%;
            object-position: center;
          }

          .templatedPage__info {
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 768px;
            margin: 0 auto;
          }
          .templatedPage__info h1 {
            margin-bottom: 0.66rem;
          }
          .templatedPage__info h3 {
            margin-bottom: 0;
          }

          .templatedPage__body {
            width: 100%;
            padding: 0 1.25rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .templatedPage__body a {
            padding-bottom: 1.5rem;
          }
          .templatedPage__body:last-child {
            margin-bottom: 0;
          }
          .templatedPage__body h1 h2 h3 h4 h5 h6 p {
            font-weight: normal;
          }
          .templatedPage__body p {
            color: inherit;
          }
          .templatedPage__body ul {
            list-style: initial;
          }
          .templatedPage__body ul ol {
            margin-left: 1.25rem;
            margin-bottom: 1.25rem;
            padding-left: 1.45rem;
          }

          .templatedPage__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
          }
          .templatedPage__footer h2 {
            margin-bottom: 0;
          }
          .templatedPage__footer a {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .templatedPage__footer a svg {
            width: 20px;
          }

          @media (min-width: 768px) {
            .templatedPage {
              display: flex;
              flex-direction: column;
            }
            .templatedPage__body {
              max-width: 800px;
              padding: 0 2rem;
            }
            .templatedPage__body span {
              width: 100%;
              margin: 1.5rem auto;
            }
            .templatedPage__body ul ol {
              margin-left: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .templatedPage__hero {
              min-height: 600px;
              height: 75vh;
            }
            .templatedPage__info {
              text-align: center;
              padding: 2rem 0;
            }
            .templatedPage__info h1 {
              max-width: 500px;
              margin: 0 auto 0.66rem auto;
            }
            .templatedPage__footer {
              padding: 2.25rem;
            }
          }

          @media (min-width: 1440px) {
            .templatedPage__hero {
              height: 70vh;
            }
            .templatedPage__info {
              padding: 3rem 0;
            }
            .templatedPage__footer {
              padding: 2rem 2rem 3rem 2rem;
            }
          }
        `}
            </style>
        </Layout>
    );
}

export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params;
    const content = await import(`../../posts/${slug}.md`);
    const config = await import('../../content/site-metadata.md');
    const contentData = matter(content.default);
    const configData = matter(config.default);

    return {
        props: {
            siteTitle: configData.data.title,
            frontmatter: contentData.data,
            markdownBody: contentData.content,
        },
    };
}

export async function getStaticPaths() {
    // get all .md files in the posts dir
    const templatedPages = glob.sync('posts/**/*.md');

    // remove path and extension to leave filename only
    const templatedPageSlugs = templatedPages.map((file) => file
        .split('/')[1]
        .replace(/ /g, '-')
        .slice(0, -3)
        .trim());

    // create paths with `slug` param
    const paths = templatedPageSlugs.map((slug) => `/templated-page/${slug}`);

    return {
        paths,
        fallback: false,
    };
}
