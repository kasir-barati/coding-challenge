// TODO: Better to use a lib like day.js
export function convertProjectStateDate(timestamp: number) {
  const [monthName, dayOfMonthNumber, year] = new Date(timestamp)
    .toLocaleDateString("en-us", {
      month: "long",
      year: "numeric",
      day: "numeric",
    })
    .split(" ");

  return `${dayOfMonthNumber.replace(",", "")}th ${monthName} ${year}`;
}
