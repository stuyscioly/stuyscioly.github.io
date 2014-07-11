var mainDirPath = "./StuySciOly_files/Gallery/";
var fileType = ".jpg";
var gallery= document.getElementById("gallery-photos");
var loadedPhotoTime = "";
var loadedPhotoAlbum= "";

var fileNames = {};
	fileNames["2014"] = {};
	fileNames["2013"] = {};

//2014

	//Edmond's Greatest Hits

	var EdmondsGreatestHits2014 = 
		[
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
			"kellychen"
		];
	fileNames["2014"]["EdmondsGreatestHits2014"] = EdmondsGreatestHits2014;

//2013
	//States 2013
	var States2013 = 
		[
			"Bus",
			"DanfuKelly",
			"Johnson",
			"KoolKatKelly",
			"ModelChuk",
			"Saim"
		];
	fileNames["2013"]["States2013"] = States2013;


function loadPhotos(time,album){
	var id = "img";
	var inner = "";
	for(var i=0;i<fileNames[time][album].length;i++){
		inner += insertPhoto(mainDirPath+time+"/"+album+"/"+fileNames[time][album][i]+fileType,i);
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

function showPhotos(time,album){
	if(time!=="" || album!==""){
		if(loadedPhotoAlbum!==album){
			loadPhotos(time,album);
			for(var i=0;i<fileNames[time][album].length;i++){
				var name = "#img" + i;
				$(name).delay(0).show();
				$(name).delay(i*100).animate({
					top: '0px'
				});
			}
			loadedPhotoTime = time;
			loadedPhotoAlbum = album;
		}else{
			hidePhotos(time,album);
		}
	}
}
function hidePhotos(time,album){
	if(time!=="" || album!==""){
		for(var i=0;i<fileNames[time][album].length;i++){
			var name = "#img" + i;
			if(i%2==0){
				$(name).delay(i*100).animate({
					right: '+=2000px'
				});
			}else{
				$(name).delay(i*100).animate({
					left: '+=2000px'
				})
			}	
		}
		for(var i=0;i<fileNames[time][album].length;i++){
			var name = "#img" + i;
			$(name).delay(1000).slideUp();
		}
		loadedPhotoAlbum = "";
		loadedPhotoTime = "";
	}
}

$(document).ready(function(){ //Apparently this line is bad code hurr
	//To do : fix the code so that it's more automated (have an array of hte different events, or use the keys from fileNames)


	//2014
	$("#piclink-2014").click(function(){
		$("#EdmondsGreatestHits2014").slideToggle();
		hidePhotos(loadedPhotoTime,loadedPhotoAlbum);

	});
	$("#EdmondsGreatestHits2014").click(function(){
		showPhotos("2014","EdmondsGreatestHits2014");
			
	});

	//2013
	$("#piclink-2013").click(function(){
		$("#States2013").slideToggle();
		hidePhotos(loadedPhotoTime,loadedPhotoAlbum);
	});
	$("#States2013").click(function(){
		showPhotos("2013","States2013");
	});
});