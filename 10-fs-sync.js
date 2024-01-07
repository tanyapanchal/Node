    const {readFulesync, writeFileSync, readFileSync}=require("fs");
    console.log("start")

    const first = readFileSync("./Content/first.txt" ,"utf8")
    const second = readFileSync("./Content/second.txt" ,"utf8")

    writeFileSync(
        './Content/result-sync.txt',
        `Here is  you result:
        ${first}
        ${second}`,
        {flag: "a"}

    )
    console.log("end with task")
    console.log("bye")