import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import parseLatex from '../components/Latex';

// import FormatLatex from '../components/Formats';



import newsJson from  '../data/news.json';
import papersJson from  '../data/papers.json';


const papersObject = {};
for (var i = 0; i < papersJson.length; i++) {
    papersObject[papersJson[i].key] = papersJson[i];
}


var formatLatex = function(text) {
    function replacer(match, text, offset, string) {
        text = text.replace(/_{(.*?)}/g, "<sub>$1</sub>"); // multi character subscript
        text = text.replace(/\^{(.*?)}/g, "<sup>$1</sup>"); // multi character superscript
        text = text.replace(/_(.)/g, "<sub>$1</sub>"); // single character subscript
        text = text.replace(/\^(.)/g, "<sup>$1</sup>"); // single character superscript
        return text;
    }

        if (text === undefined) return ""
        return text.replace(/\$(.*?)\$/g, replacer); // detects all math mode 
}

export default function News() {
return (

<section className="container">
    <br/><br/>

{newsJson.map(function(d, idx){
    var publicationTitle = parseLatex(papersObject[d.publication].title);
    return (
        <div className="row" key={d.key}>
            <div className="col-sm-3" > 
                {/* <img class="rounded img-fluid img-thumbnail" src="/images/news/{d.key}.png" alt="{d.title}"/> */}
                <Image src={"/images/news/"+d.key+".png"} alt="{d.title}" width={245} height={150}/>
            </div>
            
            <div className="col-sm-9 d-flex flex-column justify-content-between">
                <div> 
                    <div>
                        <h2><Link href={d.link}>{d.title}</Link></h2>
                        {d.publisher}
                        <br/>
                        {/* {d.publication} */}
                        {/* <Link href={"publications/"+d.publication}> publication </Link> */}
                        <Link href={"publications/"+d.publication}><a dangerouslySetInnerHTML={{ __html: publicationTitle}}></a></Link>
                        
                        {/* <Link href={d.publication}> {papersObject[d.publication].title} </Link> */}
                    </div>
                
                    <br/>

                </div>
            </div>

            <div className="col-sm-12" > 
                <hr/>  
            </div>
        
        </div>
    )
})}
</section>

);
}