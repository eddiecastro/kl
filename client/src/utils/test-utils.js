export const successPeopleData = {
  metadata: {
    paging: { next_page: 2 },
  },
  data: [
    {
      id: 1,
      first_name: "first",
      last_name: "last",
      email_address: "email@address.com",
      title: "title",
    },
  ],
};

export const successFrequencyData = { a: 1, b: 2 };

export const successDuplicateData = {
  localPartMatches: [
    {
      people: [
        {
          id: 1,
          first_name: "first",
          last_name: "last",
          email_address: "first@last.com",
          title: "chef",
        },
        {
          id: 2,
          first_name: "red",
          last_name: "blue",
          email_address: "red@blue",
          title: "janitor",
        },
      ],
    },
  ],
  frequencyMatches: [
    {
      people: [
        {
          id: 4,
          first_name: "black",
          last_name: "white",
          email_address: "black@white.com",
          title: "colors",
        },
        {
          id: 5,
          first_name: "up",
          last_name: "down",
          email_address: "up@down.com",
          title: "job",
        },
      ],
      variationPercentage: 0.05405405405405406,
    },
  ],
};

export function mockFetch(data, success) {
  const jsonPromise = Promise.resolve(data);
  const fetchPromise = Promise.resolve({
    ok: success,
    json: () => jsonPromise,
  });
  jest.spyOn(global, "fetch").mockImplementation(() => fetchPromise);
}
