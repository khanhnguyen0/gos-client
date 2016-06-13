
var check = function(user ){
$.get('http://localhost:5000/api/user/'+user,function(data){
			if(data){
 				console.log("Available");
			} else{
				console.log("Not available");
			}
		});
}

modules.exports = check;