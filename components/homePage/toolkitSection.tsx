import { kanitMB, latoReg } from "@/assets/fonts";

// GraphQL specific
import { getClient } from "@/utils/apollo";
import GET_TOOLKIT_SECTION_DATA from "@/queries/homePage/toolkitSection";
import { Fragment } from "react";

export default async function ToolkitSection(): Promise<JSX.Element> {
  const { loading, error, data } = await getClient().query({
    query: GET_TOOLKIT_SECTION_DATA,
  });

  if (loading) return <p> Loading </p>;
  if (error != null) return <p>`Error! ${error.message}`</p>;

  if (data !== undefined) {
    const Icon = (
      hoverColor: string,
      iconClass: string,
      title: string
    ): JSX.Element => {
      const hoverClass = `hover:text-red-500`;
      const wrapperClass =
        hoverClass +
        " text-creamy cursor-pointer flex flex-col gap-y-2 items-center duration-300 ease-in-out transition-colors";
      return (
        <div className={wrapperClass}>
          <i className={`${iconClass} text-4xl`}></i>
          <span> {title}</span>
        </div>
      );
    };

    const toolkitSectionData = data.homePageToolkitSections[0];

    return (
      <section className={`flex flex-col gap-12 ${latoReg.className}`}>
        <div className="flex flex-col gap-y-4">
          <h3
            className={`${kanitMB.className} text-3xl text-american-yellow lg:text-5xl`}
          >
            {toolkitSectionData.title}
          </h3>
          <p className={`${latoReg.className} text-lg lg:text-2xl `}>
            {toolkitSectionData.subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-y-12 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-y-16">
          {toolkitSectionData.subsections.map((subsection) => (
            <div
              className="flex flex-col gap-y-8 lg:basis-[45%] 3xl:basis-[30%]"
              key={subsection.id}
            >
              <div>
                <h4 className={`${kanitMB.className} text-xl `}>
                  {subsection.title}
                </h4>
                <p className={`${latoReg.className} text-lg `}>
                  {subsection.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap  gap-x-8 gap-y-8">
                {subsection.listOfTechnologies.map((technology) => (
                  <Fragment key={technology.id}>
                    {Icon(
                      technology.hoverColor,
                      technology.iconClassName,
                      technology.technologyName
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  return <></>;
}
