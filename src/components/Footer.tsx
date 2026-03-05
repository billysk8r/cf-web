import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-primary text-surface py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-serif text-2xl mb-4 tracking-wider">Central Coast Chamber Choir</h3>
                        <p className="text-gray-400 leading-relaxed font-sans max-w-sm">
                            An intimate ensemble dedicated to performing baroque and early classical works with clarity and emotional depth.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-serif text-lg mb-4 text-secondary uppercase tracking-widest">Navigation</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-secondary transition-colors font-sans">Home</Link></li>
                            <li><Link href="/about" className="hover:text-secondary transition-colors font-sans">About</Link></li>
                            <li><Link href="/events" className="hover:text-secondary transition-colors font-sans">Events</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-serif text-lg mb-4 text-secondary uppercase tracking-widest">Organization</h4>
                        <p className="text-gray-400 font-sans mb-4">
                            A project ensemble of I Cantori di Carmel.
                        </p>
                        <div className="text-gray-400 font-sans">
                            Monterey County & The Central Coast
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-sans">
                    <p>© {new Date().getFullYear()} Central Coast Chamber Choir. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Led by Conductor Daniel Henriks</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
