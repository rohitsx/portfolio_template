export const EducationCard = ({
  schoolLogo,
  degree,
  fieldOfStudy,
  school,
  location,
  startDate,
  endDate,
}: {
  schoolLogo: string
  degree: string
  fieldOfStudy: string
  school: string
  location: string
  startDate: string
  endDate: string
}) => {
  return (
    <div className="border rounded-lg p-4 w-full">
      <div className="flex items-start gap-2">
        <img
          src={schoolLogo}
          alt={school}
          className="w-10 h-10 rounded-sm md:m-3"
        />
        <div className="flex flex-col gap-2 md:gap-1">
          <h3 className="text-base">{school}</h3>
          <ul className="text-neutral-600 text-sm md:flex space-y-1 md:gap-3">
            <li>{degree}</li>
            <li className="text-neutral-500 md:before:content-['•'] md:before:mr-3 md:before:text-xs">
              {fieldOfStudy}
            </li>
            <li className="md:before:content-['•'] md:before:mr-3 md:before:text-xs">
              {location}
            </li>
          </ul>
          <ul className="text-neutral-600 text-sm space-y-1 md:flex md:gap-3">
            <li>
              {startDate} - {endDate || "Present"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}



export const Education = () => {
  return <EducationCard
    schoolLogo="https://upload.wikimedia.org/wikipedia/en/1/14/Dr._C.V._Raman_University_logo.png"
    degree="Bachelor's degree"
    fieldOfStudy="bachelor of computer application (BCA)"
    school="Dr CV Raman University"
    location="India"
    startDate="2022"
    endDate="2025"
  />
}

