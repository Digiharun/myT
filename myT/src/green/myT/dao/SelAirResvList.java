package green.myT.dao;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import green.myT.dto.AirResvList;
import green.myT.dto.Parameter;

public class SelAirResvList implements MapperInterface{
	static SelAirResvList bb = new SelAirResvList();
	
	public static SelAirResvList getThisClass() {
		return bb;
	}

	//	implements한 interfaceA 함수 override해서 ClassC에서 select한 데이타를 받아옴
	public String mapping(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		
		Parameter param = new Parameter();
		
//		String dept_city = request.getParameter("dept_city");
//		String arrv_city = request.getParameter("arrv_city");
//		String dept_date = request.getParameter("dept_date");
//		String trip = request.getParameter("trip");	//	편도: 1, 왕복: 2

		param.setDept_city("184");
		param.setArrv_city("185");
		param.setDate("2");

		SelAirResvList2 cc = SelAirResvList2.getThisClass();
		List<AirResvList> list = cc.selectData(param);
		
		//	받아온 list를 setAttribute 통해서 다음 페이지로 전달함
		//	key/value값으로 저장
		//	request에 셋팅하면 다음에 getAttribute로 받을 수 있음
		request.setAttribute("RESULT", list);
		
		return "air_resv_ins.jsp";
	}

}
