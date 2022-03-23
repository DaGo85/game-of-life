// number of columns and rows / intervall duration
const columns = 50;
const rows = 50;
const intervall = 500;

//

export const getCells = (num: number) => {
  const arr = new Array(num).fill(false);
  let ob = { ...arr };
  Object.keys(ob).forEach((item: any) => {
    ob[item] = [...arr];
  });
  return ob;
};
