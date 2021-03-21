import Link from 'next/link'
import { promises as fs } from 'fs'
import path from 'path'

import parseLatex from '../../components/Latex';
import FormatLatex from '../../components/Formats';

import { useRouter } from 'next/router'




import presentationsJson from  '../../data/presentations.json';

export async function getStaticProps() {
    const presentationData = presentationsJson;
    var filename;
    for (var i = 0; i < presentationData.length; i++) {
        try{
            filename = path.join(process.cwd(), "/data/abstracts/presentations/"+presentationData[i].key+".html");
            presentationData[i].abstract = await fs.readFile(filename, 'utf8');  
        } catch {
            presentationData[i].abstract = "";
        }
    }
    //console.log(presentationData);
    return { props: { presentationData:presentationData } }
}
     
export async function getStaticPaths() {
    const paths = presentationsJson.map(p => ({
        params: { key: p.key }  
    }));
    return { paths, fallback:false  };
}








const Presentation = ({presentationData}) => {
  const router = useRouter()
  const { key } = router.query

  if (router.query.key === undefined){
        console.log("returning blank");
      return "";
    }

    const presentationsObject = {};
    for (var i = 0; i < presentationData.length; i++) {
        presentationsObject[presentationData[i].key] = presentationData[i];
    }

    var p = presentationsObject[router.query.key];
    const title = parseLatex(p.title);

  return (
<div className="container">
    <br/><br/>

    <div className="row" key={p.key}>
        <div className="col-sm-3" > 
            <img className="rounded img-fluid img-thumbnail" src={"/images/presentations/"+p.key+".jpg"} alt="{p.title}"/>
        </div>
        
        <div className="col-sm-9 d-flex flex-column justify-content-between">
            <div> 
                <h3><Link href={"/presentations/"+[p.key]}><a dangerouslySetInnerHTML={{ __html: title}}></a></Link></h3>

                <p><span dangerouslySetInnerHTML={{ __html: p.authors}} /></p>
                <p> <i>{p.conference}</i> {p.location} <b>{p.date}</b> </p>

                <FormatLatex>{p.abstract}</FormatLatex>
            </div>
        </div>
    </div>
    
</div>

  );

}

export default Presentation