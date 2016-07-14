var checking = function(answer,right_answer,number){
		if (answer == right_answer){
			count ++;
		}
		else if(answer == "") alert("Вы не ответили на загадку № " + number);
		else alert("Вы неверно ответили на загадку № " + number);
	};
var count = 0;
function pressing_button(){
	checking(document.forms.main.answer1.value,"часы",1);
	checking(document.forms.main.answer2.value,"лужа",2);
	checking(document.forms.main.answer3.value,"язык",3);
	checking(document.forms.main.answer4.value,"газета",4);
	alert("Игра окончена... Количетво набранных баллов: " + count);
	count = 0;
}
	
