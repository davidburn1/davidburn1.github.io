import Head from 'next/head'
import Layout from '../components/Layout';
import Router from 'next/router'
// import { Fragment } from 'react'

import GoogleAnalytics from "../components/googleAnalytics.js"

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import "../public/styles.css";



// Notice how we track pageview when route is changed
// Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))




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

    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    {/* <Fragment>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163960416-1"/>
    <script dangerouslySetInnerHTML={{
      __html: "window.dataLayer = window.dataLayer || []; \
              function gtag(){dataLayer.push(arguments)}\
              gtag('js', new Date());"
    }}/>
    </Fragment> */}

 

  </Head>
  <GoogleAnalytics />

    <Layout>
    <Component {...pageProps} />
    </Layout>

    </div>
    );
}