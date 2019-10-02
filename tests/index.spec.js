const {
  absoluteNumber,
  countries,
  getUser,
  throwAnErrorIfStrictNegative,
  nameAndAge
} = require("../index");

describe("absoluteNumber", () => {
  it("should be positive", () => {
    const result = absoluteNumber(1);
    expect(result).toBe(1);
  });
  it("should be positive", () => {
    const result = absoluteNumber(-1);
    expect(result).toBe(1);
  });
  it("should be positive", () => {
    const result = absoluteNumber(0);
    expect(result).toBe(0);
  });
});

describe("countries", () => {
  it("should contains Tunisia", () => {
    const result = countries();
    expect(result).toContain("Tunisia");
  });
  it("should contains Germany", () => {
    const result = countries();
    expect(result).toContain("Germany");
  });
});

describe("name and age", () => {
  it("should contains ilyes", () => {
    const result = nameAndAge("ilyes", 23);
    expect(result).toMatch(/ilyes/);
  });
});

describe("user object", () => {
  it("should contains {id:10}", () => {
    const result = getUser(10, "ilyes");
    expect(result).toMatchObject({ id: 10 });
  });
  it("should be equals to {id:10,name:'ilyes',isNice:true}", () => {
    const result = getUser(10, "ilyes");
    expect(result).toEqual({ id: 10, name: "ilyes", isNice: true });
  });
});

describe("throw an error if strict negatvie", () => {
  it("should throw an error", () => {
    expect(() => {
      throwAnErrorIfStrictNegative(-1);
    }).toThrow();
  });
});
