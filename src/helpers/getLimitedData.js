// Returns the specified number of elements the passed array.

export const getLimitedData = (data, quota, setState) => {
  const res = [];

  for (let i = 0; i < quota; i += 1) {
    if (data[i]) res.push(data[i]);
  }
  setState(res);
};
