import type { Metadata } from "next";
import Container from "@/components/container";
import ThemeToggle from "@/components/theme-toggle";
import Banner from "@/components/banner";
import Navigation from "@/components/navigation";
import Section from "@/components/section";
import Card from "@/components/card";
import Icon from "@/components/icon";
import Grid from "@/components/grid";
import ClientLogo from "@/components/client-logo";
import Pill from "@/components/pill";
import FluidHeading from "@/components/fluid-heading";

import projects from "@/data/projects";

const metaTitle = "Sebastian Inman | Senior Enterprise Web Systems Engineer";
const metaDescription = "Senior engineer focused on enterprise web architecture, scalable design systems, and TypeScript platforms that bring order to complex products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sebastiancodes.com"),
  title: metaTitle,
  description: metaDescription,
  applicationName: "Sebastian Codes",
  publisher: "Sebastian Inman",
  keywords: [
    "Sebastian Inman",
    "Sebastian",
    "Inman",
    "Web Developer",
    "Software Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "UI Engineer",
    "Web Engineer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer"
  ],
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    creator: "@sebastian_codes",
    images: [
      {
        url: "/twitter.jpg",
        width: 1200,
        height: 630,
        alt: "Sebastian Inman"
      }
    ]
  },
  facebook: {
    appId: "2051859408688772"
  },
  openGraph: {
    siteName: "Sebastian Codes",
    title: metaTitle,
    description: metaDescription,
    type: "website",
    url: "https://www.sebastiancodes.com",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sebastian Inman"
      }
    ]
  }
};

