import NotificationBar from "@/components/NotificationBar/NotificationBar";
import { loadTranslation } from "@/utils/translation";
import { GetStaticProps } from "next";
import { i18n } from "@lingui/core";
import Link from "next/link";
import CourseCard from "@/components/Profile/CourseCard/CourseCard";
import AsideLinks, {
  AsideLinksProps,
} from "@/components/Profile/AsideLinks/AsideLinks";
import { Carousel } from "@credasinc/ctip-ui";
import Image from "next/image";
import CarouselSlide, {
  CarouselSlideProps,
} from "@/components/Profile/CarouselSlide/CarouselSlide";
import styles from "./index.module.scss";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import WelcomeCard from "@/components/Profile/WelcomeCard/WelcomeCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{i18n._(/*i18n*/ "Center for Trauma Informed Practices")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Condition for viewing upgrade premium notification*/}
      {true && (
        <NotificationBar
          text={i18n._(
            /*i18n*/ "Upgrade to premium to access more tools courses and resources to make your community safe."
          )}
          cta={
            <Link href="/upgrade" passHref={true}>
              <a className="font-bold inline-block text-gray-700 text-center no-underline align-middle cursor-pointer select-none bg-transparent border border-gray-700 py-2 px-3 rounded-sm uppercase tracking-wider">
                {i18n._(/*i18n*/ "Upgrade now")}
              </a>
            </Link>
          }
          showCloseBtn={true}
        />
      )}
      <div className="container">
        <h1 className="page__title mb-0">
          {i18n._(/*i18n*/ "Welcome back")}, Richard
        </h1>
        <div className="mt-4 flex flex-col lg:flex-row gap-y-8 gap-x-14 before:content-[''] before:w-auto lg:before:w-0.5 before:h-0.5 lg:before:h-auto before:bg-gray-300 before:self-stretch">
          <div className="basis-4/6 order-first">
            {/* Condition for viewing get started or courses screen*/}
            {false ? (
              <>
                <p className="text-gray-600 text-2.5xl">
                  {i18n._(/*i18n*/ "Get started")}
                </p>
                <div className="flex flex-col gap-y-6">
                  <WelcomeCard
                    title={i18n._(
                      /*i18n*/ "Start your learning with our microlearning or online courses."
                    )}
                    cta={
                      <Link passHref={true} href="#">
                        <a className="btn btn-primary">
                          {i18n._(/*i18n*/ "view courses")}
                        </a>
                      </Link>
                    }
                  />
                  <WelcomeCard
                    title={i18n._(
                      /*i18n*/ "Begin your training to become a certified VTRA-trainee."
                    )}
                    cta={
                      <Link passHref={true} href="#">
                        <a className="btn btn-primary">
                          {i18n._(/*i18n*/ "find a session")}
                        </a>
                      </Link>
                    }
                  />
                  <WelcomeCard
                    title={i18n._(/*i18n*/ "Read our latest posts.")}
                    cta={
                      <Link passHref={true} href="#">
                        <a className="btn btn-primary">
                          {i18n._(/*i18n*/ "view articles")}
                        </a>
                      </Link>
                    }
                  />
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-600 text-2.5xl">
                  {i18n._(/*i18n*/ "Your courses")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2].map((_, index) => (
                    <CourseCard
                      key={index}
                      name="Course"
                      category="mental health"
                      progress={80}
                      description="Some quick example text to build on the card title and make up the bulk of the card content."
                      cta={
                        <Link href="#" passHref={true}>
                          <a className="mt-4 btn btn-primary">
                            {i18n._(/*i18n*/ "continue")}
                          </a>
                        </Link>
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-2.5xl mt-6">
                  {i18n._(/*i18n*/ "Upcoming sessions")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2].map((_, index) => (
                    <CourseCard
                      key={index}
                      name="VTRA Training Level 1 - Day 1"
                      category="december 1, 2021 | 1:00pm CST"
                      description="Some quick example text to build on the card title and make up the bulk of the card content."
                      cta={
                        <Link href="#" passHref={true}>
                          <a className="btn btn-primary">
                            {i18n._(/*i18n*/ "see overview")}
                          </a>
                        </Link>
                      }
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="basis-64">
            <AsideLinks groups={ASIDE_LINKS_GROUPS} />
          </div>
        </div>
      </div>
      <div className="mt-20 relative">
        <div className="absolute w-full h-full overflow-y-hidden">
          <Image
            src="/unsplash_6rC8fmNW3pk.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute w-full h-full bg-black opacity-40"></div>
        <div className="container py-36 relative">
          <div
            className={combineCSSClasses(
              styles.profile_carousel,
              "mx-auto max-w-4xl"
            )}
          >
            <div className="border-8 border-white py-16">
              <Carousel labels={{ jumpToSlide: "1" }}>
                {[1, 2, 3].map((_, index) => (
                  <CarouselSlide key={index} {...CAROUSEL_SLIDE} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const CAROUSEL_SLIDE: CarouselSlideProps = {
  name: "5th National VTRA Conference",
  date: (
    <>
      APR 7-8
      <br />
      2022
    </>
  ),
  address: (
    <>
      Fairmont Springs Hotel
      <br />
      Banff, Alberta
    </>
  ),
  description: (
    <>
      CTIP is excited to announce registration for our 2022 National Conference
      is now open!
    </>
  ),
  ctas: (
    <>
      <Link href="#" passHref={true}>
        <a className="btn btn-primary">{i18n._(/*i18n*/ "register now")}</a>
      </Link>
      <Link href="#" passHref={true}>
        <a className="btn btn-outline-secondary text-white border-white">
          {i18n._(/*i18n*/ "view calendar")}
        </a>
      </Link>
    </>
  ),
};

const ASIDE_LINKS_GROUPS: AsideLinksProps["groups"] = [
  {
    groupName: i18n._(/*i18n*/ "Suggested courses"),
    links: [
      {
        label: "Course Name",
        url: "#",
      },
      {
        label: "Course Name",
        url: "#",
      },
      {
        label: "Course Name",
        url: "#",
      },
      {
        label: "Course Name",
        url: "#",
      },
    ],
  },
  {
    groupName: i18n._(/*i18n*/ "training near you"),
    links: [
      {
        label: "December 09, 2021 @ Chicago Loop",
        url: "#",
      },
      {
        label: "December 09, 2021 @ Chicago Loop",
        url: "#",
      },
      {
        label: "December 09, 2021 @ Chicago Loop",
        url: "#",
      },
      {
        label: "December 09, 2021 @ Chicago Loop",
        url: "#",
      },
    ],
  },
  {
    groupName: i18n._(/*i18n*/ "recent CTIp Articles"),
    links: [
      {
        label: "Mental Health Expert Will Lead New York’s Pandemic Response",
        url: "#",
      },
      {
        label:
          "Another Surge in the Virus Has Colleges Fearing a Mental Health Crisis",
        url: "#",
      },
    ],
  },
];

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );

  return {
    props: {
      translation,
    },
  };
};
