var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jack";
names[3]="joey";
names[4]="pheobe";
names[5]="monica";
names[6]="ross";
names[7]="chandler";
names[8]="rihacal";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}