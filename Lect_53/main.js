const fs = require('fs');
// console.log(fs);

console.group("satrting");
// fs.readdirSync("abhi.txt", "Abhi is a good boy")

fs.writeFile("Abhi2.txt", "Abhi is a good boy2", () => {
    console.log("Done")
    fs.readFile("Abhi2.txt", (error, data) => {
        console.log(error, data.toString());
    })
})

fs.appendFile("Abhi2.txt", "\nAbhi is coding",(e,d)=>{
    console.log(d)
})

console.log("Ending");