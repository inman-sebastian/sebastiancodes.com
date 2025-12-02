import type { Metadata } from "next";
import Container from "@/components/container";
import ThemeToggle from "@/components/theme-toggle";
import Navigation from "@/components/navigation";
import Card from "@/components/card";
import Icon from "@/components/icon";

import TomsOffroadLogo from "@/components/logos/toms-offroad";
import GatorWadersLogo from "@/components/logos/gator-waders";
import B2BTransportationLogo from "@/components/logos/b2b-transportation";
import BallisticArmorCoLogo from "@/components/logos/ballistic-armor-co";
import EnergyBrosLogo from "@/components/logos/energy-bros";
import JBSteelLogo from "@/components/logos/jb-steel";
import OregonTruckAutoLogo from "@/components/logos/oregon-truck-auto";
import CitiBankLogo from "@/components/logos/citi-bank";
import HighwayProductsLogo from "@/components/logos/highway-products";
import TIAALogo from "@/components/logos/tiaa";
import OperationWarmLogo from "@/components/logos/operation-warm";
import NICIndustriesLogo from "@/components/logos/nic-industries";
import ChinookWindsLogo from "@/components/logos/chinook-winds";
import TangleFreeLogo from "@/components/logos/tanglefree";
import PlannedParenthoodLogo from "@/components/logos/planned-parenthood";

import projects from "@/data/projects";

export const metadata: Metadata = {
  title: "Sebastian Inman",
  description: "Senior Enterprise Web Systems Engineer",
  applicationName: "Sebastian Codes",
  publisher: "Sebastian Inman",
  keywords: [
    "Sebastian Inman",
    "Sebastian",
    "Inman",
    "Web Developer",
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
    title: "Sebastian Inman",
    description: "Senior Enterprise Web Systems Engineer",
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
    siteName: "Sebastian Inman",
    title: "Sebastian Inman",
    description: "Senior Enterprise Web Systems Engineer",
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
        <aside className="lg:sticky top-0 lg:h-dvh lg:py-22 flex flex-col justify-between lg:max-w-[410px]">
          <div className="relative flex flex-col">
            <ThemeToggle />
            <div className="relative overflow-hidden rounded-sm grid aspect-3/2 mt-6 lg:mt-0">
              <img
                src="/me.jpeg"
                alt="Sebastian Inman"
                className="size-full object-cover saturate-0 contrast-90 dark:contrast-110"
              />
            </div>
            <div className="@container order-1 lg:order-2">
              <div className="relative flex flex-col justify-end">
                <h1 className="text-heading text-[17.075cqw] lg:text-[18.333cqw] font-bold leading-none mt-6">
                  Sebastian Inman
                </h1>
              </div>
              <h2 className="text-heading text-[6.875cqw] lg:text-[7.44cqw] font-semibold leading-tight">
                Senior Enterprise Web Systems Engineer
              </h2>
            </div>
            <div className="order-3 mt-4 space-y-4">
              <p>
                I help teams move beyond one-off projects and ad-hoc components
                into coherent systems: shared monorepos, reusable UI libraries,
                and well-structured foundations that can support multiple
                products and brands over time.
              </p>
            </div>
            <Navigation className="order-4" />
          </div>
          <div className="flex items-center w-full mt-8 lg:mt-[72px]">
            <ul className="flex -mx-4 text-heading">
              <li className="mx-4">
                <a
                  className="flex items-center"
                  href="https://www.linkedin.com/in/sebastianinman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="linkedin" className="mr-4" />
                  <span className="mt-px leading-none">LinkedIn</span>
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
                  <span className="mt-px leading-none">GitHub</span>
                  <Icon name="external" className="size-3! ml-2" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 flex flex-col lg:py-22">
          <section
            id="projects"
            aria-labelledby="projects-heading"
            className="lg:pt-22 lg:-mt-24"
          >
            <h2
              id="projects-heading"
              className="sticky top-0 z-40 pt-6 text-sm font-bold tracking-widest uppercase lg:sr-only text-heading"
            >
              Projects
            </h2>
            <div className="group grid grid-cols-1">
              {projects.map((project) => (
                <Card
                  key={project.href}
                  href={project.href}
                  type="project"
                  primaryLanguage={project.primaryLanguage}
                  title={project.title}
                  description={project.description}
                  className="my-1"
                />
              ))}
            </div>
          </section>
          <section
            id="clients"
            aria-labelledby="clients-heading"
            className="lg:mt-22"
          >
            <h2
              id="clients-heading"
              className="sticky top-0 z-40 pt-6 text-sm font-bold tracking-widest uppercase lg:sr-only text-heading"
            >
              Clients
            </h2>
            <div className="group grid grid-cols-2 lg:grid-cols-3 gap-2 place-items-center text-foreground">
              <Card>
                <CitiBankLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <TIAALogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <PlannedParenthoodLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <OperationWarmLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <ChinookWindsLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <TangleFreeLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <NICIndustriesLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <TomsOffroadLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <JBSteelLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <GatorWadersLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <B2BTransportationLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <BallisticArmorCoLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <EnergyBrosLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <OregonTruckAutoLogo className="h-10 lg:h-15" />
              </Card>
              <Card>
                <HighwayProductsLogo className="h-10 lg:h-15" />
              </Card>
            </div>
          </section>
          <section
            id="thoughts"
            aria-labelledby="thoughts-heading"
            className="lg:mt-22"
          >
            <h2
              id="thoughts-heading"
              className="sticky top-0 z-40 pt-6 text-sm font-bold tracking-widest uppercase lg:sr-only text-heading"
            >
              Thoughts
            </h2>
            <div className="group grid grid-cols-1 lg:grid-cols-2 pt-8 pb-10 gap-2 lg:py-0">
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
            </div>
          </section>
          <section
            id="praise"
            aria-labelledby="praise-heading"
            className="lg:mt-22"
          >
            <h2
              id="praise-heading"
              className="sticky top-0 z-40 pt-6 text-sm font-bold tracking-widest uppercase lg:sr-only text-heading"
            >
              Praise
            </h2>
            <div className="grid grid-cols-1 pt-8 pb-10 gap-6 lg:py-0">
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
          </section>
          <footer className="text-sm mt-22">
            Copyright © 2025 Sebastian Inman. All rights reserved.
          </footer>
        </main>
      </Container>
    </>
  );
}
