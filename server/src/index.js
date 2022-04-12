const app = require("./server");
const connect = require("./configs/db");


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3005;
}

app.listen(port, async()=>{
    try{
        await connect();

        console.log("This server runs on port 3005");
    }
    catch(e){
        console.log(e.message)
    }
})