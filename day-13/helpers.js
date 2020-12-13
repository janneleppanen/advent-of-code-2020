const parseSchedule = (input) => {
  const [timeRow, busRow] = input.split("\n");
  return {
    time: parseInt(timeRow),
    busList: busRow
      .split(",")
      .filter((i) => i !== "x")
      .map((i) => parseInt(i)),
  };
};

const getNextBus = (time, busList) => {
  const sortedBusList = busList
    .map((bus) => {
      const last = Math.floor(time / bus) * bus;
      const next = last + bus;
      return {
        bus,
        last,
        next,
      };
    })
    .sort((a, b) => a.next - b.next);
  return sortedBusList[0];
};

module.exports = {
  parseSchedule,
  getNextBus,
};
