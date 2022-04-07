import { transformer } from "@/database/entity/auth/transformer";

describe("transformer", () => {
  it("transforms null dates from strings", () => {
    expect(transformer.date.from(null)).toEqual(null);
  });

  it("transforms null dates to strings", () => {
    expect(transformer.date.to(null)).toEqual(undefined);
  });

  it("transforms real dates from strings", () => {
    expect(transformer.date.from("1648161324425")).toEqual(
      new Date("2022-03-24T22:35:24.425Z")
    );
    expect(transformer.date.from("0")).toEqual(new Date(0));
  });

  it("transforms real dates to strings", () => {
    expect(transformer.date.to(new Date(0))).toEqual("0");
    expect(transformer.date.to(new Date("2001-09-09T01:46:40Z"))).toEqual(
      "1000000000000"
    );
  });

  it("transforms null bigints from strings", () => {
    expect(transformer.number.from(null)).toEqual(null);
  });

  it("transforms null bigints to strings", () => {
    expect(transformer.number.to(null)).toEqual(undefined);
  });

  it("transforms real numbers from strings", () => {
    expect(transformer.number.from("123")).toEqual(123);
    expect(transformer.number.from("9007199254740991")).toEqual(
      Number.MAX_SAFE_INTEGER
    );
    expect(transformer.number.from("-9007199254740991")).toEqual(
      Number.MIN_SAFE_INTEGER
    );
  });

  it("transforms real numbers to strings", () => {
    expect(transformer.number.to(123)).toEqual("123");
    expect(transformer.number.to(Number.MAX_SAFE_INTEGER)).toEqual(
      "9007199254740991"
    );
    expect(transformer.number.to(Number.MIN_SAFE_INTEGER)).toEqual(
      "-9007199254740991"
    );
  });
});
