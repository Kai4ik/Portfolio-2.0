import { kanitMB, latoReg } from "@/assets/fonts";

// GraphQL specific
import { getClient } from "@/utils/apollo";
import GET_TOOLKIT_SECTION_DATA from "@/queries/homePage/toolkitSection";

export default async function ToolkitSection(): Promise<JSX.Element> {
  const { loading, error, data } = await getClient().query({
    query: GET_TOOLKIT_SECTION_DATA,
  });

  if (loading) return <p> Loading </p>;
  if (error != null) return <p>`Error! ${error.message}`</p>;

  if (data !== undefined) {
    const matchColorWithTechnology = (title: string): string => {
      switch (title.toLowerCase()) {
        case "html5":
          return "hover:text-[#E34C26]";
        case "css3":
          return "hover:text-[#2965F1]";
        case "javascript":
          return "hover:text-[#F0DB4F]";
        case "python":
          return "hover:text-[#FFD43B]";
        case "next.js":
          return "hover:text-[#2D2D2D]";
        case "postgresql":
          return "hover:text-[#336791]";
        case "typescript":
          return "hover:text-[#007ACC]";
        case "react":
          return "hover:text-[#61DBFB]";
        case "graphql":
          return "hover:text-[#ED1CD8]";
        case "tailwind css":
          return "hover:text-[#40C0F8]";
        case "github":
          return "hover:text-[#F4CBB2]";
        case "git":
          return "hover:text-[#F1502F]";
        case "node.js":
          return "hover:text-[#3C873A]";
        case "docker":
          return "hover:text-[#0db7ed]";
        case "express.js":
          return "hover:text-[#828282]";
        case "aws":
          return "hover:text-[#FF9A00]";
        case "gatsby":
          return "hover:text-[#663399]";
        case "redux":
          return "hover:text-[#764ABC]";
        case "azure":
          return "hover:text-[#37BDEF]";
        case "webpack":
          return "hover:text-[#1C78C0]";
        case "babel":
          return "hover:text-[#F9DC3E]";
        case "sequelize":
          return "hover:text-[#37BDEF]";
        case "firebase":
          return "hover:text-[#FEC107]";
        case "kubernetes":
          return "hover:text-[#3970e4]";
        default:
          return "hover:text-creamy";
      }
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
          <p className={`${latoReg.className}  text-lg lg:text-2xl `}>
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
                <p className={`${latoReg.className} lg:min-h-[10vh] text-lg `}>
                  {subsection.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap  gap-x-8 gap-y-8">
                {subsection.listOfTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className={`${matchColorWithTechnology(
                      technology.technologyName
                    )} text-creamy cursor-pointer flex flex-col gap-y-2 items-center duration-300 ease-in-out transition-colors`}
                  >
                    <i className={`${technology.iconClassName} text-4xl`}></i>
                    <span> {technology.technologyName}</span>
                  </div>
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
