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
                    }

                    h1 {
                        font-family: IntroBold;
                        font-weight: bold;
                        font-style:normal;

                    }
                `}
            </style>
        </>
    );
}
