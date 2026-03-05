export default function Events() {
    const soloists = [
        { name: "Gabriela Estefani Solís", role: "Alto" },
        { name: "Matthew Peterson", role: "Bass" },
        { name: "Matheus Coura", role: "Tenor" },
    ];

    const instrumentalists = [
        { name: "Caitlyn Koester", role: "Harpsichord and Organ" },
        { name: "Lars Johannesson", role: "Flute" },
        { name: "Pauline Kempf", role: "Violin" },
    ];

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-primary py-24 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-serif text-surface mb-4">Upcoming Performances</h1>
                <p className="text-secondary font-sans tracking-widest uppercase text-sm">2026 Season Project</p>
            </section>

            {/* Main Project */}
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-serif text-primary mb-2">Johann Sebastian Bach</h2>
                                <h3 className="text-2xl font-serif text-secondary italic">St. John Passion (BWV 245)</h3>
                            </div>

                            <div className="prose prose-lg font-sans text-gray-700 leading-relaxed">
                                <p>
                                    In April, the Central Coast Chamber Choir will present Johann Sebastian Bach’s St. John Passion, one of the most powerful works in the choral repertoire. First performed in Leipzig in 1724, the work combines narrative storytelling, expressive chorales, and dramatic choruses to recount the Passion according to the Gospel of John.
                                </p>
                                <p>
                                    These performances will feature a baroque chamber ensemble performing at A=415, the pitch commonly used in Bach’s time. The slightly lower pitch, together with period-inspired instrumentation, brings warmth and transparency to the sound while allowing singers and instruments to blend with particular clarity.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h4 className="font-serif text-xl border-b border-gray-200 pb-2">Performance Schedule</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-gray-50 p-6 rounded-sm">
                                        <div>
                                            <div className="font-bold text-lg">April 25, 2026 — Carmel</div>
                                            <div className="text-gray-500">7:30 PM</div>
                                        </div>
                                        <span className="text-sm font-sans tracking-widest uppercase text-secondary">Soon on sale</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 p-6 rounded-sm">
                                        <div>
                                            <div className="font-bold text-lg">April 26, 2026 — Santa Cruz</div>
                                            <div className="text-gray-500">7:30 PM</div>
                                        </div>
                                        <span className="text-sm font-sans tracking-widest uppercase text-secondary">Soon on sale</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary text-surface p-10 rounded-sm shadow-2xl">
                            <h3 className="text-2xl font-serif mb-8 border-b border-secondary/30 pb-4">Collaborating Artists</h3>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-sans font-bold text-secondary uppercase tracking-widest text-xs mb-4">Instrumentalists</h4>
                                    <ul className="space-y-3">
                                        {instrumentalists.map(item => (
                                            <li key={item.name} className="flex justify-between border-b border-surface/10 pb-2">
                                                <span>{item.name}</span>
                                                <span className="text-gray-400 italic text-sm">{item.role}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-sans font-bold text-secondary uppercase tracking-widest text-xs mb-4">Vocal Soloists</h4>
                                    <ul className="space-y-3">
                                        {soloists.map(item => (
                                            <li key={item.name} className="flex justify-between border-b border-surface/10 pb-2">
                                                <span>{item.name}</span>
                                                <span className="text-gray-400 italic text-sm">{item.role}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-secondary/30 text-gray-300 italic font-sans text-sm leading-relaxed">
                                Many of the musicians involved in this project return year after year simply because opportunities to perform Bach with a chamber ensemble of colleagues who know one another well are rare and deeply rewarding.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
