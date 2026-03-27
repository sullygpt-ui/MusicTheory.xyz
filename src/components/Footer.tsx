import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-dark-800 mt-20 relative">
      <div className="string-divider" />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="noteGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                <path d="M12 4v18.5M24 2v16.5" stroke="url(#noteGradFooter)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M12 4l12-2" stroke="url(#noteGradFooter)" strokeWidth="2.5" strokeLinecap="round" />
                <ellipse cx="8.5" cy="23.5" rx="4.5" ry="3.5" fill="url(#noteGradFooter)" />
                <ellipse cx="20.5" cy="19.5" rx="4.5" ry="3.5" fill="url(#noteGradFooter)" />
              </svg>
              <span className="text-xl font-bold">
                <span className="gradient-text">MusicTheory</span>
                <span className="text-gray-400">.xyz</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Your complete resource for music theory and songwriting. Guides, courses, and tips to unlock your creative potential.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-widest mb-5">Learn</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/music-theory-basics', 'Theory Basics'],
                ['/chord-progressions', 'Chord Progressions'],
                ['/scales-and-modes', 'Scales & Modes'],
                ['/songwriting-tips', 'Songwriting Tips'],
                ['/ear-training', 'Ear Training'],
                ['/blog', 'All Articles'],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-gray-400 hover:text-accent transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-widest mb-5">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/courses', 'Courses'],
                ['/reviews', 'Reviews'],
                ['/about', 'About'],
                ['/privacy', 'Privacy Policy'],
                ['/terms', 'Terms of Use'],
                ['/disclaimer', 'Affiliate Disclaimer'],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-gray-400 hover:text-accent transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-widest mb-5">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Get theory tips and songwriting exercises in your inbox.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="string-divider mt-12 mb-6" />

        <div className="text-center mb-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Sister Sites</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="https://rhythmguitar.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">RhythmGuitar.org</a>
            <a href="https://freeguitarlessons.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">FreeGuitarLessons.org</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MusicTheory.xyz. All rights reserved.</p>
          <p className="text-xs text-gray-400">
            <Link href="/disclaimer" className="hover:text-accent transition-colors">Affiliate Disclosure</Link>: We may earn a commission when you purchase through our links at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
