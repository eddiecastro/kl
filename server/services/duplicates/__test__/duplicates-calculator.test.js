const duplicateCalculator = require("../duplicates-calculator");

describe("duplicate calculator", () => {
  const people = [
    {
      email_address: "blahblah@asdf.com",
    },
    {
      email_address: "blahblh@asdf.com",
    },
    {
      email_address: "treelkjl@sdfsdf.com",
    },
    {
      email_address: "treelkjla@sdfsdf.com",
    },
    {
      email_address: "frewq@gre.com",
    },
    {
      email_address: "vfdafwe@yetert.com",
    },
    {
      email_address: "vfdafwe@different.com",
    },
  ];

  it("should return potential duplicates from local part email", () => {
    const res = duplicateCalculator.localPartEmail(people);
    expect(res).toEqual(localPartExpected);
  });

  it("should return potential duplicates from frequency comparison", () => {
    const res = duplicateCalculator.frequency(people);
    expect(res).toEqual(frequencyExpected);
  });

  const localPartExpected = [
    {
      people: [
        { email_address: "vfdafwe@yetert.com", local_email: "vfdafwe" },
        { email_address: "vfdafwe@different.com", local_email: "vfdafwe" },
      ],
    },
  ];
  const frequencyExpected = [
    {
      people: [
        {
          email_address: "blahblah@asdf.com",
          frequency: {
            b: 2,
            l: 2,
            a: 3,
            h: 2,
            "@": 1,
            s: 1,
            d: 1,
            f: 1,
            ".": 1,
            c: 1,
            o: 1,
            m: 1,
          },
        },
        {
          email_address: "blahblh@asdf.com",
          frequency: {
            b: 2,
            l: 2,
            a: 2,
            h: 2,
            "@": 1,
            s: 1,
            d: 1,
            f: 1,
            ".": 1,
            c: 1,
            o: 1,
            m: 1,
          },
        },
      ],
      variationPercentage: 0.06060606060606061,
    },
    {
      people: [
        {
          email_address: "treelkjl@sdfsdf.com",
          frequency: {
            t: 1,
            r: 1,
            e: 2,
            l: 2,
            k: 1,
            j: 1,
            "@": 1,
            s: 2,
            d: 2,
            f: 2,
            ".": 1,
            c: 1,
            o: 1,
            m: 1,
          },
        },
        {
          email_address: "treelkjla@sdfsdf.com",
          frequency: {
            t: 1,
            r: 1,
            e: 2,
            l: 2,
            k: 1,
            j: 1,
            a: 1,
            "@": 1,
            s: 2,
            d: 2,
            f: 2,
            ".": 1,
            c: 1,
            o: 1,
            m: 1,
          },
        },
      ],
      variationPercentage: 0.05128205128205128,
    },
  ];
});
