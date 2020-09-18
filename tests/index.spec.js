const JestSnapshotSerializerDate = require("../src");

describe("JestSnapshotSerializerDate#test", () => {
  describe("when `value` exists", () => {
    describe("when `value` is an instance of `Date`", () => {
      it("returns true", () => {
        const mockValue = new Date();

        expect(JestSnapshotSerializerDate.test(mockValue)).toBe(true);
      });
    });

    describe("when `value is not an instance of `Date`", () => {
      it("returns false", () => {
        const mockValue = "mock date";

        expect(JestSnapshotSerializerDate.test(mockValue)).toBe(false);
      });
    });
  });

  describe("when `value` is undefined", () => {
    it("returns false", () => {
      const mockValue = undefined;

      expect(JestSnapshotSerializerDate.test(mockValue)).toBe(false);
    });
  });
});

describe("JestSnapshotSerializerDate#print", () => {
  it("returns a serialized value", () => {
    const mockDate = new Date("2020-09-18 13:26");

    expect(JestSnapshotSerializerDate.print(mockDate)).toEqual("{{ DateObject [Fri, 18 Sep 2020 13:26:00 GMT] }}");
  });
});
