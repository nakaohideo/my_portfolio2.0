import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Computas | Senior Software Engineer.',
    date: 'Feb 2021 - Oct 2023',
    description: [
      'Built an e-commerce site to sell courses online, by using React, Firebase Sass, Bootstrap, and Hotmart.',
      'Developed swift IOS app from scratch and modified existing ones, by adding new screens, transitions and styling.',
      'Developed software by following the Agile Methodology',
    ],
    image: { url: '/work/zenith.png', height: 34, width: 110, className: '' },
  },
  {
    title: 'Kantega | Junior Software Engineer.',
    date: 'Aug 2018 - Feb 2021',
    description: [
      'Worked on their B2B saas platform by communicating with users and making the appropriate changes to the platform, following the scrum methodology.',
      'Added functionality by creating Strapi headless CMS endpoints.',
      'Made changes to their application using React, Typescript, MaterialUI, CSS, AWS S3, PostgreSQL.',
    ],
    image: { url: '/work/bohrim.jpg', height: 96, width: 96, className: '' },
  },
  {
    title: 'Steria | Junior Software Engineer.',
    date: 'Apr 2016 - Aug 2018',
    description: [
      'Tasked with creating a web app to play ‘Loteria Mexicana’ online with the technology of my choosing.',
      'Designed and built an initial demo with HTML, EJS, CSS, VanillaJS & JQuery, Bootstrap, ExpressJS, MongoDB, and Heroku.',
      'After 2/3 months of success and after reaching 15k unique users, 100s of concurrent users on game night, and 12k USD NRR, I made the decision to transition the front end app over to SvelteJs and TailwindCSS for a better user experience and speed, and implemented Stripe and Paypal payment processing.',
    ],
    image: { url: '/work/loteria.png', height: 96, width: 144, className: 'bg-white' },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
