import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particles";
import Moto from '../../Assets/moto.png'
import Sparks from '../../Assets/Sparks.png'
import Softora from "../../Assets/Softora.png"
import CodeSpeedy from "../../Assets/CodeSpeedy.png"
import TCS from "../../Assets/TCS.png"
import IStudio from "../../Assets/ISudtio.png"
import { BsFillAirplaneFill } from "react-icons/bs";
import Education from "./Education"


function Experience() {

	const experienceList = [
		{
			id: 1,
			title: 'Software Engineer',
			company: 'Motorola Mobility - Lenovo',
			description: `Hello Shopping: Brazil centric Mobile E-Commerce    (React.js, VTEX, GraphL).
			Launched to <span class="purple">11M users</span>, with 25k daily engagement; Crafted 21 UX flows, 623 UI screens.
			<span class="purple">Procured 340k INR</span> savings annually: Super headed migration from third-party software to in house grievance resolution system;Crafted 5 UX flow 15+ UI screens fostering user retention.
			<span class="purple">Slashed load time by 30%</span>: Optimized orders page with custom pagination leveraging useRef.
			<span class="purple">9% revenue lift</span>: Developed Dialogflow chatbot, Moto special/blog page fueling product sale.
			<span class="purple">16% hike</span> notification opt-ins:Developed cloud based dialog interface to solicit push opt-ins.
			<span class="purple">2% cart conversion lift</span>: Introduced tailored carousel for user cohorts on the cart page.
			Hello You:Content Delivery platform    (React.js).
			Integrated WebView for app recommendation,boosting revenue & amplify user-engagement.
			<span class="purple">Attained 4% CTR</span>: Developed cloud enabled dialog within user cohorts; enhancing user engagement via offers, surveys. Integrated display thresholds to mitigate redundant banner.
			Moto Engage CRM: Personalized Consumer Engagement platform    (Angular, GCP).
			Deployed Campaign dashboard for app suggestion;empowering user engagement strategies.
			Instituted SME app review protocol; upheld quality by mitigating incorrect app publications.
			Integrated app install from notification in Story dashboard, enhancing CRM functionality`,
			imageUrl: Moto,
			startDate: 'Aug 2023',
			endDate: 'Present'
		},
		{
			id: 2,
			title: 'Intern',
			company: 'Sparks Foundation',
			description: `Integrated <span class="purple">Google OAuth2 </span> for advanced user login, enhancing security and user convenience.
      		Significantly improved user auth, leading to heightened security and seamless login experience.`,
			imageUrl: Sparks,
			startDate: 'July 2021',
			endDate: 'Aug 2021'
		},
		{
			id: 3,
			title: 'Intern',
			company: 'Softora Tech Pvt Ltd',
			description: `Developed dynamic responsive payment gateway(pockket) using <span class="purple">Node.js, Express, MongoDB</span>.
			Integrated user’s choice for different payment option; utilized MessageBird for sending OTP. 
			Utilized Passport for local authentication; Google OAuth2 for authorization (SignIn, SignUp)`,
			imageUrl: Softora,
			startDate: 'Apr 2021',
			endDate: 'May 2021'
		},
		{
			id: 4,
			title: 'Intern',
			company: 'CodeSpeedy Tech Pvt Ltd',
			description: `Achieved <span class="purple">20%</span> reduction in file size using Huffman coding on padded text without data loss.
			Transformed .txt into .bin format; DS– hashing, binary trees to construct optimal prefix code
			`,
			imageUrl: CodeSpeedy,
			startDate: 'Feb 2021',
			endDate: 'Mar 2021'
		},
		{
			id: 5,
			title: 'Intern',
			company: 'Tata Consultacy Service',
			description: `Developed deep learning algorithm to automate detection of different sentiments from textual comments.
      		To infer the sentiment used two classifiers: logistic regression and multinomial naive Bayes, tuned the hyperparameters of both classifiers with grid search.
      		<span class="purple">10%</span> reduction in human effort by cleaning & processing feedback; achieving accuracy of <span class="purple">0.80</span>`,
			imageUrl: TCS,
			startDate: 'Dec 2020',
			endDate: 'Jan 2021'
		},
		{
			id: 6,
			title: 'Intern',
			company: 'Internship Studio',
			description: `Created a responsive e-commerce website with 10 essential web pages.
      		Utilized HTML5, CSS, JavaScript, and Bootstrap for design and functionality.
      		Ensured website responsiveness and mobile-friendliness with Bootstrap.`,
			imageUrl: IStudio,
			startDate: 'Oct 2020',
			endDate: 'Nov 2020'
		},
		{
			id: 7,
			title: 'Intern',
			company: 'Internship Studio',
			description: `Implemented ML libraries to build a model for identifying the potential customers who have higher probability of purchasing the loan thus reducing the cost of campaign.
      		Used different scikit-learn algorithms to predict the likelihood of customer buying the loans, in all RANDOM FOREST had the most accuracy score of <span class="purple">95.11 %</span>.`,
			imageUrl: IStudio,
			startDate: 'July 2020',
			endDate: 'Aug 2020'
		}
	]


	return (
		<>
			<Container fluid className="experience-section">
				<Particle />
				<Row>
					<section id="experience" style={{ justifyContent: "center" }}>
						<h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
							<strong className="purple">Experience</strong>
						</h1>

						<div class="timeline">
							{experienceList.map((key, index) => (
								<div class="timeline-box">
									<div class="timeline-conatiner">
										<div class="timeline-logo">
											<img style={{ borderRadius: (index === 1 || index === 2 || index === 5 || index === 6 ? '20px' : '') }} src={key.imageUrl} />
										</div>
										<h3 class="experience-designation m0 m-blue"> &nbsp; &nbsp; &nbsp;
											{key.title}
										</h3>
										<h4 class="experience-company-name">
											{key.company}
										</h4>
										<h5 class="experience-duration m0">
											{key?.startDate} - {key?.endDate}</h5>
										<ul style={{ color: index === 0 ? "white" : "" }} class="experience-description text-align-justify">
											{key.description.split('\n').map((point, i) => (
												<>
													{((index === 0) && (i === 0 || i === 7 || i === 10)) ?
														<div key={i} style={{
															boxShadow: ((index === 0) && (i === 0 || i === 7 || i === 10)) ? '0px 1px 4px 0px rgba(255,255,255,1),0px 0px 0px 3px rgba(51,51,51,1)' : '',
															borderRadius: ((index === 0) && (i === 0 || i === 7 || i === 10)) ? '10px' : '',
															padding: ((index === 0) && (i === 0 || i === 7 || i === 10)) ? '10px' : '',
															margin: ((index === 0) && (i === 0 || i === 7 || i === 10)) ? '10px 0px' : ''
														}}>
															<span dangerouslySetInnerHTML={{ __html: point }} />
														</div>
														:

														<li key={i} style={{
															background: ((index === 0) && (i === 0 || i === 7 || i === 10)) ? 'grey' : '',
															borderRadius: ((index === 0) && (i === 0 || i === 7 || i === 10)) ? '10px' : '',
															padding: ((index === 0) && (i === 0 || i === 7 || i === 10)) ? '10px' : ''
														}}>
															<span dangerouslySetInnerHTML={{ __html: point }} />
														</li>
													}
												</>

											))}
										</ul>
									</div>
								</div>
							))}
							<div class="timeline-divider plane">
								<div class="timeline-traveller">
									<BsFillAirplaneFill />
								</div>
							</div>
						</div>
					</section>

				</Row>

			</Container>
			<Education />
		</>

	)

}

export default Experience;
