<script lang="ts">
	import Button from './Button.svelte';
	import Technology from './Technology.svelte';
	import Technology_Category_Pill from './Technology-Category-Pill.svelte';
	import emailjs from '@emailjs/browser';

	function sendEmail(e: any) {
		emailjs.sendForm('service_tqw1fgb', 'template_9o67c0e', e.target, '9ekwaqSyW2kpieqLH')
		.then((result: any) => {
			console.log('SUCCESS!', result.text);
		}, (error: any) => {
			console.log('FAILED...', error.text);
		});
		document.getElementById('contact-form-wrapper')?.setAttribute('hidden', '');
		document.getElementById('form-submission-thank-you')?.removeAttribute('hidden');
	}

	function go_to_div(div_id: string) {
		const div = document.getElementById(div_id);
		if (div) {
			div.scrollIntoView();
		}
	}
</script>

<svelte:head>
	<title>Freeman Endeavors</title>
	<meta name="description" content="Freeman Endeavors Website" />
</svelte:head>

<section>
	<span class="welcome">
		<h1>Hi, I'm Robbie.</h1>
		<h2>I do software consulting.</h2>
		<h2>How can I help you?</h2>

		<div class="contact-btn-wrapper">
			<Button on:click={() => {go_to_div("contact")}} text={"Get in Touch"} />
		</div>
	</span>
</section>
<section>
	<span id="expertise" class="expertise">
		<h1>Software Consulting Services</h1>
		<div id="expertise-blurbs">
			<div class="service-blurb">
				<img src="/expertise-development.png" alt="One area of expertise I have is in full stack development." />
				<div class="service-blurb-text">
					<h3>Full-stack development</h3>
					<ul>
						<li>Comfortable polishing frontend components and refining database schemas, and everything in between.</li>
						<li>Emphasis on test-driven development that strikes the <b>balance between delivering value and stability.</b></li>
						<li>Code written is well-documented, organized, and maintainable.</li>
					</ul>
				</div>
			</div>
			<div class="service-blurb">
				<div class="service-blurb-text">
					<h3 class="right-aligned">Architecture design</h3>
					<ul>
						<li>Got some difficult problems to tackle? I provide <b>clear, robust diagrams</b> showing service interactions, technologies, and requirements, as well as how they affect you.</li>
						<li>Lots of experience evaluating architecture scope and giving <b>concrete schedules of deliverables.</b></li>
					</ul>
				</div>
				<img src="/expertise-systems-design.png" alt="One area of expertise I have is in architecture design." />
			</div>
			<div class="service-blurb">
				<img src="/expertise-machine-learning.png" alt="One area of expertise I have is in machine learning." />
				<div class="service-blurb-text">
					<h3>Machine learning</h3>
					<ul>
						<li>Experience building solutions utilizing tabular or pictorial datasets.</li>
						<li>Primarily work with SVMs, Regressions, and CNNs.</li>
						<li>I design for <b>accuracy and scalability</b> to fit your needs!</li>
					</ul>
				</div>
			</div>
			<div class="service-blurb">
				<div class="service-blurb-text">
					<h3 class="right-aligned">Cloud computing</h3>
					<ul>
						<li>I specialize in event-driven microservice architectures, but I have <b>experience with everything from serverless infrastructure to virtual machines.</b></li>
						<li>Focus on cost-sensitive yet resilient systems!</li>
					</ul>
				</div>
				<img src="/expertise-cloud-computing.png" alt="One area of expertise I have is in cloud computing." />
			</div>
			<div class="service-blurb">
				<img src="/expertise-automation.png" alt="One area of expertise I have is in automation." />
				<div class="service-blurb-text">
					<h3>Automation</h3>
					<ul>
						<li>Give me your menial, yet <b>mission-critical tasks</b>, and I’ll turn them into automatic <b>emails</b>, alerts, or background jobs.</li>
						<li>Software that runs itself so that you can focus on your business.</li>
					</ul>
				</div>
			</div>
			<div class="service-blurb">
				<div class="service-blurb-text">
					<h3 class="right-aligned">3rd-party integrations</h3>
					<ul>
						<li>Thorough integrations with APIs from PayPal to Stripe for payments, to Google Drive or Dropbox for storage, or even proprietary software or internal APIs.</li>
						<li><b>Well-tested, maintainable</b> integrations that <b>seamlessly fit</b> into your existing business needs.</li>
					</ul>
				</div>
				<img src="/expertise-integrations.png" alt="One area of expertise I have is in working with 3rd party integrations." />
			</div>
		</div>
	</span>
