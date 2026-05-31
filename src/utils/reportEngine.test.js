const { getReports } = require("./reportEngine");

jest.setTimeout(10000);

describe("CityFix", () => {
  test("Debe obtener reportes", async () => {
    const reports = await getReports();

    expect(Array.isArray(reports)).toBe(true);
  });
});