import Head from 'next/head';
import React from 'react';


export default function Meta(props) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>{props.siteTitle}</title>
                <meta name="Description" content={props.description} />
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/static//favicon-32x32.png" />
                <meta name="theme-color" content="#4B5B6F" />
            </Head>
            <style jsx global>
                {`
                    @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");
                    
                    @font-face {
                      font-family: IntroBold;
                      src: url('/static/Intro-Bold-Alt.ttf');
                      font-weight: bold;
                      font-style: normal;
                    }
                    
                    html, body {
                        padding: 0; margin: 0;
                        position: relative;
                        min-height: 100vh;
                    }
                `}
            </style>
        </>
    );
}
