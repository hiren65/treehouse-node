// //Handle HTTP route GET / and POST /i.e.home
function homeRouter(req,res){
  if(req.url==="/"){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("Header \n");
    res.write("Search \n");
    res.end("Footer \n");
  }
};

function user(req,res){
   var username = req.url.replace("/","");
   if(username.length>0){
     if(username==="hirenkumar"){
          var siteName = "www.hirenkumar.com.au";
           res.writeHead(200,{'Content-Type':"text/plain"});
           res.write("My Site :: \n");
           res.write(siteName + "\n");
           res.end("all right reserved \n");
     }else {
       res.writeHead(200,{'Content-Type':'text/plain'});
       res.write("Header \n");

       res.write(username+"\n");
       res.end("Footer \n");
     }

   }

};



module.exports.user = user;
module.exports.home = homeRouter;

//Handle HTTP route GET / and POST / i.e. Home

//////////////

// function home(request, response) {
//   //if url == "/" && GET
//   if(request.url === "/") {
//     //show search
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write("Header\n");
//     response.write("Search\n");
//     response.end('Footer\n');
//   }
//   //if url == "/" && POST
//     //redirect to /:username
// }
//
// //Handle HTTP route GET /:username i.e. /chalkers
// function user(request, response) {
//   //if url == "/...."
//   var username = request.url.replace("/", "");
//   if(username.length > 0) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write("Header\n");
//     response.write(username + "\n");
//     response.end('Footer\n');
//
//
//     //get json from Treehouse
//       //on "end"
//         //show profile
//       //on "error"
//         //show error
//   }
// }
//
// module.exports.home = home;
// module.exports.user = user;
