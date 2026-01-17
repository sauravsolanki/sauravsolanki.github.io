import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

const expertise = [
  { name: 'NLP & LLMs', desc: 'Intent Detection, Transformers, GPT Fine-tuning' },
  { name: 'MLOps', desc: 'SageMaker, MLFlow, Kubernetes, CI/CD' },
  { name: 'Computer Vision', desc: 'YOLOv8, SAM, Object Detection' },
  { name: 'Edge AI', desc: 'TensorRT, Quantization, Model Optimization' },
]

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 space-y-6 pb-8 pt-6">
        <h1 className="animate-fadeInUp text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
          Senior ML Engineer
        </h1>
        <p className="animate-fadeInUp text-xl leading-8 text-gray-600 dark:text-gray-300" style={{ animationDelay: '100ms' }}>
          Building <span className="text-primary-500 font-semibold">production ML systems</span> at scale.
          5+ years delivering NLP, Computer Vision, and MLOps solutions.
        </p>
        <div className="animate-fadeInUp flex flex-wrap gap-3 pt-4" style={{ animationDelay: '200ms' }}>
          <Link
            href="/projects"
            className="rounded-lg bg-primary-500 px-6 py-3 font-medium text-white transition-all hover:bg-primary-600 hover:shadow-lg"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="rounded-lg border-2 border-primary-500 px-6 py-3 font-medium text-primary-500 transition-all hover:bg-primary-500 hover:text-white"
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Expertise Grid */}
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {expertise.map((item, index) => (
          <div
            key={item.name}
            className="animate-fadeInUp group rounded-lg border border-gray-200 p-4 transition-all duration-300 hover:border-primary-500 hover:shadow-md dark:border-gray-700 dark:hover:border-primary-400"
            style={{ animationDelay: `${300 + index * 100}ms` }}
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-500 transition-colors">
              {item.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
            Latest Posts
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Deep dives into ML systems, architecture decisions, and lessons learned.
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
