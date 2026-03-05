"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function ScrollSection() {
	return (
		<section className='scroll-section'>
			<ContainerScroll
				titleComponent={
					<div className='scroll-section-title'>
						<div className='scroll-section-eyebrow'>Portfolio Preview</div>
						<h2 className='scroll-section-heading'>
							Interiors that
							<br />
							<em>speak for themselves</em>
						</h2>
					</div>
				}>
				<Image
					src='https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80&auto=format&fit=crop'
					alt='Forma Studio — interior design project'
					fill
					style={{ objectFit: "cover", objectPosition: "center top" }}
					loading='lazy'
				/>
			</ContainerScroll>
		</section>
	);
}
