var intros = Array( "(aseen laukaisuääni)",
					"hurri",
					"kirkkonummiiii",
					"02400",
					"AD-VITUN-OD",
					"me tullaan kylilt",
					"me ollaan tääl vieläki",
					"2018",
					"bust that shit",
					"aah",
					"överdog",
					"joo alotetaan tää");

var outros = Array( "vittu",
					"kiirkkoonummii!",
					"ADOD!",
					"HEITTOLA!",
					"ÄMSEE RAMBO!",
					"överdog baby",
					"kakstuhat kaheksantoista",
					"mist tää meni pois päältä");

var title1 = Array(	"onko",
					"suoraan",
					"hurrin",
					"kylien");

var title2 = Array(	"savut",
					"savuja",
					"kirkkonummi",
					"02400",
					"nopein");

var title3 = Array(	"joka päivä",
					"päivät pitkät",
					"hereillä",
					"pt. II",
					"kirkkonummi",
					"kyliltä");

var lyric1 = Array ("4,käännän sätkän",
					"4,kirkkonummi",
					"2,hurri",
					"2,huora",
					"4,poltin pajat",
					"4,kirkkonummelt",
					"6,piuhat maksamatta",
					"4,huumevelkoi",
					"2,kylilt'",
					"4,mc rambo",
					"2,spliffii",
					"2,sätkä",
					"2,kukka",
					"4,kirkkonummi",
					"2,muijas",
					"2,hatsii",
					"2,poltin",
					"2,piuhat",
					"2,huume",
					"2,kylilt",
					"2,hittii",
					"2,paukut",
					"2,juna",
					"2,vihreet",
					"2,pillu",
					"4,kotikunta",
					"2,pajat",
					"2,kytät",
					"2,jengi",
					"2,ämmäs",
					"2,fatta",
					"4,muijas on horo",
					"8,02400");

var lyric2 = Array ("4,matafakin",
					"2,hittii",
					"2,L.E.",
					"4,kirkkonummi",
					"4,gangstahurri",
					"2,gang shit",
					"4,ADOD",
					"4,kylähurri",
					"2,hasa",
					"2,*ruotsia*",
					"2,paja",
					"2,dänkit",
					"2,hittii",
					"2,häslään",
					"4,gangstahurri",
					"2,budii",
					"2,hurrit",
					"2,viivat",
					"2,bluntti",
					"2,vajari",
					"2,gangsta",
					"4,kotikunta",
					"2,nummi",
					"2,bongi",
					"2,kylilt",
					"2,hurrei",
					//"4,H-U-R-R-I",
					"2,kylille");

var rhymes = Array ("nummelt,tunget",
					"hajui, kaduil",
					"kerhoi, velkoi",
					"tulta, multa",
					"liikaa, viivat",
					"menevää, venäjää",
					"hurri, nummi",
					"säädä, käännä",
					"nummi, hurri",
					"hurrii, budii",
					"hurri, bluntti",
					"hurril, kulmil",
					"vajareis, hajalle",
					"kaduilt, kaduil",
					"darra, karva",
					"hädäs, vähäs",
					"meneil, hereil",
					"nummen, hurrei",
					"hitti, fikti",
					"grippi, diili",
					"rikki, shitti",
					"vippi,tikki");



var versecount=0;



var rhyme1="";
var rhyme2="";
var thisrhyme="";
var rhymeorder="";

function rhymesetup() {
	rhyme1 = rhymes[Math.floor(Math.random()*rhymes.length)];
	rhyme1 = rhyme1.split(",");
	rhyme2 = rhymes[Math.floor(Math.random()*rhymes.length)];
	rhyme2 = rhyme2.split(",");
	
	rhymeorder = [Math.floor(Math.random()*2)];
	thisrhyme=1;
}



function generate() {
	versecount=0;
	
	var songtitle=title();
	document.getElementById("title").innerHTML = songtitle;

	var lyrics="";
	lyrics = lyrics+intro(4);
	lyrics = lyrics+"<br>"+verse(8, 8,"MC Rambo");
	lyrics = lyrics+"<br>"+chorus(4,6,songtitle);
	lyrics = lyrics+"<br>"+verse(8, 8,"ADOD");
	lyrics = lyrics+"<br>"+chorus(4,6,songtitle);
	lyrics = lyrics+"<br>"+outro(4);
	
	document.getElementById("lyrics").innerHTML = lyrics;
}



