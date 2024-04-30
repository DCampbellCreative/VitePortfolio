import { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router";
//DATA
import { CASESTUDIES } from '../../data/casestudies';
//STYLING
import './CaseStudy.css';

export const CaseStudy = () => {
	const { processId } = useParams();

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			{CASESTUDIES.filter(casestudy => casestudy.processId === processId).map(casestudy =>
				<div key={casestudy.processId} className="cs-container">
					<Link className='x-button' to='/'>X</Link>
					<h1 className="cs-heading">{casestudy.title}</h1>
					<div className="cs-flex-container">
						<div className='cs-body'>
							{casestudy.intro}
						</div>
						{casestudy.introImages ? (
							casestudy.introImages.map((img, idx) =>
								<div key={idx} className='cs-column'>
									<img className='cs-image' src={img.name} alt={img.caption} />
									<p className='cs-caption'>{img.caption}</p>
								</div>

							)
						) : null}
					</div>

					<div className='cs-border'></div>

					<h1 className="cs-heading">Process and Challenges</h1>
					<div>
						{casestudy.body.map((paragraph, idx) => (<p key={idx} className='cs-body'>{paragraph}</p>)
						)}
					</div>

					<div className='image-container-center' >
						{casestudy.bodyImages.map(img => (
							<>
								<img className="cs1-image-2 cs2-image-center" src={img.name} alt={img.caption} />
								<p className='cs-caption'>{img.caption}</p>
							</>
						))}
					</div>


					<div className='cs-border'></div>
					<div>
						<div className='video-container'>
							<img className="cs-video" src={casestudy.gif.name} alt="flixfix-video" />
							<p className='cs-caption'>{casestudy.gif.caption}</p>
						</div>
						<div>
							<h1 className="cs-heading">Results</h1>
							<p className='cs-body'>
								{casestudy.conclusion}
							</p>
						</div>
					</div>
					<Link className='cs-button' to='/' >Close</Link>
				</div>
			)}
		</>
	)
} 