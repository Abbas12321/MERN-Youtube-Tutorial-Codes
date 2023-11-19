const fs = require("fs");

// sync 
// fs.writeFileSync("./hello.txt", "hello world");
// fs.writeFileSync("./hello.txt", "like share subscribe");


// async
// fs.writeFile("./hello.txt", "like share comment" , (err) =>{})






// sync  blocking operations
// console.log("A")
// const read = fs.readFileSync("./hello.txt", "utf-8");
// console.log("B")
// console.log(read);
// console.log("C")

// async  non blocking operations
console.log("A")
fs.readFile("./hello.txt", "utf-8", (err, result) => {
    if(err){
        console.log(err);
    } else {
        console.log(result)
    }
})
console.log("B")
console.log("C")



// fs.appendFileSync("./hello.txt", "karo sab log\n");

// fs.unlinkSync("./file2.txt");

// fs.cpSync("./hello.txt", "./file2.txt")
