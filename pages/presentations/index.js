import Link from 'next/link'
import parseLatex from '../../components/Latex';

import presentationsJson from  '../../data/presentations.json';


export async function getStaticProps() {
    return { props: { presentationData:presentationsJson } }
}



export default function Presentations({presentationData}) {
  return (
    


<section className="container">

    <br/><br/>

    {presentationData.map(function(p, idx){
        const title = parseLatex(p.title);
    return (


    <div className="row" key={p.key}>
        <div scroll-to="selectedKey==p.key"></div>
        <div className="col-sm-3" > 
            <img className="rounded img-fluid img-thumbnail" src={"/images/presentations/"+p.key+".jpg"} alt="{p.title}"/>
        </div>
        
        <div className="col-sm-9 d-flex flex-column justify-content-between">
            <div> 
            <h3><Link href={"/presentations/"+p.key}><a dangerouslySetInnerHTML={{ __html: title}}></a></Link></h3>

            <p><span dangerouslySetInnerHTML={{ __html: p.authors}} /></p>
            <p> <i>{p.conference}</i> {p.location} <b>{p.date}</b> </p>


            </div>
        </div>

        <div className="col-sm-12" > 
            <hr/>  
        </div>
        
    </div>

    );
})}
</section>


  );
}