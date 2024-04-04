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
	
	var div_car = document.getElementById("car_list");
	
	$.ajax({ // key value 형식
		url : "car_pickup_search.jsp?city=" + city ,
		success : function(re){
			div_car.innerHTML = re;
			
		}
	});
}





//	삭제버튼
//function deleterow(reno, input_id){
//
//	var user_id = input_id.trim();
//
//	var cont = document.getElementsByName('review_cont');
//	var id = document.getElementById('hidden_id');
//	var hidden_id = id.value; 
//
//	//본인이 작성한 글인지 확인
//	if(hidden_id != user_id){
//		alert("본인이 작성한 글만 삭제가 가능합니다");
//		return;
//	}
//	
//	$.ajax({ // key value 형식
//		url : "car_review_del.jsp?reno=" + reno,
//		success : function(re){
//			var tmp = re.substr(0, 1);
//			if(tmp == "1"){	//	중복아이디 없음
//				// 가장 윗로우만 가능하므로 alert으로 변경
//				alert("삭제되었습니다.");
//				
//				//	삭제한 내용을 접고
//				$('.review').hide();
//				
//				//	삭제한 내용을 리스트에서 안보이게 함
//				var tbl_id = "tbl_" + reno;
//				document.getElementById(tbl_id).style.display ='none'
//				
//
//			}else{			//	중복아이디 있음
//				alert("삭제오류.");
//			}
//		}
//	});
//}
//

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
//	$(document).on('click', '.btn_pickup', function(){ 
	$('.btn_pickup').click(function(){
		alert("pick_up btn clicked");
		
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
//		var page = "link_insert_1.myt?gbn=3&uid=10002&uname=hongkildong&unum=40";
		//console.log(page);
		//	해당 jsp 화일 바로 호출
		//location.href = page;
		
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
	
//	//	차량정보 클릭시 : 
//	$(document).on('click', '.car_info', function(){ 
//     	if($(this).css('background-color') == "#f5f5f5" ){
//     		$(this).css({
//    			"background-color" : "white" 
//     		});
//     	}
//     	else{	//	닫혀 있으면 다른 열린 내용을 모두 닫고 해당 내용을연다
//     		$(this).css({
//    			"background-color" : "#f5f5f5" 
//     		}); 
//     	}
//
//	});


//	$('#pick_time').change(function(){
//		//	 선택한 옵션의 text값만 가져온다.
//		var text = $("#pick_time option:checked").text();
//		
//		//	검색된 차량 리스트에 픽업시간 셋팅
//		$('.pick_time2').text(text);
//	});
	
//	// 리뷰 테이블의 Row 클릭시 값 가져오기 : 동적으로 만들어진 element에 js 적용하기 위해 
//	$(document).on('click', '.review_list tr', function(){ 
//     	//	tr의 자식 td 중 1번째를 찾아옴
//     	var info = $(this).children('td:eq(0)').text();
//    	
//    	//	후기 창이 열려있으면 닫곤
//     	if($('#review_' + info).is(":visible"))
//     		$('#review_' + info).hide();
//    	//	닫혀 있으면 연다
//     	else 
//     		$('#review_' + info).show();
//
//    });  



	
	

//	//	사용시간 - 버튼 누룰 때
//	$(document).on('click', '.btn_minus_h', function(){ 
//		//	자신의 id값 가져오기
//		var tagId = $(this).attr('id');
//		
//		//	5, 8, 12를 가져옴
//		var capacity = tagId.substr(12, 2);
//		//console.log("tagId:" + tagId + " capacity:" + capacity);
//		
//		//	Number로 숫자타입으로 바꾸지 않으면 숫자가 수정되는게 아니라 뒤에 추가가 됨
//		var i = Number($('#hour_num_' + capacity).val());
//		console.log("i:" + i);
//
//		if(i > 2){
//			$('#hour_num_' + capacity).val(Number(i-1));
//		}
//	});
//
//	// 사용시간 + 버튼 누룰때
//	$(document).on('click', '.btn_plus_h', function(){ 
//		//	자신의 id값 가져오기
//		var tagId = $(this).attr('id');
//		
//		//	5, 8, 12를 가져옴
//		var capacity = tagId.substr(11, 2);
//		console.log("tagId:" + tagId + " capacity:" + capacity);
//		
//		//	Number로 숫자타입으로 바꾸지 않으면 숫자가 수정되는게 아니라 뒤에 추가가 됨
//		var hour_num = Number($('#hour_num_' + capacity).val());
//		
//		var start_time = Number(document.getElementById('pick_time').value);
//		var total = start_time + hour_num;
//
//		console.log("start_time:" + start_time);
//		console.log("hour_num:" + $('#hour_num_' + capacity).val());
//		console.log("total:" + total);
//		
//		//	오후 8시 (20시)까지만 예약가능
//		if(total >= 20){
//			alert("오후 8시까지만 예약 가능합니다");
//			return;
//		}
//
//		if(hour_num < 12){
//			$('#hour_num_' + capacity).val(Number(hour_num+1));
//		}
//		else{
//			alert("최대 12시간까지만 예약 가능합니다");
//		}
//	});
	
	
});