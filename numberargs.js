var nums = process.argv.slice(2);

console.log(nums.reduce(function(a, b) {
  return Number(a) + Number(b);
}));