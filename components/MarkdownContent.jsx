import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';


export default function MarkdownContent({ markdownBody }) {
    return (
        <>
            <article className="overflow-auto mt-5 markdown">
                <ReactMarkdown source={markdownBody} escapeHtml={false} />
            </article>
            <style global jsx>
                {`
                    .markdown img  {
                        max-width: 100%;
                        height: auto;
                    }
                `}
            </style>
        </>
    );
}