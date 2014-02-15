$(function(){
    var timer = -1;

    $(':input').focus(function(){
 
		//フォーカスしたinputのidを取得
		var focusTarget = $('#email');
 
		//Androidが2重でfocusした場合、最初のfocusをclear
		if (timer != -1) {
			clearInterval(timer);
		}
 
		timer = setInterval(function(){
			//キー入力された文字数など取得
			var textlength = focusTarget.val().length;
			var text = focusTarget.val();

			if(textlength >= 1 && text.indexOf('@') > -1 && text.indexOf('@@') == -1){					 
				$('#mail_submit').removeAttr('disabled');	
				$('p#mes').text('');	
			}else if(textlength == 0 || text.indexOf('@') == -1 || text.indexOf('@@') > -1){
				$('#mail_submit').attr('disabled' , 'disabled');		
			}
        },1000);
    });


    $(':input').blur(function(){
		//フォーカスしたinputのidを取得
		var focusTarget = $('#email');
		
		//キー入力された文字数など取得
		var textlength = focusTarget.val().length;
		var text = focusTarget.val();

		//@が含まれていない場合
		if(text.indexOf('@') == -1){
			$('p#mes').text('There is no @ in the e-mail address');
		}

		//@が2つ以上ある場合
		if(text.indexOf('@@') > -1){
			$('p#mes').text('There are two or more @');	
		}
		
		//1byteも入力されていない場合
		if(textlength <= 1){
			$('p#mes').text('Please enter your e-mail');
		}
		
        clearInterval(timer);
        timer = -1;
 
    });
 
});
