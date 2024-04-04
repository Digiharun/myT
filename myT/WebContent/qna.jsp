<%@ page language="java" contentType="text/html;charset=utf-8" pageEncoding="utf-8" %>
<%
  String user_id = "";
  String btn_log = "로그인";
  String user_name = "";

  String login = (String)session.getAttribute("LOGIN");

  //  session이 null이면 로그아웃 또는 로그인 전인 상태임
  if( login != null ){
    //  로그인 상태인지 확인, x:로그인 실패, 1:로그인 성공
    if(login.equals("1")){
      //  배너에 아이디 셋팅 및 로그인 버튼을 로그아웃 버튼으로 변경
      user_id = (String)session.getAttribute("ID");
      user_name = (String)session.getAttribute("NAME");
    }
  }
%>
<html>

<head>
  <meta charset="utf-8">
  <title>myT</title>
</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<link href="css/qna.css" rel="stylesheet" type="text/css">
<script src="javascript/qna.js"></script>

<body>
 <!--  상단배너 -->
 <jsp:include page="banner.jsp" />
 <input type='hidden' class='hidden' name='hidden_id' id='hidden_id' value='<%= user_id %>' >
  <form>
    <p class="title">Q&A</p>
    <!--  큐앤에이 목록 -->
    <jsp:include page="qna2.jsp" />
    <!-- 글쓰기 페이지 -->
    <div class="qna-write-container">
        <jsp:include page="qna_write.jsp" />
    </div>
  </form>

<footer>
  <jsp:include page="footer.jsp" />
</footer>
</body>

</html>