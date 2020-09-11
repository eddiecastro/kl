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

export const successFrequencyData = [
  ["a", 1],
  ["b", 2],
];

export function mockFetch(data, success) {
  const jsonPromise = Promise.resolve(data);
  const fetchPromise = Promise.resolve({
    ok: success,
    json: () => jsonPromise,
  });
  jest.spyOn(global, "fetch").mockImplementation(() => fetchPromise);
}
