export const getRandomInt = () => {
  const min = Math.ceil(1000);
  const max = Math.ceil(9999);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
