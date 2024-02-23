import FilterLabel from "../filter-label/FilterLabel";

interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

interface JobCardProps {
  job: Job;
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
  filterLabels: string[];
}

const JobCard = ({ job, filters, setFilters, filterLabels }: JobCardProps) => {
  const addFilterToFilterArray = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters((prevFilters) => [...prevFilters, filter]);
    }
  };

  return (
    <div
      className={`job-card ${
        job.featured ? "border-l-custom_green_600 border-l-[0.3125rem]" : ""
      } bg-white md:flex justify-between items-center rounded-[0.3125rem] py-8 px-10 lg:flex-row relative`}
    >
      <div className="job-card__job-details | flex gap-6">
        <img
          src={job.logo}
          alt={job.company}
          className="absolute -top-6 w-12 h-12 md:static md:w-[5.5rem] md:h-[5.5rem]"
        />
        <div>
          <div className="flex gap-8 items-center pb-3">
            <span className="text-[0.8125rem] md:text-lg font-bold text-custom_green_600">
              {job.company}
            </span>
            <div className="flex gap-2">
              {job.new && (
                <span className="font-bold bg-custom_green_600 rounded-xl text-white px-2 pt-[2px]">
                  NEW!
                </span>
              )}
              {job.featured && (
                <span className="font-bold bg-custom_green_900 rounded-xl text-white px-2 pt-[2px]">
                  FEATURED
                </span>
              )}
            </div>
          </div>
          <a
            href="#"
            className="text-custom_green_900 hover:text-custom_green_600 duration-200 ease-in font-bold md:text-[1.375rem] leading-6"
          >
            {job.position}
          </a>
          <div className="text-custom_grey_300 flex gap-9 pb-4 pt-3 md:pb-0">
            <span className="has-separator relative">{job.postedAt}</span>
            <span className="has-separator relative">{job.contract}</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className="job-card__filters | flex border-t-custom_grey_100 border-t-[1px] pt-4 md:border-none">
        <div className="flex gap-4 flex-wrap md:justify-end">
          {filterLabels.map((filter, index) => (
            <FilterLabel
              key={index}
              text={filter}
              hasCancelIcon={false}
              onClick={() => {
                addFilterToFilterArray(filter);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
