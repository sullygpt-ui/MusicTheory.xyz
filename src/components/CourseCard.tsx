import Link from 'next/link';
import Image from 'next/image';
import type { Course } from '@/lib/courses';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="glass-card rounded-xl flex flex-col relative overflow-hidden group hover:glow-primary transition-all duration-300">
      {course.badge && (
        <span className="absolute top-4 right-4 z-10 bg-accent text-dark-900 text-xs font-bold px-3 py-1 rounded-full glow-accent">
          {course.badge}
        </span>
      )}

      <div className="h-40 relative overflow-hidden">
        {course.image ? (
          <>
            <Image src={course.image} alt={course.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-700/90 via-dark-700/40 to-primary/10" />
          </>
        ) : (
          <div className="h-full bg-gradient-to-br from-primary/30 via-dark-700 to-accent/20 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-700/80 to-transparent" />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-200 mb-2">{course.name}</h3>
        <p className="text-sm text-gray-400 mb-4 flex-1">{course.description}</p>

        <ul className="text-xs text-gray-400 mb-5 space-y-1.5">
          {course.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div>
            <span className="text-2xl font-bold gradient-text">{course.price}</span>
            {course.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">{course.originalPrice}</span>
            )}
          </div>
          <Link
            href={`/go/${course.affiliateSlug}`}
            className="bg-primary hover:bg-primary-light text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all hover:scale-105 hover:glow-primary"
          >
            Get Course →
          </Link>
        </div>
      </div>
    </div>
  );
}
