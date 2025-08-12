const fs = require('fs').promises;

(async () => {
    let a = await fs.readFile("Abhi2.txt");
    await fs.appendFile("Abhi2.txt", "Coding is fun");
    console.log(a.toString());
})();