</section>
<section>
	<span class="technologies-transition">
		<h1>Building the Best Solutions</h1>
	</span>
</section>
<section>
	<div class="technologies">
		<h2>The best solutions require the best tools.</h2>
		<h2>Here are some of the tools in my toolbox.</h2>
		<div class="tech-pill-container">
			<Technology_Category_Pill label="Machine Learning" category="ml" />
			<Technology_Category_Pill label="Cloud platforms" category="cloud" />
			<Technology_Category_Pill label="API interactions" category="api" />
			<Technology_Category_Pill label="Data management" category="data" />
			<Technology_Category_Pill label="Frontend frameworks" category="frontend" />
		</div>
		<div class="tech-group">
			<Technology name={"AWS"} img_src={"/tech-aws.png"} categories={["cloud"]} />
			<Technology name={"Microsoft Azure"} img_src={"/tech-azure.png"} categories={["cloud"]} />
			<Technology name={"Express"} img_src={"/tech-express.png"} categories={["api"]} />
			<Technology name={"Flask"} img_src={"/tech-flask.png"} categories={["api"]} />
			<Technology name={"GatsbyJS"} img_src={"/tech-gatsby.png"} categories={["frontend"]} />
			<Technology name={"Google Cloud Platform"} img_src={"/tech-gcp.png"} categories={["cloud"]} />
			<Technology name={"Golang"} img_src={"/tech-go.svg"} categories={["api", "data"]} />
			<Technology name={"GraphQL"} img_src={"/tech-graphql.png"} categories={["data", "api"]} />
			<Technology name={"Java"} img_src={"/tech-java.png"} categories={["api"]} />
			<Technology name={"MongoDB"} img_src={"/tech-mongodb.webp"} categories={["data"]} />
			<Technology name={"Microsoft SQL Server"} img_src={"/tech-mssql.png"} categories={["data"]} />
			<Technology name={"NodeJS"} img_src={"/tech-nodejs.png"} categories={["frontend", "api"]} />
			<Technology name={"Pandas"} img_src={"/tech-pandas.png"} categories={["data"]} />
			<Technology name={"PostgreSQL"} img_src={"/tech-postgres.png"} categories={["data"]} />
			<Technology name={"Python"} img_src={"/tech-py.png"} categories={["api", "ml"]} />
			<Technology name={"React"} img_src={"/tech-react.png"} categories={["frontend"]} />
			<Technology name={"Spring Boot"} img_src={"/tech-spring-boot.png"} categories={["api"]} />
			<Technology name={"Google Tesseract"} img_src={"/tech-tesseract.png"} categories={["ml"]} />
			<Technology name={"TensorFlow"} img_src={"/tech-tf.png"} categories={["ml"]} />
			<Technology name={"Typescript"} img_src={"/tech-ts.png"} categories={["frontend", "api"]} />
		</div>
	</div>
</section>
<section>
	<span class="call-to-action">
		<h1>Let's kick off our journey.</h1>
		<a href="#contact"><i class="arrow"></i></a>
	</span>
