import Head from 'next/head'
import Link from 'next/link'


import papersJson from  '../data/papers.json';
import presentationsJson from  '../data/presentations.json';
import parseLatex from './Latex';

export async function getStaticProps() {
    return { props: { papersData:papersJson, presentationsData:presentationsJson } } 
}





export function RecentPublications() {
    const papersData = papersJson;
    var recentPapers = [];
    for (var i=0; i<4; i++) {
        recentPapers.push(papersData[i]);
    }

    return (
        <div>
            <div className="row">

            {recentPapers.map(function(p, idx){
                const title = parseLatex(p.title);
            return (
                <div className="col-lg-6" key={p.key}>
                    <div className='row'>
                        <div className="col-sm-4">
                            <img className="hidden-xs img-fluid img-thumbnail" src={"/images/papers/"+p.key+".jpg"} alt="{p.title}"/>
                        </div>
                        <div className="col-sm-8">
                            <p> <b> <Link href={"/publications/"+[p.key]}><a dangerouslySetInnerHTML={{ __html: title}}></a></Link> </b></p>
                            <p>{p.authors}</p> 
                            <p> <a href={"https://doi.org/"+p.doi}> <i>{p.journal}</i> <b>{p.volume}</b>, {p.page} ({p.year}) </a></p>
                        </div>
                    </div>	
                </div>
            )})}

            </div>
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-outline-primary float-right" ui-sref="publications"> See all publications </button>
                </div>
            </div>
        </div>
    );
  }






  
export function RecentPresentations() {
    const presentationsData = presentationsJson;
    var recentPresentations = [];
    for (var i=0; i<6; i++) {
        recentPresentations.push(presentationsData[i]);
    }

    // const Flickity = require('flickity');

    // setTimeout(function(){
    //     var flkty = new Flickity('.presentations-carousel', {
    //         "pageDots":false,
    //         "selectedAttraction":0.01,
    //         "friction":0.15});
    // }, 10000);

    return (
        <div>
            {/* <Head>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.2.1/flickity.pkgd.min.js"></script>
            	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.2.1/flickity.min.css" />
            </Head> */}
            {/* <flickity options='{"pageDots":false,"selectedAttraction":0.01,"friction":0.15}'> */}

            {/* <div className="presentations-carousel" data-flickity='{"pageDots":false,"selectedAttraction":0.01,"friction":0.15}'>
            {recentPresentations.map(function(p, idx){
            return (
                <div className="carousel-cell" key={p.key}>
                    <img className="img-rounded img-thumbnail" src={"/images/presentations/"+p.key+".jpg"} alt="{p.title}"/>
                </div>
            )})}

            </div> */}

{/* <div className="presentations-carousel" data-flickity='{"pageDots":false,"selectedAttraction":0.01,"friction":0.15}'> */}
<div className="presentations-carousel" >
            <div className="carousel-cell">...</div>
            <div className="carousel-cell">...</div>
            <div className="carousel-cell">...</div>
            
            </div>
    


        </div>
        

    );
  }