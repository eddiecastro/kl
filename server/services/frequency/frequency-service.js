const peopleService = require("../people/people-service");
const frequencyCalculator = require("./frequency-calculator");

/**
 * Return frequency count for characters in email address
 * Default pageLimit is 10 to reduce the likelihood of long executions
 */
module.exports.get = async (pageLimit = 10) => {
  const perPage = 100;
  var nextPage = 1;
  var emailAddresses = [];
  while (nextPage && nextPage <= pageLimit) {
    const res = await peopleService.get(nextPage, perPage);

    res.data.map((x) => {
      emailAddresses.push(x.email_address);
    });

    nextPage = res.metadata.paging.next_page;
  }
  const frequencyCount = frequencyCalculator.multiple(emailAddresses);

  return frequencyCount;
};
