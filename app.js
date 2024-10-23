

///////////////////////////////////////////////////STRING METHODS //////////////////////////////////////////////////                                        







////////////////////////////LENGTH/////////////////////


//1-Misol

// let lett=("Salom Dunyo")

// console.log(lett.length);


//2-Misol//
// let lett = prompt("Matn Kirgizing");


// console.log(lett.length);


////////////////////////////IndexOF/////////////////////



//1-Misol//

// let lett = ("Salom Dunyo Alik Yer");

// console.log(lett.indexOf("Dunyo"));


//2-Misol//

// let lett = prompt("Matn Kirgzing");

// let lett2 = prompt("Qaysi Sozligini Kirgizing");

// console.log(lett.indexOf(lett2));



////////////////////////////ToUpperCase  and ToLowerCase/////////////////////



// let lett =("SaLoM UzBeKiStOn")

// console.log((lett.toLocaleLowerCase())+"  "+(lett.toUpperCase()));



///////////////////////////CharAt////////////////////

//1-Misol//

// let lett = ("Salom Uzbekistan ");


//  console.log(lett.charAt(7));


//2-Misol//

// let lett = prompt("Soz Kirting ");

// let lett2=prompt("Qaysi Sozligini Kirgizing");

// console.log(lett.charAt(lett2));


////////////////INCLUDES////////////////

//1-Misol//

// let lett = ("Assalomu Aleykum");

// console.log(lett.includes("Aleykum")    );



//2-Misol//


// let lett = prompt("Sozlar Kirgizing");

// let lett2 = prompt("Qaysi Sozligini Kirgizing");


// console.log(lett.includes(lett2));



////////////////Slice////////////////

//1-Misol//

// let lett =("Assalomu Aleykum Abdulaziz Akbarov");

// console.log(lett.slice(27,35));



//2-Misol//

// let lett=prompt("Matn Kirgizing");


// let lett2=prompt("Enter:  Start index");

// let lett3=prompt("Enter:  Finish Index");



// console.log(lett.slice(lett2,lett3));



////////////////Replace////////////////

//1-Misol//


// let lett =("Assalomu Aleykum");

// console.log(lett.replace("Assalomu ","Salom"));


//2-Misol//

// let lett =prompt("3-4-Ta Soz Kirgizing");

// let lett2=prompt("Qysi Soz ozgarinishini va");

// let lett3=prompt("Qaysi Sozga Ozgarishini Kirgizing");


// console.log(lett.replace(lett2,lett3));

////////////////Slipt////////////////


// let lett =("Najot,talim,oquv,markazi")

// console.log(lett.split(","));


////////////////Concat////////////////


// let lett =("salom");
// let lett2 =("Akbarov");

// console.log(lett.concat(lett2));


///////////////END WIDTH/////////////////

//1-Misol///

// let lett = ("Abdulaziz");

// console.log(lett.endsWith("ziz"));


 
//2-Misol//


// let lett =prompt("Soz Kiriting");

// let lett2=prompt("Ohiri Nima bilan tugaganini kirgizing");

// console.log(lett.endsWith(lett2));



///////////////LastINDEXof/////////////////


//1-Misol//

// let lett = ("Abdulaziz Najot talimda Oqiydi");


// console.log(lett.lastIndexOf("Najot"));



//2-Misol//

// let lett =prompt("Soz Kirgizing");

// let lett2=prompt("Qaysi sozni Index kerak");

// console.log(lett.lastIndexOf(lett2));



///////////////Pad Start && Pad End/////////////////

//1-Misol//


// let lett =("7777");

// console.log(lett.padEnd(10,"*"));


//2-Misol//


// let lett =("7777");

// console.log(lett.padStart(10,"*"));




///////////////REPLACE ALl////////////////

// let lett = (" Najot Abdulaziz Akbarov Najot Talim Oquvchisi Najot");


// console.log(lett.replaceAll("Najot","NAJOT"));



/////////////REAPEAT/////////////


//1-Misol//

// let lett =("Salom");

// console.log(lett.repeat(5));



//2-Misol//

// let lett =prompt("Soz Kirgizing");


// let lett2=prompt("Necha marta takrorlanishini Kirgizing");

// console.log(lett.repeat(lett2));




/////////////Sart WIdth/////////////


//1-Misol//


// let lett =("Start lesson in Najot talim");

// console.log(lett.startsWith("Start"));



//2-Misol//

// let lett =prompt("Matn Kirgizing");


// let lett2=prompt("Qaysi bilan boshlaganini Kirgizing");




