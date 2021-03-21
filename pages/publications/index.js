import Link from 'next/link';

import parseLatex from '../../components/Latex';

import papersJson from  '../../data/papers.json';



// function parseLatex(text) {
//     function replacer(match, text, offset, string) {
//         text = text.replace(/_{(.*?)}/g, "<sub>$1</sub>"); // multi character subscript
//         text = text.replace(/\^{(.*?)}/g, "<sup>$1</sup>"); // multi character superscript
//         text = text.replace(/_(.)/g, "<sub>$1</sub>"); // single character subscript
//         text = text.replace(/\^(.)/g, "<sup>$1</sup>"); // single character superscript
//         return text;
//     }

//     if (text === undefined){
//         text = "";
//     } else {
//         text = text.replace(/\$(.*?)\$/g, replacer); // detects all math mode 
//     }

//     console.log(text);
//     return text
//   }




export default function Publications() {
  return (
    


<section className="container">

    <br/><br/>
    <div className="row">
        <div className="col-sm-12" > 
            <a href="https://scholar.google.co.uk/citations?user=fsWltggAAAAJ"> View publications on Google Scholar </a>
            {/* <!-- <a href="https://orcid.org/0000-0001-7540-1616"><img src="/images/social/orcid.png" height="30" alt="David Burn Orcid profile"> 0000-0001-7540-1616 </a> --> */}

            <hr/>
        </div>
    </div>


    {papersJson.map(function(p, idx){
        const title = parseLatex(p.title);
        //console.log(title);
    return (

    <div className="row" key={p.key}>
        <div scroll-to="selectedKey==p.key"></div>
        <div className="col-sm-3" > 
            <img className="rounded img-fluid img-thumbnail" src={"/images/papers/"+p.key+".jpg"} alt="{p.title}"/>
        </div>
        
        <div className="col-sm-9 d-flex flex-column justify-content-between">
            <div> 
                {/* <h3><Link href={"/publications/"+[p.key]}><a>{title}</a></Link></h3> */}
                <h3><Link href={"/publications/"+[p.key]}><a dangerouslySetInnerHTML={{ __html: title}}></a></Link></h3>

            

                <p>{p.authors}</p> 
                <p> <i>{p.journal}</i> <b>{p.volume}</b>, {p.page} ({p.year}) </p>
                <p> DOI: <a href={"https://doi.org/"+[p.doi]}> {p.doi} </a> </p>

            </div>
            {/* <!-- <div>
                <button class="btn btn-default pull-right rm">Read more..</button>			
            </div>		 --> */}
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