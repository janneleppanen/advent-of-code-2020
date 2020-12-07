const findMiddle = (columnData, max) => {
  const range = columnData.reduce((needles, next) => {
    if (next === 'F' || next === 'L') {
      needles[1] -= Math.ceil((needles[1] - needles[0]) / 2);
    }
  
    if (next === 'B' || next === 'R') {
      needles[0] += Math.ceil((needles[1] - needles[0]) / 2);
    }
  
    return needles;
  }, [0, max])

  return (range[0] + range[1]) / 2;
}

const getSeatId = (seatData, maxRows, maxColumns) => {
  const rowData = seatData.split('').slice(0,7);
  const columnData = seatData.split('').slice(7);
  
  const row = findMiddle(rowData, maxRows);
  const column = findMiddle(columnData, maxColumns);

  return row * 8 + column;
}

module.exports = {
  getSeatId
}