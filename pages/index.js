import Link from 'next/link'
import Image from 'next/image'

import {RecentPublications, RecentPresentations} from '../components/Widgets';

export default function Index() {
  return (

<div>

<section>
	<div className="jumbotron">
		<div className="row justify-content-md-center align-items-center">
			<div className="col-md-6 col-lg-4 align-self-end">
        		<Image src="/images/static/portrait.png" alt="David Burn" width={500} height={500}/>
			</div>
			
			<div className="col-md-6">	
				<h1 className="text-center"> David Burn </h1>	<br/>
				<p className="text-center"> Research scientist exploring dynamic magnetisation behaviour in advanced magnetic materials. </p>
				<p className="text-center"> My research enables the development of novel information processing and storage devices.</p>

				<div className="row justify-content-md-center">
					<a className='social' href="http://uk.linkedin.com/in/davidburn1"><img src="/images/social/linkedin.png" height="38" alt="David Burn LinkedIn profile"/></a>
				</div>
				<br/>
			</div>
      </div>
	</div>
</section>




<section>
	<div className="container">
		<div className="row justify-content-md-center align-items-end">

			<div className="col-sm-8  ">					
				<p className="lead text-center"> My research looks at the behaviour of thin-film and nanostructured magnetic materials </p>
				
				<p className="text-center">	In these materials the interactions between the magnetic and electrical properties are particularly interesting. They allow us to access the spin on the electrons in addition to their charge. This area of research is known as spintronics and has huge potential for the development of novel technological devices for many applications. </p>	
			</div>

			<div className="col-sm-4">
				<img className="img-fluid" src="/images/lcc_2.jpg" alt="Wire bonded sample"/>
			</div>

		</div>
	</div>
</section>


<br/><br/>


<section>
	<div className="container">
		<div className="row">
			<div className="col-md-6">
				<p> Modern devices such as computers, phones and televisions have become a huge part of our lives. It has taken huge amounts of scientific research and engineering to produce these devices we have today. </p>
			</div>
			<div className="col-md-6">
				<p> Future devices will make use of the fundamental physical understanding of advanced materials that we are working on today.</p>
			</div>
		</div>
	</div>
</section>


<br/><hr/><br/>


<section>
	<div className="container">
		<p className="lead text-center"> Using the latest data science techniques to collect, analyse and visualise data </p>

		<div className="row">
			<div className="col-lg-9 offset-lg-3 row">
				<div className="col-sm-3 d-flex justify-content-center align-items-center">
					<img className="img-fluid" src="/images/calipers.png"/>
				</div>
				<div className="col-sm-8 offset-sm-1">
					<p className="lead"> Data collection </p>	
					<p> Using a wide range of specialised sensors and detectors to get the data needed to explore new science and feed into automated control systems.
					</p>
				</div>
			</div>

			<div className="col-lg-9 offset-lg-3 row">
				<div className="col-sm-3 d-flex justify-content-center align-items-center">
					<img className="img-fluid" src="/images/cogs.png"/>
				</div>
				<div className="col-sm-8 offset-sm-1">
					<p className="lead"> Data processing </p>	
					<p> Data analysis on-the-fly, on distributed systems, and employing supercomputing clusters. Model fitting, machine learning and other techniques help extract useful information and understanding from scientific data.						
					</p>
				</div>
			</div>

			<div className="col-lg-9 offset-lg-3 row">
				<div className="col-sm-3 d-flex justify-content-center align-items-center">
					<img className="img-fluid" src="/images/graph.png"/>
				</div>
				<div className="col-sm-8 offset-sm-1">
					<p className="lead"> Data visualisation </p>	
					<p> Exploring and presenting information contained in complex multi-dimensional datasets through interactive tools, animations and plots.
					</p>
				</div>
			</div>

		</div>
	</div>
</section>


<br/><hr/><br/>


<section>
	<div className="container">
		<p className="lead text-center"> Research in nanostructured magnetic materials has huge potential to impact on our every day lives</p>
		<div className="row">

			<div className="col-sm-6 col-lg-3 text-center">
				<img className="img-fluid" src="/images/ico_particle.png" alt="magnetic particle" width='150px'/>
				<p className="lead"> Nanoparticle control </p>	
				<p> On-chip manipulation of biological and chemical species is possible through nanoparticle functionalisation.  </p>
			</div>

			<div className="col-sm-6 col-lg-3 text-center">
				<img className="img-fluid" src="/images/ico_memory.png" alt="magnetic computer chip" width='150px'/>
				<p className="lead"> Memory &amp; processing </p>
				<p> Discover how future technologies could store and process information in the form of magnetic bits. </p>
			</div>

			<div className="col-sm-6 col-lg-3 text-center">
				<img className="img-fluid" src="/images/ico_sensor.png" alt="magnetic sensor" width='150px'/>
				<p className="lead"> Advanced sensors </p>	
				<p> High-tech sensors based on magnetic thin films and nanostructures offer new advantages. </p>
			</div>

			<div className="col-sm-6 col-lg-3 text-center">
				<img className="img-fluid" src="/images/ico_question.png" alt="question mark" width='150px'/>
				<p className="lead"> More </p>	
				<p> Many more applications of nanoscale magnetism and magnetic materials are likely.</p>
			</div>
		</div>
	</div>
</section>


<br/><hr/><br/>


<section>
	<div className="container">
		
		<div className="row">
			<div className="col-lg-6 nav d-flex justify-content-center flex-lg-column justify-content-lg-start">
				<p className="lead text-center">My research is based around several themes</p>
				<button className="p-2 btn btn-lg btn-outline-primary active" data-toggle="pill" data-target="#nano-mag"> Nanoscale magnetism </button>
				<br className="hidden-md"/>
				<button className="p-2 btn btn-lg btn-outline-primary" data-toggle="pill" data-target="#mag-dynamics">Magnetisation Dynamics</button>
				<br className="hidden-md"/>
				<button className="p-2 btn btn-lg btn-outline-primary" data-toggle="pill" data-target="#xray-magnetism">X-ray Detected Magnetism</button>
			</div>

			<div className="col-lg-6">
				<div className="tab-content">

					<div className="tab-pane fade show active" id="nano-mag" role="tabpanel">
						<p className="lead"> Nanoscale magnetism </p>
						<p> The magnetisation direction in magnetic structures is determined by various energy contributions. By changing the shape of a structure you gain control over the demagnetisation energy and can induce an anisotropy known as shape anisotropy to favour magnetisation along certain directions. </p>
						<p> Using nanofabrication techniques I have created many systems to manipulate individual domain walls in nanowires as well as exploring their interactions at verticies and more complex artificial spin ice systems.</p>
					</div>

					<div className="tab-pane fade show" id="mag-dynamics" role="tabpanel">
						<p className="lead"> Magnetisation dynamics </p>
						<p> The dynamic behaviour of magnetic systems is an important factor for the development novel technologcial devices. Our understanding of these dynamics is based on a combination of the damping and precessional behaviour. Magnetisation dynamics happens on the nanosecond timescale or at GHz frequencies in the frequency domain. </p>
						<p> Experiments on dynamic timescales can reveal fundamental understanding about material physics as well as opening avenues for the control of magnetisation dynamic processes.</p>
					</div>

					<div className="tab-pane fade show" id="xray-magnetism" role="tabpanel">
						<p className="lead"> X-ray detected magnetism </p>
						<p> X-rays provide a powerful way to probe the behaviour of magnetic materials. With an energy range covering the transitions with electron shells responsible for magnetism x-rays can provide an element specific and surface sensitive probe of magnetic moments. Even the spin and orbital contributions to these moments can be identified. </p>
						<p> I am experienced in multiple x-ray characterisation techniques such as x-ray circular magnetic dichrosim (XMCD), x-ray magnetic scattering and reflectivity, small angle x-ray scattering (SAXS).</p>
					</div>

				</div>
			</div>
		</div>
	</div>	
</section>


<br/><hr/><br/>


<section>
	<div className="container">
		<h2> Recent publications  </h2>
		<RecentPublications></RecentPublications>
	</div>
</section>




<br/><hr/><br/>




{/* <section>
	<div className="container">
		<br/>
		<div className="row">
			<div className="col-lg-6 text-center">
				<h1> Look out for my work </h1>
				<p className="lead"> Presented frequently at magnetism conferences, both in the UK and internationally. </p>
				<button className="btn btn-outline-primary" ui-sref="presentations"> More of my presentations </button>
			</div>
			<div className="col-lg-6">
				<RecentPresentations></RecentPresentations>
			</div>
		</div>
    </div>
</section> */}



{/* <br/><hr/><br/> */}


<section id="about">
<div className="container">
	<h1  className="text-center"> My background</h1>
		
	<div className="row justify-content-center">
		<div className="col-md-2">
			<img className="rounded img-fluid" src="/images/tl_diamond.jpg" alt=""/>
		</div>
		<div className="col-md-6 col-lg-5">
			<h2>  Diamond Light Source </h2>
			<p> I am currently doing research on magnetisation dynamics, devleoping time-resolved energy specific techniques to probe the magnetisation in magnetic thin films and nanostructures.</p>
		</div>
		<div className="col-md-3"></div>
	</div>
	
	<div className="row justify-content-center">
		<div className="col-md-3"></div>
		<div className="col-md-2">
			<img className="rounded img-fluid" src="/images/tl_queens_tower.jpg" alt=""/>
		</div>
		<div className="col-md-6 col-lg-5">
			<h2> Imperial College London </h2>
			<p>At Imperial College London I worked in the functional magnetism group exploring the magnetic and electronic properties of interconnected magnetic nanostructures in artificial spin ice geometries.</p>
		</div>
	</div>

	<div className="row justify-content-center">
		<div className="col-md-2">
			<img className="rounded img-fluid" src="/images/tl_cathedral.jpg" alt=""/>
		</div>
		<div className="col-md-6 col-lg-5">
			<h2> Durham University </h2>
				<p>Previously I did my PhD at Durham University on the interactions between nanowire structuring and the micromagnetic structure of domain walls. I've looked in detail at the difference between micromagnetic domain walls structures in their static and dynamic regimes.</p>
		</div>
		<div className="col-md-3"></div>
	</div>
		
	<div className="row justify-content-center">
		<div className="col-md-3"></div>
		<div className="col-md-2">
			<img className="rounded img-fluid" src="/images/tl_bridge.jpg" alt=""/>
		</div>
		<div className="col-md-6 col-lg-5">
					<h2> Durham University </h2>
					<p>I was also at Durham University as an undergraduate studying Physics. My final year masters project was investigating magnetisation dynamics in thin-film structures.</p>
		</div>
	</div>	
		
</div>
</section>



 </div> 



    
  );
}
