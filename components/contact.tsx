export default function Contact() {
	return (
		<section id='contact' className='contact'>
			<div className='contact-inner'>
				<div className='contact-grid'>
					{/* left */}
					<div>
						<h2 className='contact-heading'>
							Let&apos;s create something <em>extraordinary</em>
						</h2>
						<p className='contact-body'>
							Whether you have a clear vision or are just beginning to imagine the
							possibilities, we would love to hear from you.
						</p>
						<a href='mailto:hello@alisa_design.co' className='btn-contact'>
							Begin a Conversation
						</a>
					</div>

					{/* right */}
					<div className='contact-details'>
						{[
							{
								label: "Email",
								value: "hello@alisa_design.co",
								href: "mailto:hello@alisa_design.co"
							},
							{
								label: "Phone",
								value: "+44 (0)20 7123 4567",
								href: "tel:+442071234567"
							},
							{ label: "Studio", value: "12 Fitzroy Square, London W1T 6EG" },
							{ label: "Instagram", value: "@alisa_design", href: "#" }
						].map(({ label, value, href }) => (
							<div key={label}>
								<div className='contact-detail-label'>{label}</div>
								{href ? (
									<a href={href} className='contact-detail-value'>
										{value}
									</a>
								) : (
									<span className='contact-detail-value'>{value}</span>
								)}
							</div>
						))}
					</div>
				</div>

				{/* footer */}
				<div className='footer-bottom'>
					<div className='footer-logo'>Alisa Design</div>
					<div className='footer-copy'>© 2026 Alisa Design Ltd. All rights reserved.</div>
					<ul className='footer-links'>
						{["Privacy", "Terms", "Cookies"].map(link => (
							<li key={link}>
								<a href='#'>{link}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
