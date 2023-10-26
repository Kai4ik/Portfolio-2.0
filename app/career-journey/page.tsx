// fonts
import { kanitMB, latoReg } from "@/assets/fonts";

// components
import PageScroller from "@/components/layout/pageScroller";
import Accordion from "./accordion";

// GraphQL specific
import { getClient } from "@/utils/apollo";
import GET_CAREER_JOURNEY_DATA from "@/queries/career-journey/experience";

// Next.js specific
import Image from "next/image";


export default async function CareerJourney(): Promise<JSX.Element> {
  const { loading, error, data } = await getClient().query({
    query: GET_CAREER_JOURNEY_DATA,
  });

  if (loading) return <p> Loading </p>;
  if (error != null) return <p>`Error! ${error.message}`</p>;

  if (data !== undefined) {
    const careerExperinces = data.careerExperiences;

    return (
      <main className="w-screen  relative z-30">
        <div className=" flex flex-col gap-y-8 lg:gap-y-16 px-8 lg:px-[8vw] pt-12 pb-[180px] lg:pb-[200px] w-full overflow-x-hidden text-creamy">
          <h3
            className={`${kanitMB.className} text-3xl text-american-yellow lg:text-5xl`}
          >
            My Career Journey
          </h3>
          <div className="flex gap-x-6 lg:gap-x-12 relative">
            <div className="h-auto w-4 rounded-full bg-american-yellow"></div>
            <div className="flex flex-col gap-y-24 ">
              {careerExperinces.map((experience) => (
                <section key={experience.id} className="flex flex-col gap-y-12">
                  <div className="flex flex-col items-start justify-start gap-y-8 w-full">
                    <h4 className={`text-4xl text-creamy font-semibold ${kanitMB.className}`}>{experience.companyName}</h4>
                    <div className="flex flex-col gap-y-12 basis-full">
                      <div className="w-full flex flex-col gap-y-4">
                        <div className={`${latoReg.className}`}>
                          <h4 className={`text-creamy text-xl ${kanitMB.className}`}>
                            {experience.positionTitle}
                          </h4>
                          <p>{experience.location}</p>
                          <p>
                            {new Date(experience.startDate).toLocaleString("default", {
                              month: "long",
                            })}{" "}
                            {new Date(experience.startDate).getFullYear()} -{" "}
                            {experience.present ? (
                              "present"
                            ) : (
                              <>
                                {new Date(experience.closeDate).toLocaleString(
                                  "default",
                                  {
                                    month: "long",
                                  }
                                )}{" "}
                                {new Date(experience.closeDate).getFullYear()}
                              </>
                            )}
                          </p>
                        </div>
                        <div className="flex gap-y-4 gap-x-2 flex-wrap ">
                          {experience.skills.map((skill, index) => (
                            <p
                              key={index}
                              className={`${latoReg.className} bg-creamy flex shrink-0 justify-center items-center px-4 h-[50px] text-sm text-dark rounded-3xl`}
                            >
                              {skill}
                            </p>
                          ))}
                        </div>
                      </div>
                      {experience.photo && (
                        <div className="relative w-full h-[50vh] md:w-[50%]  lg:h-[80vh] lg:w-[35%]">
                          <Image
                            src={experience.photo}
                            alt="Kairat on Toronto FC game"
                            fill
                            className="object-cover fixed bottom-0 left-0"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <Accordion content={experience.description} />
                </section>
              ))}
            </div>
          </div>
        </div>
        <div className="fixed flex flex-col justify-center gap-y-4 h-[150px]  px-8 lg:px-[8vw]  w-full bottom-0 text-creamy bg-dark">
          <div>
            <h1 className={`${kanitMB.className} text-4xl `}>
              Kairat Orozobekov
            </h1>
            <h2 className={`${latoReg.className} text-lg`}>
              Software Developer / Data Engineer
            </h2>
          </div>

          <PageScroller />
        </div>
      </main>
    );
  }
  return <></>;
}