</section>
<section>
	<span id="contact" class="contact">
		<div id="contact-form-wrapper">
			<h1>Contact</h1>
			<div class="form-container">
				<form on:submit|preventDefault={sendEmail}>
					<div>
						<div><label for="name">Name</label></div>
						<input type="text" id="name" name="name" placeholder="Your name" required>
					</div>
					<div>
						<label for="name">Email</label>
						<input type="email" id="email" name="email" placeholder="Email for response" required>
					</div>
					<div>
						<label for="subject">Subject</label>
						<input type="text" id="subject" name="subject" placeholder="What kind of solution are you looking for?" required>
					</div>
					<div>
						<label for="message">Message</label>
						<textarea id="message" name="message" placeholder="Details, questions, and comments" required></textarea>
					</div>
					<input type="submit" value="Submit">
				</form>
			</div>
		</div>
		<div hidden id="form-submission-thank-you">
			<h1>Thank you for reaching out! You'll receive a reply within 24 hours.</h1>
		</div>
	</span>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.welcome h1 {
		padding: 4rem 0rem;
		margin-bottom: 40px;
		margin-top: 8rem;
		font-size: 48px;
	}

	.welcome h2 {
		font-size: 24px;
		line-height: 10px;
	}
	.welcome h1, .welcome h2 {
		width: 100%;
		color: #fff;
		text-align: left;
		margin-left: 70px;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 600px;
		background-image: url("/montana-wilderness.png");
	}

	.welcome .contact-btn-wrapper {
		margin-left: 70px;
	}

	.expertise {
		position: relative;
		width: 100%;
		background-color: var(--off-white-color);
		padding-bottom: 30px;
	}

	#expertise-blurbs {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-left: 18px;
	}

	.right-aligned {
		text-align: right;
	}

	.expertise h3 {
		margin-left: 25px;
	}

	.expertise h1, .expertise h3 {
		color: black;
		font-family: 'Roboto-Flex';
	}

	.expertise img {
		max-width: 150px;
		max-height: 150px;
		display: block;
		margin: -25px -25px -25px -25px;
	}

	.expertise .service-blurb {
		max-width: 480px;
		min-width: 300px;
		display: flex;
		flex-direction: row;
		padding: 5px;
	}

	.expertise .service-blurb:nth-child(2n) {
		padding-top: 80px;
		border-left: black dotted 1px;
	}

	.expertise .service-blurb-text {
		margin-right: 25px;
	}

	@media only screen and (max-width: 997px) {
		.expertise .service-blurb {
			padding: 0px;
		}
		.expertise .service-blurb:nth-child(2n) {
			padding: 0px;
			border-left: none;
		}
	}

	.expertise .service-blurb li b {
		font-family: 'Roboto-Bold';
	}

	.contact-btn-wrapper {
		margin-top: 50px;
	}

	.technologies-transition {
		color: white;
		font-family: 'Roboto-Flex';
	}

	.technologies {
		color: white;
		text-align: center;
		background-color: var(--primary-color);
		width: 100%;
		padding: 50px 0;
	}

	.technologies .tech-pill-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 50px 15px;
	}

	.technologies .tech-group {
		position: relative;
	}

	.call-to-action {
		display: block;
		position: relative;
		width: 100%;
		height: 650px;
		background-image: url("/path-robbie.png");
		background-size: 101%;
		background-repeat: no-repeat;
		background-position: top;
		color: white;
	}
	.call-to-action h1 {
		text-align: left;
		position: absolute;
		top: 200px;
		left: 70px;
	}
	.call-to-action .arrow {
		border: solid white;
		border-width: 0 15px 15px 0;
		display: inline-block;
		padding: 30px;
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		position: absolute;
		top: 300px;
		left: 250px;
	}
	.contact {
		color: var(--off-white-color);
		width: 80%;
		margin: 0 0 100px 0;
	}
	.contact h1{
		font-family: 'Roboto-Flex';
	}
	.contact .form-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.contact form label {
		display: block;
		padding-bottom: 5px;
	}
	.contact form input[type='text'], .contact form input[type='email'] {
		width: 100%;
		background-color: var(--off-white-color);
		margin-bottom: 20px;
		border: none;
		padding: 8px;
		outline: none;
	}
	.contact form textarea {
		width: 100%;
		background-color: var(--off-white-color);
		margin-bottom: 20px;
		padding: 8px;
		height: 300px;
		border: none;
		outline: none;
	}
	.contact form input::placeholder {
		font-style: italic;
		font-size: 14px;
	}
	.contact form textarea::placeholder {
		font-style: italic;
		font-size: 14px;
		font-family: 'Arial';
	}
	.contact form input[type='submit'] {
		width: 100px;
		background-color: var(--off-white-color);
		margin-bottom: 20px;
		padding: 8px;
		border: none;
	}
	
</style>
