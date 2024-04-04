<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>

<html>

<head>
  <meta charset="utf-8">
  <title>항공권예매</title>

</head>

<!-- 구s글폰트 다운 받아서 적용함 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Nanum+Gothic&display=swap" rel="stylesheet">
-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="javascript/air_resv5.js"></script>
<link href="css/default.css" rel="stylesheet" type="text/css">
<link href="css/air_resv.css" rel="stylesheet" type="text/css">

<body>
 <!--  상단배너 -->
 <jsp:include page="banner.jsp" />
 <div class="bg_air" style='margin-top: 100px;'>

	<p style='text-align: center; font-weight: bold' >항공권이 예약되었습니다.</p>
 </div>

    <div id="caution" style='margin-top: 100px;'> <!-- 알아두세요 전용 div-->
      <div>
        <div class="caution1">
          알아두세요!
        </div>
        <div class="caution2">
          <ul>
            <li>각 운임에 따라 기본 위탁 수하물 허용량이 제공되며, 수하물 추가 구매 시에는 별도 요금이 부과됩니다.</li>
            <li>"항공운임 등 총액"은 유류할증료와 세금을 포함한 총 운임으로 구매 시점과 환율에 따라 변동될 수 있습니다.</li>
            <li>출발/도착 시간은 현지 시간 기준이며, 항공기 스케줄은 정부인가 조건으로 예고 없이 변경될 수 있습니다.</li>
            <li>공동운항편의 탑승 및 기내서비스는 운항사의 규정을 따릅니다.</li>
            <li>할인 운임을 구매하고 싶으신 경우 예약 취소 후 재구매하여 주시기 바랍니다.</li>
          </ul>
        </div>
      </div>
    </div>
<footer>
  <jsp:include page="footer.jsp" />
</footer>
</body>

</html>