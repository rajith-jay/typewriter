const sentence = "hello there from lighthouse labs";

setTimeout(() => {
  for (const char of sentence) {
    process.stdout.write(char);
  }
  process.stdout.write('\n');
}, 1000);
