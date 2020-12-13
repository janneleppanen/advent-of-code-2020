const parseSchedule = (input) => {
  const [timeRow, busRow] = input.split("\n");
  return {
    time: parseInt(timeRow),
    busList: busRow.split(",").map((i) => {
      return i === "x" ? "x" : parseInt(i);
    }),
  };
};

const getNextBus = (time, busList) => {
  const sortedBusList = busList
    .filter((i) => i !== "x")
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

const getNextRushDepartureSlow = (busLines) => {
  const biggest = busLines.reduce(
    (big, next, offset) => {
      if (next > big.number) {
        return { number: next, offset };
      }
      return big;
    },
    { number: 0, offset: 0 }
  );

  let rushDeparture = false;
  let time = biggest.numbet - biggest.offset;
  let n = 1;
  while (!rushDeparture) {
    const isLeaving = busLines.filter((bus, index) => {
      if (bus === "x") return true;
      return (time + index) % bus === 0;
    });
    if (isLeaving.length === busLines.length) {
      rushDeparture = true;
      break;
    }
    n++;
    time = n * biggest.number - biggest.offset;
  }

  return time;
};

const getNextRushDeparture = (busLines) => {
  const busses = busLines
    .map((number, offset) => ({ number, offset: offset }))
    .filter((b) => b.number !== "x");

  const mod = busses.reduce((sum, b) => sum * b.number, 1);
  const multipliedAll = busses.reduce((sum, bus) => {
    const helper = busses
      .filter((b) => b.number !== bus.number)
      .reduce((sum, b) => sum * b.number, 1);
    let helper2 = helper;
    let i = 1;

    const m =
      bus.offset % bus.number === 0
        ? 0
        : bus.number - (bus.offset % bus.number);
    while (helper2 % bus.number !== m) {
      i++;
      helper2 = helper * i;
    }
    return sum + helper2;
  }, 0);

  return multipliedAll % mod;
};

module.exports = {
  parseSchedule,
  getNextBus,
  getNextRushDeparture,
  getNextRushDepartureSlow,
};
