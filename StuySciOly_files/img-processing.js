var mainDirPath = "./StuySciOly_files/Gallery/";
var fileType = ".jpg";
var fileType2 = ".JPG";
var gallery= document.getElementById("gallery-photos");
var loadedPhotoTime = "";
var loadedPhotoAlbum= "";

var fileNames = {};
	fileNames["2014"] = {};
	fileNames["2013"] = {};
	fileNames["2017"] = {};
//2017
	//Regionals
	var Regionals2017 = 
	    [
			"IMG_4655",
		    	"IMG_4656",
		    	"IMG_4657",
		    	"IMG_4658",
		    	"IMG_4659",
		    	"IMG_4660",
		    	"IMG_4661",
		    	"IMG_4662",
		    	"IMG_4663",
		    	"IMG_4664"
		    ]
	var Regionals2017_2 = 
	    [
		    	"IMG_4665",
		    	"IMG_4666",
		    	"IMG_4667",
		    	"IMG_4668",
		    	"IMG_4669",
		    	"IMG_4670",
		    	"IMG_4671",
		    	"IMG_4672",
		    	"IMG_4673",
		    	"IMG_4674"
		    ]
	var Regionals2017_3 = 
	    [
		    	"IMG_4675",
		    	"IMG_4676",
		    	"IMG_4677",
		    	"IMG_4678",
		    	"IMG_4679",
		    	"IMG_4680",
		    	"IMG_4681",
		    	"IMG_4682",
		    	"IMG_4683",
		    	"IMG_4684"
		    ]
	var Regionals2017_4 =
	    [
		    	"IMG_4685",
		    	"IMG_4686",
		    	"IMG_4687",
		    	"IMG_4688",
		    	"IMG_4689",
		    	"IMG_4690",
		    	"IMG_4691",
		    	"IMG_4692",
		    	"IMG_4693",
		    	"IMG_4694"
		    ]
	var Regionals2017_5 =
	    [
		    	"IMG_4695",
		    	"IMG_4696",
		    	"IMG_4697",
		    	"IMG_4698",
		    	"IMG_4699",
		    	"IMG_4700",
		    	"IMG_4701",
		    	"IMG_4702",
		    	"IMG_4703",
		    	"IMG_4704"
		    ]
	var Regionals2017_6 = 
	    [
		    	"IMG_4705",
		    	"IMG_4706",
		    	"IMG_4707",
		    	"IMG_4708",
		    	"IMG_4709",
		    	"IMG_4710",
		    	"IMG_4711",
		    	"IMG_4714",
		    	"IMG_4715",
		    	"IMG_4716"
		    ]
	var Regionals2017_7 =
	    [
		    	"IMG_4717",
		    	"IMG_4718",
		    	"IMG_4719",
		    	"IMG_4720",
		    	"IMG_4722",
		    	"IMG_4723",
		    	"IMG_4726",
		    	"IMG_4728",
		    	"IMG_4729",
		    	"IMG_4730"
		    ]
	var Regionals2017_8 = 
	    [
		    	"IMG_4732",
		    	"IMG_4733",
		    	"IMG_4734",
		    	"IMG_4738",
		    	"IMG_4739",
		    	"IMG_4740",
		    	"IMG_4741",
		    	"IMG_4742",
		    	"IMG_4743",
		    	"IMG_4744",
		    	"IMG_4745",
		    	"IMG_4746"
		    ]
	fileNames["2017"]["Regionals2017"] = Regionals2017;
	fileNames["2017"]["Regionals2017_2"] = Regionals2017_2;
	fileNames["2017"]["Regionals2017_3"] = Regionals2017_3;
	fileNames["2017"]["Regionals2017_4"] = Regionals2017_4;
	fileNames["2017"]["Regionals2017_5"] = Regionals2017_5;
	fileNames["2017"]["Regionals2017_6"] = Regionals2017_6;
	fileNames["2017"]["Regionals2017_7"] = Regionals2017_7;
	fileNames["2017"]["Regionals2017_8"] = Regionals2017_8;
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
//DUPLICATE, for .JPG and not .jpg files
function loadPhotos2(time,album){
	var id = "img";
	var inner = "";
	for(var i=0;i<fileNames[time][album].length;i++){
		inner += insertPhoto(mainDirPath+time+"/"+album+"/"+fileNames[time][album][i]+fileType2,i);
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
				$(name).delay(i*100).velocity({
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

//DUPLICATE, for .JPG, not .jpg files
function showPhotos2(time,album){
	if(time!=="" || album!==""){
		if(loadedPhotoAlbum!==album){
			loadPhotos2(time,album);
			for(var i=0;i<fileNames[time][album].length;i++){
				var name = "#img" + i;
				$(name).delay(0).show();
				$(name).delay(i*100).velocity({
					top: '0px'
				});
			}
			loadedPhotoTime = time;
			loadedPhotoAlbum = album;
		}else{
			hidePhotos2(time,album);
		}
	}
}


function hidePhotos(time,album){
	if(time!=="" || album!==""){
		for(var i=0;i<fileNames[time][album].length;i++){
			var name = "#img" + i;
			if(i%2==0){
				$(name).delay(i*100).velocity({
					right: '+=2000px'
				});
			}else{
				$(name).delay(i*100).velocity({
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
//DUPLICATE, for .JPG files
function hidePhotos2(time,album){
	if(time!=="" || album!==""){
		for(var i=0;i<fileNames[time][album].length;i++){
			var name = "#img" + i;
			if(i%2==0){
				$(name).delay(i*100).velocity({
					right: '+=2000px'
				});
			}else{
				$(name).delay(i*100).velocity({
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
	//To do : fix the code so that it's more automated (have an array of the different events, or use the keys from fileNames)
	//2017
	$("#piclink-2017").click(function(){
		$("#Regionals2017").slideToggle();
		$("#Regionals2017_2").slideToggle();
		$("#Regionals2017_3").slideToggle();
		$("#Regionals2017_4").slideToggle();
		$("#Regionals2017_5").slideToggle();
		$("#Regionals2017_6").slideToggle();
		$("#Regionals2017_7").slideToggle();
		$("#Regionals2017_8").slideToggle();
		hidePhotos2(loadedPhotoTime,loadedPhotoAlbum);

	});
	$("#Regionals2017").click(function(){
		showPhotos2("2017","Regionals2017");
			
	});
	$("#Regionals2017_2").click(function(){
		showPhotos2("2017","Regionals2017_2");
			
	});
	$("#Regionals2017_3").click(function(){
		showPhotos2("2017","Regionals2017_3");
			
	});
	$("#Regionals2017_4").click(function(){
		showPhotos2("2017","Regionals2017_4");
			
	});
	$("#Regionals2017_5").click(function(){
		showPhotos2("2017","Regionals2017_5");
			
	});
	$("#Regionals2017_6").click(function(){
		showPhotos2("2017","Regionals2017_6");
			
	});
	$("#Regionals2017_7").click(function(){
		showPhotos2("2017","Regionals2017_7");
			
	});
	$("#Regionals2017_8").click(function(){
		showPhotos2("2017","Regionals2017_8");
			
	});
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
