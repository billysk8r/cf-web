import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
				<div className="absolute inset-0 z-0 opacity-40">
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary"></div>
					{/* Placeholder for hero image */}
					<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1663619079733-c22429418bc2?auto=format&fit=crop')] bg-cover bg-center"></div>
				</div>

				<div className="relative z-10 text-center px-4 max-w-5xl animate-fade-in">
					<h1 className="text-5xl md:text-7xl font-serif text-surface mb-4 tracking-tight">
						Central Coast Chamber Choir
					</h1>
					<p className="text-xl md:text-2xl font-sans text-secondary italic mb-8 tracking-wide">
						A chamber ensemble of I Cantori di Carmel
					</p>
					<div className="w-24 h-px bg-secondary mx-auto mb-8"></div>
					<p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
						Led by conductor Daniel Henriks, bringing together professional and highly experienced singers for performances of unusual immediacy and clarity.
					</p>
				</div>
			</section>

			{/* 2026 Project / St. John Passion Highlight */}
			<section className="py-24 bg-surface text-primary relative overflow-hidden">
				<div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-5 rounded-full blur-3xl -mr-32 -mt-32"></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row items-center gap-16">
						<div className="flex-1 animate-slide-up">
							<span className="text-secondary font-sans font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
								Featured Project
							</span>
							<h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
								Johann Sebastian Bach <br />
								<span className="italic">— St. John Passion (BWV 245)</span>
							</h2>
							<p className="text-lg text-gray-600 mb-8 leading-relaxed">
								In April 2026, we present one of the most powerful works in the choral repertoire.
								Performed by a select chamber ensemble at A=415 with period-inspired instrumentation,
								this production promises exceptional warmth, transparency, and emotional depth.
							</p>

							<div className="bg-primary/5 p-8 border-l-4 border-secondary rounded-r-lg mb-8">
								<h3 className="font-serif text-2xl mb-4 text-primary">Save the Date</h3>
								<div className="space-y-3 font-sans">
									<div className="flex justify-between items-center border-b border-gray-200 pb-2">
										<span className="font-semibold text-primary">April 25, 2026</span>
										<span className="text-accent underline decoration-secondary">Carmel — 7:30 PM</span>
									</div>
									<div className="flex justify-between items-center border-b border-gray-200 pb-2">
										<span className="font-semibold text-primary">April 26, 2026</span>
										<span className="text-accent underline decoration-secondary">Santa Cruz — 7:30 PM</span>
									</div>
								</div>
								<p className="mt-6 text-sm italic text-gray-500">
									Tickets will go on sale soon.
								</p>
							</div>

							<Link
								href="/events"
								className="inline-block bg-primary text-surface px-8 py-4 rounded-sm font-sans tracking-widest uppercase text-sm hover:bg-accent transition-all duration-300 shadow-lg"
							>
								Project Details
							</Link>
						</div>

						<div className="flex-1 w-full relative">
							<div className="aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden shadow-2xl relative z-10">
								{/* Bach photo */}
								<div className="w-full h-full bg-[url('https://cdn.pixabay.com/photo/2020/01/03/12/05/leipzig-4737955_1280.jpg')] bg-cover bg-center"></div>
							</div>
							<div className="absolute -bottom-8 -left-8 w-1/2 h-1/2 border-2 border-secondary/20 -z-0"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Ensemble Introduction */}
			<section className="py-24 bg-primary text-surface">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-wide">The Central Coast Chamber Choir</h2>
					<p className="text-xl text-gray-400 font-sans leading-relaxed mb-10">
						A select vocal ensemble designed for clarity of texture and close collaboration with instrumentalists.
						We draw exceptional musicians from across the region to explore repertoire that thrives in an intimate setting.
					</p>
					<Link
						href="/about"
						className="text-secondary hover:text-gold-light transition-colors font-sans tracking-widest uppercase text-sm flex items-center justify-center gap-2 group"
					>
						Learn more about our mission
						<span className="group-hover:translate-x-1 transition-transform">→</span>
					</Link>
				</div>
			</section>
		</div>
	);
}
