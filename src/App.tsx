import { useEffect, useState } from "react";
import data from "./assets/data.json";
import FilterLabel from "./components/filter-label/FilterLabel";
import JobCard from "./components/job-card/JobCard";

function App() {
  const [filters, setFilters] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState(data);

  useEffect(() => {
    const filterJobs = () => {
      const newFilteredJobs = data.filter((job) => {
        return filters.every((filter) => {
          return (
            job.role.includes(filter) ||
            job.level.includes(filter) ||
            job.languages.includes(filter) ||
            job.tools.includes(filter)
          );
        });
      });

      setFilteredJobs(newFilteredJobs);
    };

    filterJobs();
  }, [filters]);

  const removeFilter = (index: number) => {
    setFilters((prevFilters) => {
      const newFilters = [...prevFilters];
      newFilters.splice(index, 1);
      return newFilters;
    });
  };
  const clearAllFilters = () => {
    setFilters([]);
  };

  return (
    <>
      <header className="relative pb-20">
        <h1 className="sr-only">Job listings</h1>
        {filters.length !== 0 && (
          <div className="searchbar | bg-white relative top-[7.25rem] max-w-container mx-6 xl:mx-auto flex gap-10 py-6 px-10 rounded-[0.3125rem] justify-between">
            <div className="filters | flex gap-4 flex-wrap">
              {filters.map((filter, index) => (
                <FilterLabel
                  text={filter}
                  index={index}
                  hasCancelIcon={true}
                  onClick={() => {
                    removeFilter(index);
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => {
                clearAllFilters();
              }}
              className="text-custom_grey_300 font-bold text-base hover:text-custom_green_600 no-underline hover:underline ease-out duration-200"
            >
              Clear
            </button>
          </div>
        )}
      </header>
      <main className="bg-custom_green_100 min-h-screen">
        <div className="job-card-container | max-w-container mx-auto flex flex-col gap-10 lg:gap-6 py-20 px-6 xl:px-0">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              filters={filters}
              setFilters={setFilters}
              filterLabels={[
                job.role,
                job.level,
                ...job.languages,
                ...job.tools,
              ]}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