export default async function Home() {
  return (
    <>
      <Container>
        <aside className="lg:sticky top-0 lg:h-dvh lg:py-22 flex flex-col justify-between lg:w-[410px]">
          <div className="@container relative flex flex-col items-start gap-4">
            {/* <ThemeToggle /> */}
            
            <Banner type="video" desaturate={true} className="lg:mb-2" />

            <div>
              <div className="relative flex flex-col justify-end">
                <FluidHeading as="h1" className="text-heading text-[17.075cqw] lg:text-[18.333cqw] font-bold leading-none">
                  Sebastian Inman
                </FluidHeading>
              </div>
              <h2 className="text-heading text-[6.875cqw] lg:text-[7.44cqw] font-semibold leading-none">
                Senior Enterprise Web Systems Engineer
              </h2>
            </div>

            <dl>
              <dt className="sr-only">Availability</dt>
              <Pill>
                <span>🟢</span>
                <span className="text-heading">Available for work</span>
              </Pill>
            </dl>
            
            <div>
              <p>
                I'm a senior engineer focused on enterprise web architecture, scalable design systems, and TypeScript platforms that bring order to complex products.
              </p>
            </div>
            <Navigation />
          </div>
          <div className="flex items-center w-full mt-8 lg:mt-[72px]">
            <ul className="flex flex-col items-start gap-y-4 -mx-4 text-heading">
              <li className="mx-4">
                <a
                  className="flex items-center"
                  href="https://www.linkedin.com/in/sebastianinman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="linkedin" className="mr-4" />
                  <span className="mt-px leading-none">in/sebastianinman</span>
                  <Icon name="external" className="size-3! ml-2" />
                </a>
              </li>
              <li className="mx-4">
                <a
                  className="flex items-center"
                  href="https://github.com/inman-sebastian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" className="mr-4" />
                  <span className="mt-px leading-none">inman-sebastian</span>
                  <Icon name="external" className="size-3! ml-2" />
                </a>
              </li>
              <li className="mx-4">
                <a
                  className="flex items-center"
                  href="mailto:hello@sebastiancodes.com"
                >
                  <Icon name="email" className="mr-4" />
                  <span className="mt-px leading-none">hello@sebastiancodes.com</span>
                  <Icon name="external" className="size-3! ml-2" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 flex flex-col lg:py-22 lg:space-y-12">
          <Section index="1" id="skills" title="">
            <dl className="flex flex-wrap gap-2 mb-10">
              <dt className="w-full font-sans! text-xs font-bold tracking-wide uppercase text-muted mb-4">Frontend Engineering</dt>
              <Pill icon={{ name: "nextjs" }}>Next.js</Pill>
              <Pill icon={{ name: "typescript" }}>TypeScript</Pill>
              <Pill icon={{ name: "react" }}>React</Pill>
              <Pill icon={{ name: "javascript" }}>JavaScript</Pill>
              <Pill icon={{ name: "html" }}>HTML</Pill>
              <Pill icon={{ name: "css" }}>CSS</Pill>
              <Pill icon={{ name: "tailwind" }}>Tailwind</Pill>
              <Pill icon={{ name: "storybook" }}>Storybook</Pill>
            </dl>

            <dl className="flex flex-wrap gap-2 mb-10">
              <dt className="w-full font-sans! text-xs font-bold tracking-wide uppercase text-muted mb-4">Backend & Infrastructure</dt>
              <Pill icon={{ name: "nodejs" }}>Node.js</Pill>
              <Pill icon={{ name: "bun" }}>Bun</Pill>
              <Pill icon={{ name: "hono" }}>Hono</Pill>
              <Pill icon={{ name: "prisma" }}>Prisma</Pill>
              <Pill icon={{ name: "graphql" }}>GraphQL</Pill>
              <Pill icon={{ name: "neon" }}>Neon</Pill>
              <Pill icon={{ name: "supabase" }}>Supabase</Pill>
              <Pill icon={{ name: "vercel", className: "size-3.5!" }}>Vercel</Pill>
            </dl>

            <dl className="flex flex-wrap gap-2 mb-10">
              <dt className="w-full font-sans! text-xs font-bold tracking-wide uppercase text-muted mb-4">Tools & Workflows</dt>
              <Pill icon={{ name: "pnpm" }}>pnpm</Pill>
              <Pill icon={{ name: "turborepo" }}>Turborepo</Pill>
              <Pill icon={{ name: "git" }}>Git</Pill>
              <Pill icon={{ name: "docker" }}>Docker</Pill>
              <Pill icon={{ name: "zod" }}>Zod</Pill>
              <Pill icon={{ name: "figma" }}>Figma</Pill>
              <Pill icon={{ name: "photoshop" }}>Photoshop</Pill>
              <Pill icon={{ name: "illustrator" }}>Illustrator</Pill>
            </dl>

            <dl className="flex flex-wrap gap-2">
              <dt className="w-full font-sans! text-xs font-bold tracking-wide uppercase text-muted mb-4">E-Commerce & CMS Platforms</dt>
              <Pill icon={{ name: "wordpress" }}>WordPress</Pill>
              <Pill icon={{ name: "woocommerce" }}>WooCommerce</Pill>
              <Pill icon={{ name: "shopify" }}>Shopify</Pill>
              <Pill icon={{ name: "contentful" }}>Contentful</Pill>
            </dl>
          </Section>
          <Section index="2" id="projects">
            <Grid>
              {projects.map((project) => (
                <Card
                  key={project.href}
                  href={project.href}
                  type="project"
                  primaryLanguage={project.primaryLanguage}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </Grid>
          </Section>
          <Section index="3" id="clients">
            <Grid className="grid-cols-2 lg:grid-cols-3 gap-2 place-items-center text-foreground">
              <Card>
                <ClientLogo name="citi-bank" />
              </Card>
              <Card>
                <ClientLogo name="tiaa" />
              </Card>
              <Card>
                <ClientLogo name="planned-parenthood" />
              </Card>

              <Card>
                <ClientLogo name="nic-industries" />
              </Card>
              <Card>
                <ClientLogo name="prismatic-powders" />
              </Card>
              <Card>
                <ClientLogo name="cerakote" />
              </Card>

              <Card>
                <ClientLogo name="operation-warm" />
              </Card>
              <Card>
                <ClientLogo name="chinook-winds" />
              </Card>
              <Card>
                <ClientLogo name="tanglefree" />
              </Card>
              
              <Card>
                <ClientLogo name="toms-offroad" />
              </Card>
              <Card>
                <ClientLogo name="jb-steel" />
              </Card>
              <Card>
                <ClientLogo name="gator-waders" />
              </Card>
              <Card>
                <ClientLogo name="b2b-transportation" />
              </Card>
              <Card>
                <ClientLogo name="ballistic-armor-co" />
              </Card>
              <Card>
                <ClientLogo name="energy-bros" />
              </Card>
              <Card>
                <ClientLogo name="oregon-truck-auto" />
              </Card>
              <Card>
                <ClientLogo name="highway-products" />
              </Card>
              <Card>
                <ClientLogo name="pavati" />
              </Card>
            </Grid>
          </Section>
          <Section index="4" id="thoughts">
            <Grid className="lg:grid-cols-2">
              <Card
                href="/thoughts/thought-1"
                type="thought"
                primaryTopic="Front-End"
                datePublished="November 27, 2025"
                title="Proident elit consequat cupidatat eiusmod aliqua cillum"
                className="min-h-80"
              />
              <Card
                href="/thoughts/thought-2"
                type="thought"
                primaryTopic="Front-End"
                datePublished="November 27, 2025"
                title="Proident elit consequat cupidatat eiusmod aliqua cillum"
                className="min-h-80"
              />
              <Card
                href="/thoughts/thought-3"
                type="thought"
                primaryTopic="Front-End"
                datePublished="November 27, 2025"
                title="Proident elit consequat cupidatat eiusmod aliqua cillum"
                className="min-h-80"
              />
              <Card
                href="/thoughts/thought-4"
                type="thought"
                primaryTopic="Front-End"
                datePublished="November 27, 2025"
                title="Proident elit consequat cupidatat eiusmod aliqua cillum"
                className="min-h-80"
              />
              <Card
                href="/thoughts/thought-5"
                type="thought"
                primaryTopic="Front-End"
                datePublished="November 27, 2025"
                title="Proident elit consequat cupidatat eiusmod aliqua cillum"
                className="min-h-80"
              />
            </Grid>
          </Section>
          <Section index="5" id="praise">
            <h2
              id="praise-heading"
              className="sticky top-0 z-40 pt-6 text-sm font-bold tracking-widest uppercase lg:sr-only text-heading"
            >
              Praise
            </h2>
            <div className="grid grid-cols-1 pt-8 pb-10 gap-2 lg:py-0">
              <Card
                type="testimonial"
                authorName="Darren Cossette"
                authorCompany="All American Trade Work"
              >
                Sebastian was very professional, had great communication, and
                all around fantastic to work with!
              </Card>
              <Card
                type="testimonial"
                authorName="Marci Lake"
                authorCompany="B2B Transportation Services, Inc."
              >
                With Sebastian's knowledge and expertise, he was able to offer
                valuable suggestions for our site and implement them in a timely
                manner. Professional and great to work with!
              </Card>
              <Card
                type="testimonial"
                authorName="Tysan McClusky"
                authorCompany="Juggernaut Marketing"
              >
                Not only can Sebastian UI/UX (design) and code the hell out of a
                website, he can solve problems in minutes that teams of devs
                can't solve in months. I've seen him do it many times. Hire him!
              </Card>
              <Card
                type="testimonial"
                authorName="Todd McDonald"
                authorCompany="New Brew Media"
              >
                Sebastian is easy to work with, knowledgeable and creative. A
                solid problem solver with a hard to find mix of technical
                knowledge and design capabilities.
              </Card>
              <Card type="testimonial" authorName="Chris Johnson">
                We loved working with Sebastian, he has a really proactive
                attitude, he pointed out a design issue we didn't even notice
                when we handed out the job to him. He went the extra mile to
                deliver a great result.
              </Card>
              <Card
                type="testimonial"
                authorName="Paulette Carter"
                authorCompany="PCD Group"
              >
                Sebastian is a very strong front-end developer, especially with
                CSS and page layout and with "newer style" front-end approaches
                that work well with modern browsers. We found Sebastian to be an
                asset to our team and he proved to have a good eye for the
                design aspects of front-end development. He was also able to
                build JavaScript from scratch and enjoyed learning new
                techniques. Sebastian proved resourceful in being able to work
                his way through issues related to responsive design.
              </Card>
            </div>
          </Section>
          <footer className="text-sm">
            Copyright © 2025 Sebastian Inman. All rights reserved.
          </footer>
        </main>
      </Container>
    </>
  );
}
