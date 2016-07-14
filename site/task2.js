var max = 0;
var min = 0;
var random_number = 0;
var str = '\
				<span>Компьютер загадал число в указаном диапазоне. Попробуйте угадать это число, соперничая с другом. Удачи вам!!!</span>\
				<input type="number" name="answer" min="0" max="1000" step="1" required><br/>\
				<input type="button" value="Узнать результат" onclick="pressing()">\
';
var first_user_count = 0;
var second_user_count = 0;
var user = 2;
function play(){
	max = document.forms.main.max.value;
	min = document.forms.main.min.value;
	console.log(max);
	console.log(min);
	random_number = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
	console.log(random_number);
	var div = document.createElement('div');
	div.innerHTML =  str;
	document.forms.main.appendChild(div);
}
function pressing(){
	var user_number = 0;
	while(random_number != user_number){
		user = user == 1?2:1;
		if(user == 1) first_user_count++;
			else  second_user_count++;
		user_number = parseInt(document.forms.main.answer.value);
		if(user_number > random_number) {alert("Перелёт!;("); break;}
		if(user_number < random_number) {alert("Недолёт!;("); break;}
	}
	if(user_number == random_number) {
		alert("Поздравляем! " + user + " пользователь, вы угадали! Количество попыток: " + (user == 1?first_user_count:second_user_count));
	}
}
