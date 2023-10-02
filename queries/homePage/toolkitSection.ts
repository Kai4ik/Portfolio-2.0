import { gql } from "@/types/gql";

const GET_TOOLKIT_SECTION_DATA = gql(`
  query HomePageToolkitSectionData {
    homePageToolkitSections {
      subtitle
      title
      subsections {
        id
        subtitle
        title
        listOfTechnologies(first: 50) {
          id
          technologyName
          iconClassName
          confidenceLevel
        }
      }
    }
  }
`);

export default GET_TOOLKIT_SECTION_DATA;
