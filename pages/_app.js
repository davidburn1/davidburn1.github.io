// import React from 'react';
// import App from 'next/app';
import Head from 'next/head'
import Layout from '../components/Layout';


// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import "../public/styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
<div>
    <Head>
    <title>David Burn</title>
    <meta name="robots" content="index, follow"/>
    <meta name="keywords" content=""/>
    <meta name="author" content="David Burn"/>
    <meta name="description" content="David Burn - Research scientist working on nanoscale magnetic devices. Interested in dynamic magnetisation processes, spintronic and electronic behaviour and nanotechnology device fabrication."/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </Head>




    <Layout>
    <Component {...pageProps} />
    </Layout>
    </div>
    );
}