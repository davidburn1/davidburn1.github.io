import Link from 'next/link'
import { useRouter } from 'next/router'

import parseLatex from '../../components/Latex';
import FormatLatex from '../../components/Formats';


import papersJson from  '../../data/papers.json';





export async function getStaticProps() {
return { props: { papersData:papersJson } } 
}
  
export async function getStaticPaths() {
    const paths = papersJson.map(p => ({
        params: { key: p.key }  
    }));
    return { paths, fallback:true  };
}








const Publication = ({papersData}) => {
  const router = useRouter()
  const { key } = router.query

  if (router.query.key === undefined){
        console.log("returning blank");
      return "";
    }

    const papersObject = {};
for (var i = 0; i < papersData.length; i++) {
    papersObject[papersData[i].key] = papersData[i];
}
  var p = papersObject[router.query.key];
  const title = parseLatex(p.title);

  return (
<div className="container">
    <br/><br/>

    <div className="row" key={p.key}>
        <div className="col-sm-3" > 
            <img className="rounded img-fluid img-thumbnail" src={"/images/papers/"+p.key+".jpg"} alt="{p.title}"/>
        </div>
        
        <div className="col-sm-9 d-flex flex-column justify-content-between">
            <div> 
                <h3><Link href={"/publications/"+[p.key]}><a dangerouslySetInnerHTML={{ __html: title}}></a></Link></h3>

                <p>{p.authors}</p> 
                <p> <i>{p.journal}</i> <b>{p.volume}</b>, {p.page} ({p.year}) </p>
                <p> DOI: <a href={"https://doi.org/"+[p.doi]}> {p.doi} </a> </p>


                <FormatLatex>{p.abstract}</FormatLatex>

                {/* <!-- <div class="text-justify" ng-bind-html="p.abstract" ng-hide="selectedKey!=p.key"></div>  --> */}
                {/* <div class="text-justify" ng-bind-html="p.abstract | formatLatex" ng-hide="selectedKey!=p.key"></div>  */}
            </div>
            {/* <!-- <div>
                <button class="btn btn-default pull-right rm">Read more..</button>			
            </div>		 --> */}
        </div>
    </div>
    
</div>

  );

}

export default Publication