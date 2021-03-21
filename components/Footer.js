
const footerStyle = {
    // backgroundColor: "blue",
    // color: "white",
    // width: "100%",
    // height: "50px"
  };
  
  const Footer = () => (
    <div className="Footer" style={footerStyle}>
        <br/><hr/>

        <section className="bg1">
            <div className="container">
                <div className="row  align-items-end">
                    <div className="col-6">
                        David Burn <br/>
                        Diamond Light Source <br/>
                        Didcot <br/>
                        Oxfordshire <br/>
                        OX11 0DE <br/>
                        <br/>
                        david.burn@diamond.ac.uk
                    </div>
                    <div className="col-6">
                            <a className='social' href="http://uk.linkedin.com/in/davidburn1"><img className="img-social" loading="lazy" src="/images/social/linkedin.png" height="38" alt="David Burn LinkedIn profile"/></a>
                            <a className='social' href="https://orcid.org/0000-0001-7540-1616"><img className="img-social" loading="lazy" src="/images/social/orcid.png" height="38" alt="David Burn Orcid profile"/></a>
                            <a className='social' href="http://www.researcherid.com/rid/J-3598-2012"><img className="img-social" loading="lazy" src="/images/social/researcherID.png"  height="38" alt="David Burn Researcher ID profile"/></a>
                            <a className='social' href="http://scholar.google.co.uk/citations?user=fsWltggAAAAJ "><img className="img-social" loading="lazy" src="/images/social/googleScholar.png" height="38" alt="David Burn Google Scholar profile"/></a> 
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
  
  export default Footer;