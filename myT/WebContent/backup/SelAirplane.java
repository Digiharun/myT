package green.myT.dao;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import green.myT.dto.*;

public class SelAirplane implements MapperInterface{
	static SelAirplane bb = new SelAirplane();
	
	public static SelAirplane getThisClass() {
		return bb;
	}

	//	implements한 interfaceA 함수 override해서 ClassC에서 select한 데이타를 받아옴
	public String mapping(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		
		Parameter param = new Parameter();
		
		String dept_city = request.getParameter("dept_city");
		String arrv_city = request.getParameter("arrv_city");
		String dept_date = request.getParameter("dept_date");
		String arrv_date = request.getParameter("arrv_date");

		param.setDept_city(dept_city);
		param.setArrv_city(arrv_city);
		param.setDate(dept_date);

//		System.out.println("dept_city : " + param.getDept_city());
//		System.out.println("arrv_city : " + param.getArrv_city());
//		System.out.println("date : " + param.getDate());

		SelAirplane2 cc = SelAirplane2.getThisClass();
		List<Airplane> list = cc.selectData(param);
		
		//	받아온 list를 setAttribute 통해서 다음 페이지로 전달함
		//	key/value값으로 저장
		//	request에 셋팅하면 다음에 getAttribute로 받을 수 있음
		request.setAttribute("RESULT", list);
		
		//	검색된 스케쥴 외에도 검색조건이었던 출발지, 도착지를 저장해서 화면이 열릴 때 기존의 것으로 셋팅할 수 있게 해줌
		request.setAttribute("DEPT_CITY", dept_city);
		request.setAttribute("ARRV_CITY", arrv_city);
		
		//	출발지, 도착지 한글 유니코드 문제로 
//		String page = "air_resv_dept.jsp?dept_date=" + dept_date + "&arrv_date=" + arrv_date;
		String page = "air_resv_dept.jsp";
		
		return page;
	}
}
