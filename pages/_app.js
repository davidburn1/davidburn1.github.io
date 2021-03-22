import Head from 'next/head'
import Layout from '../components/Layout';
import Router from 'next/router'

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import "../public/styles.css";







export default function MyApp({ Component, pageProps }) {

  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', function(url){
    gtag('config', 'UA-163960416-1', {page_path:url});
  })



  return (
<div>
    <Head>
    <title>David Burn</title>
    <meta name="robots" content="index, follow"/>
    <meta name="keywords" content=""/>
    <meta name="author" content="David Burn"/>
    <meta name="description" content="David Burn - Research scientist working on nanoscale magnetic devices. Interested in dynamic magnetisation processes, spintronic and electronic behaviour and nanotechnology device fabrication."/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script async src='https://www.googletagmanager.com/gtag/js?id=UA-163960416-1' />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-163960416-1', {page_path: window.location.pathname,});`,
      }}
    />
 

  </Head>
     <Layout>
    <Component {...pageProps} />
    </Layout>

    </div>
    );
}