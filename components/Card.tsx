import NextImage from 'next/image'
import Link from './Link'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  tags?: string[]
  highlight?: boolean
}

const Card = ({ title, description, imgSrc, href, tags, highlight }: CardProps) => (
  <div className="h-full">
    <div
      className={`${imgSrc && 'h-full'} group relative overflow-hidden rounded-md border-2
        ${highlight
          ? 'border-primary-500 dark:border-primary-400 shadow-lg shadow-primary-500/20'
          : 'border-gray-200 border-opacity-60 dark:border-gray-700'
        }
        transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl
        hover:border-primary-500 dark:hover:border-primary-400`}
    >
      {highlight && (
        <div className="absolute top-0 right-0 z-10">
          <div className="animate-pulse bg-gradient-to-r from-primary-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            Featured
          </div>
        </div>
      )}
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <div className="overflow-hidden">
              {imgSrc.endsWith('.svg') ? (
                <img
                  alt={title}
                  src={imgSrc}
                  className="w-full object-cover object-center md:h-36 lg:h-48 transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <NextImage
                  alt={title}
                  src={imgSrc}
                  className="object-cover object-center md:h-36 lg:h-48 transition-transform duration-500 group-hover:scale-110"
                  width={544}
                  height={306}
                />
              )}
            </div>
          </Link>
        ) : (
          <div className="overflow-hidden">
            {imgSrc.endsWith('.svg') ? (
              <img
                alt={title}
                src={imgSrc}
                className="w-full object-cover object-center md:h-36 lg:h-48 transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <NextImage
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48 transition-transform duration-500 group-hover:scale-110"
                width={544}
                height={306}
              />
            )}
          </div>
        ))}
      <div className="p-6">
        {tags && tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-gradient-to-r from-primary-500/10 to-pink-500/10
                  px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-400
                  border border-primary-500/20 transition-all duration-200 hover:bg-primary-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight group-hover:text-primary-500 transition-colors duration-200">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="inline-flex items-center text-base font-medium leading-6 text-primary-500
              hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200
              group-hover:translate-x-1"
            aria-label={`Link to ${title}`}
          >
            Learn more
            <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
