const peopleService = require("../people/people-service");
const duplicateCalculator = require("./duplicates-calculator");

/**
 * Return potential duplicate people using 2 different methods
 */
module.exports.get = async (pageLimit = 10) => {
  const perPage = 100;
  var nextPage = 1;
  var people = [];
  while (nextPage && nextPage <= pageLimit) {
    const res = await peopleService.get(nextPage, perPage);

    res.data.map((x) => {
      people.push(x);
    });

    nextPage = res.metadata.paging.next_page;
  }

  var localPartMatches = duplicateCalculator.localPartEmail(people);
  var frequencyMatches = duplicateCalculator.frequency(people);

  return {
    localPartMatches: localPartMatches,
    frequencyMatches: frequencyMatches,
  };
};
