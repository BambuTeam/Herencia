import React, {Component} from 'react';

class CPContactFormSection extends Component {
	render() {
		return (
			<div className="contact-area">
				<div className="container">
					<div className="contact-bg pt-90 pb-70"
					     style={{backgroundImage: `url(${'assets/img/bg/bg18.jpg'})`}}>
						<div className="row">
							<div className="col-xl-12">
								<div className="contact-title text-center mb-35">
									<h1>Leave a Message</h1>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-12">
								<div className="contact-wrapper mb-30">
									<form action="#" id="contact-us-form">
										<div className="row">
											<div className="col-xl-6 col-lg-6">
												<input name="name" placeholder="Name :" type="text"/>
											</div>
											<div className="col-xl-6 col-lg-6">
												<input name="email" placeholder="Email :" type="email"/>
											</div>
											<div className="col-xl-12 col-lg-12">
												<input name="website" placeholder="Website :" type="text"/>
											</div>
											<div className="col-xl-12 col-lg-12">
												<textarea name="message" cols="30" rows="10"
												          placeholder="Write your comments :"/>
											</div>
											<div className="col-xl-12 col-lg-12">
												<div className="contact-button text-center">
													<button className="btn" type="submit">Send Message</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CPContactFormSection;