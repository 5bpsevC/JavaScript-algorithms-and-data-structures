// Recursive Version
function countDownRecursive(num: number): void {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDownRecursive(num);
}
countDownRecursive(3);

// Iterative Version
function countDown(num: number): void {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}
countDown(3);
