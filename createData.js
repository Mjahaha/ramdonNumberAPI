const fs = require('fs');

const myNumbers = [];
for (let i = 0; i < 1000; i++) {
  myNumbers.push(Math.round(Math.random()*100000));
}
const fileData = myNumbers.join('\n');

fs.writeFileSync('data.txt', fileData, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('The file has been saved!');
  }
});