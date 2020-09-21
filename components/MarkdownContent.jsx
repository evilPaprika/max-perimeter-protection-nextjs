import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';


export default function MarkdownContent({ markdownBody, ...props }) {
    return (
        <>
            <article className={`overflow-auto markdown ${props.className}`}>
                <ReactMarkdown className="markdown-body" source={markdownBody} escapeHtml={false} />
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
