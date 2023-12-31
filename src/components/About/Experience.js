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
			title: 'Associate Software Developer',
			company: 'Motorola Mobility - Lenovo',
			description: `Re-engineered legacy third-party software system, yielding annual savings of <span class="purple">320K</span> INR.
			Managed successful launches to <span class="purple">11 million</span> devices.
			Standardized design elements across <span class="purple">623 UI </span> screens.
			Pioneered Google <span class="purple">Dialogflow-powered Giftbot</span> enabling frictionless purchases.
			Attained <span class="purple">50%</span> reduction in menu page load times.
			Deployed dynamic user segmentation banner for precise promotions and surveys.
			Implemented <span class="purple">cloud-based dialog</span> interface for streamlined push notifications.`,
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
			description: `Created "Pockket," a dynamic <span class="purple">Node.js</span>-based payment gateway with MongoDB integration.
      		Implemented Passport for local and Google OAuth2 for user authentication and authorization.
      		Utilized MessageBird API for OTP verification.`,
			imageUrl: Softora,
			startDate: 'Apr 2021',
			endDate: 'May 2021'
		},
		{
			id: 4,
			title: 'Intern',
			company: 'CodeSpeedy Tech Pvt Ltd',
			description: `Lossless Text Compressed .txt into .bin file; DS- hashing, binary trees, priority queues.
      		Achieved reduction of file size by <span class="purple">50%</span>(compression) by Huffman coding on padded text.`,
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
										<ul class="experience-description text-align-justify">
											{key.description.split('\n').map((point, i) => (
												<li key={i}>
													<span dangerouslySetInnerHTML={{ __html: point }} />
												</li>
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
