import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding the Circle of Fifths in Songwriting | Musictheory',
  description: 'Understand understanding the circle of fifths in songwriting with clear explanations, examples, and practical applications for songwriting.',
  keywords: ['chord progressions', 'music theory basics', 'songwriting techniques', 'music intervals', 'scales and modes', 'ear training exercises', 'song structure', 'melody writing tips'],
  openGraph: {
    title: 'Understanding the Circle of Fifths in Songwriting',
    description: 'Understand understanding the circle of fifths in songwriting with clear explanations, examples, and practical applications for songwriting.',
    type: 'article',
    siteName: 'musictheory.xyz',
  },
  alternates: {
    canonical: 'https://musictheory.xyz/circle-of-fifths-songwriting'
  }
};

export default function CircleOfFifthsSongwritingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Article Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 leading-tight">
            Understanding the Circle of Fifths in Songwriting
          </h1>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
            <time dateTime="2026-04-01">
              {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            <span>•</span>
            <span>15-20 min read</span>
          </div>
        </header>

        {/* Introduction */}
        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8 rounded-r-lg">
          <p className="text-lg text-purple-800 font-medium mb-2">
            What You'll Learn:
          </p>
          <ul className="text-purple-700 space-y-1">
            <li>• Step-by-step techniques for understanding the circle of fifths in songwriting</li>
            <li>• Common mistakes and how to avoid them</li>
            <li>• Practice exercises to build your skills</li>
            <li>• Tips from professional music theorists</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="article-content space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">
              Getting Started
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Whether you're new to guitar or looking to expand your skills, understanding the circle of fifths in songwriting is an essential technique that will transform your playing. Let's dive into the fundamentals.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">🎯 Quick Tip</h4>
              <p className="text-yellow-700 text-sm">
                Before diving into advanced techniques, make sure you're comfortable with basic chord shapes and have your guitar properly tuned.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">
              Step-by-Step Technique
            </h2>
            <ol className="space-y-4">
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center font-semibold text-sm mr-4">1</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Foundation Setup</h4>
                  <p className="text-gray-300">Start with proper posture and hand positioning...</p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center font-semibold text-sm mr-4">2</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Basic Movements</h4>
                  <p className="text-gray-300">Focus on slow, controlled movements before building speed...</p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center font-semibold text-sm mr-4">3</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Advanced Applications</h4>
                  <p className="text-gray-300">Once comfortable with the basics, explore variations...</p>
                </div>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">
              Common Mistakes to Avoid
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">❌ Don't Rush</h4>
                <p className="text-red-700 text-sm">
                  Many players try to play too fast too soon. Start slowly and build muscle memory.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">❌ Ignore Timing</h4>
                <p className="text-red-700 text-sm">
                  Use a metronome to develop consistent timing from the beginning.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">
              Practice Exercises
            </h2>
            <div className="bg-dark-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-100 mb-3">Daily Practice Routine (15-20 minutes)</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 5 minutes: Warm-up exercises</li>
                <li>• 10 minutes: Technique practice with metronome</li>
                <li>• 5 minutes: Apply to real songs</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Internal Links Section */}
        <div className="mt-12 p-6 bg-dark-700 rounded-lg border-t-4 border-purple-500">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Continue Your Journey
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-100 mb-2">Essential Lessons:</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/chord-progressions" className="text-purple-600 hover:text-purple-800 underline">Understanding Chord Progressions</a></li>
                <li><a href="/music-theory-basics" className="text-purple-600 hover:text-purple-800 underline">Music Theory Basics</a></li>
                <li><a href="/intervals-explained" className="text-purple-600 hover:text-purple-800 underline">Musical Intervals Explained</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-100 mb-2">Recommended:</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/courses" className="text-purple-600 hover:text-purple-800 underline">
                    Best Music Theory Courses
                  </a>
                </li>
                <li>
                  <a href="/reviews" className="text-purple-600 hover:text-purple-800 underline">
                    Course Reviews & Comparisons
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-dark-800 border border-dark-500 rounded-lg p-4">
              <summary className="font-medium text-gray-100 cursor-pointer">
                How long does it take to master this technique?
              </summary>
              <p className="mt-2 text-gray-300 text-sm">
                With consistent daily practice, most players see significant improvement within 2-4 weeks. 
                Mastery is an ongoing process that develops over months of dedicated practice.
              </p>
            </details>
            
            <details className="bg-dark-800 border border-dark-500 rounded-lg p-4">
              <summary className="font-medium text-gray-100 cursor-pointer">
                Should I use a pick or fingers?
              </summary>
              <p className="mt-2 text-gray-300 text-sm">
                Both techniques have their place. Start with the method most comfortable for your current playing style, 
                then gradually explore the other approach.
              </p>
            </details>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-12 text-center p-8 bg-purple-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Ready to Take Your Skills Further?
          </h3>
          <p className="text-gray-300 mb-6">
            Check out our recommended courses for structured learning and faster progress.
          </p>
          <a 
            href="/courses" 
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            View Recommended Courses
          </a>
        </div>
      </article>
    </div>
  );
}