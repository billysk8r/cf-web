export default function About() {
    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-primary py-24 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-serif text-surface mb-4">About the Ensemble</h1>
                <p className="text-secondary font-sans tracking-widest uppercase text-sm">Our Mission & Artistry</p>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-surface">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="prose prose-lg font-sans text-gray-700 leading-relaxed space-y-8">
                        <p>
                            The Central Coast Chamber Choir is a select vocal ensemble led by conductor Daniel Henriks, bringing together professional and highly experienced singers from Monterey County and across the Central Coast. The ensemble forms the chamber counterpart to I Cantori di Carmel, allowing singers and instrumentalists to explore repertoire that benefits from smaller forces and a more intimate musical setting.
                        </p>
                        <p>
                            With fewer than twenty voices, the group is designed for clarity of texture and close collaboration with instrumentalists, allowing every musical line to remain audible and expressive and creating performances in which the relationship between text, voice, and instrument can unfold with unusual immediacy.
                        </p>
                        <p>
                            The ensemble draws exceptional musicians from the local community as well as the broader region, including the Bay Area and the Five Cities. These artists are united by a shared dedication to thoughtful preparation, stylistic excellence, and the joy of close musical collaboration.
                        </p>
                        <p>
                            The repertoire often centers on baroque and early classical works, where the chamber format allows the music’s architecture and emotional depth to emerge naturally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 w-full max-w-md">
                            <div className="aspect-square bg-gray-200 rounded-sm overflow-hidden shadow-xl transition-all duration-700">
                                {/* Placeholder for Daniel Henriks portrait */}
                                <div className="w-full h-full bg-[url('https://imgc.ssmedia.com/imgc193_48428/q:95/icantori/webart/customtext/10a.jpg')] bg-cover bg-center"></div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-serif mb-6 text-primary">Artistic Leadership</h2>
                            <h3 className="text-xl font-sans font-bold text-secondary mb-4">Daniel Henriks, Conductor</h3>
                            <div className="prose font-sans text-gray-600 leading-relaxed">
                                <p>
                                    The ensemble is directed by Daniel Henriks, conductor of I Cantori di Carmel. A Juilliard-trained musician whose career has taken him to opera houses and concert stages throughout Europe and the United States, Henriks brings extensive experience as both a singer and conductor.
                                </p>
                                <p>
                                    His work with the chamber choir emphasizes textual clarity, stylistic understanding, and an approach to rehearsal that treats singers and instrumentalists as equal partners in shaping the music.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parent Organization */}
            <section className="py-24 bg-surface text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <span className="text-gray-400 font-sans uppercase tracking-[0.2em] text-xs mb-4 block">Our Heritage</span>
                    <h2 className="text-3xl font-serif mb-8 text-primary">About I Cantori di Carmel</h2>
                    <p className="text-lg text-gray-600 font-sans leading-relaxed">
                        The Central Coast Chamber Choir is a project ensemble of I Cantori di Carmel, a concert choir serving Monterey County and the greater Central Coast. Through performances, collaborations, and educational initiatives, the organization brings major choral repertoire and chamber works to audiences throughout the region.
                    </p>
                </div>
            </section>
        </div>
    );
}
