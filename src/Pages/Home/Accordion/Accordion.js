import React from 'react';
import './Accordion.css'
const Accordion = () => {
	return (
		<div className="row container-fluid color me-0 pb-5">
			<div className="pt-5 pb-2" >	<h2>FAQ</h2></div>
			<div className=" pb-2" >	<h1>Frequently Asked Questions</h1></div>

			<div className="container-fluid row-cols-1 row-cols-md-1 w-75 " >
				<div className="accordion  " id="accordionPanelsStayOpenExample">
					<div className="accordion-item color-main">
						<h2 className="accordion-header" id="panelsStayOpen-headingOne">
							<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">

								<span className="fw-bold" >Can lasik get rid of my reading glasses?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show  " aria-labelledby="panelsStayOpen-headingOne">
							<div className="accordion-body color-main ">
								This is a widely misunderstood issue. There is an urban myth about laser eye surgery, and it is perpetrated by a lot of eye surgeons: laser eye surgery is only good for young people. It can only get people out of their spectacles for distance vision and it can do nothing about the reading.

								There have been a lot of developments in the last five to ten years to address this issue. Different laser platforms are taken from different approaches. The laser platforms, in my opinion, really come out on top with an effective, safe treatment.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">

								<span className="fw-bold" >At what age can you get Lasik?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse color-main1" aria-labelledby="panelsStayOpen-headingTwo">
							<div className="accordion-body color-main1">
								Age can influence your candidacy for LASIK eye surgery, but it is by no means set in stone. In fact, there is no set age for LASIK eye surgery. Most LASIK eye surgeons, however, will not perform the procedure on those under the age of 18 as vision tends to keep changing into early adulthood. While laser eye surgery has been performed on children with severe vision problems, note that these cases are the exception to the rule. In general, the average age range for getting LASIK is between 20 and 40 years of age.

								The FDA has approved LASIK eye surgery for those 18 years and older, but most providers will encourage patients to wait until their mid-20s after their prescription has stabilized. Read on for a break down of LASIK facts by age range.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >What is a glasses prescription only good for one year?</span>

							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree color-main2 ">
							<div className="accordion-body color-main2">
								Eyeglass lens prescriptions typically are valid for a minimum of one year, or the minimum required by state law. It's very common for the expiration date on an eyeglass prescription to be the date two years from the day of your eye exam when the prescription was written and given to you.

								However, the expiration date on a glasses prescription might be shorter (one year rather than two years, for example) if you are at higher-than-normal risk of your eyes changing more quickly. An example of this is an eyeglass prescription written for a child whose nearsightedness is worsening year after year.



							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >Do I need to leave my glasses with you if I just want new lenses?</span>


							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree ">
							<div className="accordion-body color-main3">
								Wearing contacts and glasses can be cumbersome for some people, and can have a negative effect on their active lifestyles. Many people are choosing to take charge of their vision in a more permanent way.

								Eye specialists have made incredible advancements in vision correction surgery, also known as refractive and laser eye surgery, in recent years. There are many types of vision correction surgeries. Most procedures work to reshape the cornea so that light passing through it can focus on the retina. Other surgeries replace the lens of the eye.

								Here are the different types of corrective surgeries, what they improve, and how they work.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="panelsStayOpen-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">

								<span className="fw-bold" >What are the best vision correction options available for my eyes?</span>


							</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree color-main4">
							<div className="accordion-body color-main4">
								Studies indicate that the best way to protect yourself from the spread of communicable disease is simply to wash your hands on a regular basis. This practice is crucial to avoid contracting eye-related conditions such as conjunctivitis. You often develop conjunctivitis after touching something that someone else has touched after they rubbed their eyes.

								After any eye surgery such as LASIK, cataract surgery or glaucoma shunt surgery, your eyes are more susceptible to infection. The Centers for Disease Control suggests that you wash your hands thoroughly before you apply any treatments to your eyes, and avoid rubbing your eyes as much as possible. When you have conjunctivitis, be sure to was
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;