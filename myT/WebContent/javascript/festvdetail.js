$(document).ready(function(){
	// 축제내용 더 보기
	$('#seemore').on('click', function(){
/*		var seemoretext = $('#seemore').text();
		$('#seemore').text(seemoretext === '...더보기' ? '접기' : '...더보기');
		
		if($('.card .detail').hasClass('showall')){
			$('.card .detail').removeClass('showall');
		} else {
			$('.card .detail').addClass('showall');
		}

		$('#seemore').on('click', function() {
		    $('.card .detail').toggleClass('showall');
		    $(this).text(function(i, text) {
		        return text === '...더보기' ? '접기' : '...더보기';
		    });
		});
 */

  		var seemoretext = $('#seemore').text();
		$('#seemore').text(seemoretext === '...더보기' ? '접기' : '...더보기');

	    // 버튼 텍스트 변경
	    $(this).text(function(i, text) {
	        return text === '...더보기' ? '접기' : '...더보기';
	    });

	    // 상세 내용 보이기/숨기기
	    $('.card .detail').toggleClass('hidedetail');
	});
	
	// 후기 보이기
	$('.table').on('click', '.title', function(){
		$(this).closest('tr').next().toggle();
	});
	
	// 후기 삭제
//		$('#delbtn').click(function(){
//			if (user_id == writer_id){
//				window.location.href = postdelete.jsp?rv_no=<%=pgs.rv_no%>&user_id=<%=user_id%>;
//			} else {
//				alert("로그인 아이디와 작성자 아이디가 다릅니다.");
//			}			
//		});

// 이거 나중에 살리기.	
	$('#delbtn').click(function(reno, input_id){
		alert("clicked!");	
	});

			
	
	// 티켓팅 팝업 보이기
	$('#ticketbtn').click(function(){
		$('.ticketingbg').show();
		$('.ticketing').show();
	});
	
	// 티켓팅 팝업 닫기
	$('body .ticketingbg').click(function(event){
		if($(event.target).hasClass('ticketingbg')){
			$('body .ticketingbg').hide();
			$('ticketingbg .ticketing').hide();
		}
	});
	
	// 티켓팅 달력
	$(function(){
		$('#datepicker').datepicker({
			dateFormat: 'yy-mm-dd',
			changeMonth: true,
			showButtonPanel: true,
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
		});
	});
	

});