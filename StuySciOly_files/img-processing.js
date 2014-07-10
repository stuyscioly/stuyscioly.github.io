var dirpath = "./StuySciOly_files/Gallery/";
var fileNames = [
					"angela",
					"beard",
					"brandon",
					"cindy",
					"danny",
					"diana",
					"dino",
					"dyingwaterbottle",
					"hallistired",
					"hurr",
					"hurrpart2",
					"jason",
					"johnson",
					"kellychen",
				];
var fileType = ".jpg";
var gallery= document.getElementById("gallery-photos");

function loadPhotos(){
	var id = "img";
	var inner = "";
	for(var i=0;i<fileNames.length;i++){
		inner += insertPhoto(dirpath+fileNames[i]+fileType,i);
		document.getElementById("gallery-photos").innerHTML=inner;
		
	}
}

function insertPhoto(path,num){

		var stringstuff = "";
		stringstuff+= "<div ";
		stringstuff+= "id=\"img" + num + "\"";
		stringstuff+= "style=\"float:left;position:relative;top:500px;display:none\">";
		stringstuff+= "<img src=\"" + path + "\" width=\"325\" style=\"position:relative\"> ";
		stringstuff+= "</div>";
		return stringstuff;
	}

$(document).ready(function(){
	$("#loadButton").click(function(){
		loadPhotos();
	});
	$("#magicButton").click(function(){
		for(var i=0;i<fileNames.length;i++){
			var name = "#img" + i;
			$(name).delay(i*100).show();
			$(name).delay(i*200).animate({
				top: '0px'
			});
		}
	});
});