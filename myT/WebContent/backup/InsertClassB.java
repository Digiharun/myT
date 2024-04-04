package green.myT.dao;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import green.myT.dto.*;;

public class InsertClassB implements MapperInterface{
	static InsertClassB bb = new InsertClassB();
	
	public static InsertClassB getInsertClassB() {
		return bb;
	}

	//	implements한 interfaceA 함수 override해서 ClassC에서 select한 데이타를 받아옴
	public String mapping(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		
		User data = new User();

		if(request.getParameter("uid") != null) 
			data.setUid(request.getParameter("uid"));
		else
			data.setUid("10003");
		
		data.setUname(request.getParameter("uname"));

		if(request.getParameter("unum") != null) 
			data.setUnum(Integer.parseInt(request.getParameter("unum")));
		else
			data.setUnum(0);
		
		InsertClassC cc = InsertClassC.getInsertClassC();
		int result = cc.functionC(data);
		
		//	받아온 list를 setAttribute 통해서 다음 페이지로 전달함
		//	key/value값으로 저장
		//	request에 셋팅하면 다음에 getAttribute로 받을 수 있음
		request.setAttribute("RESULT", result);
		
		return "link_insert_1.jsp";
	}

}
