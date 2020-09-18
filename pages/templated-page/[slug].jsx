import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import Layout from '../../components/Layout';


const glob = require('glob');


export default function PageTemplate({ frontmatter, markdownBody, siteTitle }) {
    if (!frontmatter) { return <></>; }

    return (
        <Layout siteTitle={siteTitle}>
            <article className="auto">
                <ReactMarkdown source={markdownBody} escapeHtml={false} />
            </article>
            <style jsx>
                {`
                  
                `}
            </style>
        </Layout>
    );
}

export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params;
    const content = await import(`../../content/templated-pages/${slug}.md`);
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
    const templatedPages = glob.sync('content/templated-pages/**/*.md');
    // remove path and extension to leave filename only
    const templatedPageSlugs = templatedPages.map((file) => file
        .split('/')[2]
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