// console.log(lett.startsWith(lett2));


/////////////Split/////////////


// let lett =("Start lesson in");


// console.log(lett.split("Start lesson in "));




///////////////////////////////////////////////////ARRAY METHODS //////////////////////////////////////////////////                                        


/////////////PUSH/////////////



// let lett =["Abdulaziz"];

// lett.push("Akbarov");

// console.log(lett);




/////////////POP/////////////


// let lett =["Abdulaziz", "Akbarov", "Alisher"," O'g'li"];


// lett.pop("O'g'li");

// console.log(lett);



/////////////UNSHIFT/////////////




// let lett =["Abdulaziz"];

// lett.unshift("Akbarov");

// console.log(lett);




/////////////SHIFT/////////////


// let lett =["Abdulaziz", "Akbarov", "Alisher"," O'g'li"];


// lett.shift("Abdulaziz");

// console.log(lett);



/////////////CONCAT/////////////

//1-Misol//

// let lett =["Abdulaziz"];

// let lett2 =["Akbarov"];


// console.log(lett.concat(lett2));


//2-Misol///


// let  lett = prompt("Soz Kirgizing");

// let  lett2 = prompt("Qaysi Soz Qoshilishini kirgizing");

// console.log(lett.concat(lett2));


/////////////SILCE/////////////



// let lett =["Abdulaziz","Akbarov","Alisher"];

// let lett2=lett.slice(1,3);


// console.log(lett2);




//2-Misol///


// let lett =prompt("Soz Kirgizing");

// let lett2=prompt("Qayerdan Boshlab ochirish");
// let lett3=prompt("Qayrgacha  ochirish");


// let lett4 =lett.slice(lett2,lett3);

// console.log(lett4);



/////////////SPLICE/////////////


// let lett =["Abdulaz","Akbarov","Alisher"];


// let lett2=lett.splice(1,1, "AKBAROV")

// console.log(lett2);



/////////////INDEX OF/////////////

//1-Misol///


// let lett =["Abdulaziz","Akbarov","Alisher","Ogli"];



// let index =lett.indexOf("Akbarov");

// console.log(index);




//2-Misol///


// let lett =prompt("Array Kirgizing");


// let lett2 = prompt("Qaysi Indexdagi element kerakligini Kirgizing");


// let lett3=lett.indexOf(lett2);


// console.log(lett3);



/////////////INCLUDES/////////////


//1-Misol///


// let lett =["Abdulaziz","Akbarov","Alisher"];

// let lett2=lett.includes("Abdulaziz");

// console.log(lett2);


//2-Misoll//


// let lett = prompt("Sozlar kirgizing");


// let lett2 = prompt("Qaysi Sozni Tekshirmoqchisiz");


// let lett3=lett.includes(lett2);

// console.log(lett3);



/////////////REVERSE/////////////

// let lett =["Alik","Valik"," Halik", "Gelik"];

// lett.reverse();

// console.log(lett);



/////////////JOIN/////////////


// let lett = ["Alik","Valik","Halik","Gelik"];

// console.log(lett.join(" "));


/////////////MAP/////////////

// let lett = [1, 2, 3,5,8,9,2,5,8,2,6,6,3,5,8,5,6,6,89,5,2,6,2,];
// let a = numbers.map(raqam => raqam +1);
// console.log(a); 




/////////////Filter/////////////


// let lett = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,];


// let lett2 = lett.filter(num => num % 2 === 1);

// console.log(lett2);


/////////////FOREACH/////////////



// let lett = ["Abdulaziz","Akbarov","Najot talim"];

// lett.forEach(lett2 =>console.log(lett2)) ;



/////////////FOREACH/////////////


// let lett = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let lett2 = numbers.find(raqam => raqam % 2 === 0);

// console.log(lett2);


/////////////SORT/////////////


// let lett = ["alik","valik","halik","galik","kalik","balik"];

// lett.sort();

// console.log(lett); 



/////////////EVERY/////////////


// let lett = [2, 4, 6,8,10,12,14,16,18,10,22];

// let lett2 = lett.every(a => a % 2 === 0);

// console.log(lett2);



/////////////EVERY/////////////



// let lett = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let lett2 = lett.some(a => a % 2 === 0);

// console.log(lett2);



/////////////findINDEX/////////////


// let lett = ["Abdulaziz","Akbarov","Najot ","Talim"];
// let lett2 = lett.findIndex(soz => soz=== "Akbarov");
// console.log(lett2); 
