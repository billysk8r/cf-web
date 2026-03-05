import React from "react";

export default function Landing() {
    return (
        <div className="bg-surface text-primary font-sans selection:bg-secondary selection:text-surface">
            {/* High-Impact Hero */}
            <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-primary px-4 py-32">
                <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1533174072545-7a845942709d?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl space-y-8 animate-fade-in">
                    <span className="text-secondary tracking-[0.4em] uppercase text-sm font-bold block mb-4">Presentation Concept</span>
                    <h1 className="text-6xl md:text-8xl font-serif text-surface mb-4 leading-tight">
                        Central Coast <br /> Chamber Choir
                    </h1>
                    <p className="text-2xl md:text-3xl font-serif text-secondary italic">A chamber ensemble of I Cantori di Carmel</p>
                    <div className="w-32 h-px bg-secondary mx-auto"></div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
                    <span className="text-surface/50 text-xs tracking-widest uppercase">Scroll to explore</span>
                    <div className="w-px h-12 bg-secondary/50"></div>
                </div>
            </section>

            {/* Ensemble Info Section */}
            <section className="py-32 px-4 max-w-5xl mx-auto space-y-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-12 prose prose-2xl font-serif leading-relaxed text-primary/90 text-center md:text-left">
                        The Central Coast Chamber Choir is a select vocal ensemble led by conductor Daniel Henriks, bringing together professional and highly experienced singers from Monterey County and across the Central Coast.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6">
                        <p className="text-xl leading-relaxed text-gray-600">
                            The ensemble forms the chamber counterpart to I Cantori di Carmel, allowing singers and instrumentalists to explore repertoire that benefits from smaller forces and a more intimate musical setting.
                        </p>
                        <p className="text-xl leading-relaxed text-gray-600">
                            With fewer than twenty voices, the group is designed for clarity of texture and close collaboration with instrumentalists, allowing every musical line to remain audible and expressive and creating performances in which the relationship between text, voice, and instrument can unfold with unusual immediacy.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <p className="text-xl leading-relaxed text-gray-600 border-l-2 border-secondary/20 pl-8">
                            The ensemble draws exceptional musicians from the local community as well as the broader region, including the Bay Area and the Five Cities. These artists are united by a shared dedication to thoughtful preparation, stylistic excellence, and the joy of close musical collaboration.
                        </p>
                        <p className="text-xl leading-relaxed text-gray-600 italic font-serif text-secondary">
                            The repertoire often centers on baroque and early classical works, where the chamber format allows the music’s architecture and emotional depth to emerge naturally.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2026 Project Feature (Full Strength) */}
            <section className="py-32 bg-primary text-surface relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 border border-secondary rounded-full"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-secondary rounded-full"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-4">2026 Project</h2>
                        <h3 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Johann Sebastian Bach — St. John Passion (BWV 245)</h3>
                        <div className="w-20 h-1 bg-secondary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                        <div className="lg:col-span-2 space-y-8 text-lg font-sans text-gray-300 leading-relaxed">
                            <p>
                                In April, the Central Coast Chamber Choir will present Johann Sebastian Bach’s St. John Passion, one of the most powerful works in the choral repertoire. First performed in Leipzig in 1724, the work combines narrative storytelling, expressive chorales, and dramatic choruses to recount the Passion according to the Gospel of John.
                            </p>
                            <p>
                                These performances will feature a baroque chamber ensemble performing at A=415, the pitch commonly used in Bach’s time. The slightly lower pitch, together with period-inspired instrumentation, brings warmth and transparency to the sound while allowing singers and instruments to blend with particular clarity.
                            </p>
                            <p className="text-secondary font-bold text-xl py-4 border-y border-secondary/20 block text-center lg:text-left">
                                Tickets will go on sale soon.
                            </p>
                        </div>
                        <div className="bg-surface/5 p-8 rounded-lg border border-surface/10">
                            <h4 className="font-serif text-2xl text-secondary mb-8 border-b border-secondary/20 pb-4">Performance Dates</h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-secondary uppercase tracking-widest text-xs mb-1">April 25, 2026</p>
                                    <p className="text-xl font-serif text-surface">Carmel</p>
                                    <p className="text-sm text-gray-400">7:30 PM</p>
                                </div>
                                <div>
                                    <p className="text-secondary uppercase tracking-widest text-xs mb-1">April 26, 2026</p>
                                    <p className="text-xl font-serif text-surface">Santa Cruz</p>
                                    <p className="text-sm text-gray-400">7:30 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-surface/10">
                        <div>
                            <h4 className="font-sans font-bold text-secondary uppercase tracking-widest text-xs mb-6">Artistic Leadership</h4>
                            <p className="text-lg leading-relaxed text-gray-300">
                                The ensemble is directed by <span className="text-surface font-semibold">Daniel Henriks</span>, conductor of I Cantori di Carmel. A Juilliard-trained musician whose career has taken him to opera houses and concert stages throughout Europe and the United States, Henriks brings extensive experience as both a singer and conductor.
                            </p>
                            <p className="mt-4 text-gray-400 italic">
                                His work emphasizes textual clarity, stylistic understanding, and treats singers and instrumentalists as equal partners.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-sans font-bold text-secondary uppercase tracking-widest text-xs mb-6">Collaborating Artists</h4>
                            <div className="grid grid-cols-2 gap-8 text-sm">
                                <div>
                                    <p className="text-secondary mb-2 uppercase tracking-tighter font-bold">Instrumentalists</p>
                                    <ul className="space-y-1 text-gray-300">
                                        <li>Caitlyn Koester</li>
                                        <li>Lars Johannesson</li>
                                        <li>Pauline Kempf</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-secondary mb-2 uppercase tracking-tighter font-bold">Vocal soloists</p>
                                    <ul className="space-y-1 text-gray-300">
                                        <li>Gabriela Estefani Solís</li>
                                        <li>Matthew Peterson</li>
                                        <li>Matheus Coura</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Note */}
            <section className="py-32 bg-surface text-center px-4">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl font-serif text-primary">About I Cantori di Carmel</h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-sans">
                        The Central Coast Chamber Choir is a project ensemble of I Cantori di Carmel, a concert choir serving Monterey County and the greater Central Coast. Through performances, collaborations, and educational initiatives, the organization brings major choral repertoire and chamber works to audiences throughout the region.
                    </p>
                    <div className="pt-12">
                        <p className="text-sm text-gray-400 font-sans tracking-widest uppercase">© {new Date().getFullYear()} Central Coast Chamber Choir</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
