let Track = require("../Classes/Track");

test("Creation of Track returns an object", () => {
  Track = new Track();
  expect(Track).toBe(typeof Object);
});
