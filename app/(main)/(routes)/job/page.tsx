import { Container } from "@/components/layout/container";
import EducationInformationFrom from "@/feature/job-application/components/education-information-from";
import FamilyInformationFrom from "@/feature/job-application/components/family-information-from";
import GeneralInformationFrom from "@/feature/job-application/components/general-information-from";
import HeaderInformation from "@/feature/job-application/components/header-information";
import WorkingInformationFrom from "@/feature/job-application/components/working-information-from";

const JobPage = () => {
  return (
    <Container className="flex flex-col gap-10 py-10 sm:py-16">
      <HeaderInformation />
      <GeneralInformationFrom />
      <FamilyInformationFrom />
      <EducationInformationFrom />
      <WorkingInformationFrom />
    </Container>
  );
};

export default JobPage;
