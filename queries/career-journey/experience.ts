import { gql } from "@/types/gql";

const GET_CAREER_JOURNEY_DATA = gql(`
  query CareerJourneyPageData {
    careerExperiences(orderBy: order_ASC) {
        location
        closeDate
        description {
            raw
        }
        id
        photo
        positionTitle
        skills
        startDate
        present
        companyName
    }
  }
`);

export default GET_CAREER_JOURNEY_DATA;
