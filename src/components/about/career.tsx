import { useState } from "react";
import { ChevronDownIcon, ChevronsRightIcon } from "lucide-react";
import { careerData } from "@/common/constant/careerData";

interface ExperienceCardProps {
  companyLogo: string;
  role: string;
  company: string;
  companyDetails: string;
  location: string;
  startDate: string;
  endDate?: string;
  duration?: string;
  employmentType: string;
  remote?: boolean;
  responsibilities?: string[];
}

export const ExperienceCard = ({
  companyLogo,
  role,
  company,
  companyDetails,
  location,
  startDate,
  endDate,
  duration,
  employmentType,
  remote = false,
  responsibilities = [],
}: ExperienceCardProps) => {
  const [showResponsibilities, setShowResponsibilities] = useState(false);

  return (
    <div className="border rounded-lg p-4 w-full">
      <div className="flex items-start gap-2">
        <img
          src={companyLogo}
          alt={company}
          className="w-10 h-10 rounded-sm md:m-3"
        />
        <div className="flex flex-col gap-2 md:gap-1">
          <h3 className="text-base">{role}</h3>
          <ul className="text-neutral-600 text-sm md:flex space-y-1 md:gap-3">
            <li>{company}</li>
            <li className="text-neutral-500 md:before:content-['•'] md:before:mr-3 md:before:text-xs">[ {companyDetails} ]</li>
            <li className="md:before:content-['•'] md:before:mr-3 md:before:text-xs">{location}</li>
          </ul>
          <ul className="text-neutral-600 text-sm space-y-1 md:flex md:gap-3">
            <li>{startDate} - {endDate || "Present"}</li>
            {duration && <li className="text-neutral-500 md:before:content-['•'] md:before:mr-3 md:before:text-xs">{duration}</li>}
            <li className=" md:before:content-['•'] md:before:mr-3 md:before:text-xs">{employmentType}</li>
            {remote && <li className="md:before:content-['•'] md:before:mr-3 md:before:text-xs">remote</li>
            }
          </ul>

          {responsibilities.length > 0 && (
            <button
              onClick={() => setShowResponsibilities(!showResponsibilities)}
              className="flex items-center text-neutral-500 text-sm cursor-pointer"
            >
              {!showResponsibilities ? <ChevronsRightIcon className="w-4 h-4 mr-1" /> : <ChevronDownIcon className="w-4 h-4 mr-1" />}
              Show Responsibilities
            </button>
          )}


          {showResponsibilities && responsibilities.length > 0 && (
            <ul className="list-disc list-inside text-neutral-600 px-1 text-sm">
              {responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};



export const Career = () => {
  return (
    <>
      {careerData.map((job, index) => (
        <ExperienceCard key={index} {...job} />
      ))}
    </>
  )
}

