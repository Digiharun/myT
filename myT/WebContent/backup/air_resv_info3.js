
$(document).ready(function(){

	//	탑승객 정보 남성/여성 선택
	$(document).on('click', '.btn_gender', function(){ 
		//	자신의 id값 가져오기
		var tagId = $(this).attr('id');	//	m_, w_
		var id_no = tagId.substr(2, 2);

		console.log("tagId clicked : " + tagId);
//		console.log("id_no : " + id_no);
		
		//	눌린 버튼
		$(this).css({
			"border" : "1px solid lightgrey", 
			"background-color" : "white",
			"font-weight" : "bold"
		});
		
		var btn_other;
		var gender = 0;

		//	남성이 눌렸을 경우
		if( tagId.substr(0, 1) == "m" ){
			btn_other = "#w_" + id_no;
			gender = 1;
		}
		//	여성이 눌렸을 경우
		else{
			btn_other = "#m_" + id_no;
			gender = 2;
		}
		
		//	눌린 성별을 hidden값에 셋팅
		$('#hidden_gender_' + id_no).val(gender);
		console.log("gender value : " + $('#hidden_gender_' + id_no).val());

		//	안 눌린 버튼
		$( btn_other ).css({
			"border" : "1px solid lightgrey", 
			"background-color" : "#f5f5f5",
			"font-weight" : "normal"
		});
	});

	//	탑승객 영문 성/이름에 영문만 들어가도록 변경
	//	소문자도 가능하므로 소문자는 모두 대문자로 변경해서 저장해줘야 함
	$(document).on('keyup', '.person2', function(){ 
		$(this).val($(this).val().replace(/[^a-zA-Z]/g,''));
	});

	//	탑승객 생년월일에 숫자만 들어가도록 셋팅
	$(document).on('keyup', '.birth', function(){ 
		$(this).val($(this).val().replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
	});

	//	영어 대소문과 숫자만 들어가도록 변경(이메일주소)
	$(document).on('keyup', '.email', function(){ 
		$(this).val($(this).val().replace(/[^a-z0-9]/g,''));
	});
	
	//	항공운임 확인 버튼
	$(document).on('click', '#check_price', function(){ 
		var cnt = $('#hidden_cnt').val();
		//console.log("hidden_cnt : " + cnt);
		
		for(var i=1; i<= cnt ;i++){
			//console.log("val : " + $('#last_nm_' + i).val());
			if( $('#last_nm_' + i).val() == "" ){
				alert("탑승객의 성함을 입력해주세요");
				$('#last_nm_' + i).focus();
				return;
			}

			if( $('#first_nm_' + i).val() == "" ){
				alert("탑승객의 성함을 입력해주세요");
				$('#first_nm_' + i).focus();
				return;
			}

			if( $('#hidden_gender_' + i).val() == "0" ){
				alert("탑승객의 성별을 선택해주세요");
				//	focus가 안됨
				//	$('#m_' + i).focus();
				return;
			}
			
			var birth = $('#birth_' + i).val();
			
			if( birth == "" ){
				alert("탑승객의 생년월일을 입력해주세요");
				$('#birth_' + i).focus();
				return;
			}
			
			if(  ( Number(birth.substr(0, 4)) <= 1900 ) || ( Number(birth.substr(0, 4)) > 2024 ) ){
				alert("생년월일 오류입니다");
				$('#birth_' + i).focus();
				return;
			}

			if(  ( Number(birth.substr(4, 2)) <= 0 ) || ( Number(birth.substr(4, 2)) > 12 ) ){
				alert("생년월일 오류입니다");
				$('#birth_' + i).focus();
				return;
			}

			if(  ( Number(birth.substr(6, 8)) <= 0 ) || ( Number(birth.substr(6, 8)) > 31 ) ){
				alert("생년월일 오류입니다");
				$('#birth_' + i).focus();
				return;
			}

		}
		
		//	이메일 주소 확인
		if( $('#email').val() == "" ){
			alert("이메일을 입력해주세요");
			$('#email').focus();
			return;
		}

		//	이메일 도메인 확인
		if( $('#email2').val() == "" ){
			alert("이메일을 입력해주세요");
			$('#email2').focus();
			return;
		}

		//	연락처 확인
		var phone = $('#phone').val();
		console.log("phone: " + phone)

		if( phone == "" ){
			alert("휴대폰 번호를 입력해주세요");
			$('#phone').focus();
			return;
		}

		//	국번확인
		if( phone.substr(0, 3) != "010" ){
			alert("휴대폰 번호 오류입니다");
			$('#phone').focus();
			return;
		}

	
	});
	
});