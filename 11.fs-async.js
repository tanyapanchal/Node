    const {readFile, writeFile, read} = require("fs");
    console.log("start")

    readFile("./Content/first.txt", "utf-8",(err, result )=>{
        if(err){
            console.log(err)
            return;
        }
        const first = result;

        readFile("./Content/second.txt","utf-8",(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            const second = result;

            writeFile(
                "./Content/result-sync.txt", `Here is Async Fileresult: ${first } > ${second}`,


                (err, result)=>{
                    if(err) {
                        console.log(err);
                    }
                    console.log(result);
                console.log("end task")

                }
        

    )
        })
    })

    console.log("bye")