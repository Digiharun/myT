$(document).ready(function(){
	//	로그인 상태인지 확인 : whistl76님 -> 님 제외
	console.log("('#login_id').text() :" + $('#login_id').text());
	var login_id = $('#login_id').text();
	
//	$('#ring_img').hide();
	$('#car_list').hide();

	if(login_id == ""){
		$('#ring_img').hide();
		$('#car_list').hide();
	}
	
	console.log("login id : " + login_id);
	
	//	red bell click시
	$('#ring_img').click(function(){
		console.log("ring bell click");
		//	팝업 화면이 열려있으면 닫고 닫혀 있으면 열기
		if($('#car_list').is(":visible"))
			$('#car_list').hide();
		else
			$('#car_list').show();
		
	});
	
	//	도시 선택 창의 클로즈 버튼이 눌릴 때
	$('#close_city').click(function(){
		$('#car_list').hide();
	});

});