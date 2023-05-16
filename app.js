const http = require("http")
const fs = require("fs")
const port = 3000

const server = http.createServer((request, response)=>{
   
    const url = request.url
    console.log(request.url)
    if (url === "/about"){
        return response.end("about page")
    }
   else {
      fs.readFile("./public/index.html", (error, data) => {
        if(error){
            console.log(error)
            response.end("something went wrong")
        } else {
            response.writeHeader(200, {"content-type": "text/html"})
            response.write(data)
            response.end()
        }
      })
    }
  
})

server.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})