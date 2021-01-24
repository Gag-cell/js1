var  month = "<select>year:<option value=''>month</option>";
 for(i = 31;i >= 1; i--) {
   month +="<option value'" + i + "'>" + i + "</option>";
}
month +="</select>";
document.write(month);

var  year = "<select>year:<option value=''>year</option>";
 for(i = 2020;i >= 1905; i--) {
   year +="<option value'" + i + "'>" + i + "</option>";
}
year +="</select>";
document.write(year);

var p = 1;
for(i = 1; i <= 5;i ++) {
  p *= i;
  if(i==2) {
    break;     
  }
}
alert(p);




/*"paymani operatr"*/
​
/*if(payman) {
	g1;
}
else {
	g2;
}
​
tramabanakan operatorner
​
>,>=,<,<=,==,!,!=
===,!==*/
/*var a = 8,b = "8";
​
if(a === b) {
	console.log(true);
}
else {
	console.log(false);
}*/
​
/*&& -tramabanakan ev
​
||-tramabanakan kam
​
trvac e popokahakan ete mech@ grvac e image beri nkar , hakarak depqum voreve text*/
​
/*var text = prompt("text=");
if(text === "image") {
	document.write("<img src='images/yerevan.jpg'>");
}
else {
	document.write("<p>Barev</p>");
}*/
​
/*if-else if -else */
​
/*if(payman) {
	g1;
}
else if(payman) {
	g2;
}
else if(payman) {
	g3;
}
.
.
.
else {
	gN;
}
*/
​
/*if eri veramiavorum*/
​
/*if(x >= 8 && x <= 22)
​
if(a % 2 == 0 && b % 2 == 0)
​
if(a < 8 || a > 22)
if(a % 2 == 0 || b % 2 == 0)*/	
​
	/*ternar operator*/
​
/*popokhakan = (payman) ? g1 : g2;*/
​
//trvac e popokhakan ete mech grenq radio beri radio hakarak depqum checkbox:
​
/*var text,inp;
text = prompt("text=");
inp = (text === "radio") ? 'radio' : 'checkbox';
document.write("<input type='" + inp + "'>");*/
​
/*var text,inp;
text = prompt("text=");
inp = (text === "radio") ? "<input type='radio'>" : "<input type='checkbox'>";
document.write(inp);*/
​
/*var text;
text = prompt("text=");
document.write("<input type='" + (text === 'radio' ? 'radio' : 'checkbox') + "'>");
*/
​
//ete grvac e file beri file input ,ete password beri passwor hakarak depqum text
/*var text = prompt("text="),inp;
inp = (text === 'file') ? 'file' : (text === 'password') ? 'password' : 'text';
document.write("<input type='" + inp + "'>");*/
​
​
/*cikler:
cikler@ bajanvum en 4 khmbi*/
/*1. nakhapaymanov cikl
2. hetpaymanov cikl
3. parametrov cikl
4. foreach*/
​
/*nakhapaymanov cikl*/
​
/*while(payman) {
	gorcoghutyunner;
	qayl;
}*/
​
// var i = 1, s = 0;
// while(i <= 11) {
// 	s += i;
// 	i++;
// }
// console.log(s);
// console.log(i);
​
//sarqel select vori mej dectemberi orern en:
​
/*var sel = "<select><option value=''>Day:</option>",i =  1;
while(i <= 31) {
	sel += "<option value='" + i + "'>" + i + "</option>";
	i++;
}
sel += "</select>";
document.write(sel);*/
​
/*hetpaymanov cikl*/
​
/*do {
	gorcoghutyunner;
	qayl;
} while(payman);*/
​
/*var i = 11,s = 0;
do {
	s += i;
	i++;
}while(i >= 12 && i <= 33)
console.log(s);*/
​
//sarqel ul mech 5 hat li
/*var ul = "<ul>",i = 1;
do {
	ul += "<li>text" + i + "</li>";
	i++;
} while(i <= 5);
ul += "</ul>";
document.write(ul);*/
​
/*for cikl*/
​
/*for(I dasht;II dasht;III dasht) {
​
}
for(var i = 1;i < 14;i++){
​
}
for(;;)*/
/*var i = 1;
for(;i <= 17;) {
	i++; =>while
}
*/
​
//sarqel table 4x8 vra
​
/*var table = "<table border='1'>";
for(var i = 1;i <= 4;i++) {
	table += "<tr>";
	for(var j = 1;j <= 8;j++) {
		table += "<td>text" + j + "</td>";
	}
	table += "</tr>";
}
table += "</table>";
document.write(table);*/
​
/*bacasakan cikl*/
/*for(parametr = verj;parametr >= skizb;-qayl) {
​
}
​
var sel = "<select><option value=''>Year:</option>";
for(var i = 2020;i >= 1905;i--) {
	sel += "<option value='" + i + "'>" + i + "</option>";
}
sel += "</select>";
document.write(sel);*/
​
/*break ev continue*/
​
/*var p = 1;
for(var i = 1;i <= 11;i++) {
	if(i == 7) {
		break;
	}
	p *= i;
}
alert(p);*/
​
var p = 1;
for(var i = 1;i <= 11;i++) {
	if(i == 7) {
		continue;
	}		
	p *= i;
}
alert(p);

