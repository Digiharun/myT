//	탑승인원 + 버튼
function limit_person(cnt){
	var per_num = document.getElementById('per_num_' + cnt);
	
	//	Number로 숫자타입으로 바꾸지 않으면 숫자가 수정되는게 아니라 뒤에 추가가 됨
	var i = Number(per_num.value);

	//	5인승이면 기사 1명 제외하고 탑승할 수 있으므로 -1을 해줘야 함
	var limit_cnt = cnt -1;

	if(i < limit_cnt){
		per_num.value = i + 1;
	}
	else{
		alert( "기사 제외 최대 " + limit_cnt + "명까지만 탑승 가능합니다");
	}
}

function search_review(){
	var tag = document.getElementsByTagName('input');

	var city = tag[1].value;
//	var city = "seoul";
	console.log("city : " + city);
	
	//	ajax로 할 경우 js가 정상작동 안하는 경우가 많아서 재로드 하는 식으로 변경	
	location.href = "car_pickup.jsp?city=" + city;
	
}


$(document).ready(function(){
	//	로그인 상태일 때만 글쓰기, 저장 버튼 활성화되게 함
	console.log("('#hidden_id').val() :" + $('#hidden_id').val());
//	if($('#hidden_id').val() == ""){
//		$('#btn_insert').hide();
//		$('#btn_insert2').hide();
//		
//	}
//	else{
//		$('#btn_insert').show();
//		$('#btn_insert2').show();
//	}
		

	//	도시 선택창 닫고 관련 셋팅하기
	function close_city_box(){
		//	도시 선택창 닫힘
		$('.sel_city').hide();

		//	출발지를 선택된 도시로 수정
		$('#city_dept').css({
			"background-color" : "#f5f5f5"
		});
	}

	//	출발지 버튼이 눌릴 때
	$('#city_dept').click(function(){

		//	출발지/도착지 버튼 하늘색상으로 변경
		$(this).css({
			"background-color" : "#e7f4ff" 
		});

		$('#city_arrv').css({	//	기본색으로 셋팅
			"background-color" : "#f5f5f5" 
		});
		
		//	출발 도시 선택창 뜸
		$('.city_title').text("출발도시/공항");
		$('.sel_city').css({
			"margin-left" : "0px" 
		});
		$('.sel_city').show();

		console.log("출발지 선택 : " + $('.sel_city').attr("value"));
	});
	
	//	도시 선택 창의 클로즈 버튼이 눌릴 때
	$('#close_city').click(function(){
		close_city_box();
	});
	
	
	$('dd').click(function(){	

		//	console.log("부모의 value : " + $(this).parent().attr('value'));
		//	$(this).parent().attr('value') -> 부모의 value값으로 해당 도시가 어느 지역인지 확인함
		//	1: 국내, 2: 동남아, 3: 일본, 4: 유럽, 5: 미주, 6: 중국
		//	1-3 (국내의 인덱스 1은 부산임)
		//console.log("부모의 value : " + $(this).parent().attr('value') + "도시 인덱스 : " + $(this).index());

		//	출발지를 선택된 도시로 수정
		$('#city_dept2').text($(this).text());
		
		//	숨겨진 input text hidden_city 선택된 도시 셋팅하기
		$('#hidden_city').val($(this).text());

		//	도시 선택창 닫고 관련 셋팅하기
		close_city_box();
	});
	
	//	날짜 클릭시 달력나옴
	$(function() {
		$(".datepicker").datepicker({
			dateFormat:'yy-mm-dd',
			monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dayNamesMin:['일','월','화','수','목','금','토'],
			changeMonth:true, // 월변경가능
			changeYear:true,  // 년변경가능
			showMonthAfterYear:true // 년 뒤에 월표시
	     });
		//초기값을 오늘 날짜로 설정해줘야 합니다.
	    $('.datepicker').datepicker('setDate', 'today');
	    
     });

	//	날짜 클릭시 기존의 열린 도시와 인원수 화면 닫기
	$('#dept_d').click(function(){
		//	열린 화면 닫기
		//	혹시 도시 선택창이 열려있으면 먼저 닫고
		close_city_box();
	});
	
	// 탑승인원 - 버튼 누룰 때
	$(document).on('click', '.btn_minus_p', function(){ 
		//	자신의 id값 가져오기
		var tagId = $(this).attr('id');
		
		//	5, 8, 12를 가져옴
		var capacity = tagId.substr(12, 2);
		console.log("-버튼:" + tagId + " capacity:" + capacity);
		
		//	Number로 숫자타입으로 바꾸지 않으면 숫자가 수정되는게 아니라 뒤에 추가가 됨
		var i = Number($('#per_num_' + capacity ).val());

		if(i > 1){
			$('#per_num_' + capacity ).val(Number(i-1));
		}
	});
	
	//	픽업신청 버튼 클릭시
	$(document).on('click', '.btn_pickup', function(){ 
		
		var tagId = $(this).attr('id');
		console.log("눌린 버튼은 " + tagId);
		
		//	btn_pickup_5
		var capacity = Number(tagId.substr(11, 2));
		//console.log("눌리 capacity " + capacity);
		
		var tag = document.getElementsByTagName('input');

		//	1:서울, 2:whistl76, 3: 날짜, 
		//	5: 금액, 6:인원수 7: 주소, 8: 차량번호 (9 픽업버튼) 
		//	10: 금액, 11:인원수 12: 주소, 13: 차량번호 (14 픽업버튼) 
		//	15: 금액, 16:인원수 17: 주소, 18: 차량번호 (19 픽업버튼) 
//		console.log("1: " + tag[1].value);
//		console.log("2: " + tag[2].value);
//		console.log("3: " + tag[3].value);
//
//		console.log("5: " + tag[5].value);
//		console.log("6: " + tag[6].value);
//		console.log("7: " + tag[7].value);
//		console.log("8: " + tag[8].value);
//
//		console.log("10: " + tag[10].value);
//		console.log("11: " + tag[11].value);
//		console.log("12: " + tag[12].value);
//		console.log("13: " + tag[13].value);
//
//		console.log("15: " + tag[15].value);
//		console.log("16: " + tag[16].value);
//		console.log("17: " + tag[17].value);
//		console.log("18: " + tag[18].value);

		//	선택된 시간값
		var pick_time = $("#pick_time option:selected").val();
		//console.log("pick_time: " + pick_time);
		
		var city = tag[1].value;
		var id = tag[2].value;
		
		//	로그인 아이디 확인(로그인했는지 확인)해서 로그인 전이면 로그인 화면으로 이동
		//	로그인이 아니라 항공기 예약 기록이 있어야지만 신청 가능함
//		if(id == ""){
//			alert("로그인 후 신청하세요");
//			location.href = "login.jsp";
//		}
		
		var tmp = tag[3].value;	//	2023-01-01
		var pick_date = tmp.replaceAll('-', '');
		//console.log("pick_date :" + pick_date);
		
		if(capacity == 5)
			var num = 0;
		else if(capacity == 8)
			var num = 2;
		else if(capacity == 12)
			var num = 3;
		
		//	금액 input index : 5인승-> 5, 8인승-> 9, 12인승 ->13
		//var price = tag[capacity + num].value;

		//	인원수 input index : 5인승-> 6, 8인승-> 10, 12인승 ->14
		var guest_num = tag[capacity + num + 1].value;

		//	주소 input index : 5인승-> 7, 8인승-> 11, 12인승 ->15
		var addr = tag[capacity + num + 2].value;

		//	주소 입력값 체크
		if(addr.length == 0){
			alert("도착 주소를 입력하세요");
			$('#addr_' + capacity).focus();
			return;
		}

		var car_no = tag[capacity + num + 3].value;
		
		//	결제와 예약된 항공권 부분은 아직 안함
		var pay_no = "";
		var air_no = 2000;

		//	픽업 신청 jsp 호출 : car_pickup_ins.jsp
		var page = "car_pickup_ins.myt?menu=car&gbn=2&id=" + id + "&air_no=" + air_no + "&car_no=" + car_no + "&guest_num=" + guest_num + "&pick_date=" + pick_date + "&pick_time=" + pick_time + "&addr=" + addr + "&pay_no=" + pay_no;
		//console.log(page);
		
		$.ajax({ // key value 형식
			url : page , 
			success : function(re){
				var tmp = re.substr(0, 1);
				if(tmp == "1"){	//	중복아이디 없음
					// 가장 윗로우만 가능하므로 alert으로 변경
					alert("공항픽업이 신청되었습니다.");
				}else{			//	중복아이디 있음
					alert("공항픽업 신청오류 " + tmp);
				}
			}
		});
	});
	
	
});