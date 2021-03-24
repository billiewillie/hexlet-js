const reverse = (str) => {
  const string = str.split('');
  let newStr = [];
  string.forEach((item) => {
    newStr = [item, ...newStr];
  });
  return newStr.join('');
};

console.log(reverse('hellp'));
