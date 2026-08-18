import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LINKEDIN_URL = "https://www.linkedin.com/in/charlotteraz";
const EMAIL = "charlottekyleraz@gmail.com";

export default function About() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20 px-6 py-16 sm:px-10 lg:px-[90px] lg:py-20">
      <div className="flex w-full max-w-[1100px] flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
        <div className="relative size-[240px] shrink-0 overflow-hidden rounded-[20px] lg:size-[320px]">
          <Image
            src="/images/about/profile.jpg"
            alt="Charlotte Raz"
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>

        <div className="flex w-full flex-col items-start gap-8 text-left">
          <p className="font-sofia text-[40px] font-bold text-black sm:text-[48px]">
            About
          </p>

          <div className="flex max-w-[560px] flex-col gap-6">
            <p className="font-sofia text-[20px] font-light leading-8 text-body">
              A little bit about me in a nutshell is I have a passion for every
              little thing surrounding technology and design, from software
              engineering to UI/UX.
            </p>
            <p className="font-sofia text-[20px] font-light leading-8 text-body">
              I serve as both designer and front-end engineer for a healthcare
              SaaS platform, owning features end-to-end in React. I design
              wireframes, mockups, and prototypes, and lead user interviews to
              inform design decisions. I build and maintain Figma component
              libraries for an AI-assisted design system, pairing with Claude
              Code and Copilot for implementation, Storybook, and Code Connect.
              I also refactor legacy code to modern React patterns and present
              design concepts to clients and stakeholders.
            </p>
            <p className="font-sofia text-[20px] font-light leading-8 text-body">
              Outside of this deep and vast technological bubble, I am
              interested in film, photography, music, and graphic design.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <p className="font-sofia text-[22px] font-bold text-black">
              Contact
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sofia text-[16px] font-medium text-link transition-opacity hover:opacity-80"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                @charlotteraz
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 font-sofia text-[16px] font-medium text-link transition-opacity hover:opacity-80"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