function title() {
	var title="";
	title=title+title1[Math.floor(Math.random()*title1.length)];
	title=title+" "+title2[Math.floor(Math.random()*title2.length)];
	if([Math.floor(Math.random()*2)]==0){
		title=title+" "+title3[Math.floor(Math.random()*title3.length)];
	}
	return title;
}



function intro(linecount) {
	var intro = "<a class='title'>[Intro:]</a><br>";
	for(var i=0; i < linecount; i++){
		if(i==0){
			intro=intro+intros[Math.floor(Math.random()*intros.length)];
		} else {
			intro=intro+"<br>"+intros[Math.floor(Math.random()*intros.length)];
		}
	}
	intro=intro+"<br>";
	return intro;
}



function outro(linecount) {
	var outro = "<a class='title'>[Outro:]</a><br>";
	for(var i=0; i < linecount; i++){
		if(i==0){
			outro=outro+outros[Math.floor(Math.random()*outros.length)];
		} else {
			outro=outro+"<br>"+outros[Math.floor(Math.random()*outros.length)];
		}
	}
	outro=outro+"<br>";
	return outro;
}




function verse(lines, syllables, artist) {
	rhymesetup();
	
	versecount=versecount+1;
	var verse = "<a class='title'>[Verse #"+versecount+": "+artist+"]</a><br>";
	
	var linecount=0;
	while(linecount<lines){
		if(artist=="MC Rambo" && linecount==0){
			verse = verse + "se on se MC Rambo<br>haluuks kuulla jotain vammast poika<br>";
			linecount=linecount+2;
		} else {
			verse = verse + line(syllables,artist);
			linecount=linecount+1;
		}
	}
	return verse;
}



function chorus(lines, syllables, title) {
	rhymesetup();
	
	var chorus = "<a class='title'>[Chorus: (x2)]</a><br>";
	var linecount=0;
	while(linecount<lines){
		chorus = chorus + line(syllables, "MC Rambo");
		linecount=linecount+1;
	}
	chorus = chorus + title + "!<br>";
	chorus = chorus + title + "!<br>";
	return chorus;
}



function line(syllables, artist) {
	var line="";
	
	var syllablecount=0;	
	while(syllablecount < syllables-2){
		if(artist=="MC Rambo"){
			var word = lyric1[Math.floor(Math.random()*lyric1.length)];
		}else if(artist=="ADOD"){
			var word = lyric2[Math.floor(Math.random()*lyric2.length)];
		}
		var array = word.split(",");
		word = array[1];
		
		if (+syllablecount + +array[0]<=syllables-2){
			syllablecount = +syllablecount + +array[0];
			line=line+word+" ";
		}
	}
	
	var rhymestyle="simple";
	if(rhymestyle=="simple"){
		if(rhymeorder==0){
			if(thisrhyme==1){line=line+rhyme1[0]+"<br>";};
			if(thisrhyme==2){line=line+rhyme1[1]+"<br>";};
		} else {
			if(thisrhyme==1){line=line+rhyme1[1]+"<br>";};
			if(thisrhyme==2){line=line+rhyme1[0]+"<br>";};
		}
		thisrhyme=thisrhyme+1;
		if(thisrhyme==3){rhymesetup();};
	} else {
		if(rhymeorder==0){
			if(thisrhyme==1){line=line+rhyme1[0]+"<br>";};
			if(thisrhyme==2){line=line+rhyme2[0]+"<br>";};
			if(thisrhyme==3){line=line+rhyme1[1]+"<br>";};
			if(thisrhyme==4){line=line+rhyme2[1]+"<br>";};
		} else {
			if(thisrhyme==1){line=line+rhyme1[1]+"<br>";};
			if(thisrhyme==2){line=line+rhyme2[1]+"<br>";};
			if(thisrhyme==3){line=line+rhyme1[0]+"<br>";};
			if(thisrhyme==4){line=line+rhyme2[0]+"<br>";};
		}
		thisrhyme=thisrhyme+1;
		if(thisrhyme==5){rhymesetup();};
	}
	return line;
}