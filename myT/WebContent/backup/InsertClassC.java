package green.myT.dao;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import green.myT.dto.User;
import green.myT.mybatis.SqlMapConfig;

public class InsertClassC {
	static InsertClassC cc = new InsertClassC();
	public static InsertClassC getInsertClassC(){
		return cc;
	}
	
	SqlSessionFactory factory = SqlMapConfig.getSqlSession();

	//	실질적으로 데이타처리
	int functionC(User data) {
		//	DB connection하는 역할
		SqlSession session = factory.openSession();
		
		int result = session.insert("insert2", data);
		session.commit();
		session.close();
		
		return result;
	}

}
