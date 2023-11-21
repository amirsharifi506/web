let http = require('http');
let fs=require('fs');
let port = 8037;
let server = http.createServer(requestHandler3);
server.listen(port);
console.log("Server is running on port:" + port);
let headers = {
    text:{'Content-Type': 'Text/Plain'} ,
    html:{'Content-Type': 'Text/html'}
};
function requestHandler3(request,response) {
    console.log("test");
    response.writeHead(200, headers.html);
    response.write();
    response.end();
  }
  function page2controller(response){
    console.log('page2controller1')
    fs.readFile('./s7.html','utf8',function(error,data){
        console.log('page2controller1',error)
        console.log('page2controller1',data)
        response.writeHead(200, headers.html);
        response.write(data);
        response.end();
    })
  }
  let obj = {
    page2:page2controller,
  }
  