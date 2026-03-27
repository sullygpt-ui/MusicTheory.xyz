import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import AffiliateCTA from '@/components/AffiliateCTA';

export const metadata = createMetadata({
  title: 'About MusicTheory.xyz',
  description: 'Learn about MusicTheory.xyz, your go-to resource for music theory and songwriting education, and about Jake Lizzio of Signals Music Studio.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/music-studio.jpg" alt="Music studio" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">About MusicTheory.xyz</h1>
        </div>
      </div>

      <div className="prose-theory">
        <h2>Our Mission</h2>
        <p>
          MusicTheory.xyz is a dedicated resource hub for musicians who want to understand the language of music and become better songwriters. We publish free guides, theory breakdowns, ear training tips, and honest course reviews to help musicians at every level unlock their creative potential.
        </p>
        <p>
          Whether you&apos;re a complete beginner trying to understand what a chord progression is, or an experienced player looking to deepen your theoretical knowledge, you&apos;ll find practical, actionable content here that you can apply to your music today.
        </p>

        <h2>About Jake Lizzio & Signals Music Studio</h2>
        <p>
          The courses we recommend are created by <strong>Jake Lizzio</strong>, the guitarist and educator behind <strong>Signals Music Studio</strong> — one of the most respected music education channels on YouTube.
        </p>
        <ul>
          <li><strong>700,000+</strong> musicians in the community</li>
          <li><strong>40,000,000+</strong> video views across platforms</li>
          <li>Profiled in <strong>Forbes</strong> for his music education work</li>
          <li><strong>5-star</strong> average rating from students</li>
        </ul>
        <p>
          Jake&apos;s teaching philosophy centers on making theory practical and applicable. Rather than dry academic exercises, he teaches theory through the lens of songwriting — showing you how each concept directly applies to creating music. His Theory and Songwriting Course is the most comprehensive course of its kind, covering everything from basic intervals to composing full songs.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          MusicTheory.xyz is an affiliate partner of Signals Music Studio. This means that when you purchase a course through our links, we may earn a small commission at <strong>no extra cost to you</strong>. This helps us keep the site running and continue publishing free educational content.
        </p>
        <p>
          We only recommend products we genuinely believe in. Our editorial content is independent, and affiliate relationships never influence our recommendations or reviews. For full details, see our <a href="/disclaimer">Affiliate Disclaimer</a>.
        </p>
      </div>

      <div className="mt-12">
        <AffiliateCTA />
      </div>
    </div>
  );
}
