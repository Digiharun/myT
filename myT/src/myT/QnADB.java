package myT;

import java.sql.*;
import java.util.*;

public class QnADB {
    //	qna
    // +-----------+--------------+------+-----+---------+----------------+
    // | Field     | Type         | Null | Key | Default | Extra          |
    // +-----------+--------------+------+-----+---------+----------------+
    // | qna_id    | int(11)      | NO   | PRI | NULL    | auto_increment |
    // | user_id   | varchar(15)  | NO   |     | NULL    |                |
    // | qna_title | varchar(50)  | NO   |     | NULL    |                |
    // | qna_text  | text         | NO   |     | NULL    |                |
    // | qna_pic   | varchar(255) | YES  |     | NULL    |                |
    // | qna_date  | datetime     | NO   |     | NULL    |                |
    // +-----------+--------------+------+-----+---------+----------------+

	public Connection conn = null;
	public Statement stmt = null;

    /*
        모든 QnA를 데이터베이스에서 선택하여 ArrayList에 저장하여 반환합니다.
        @return QnA 객체를 담고 있는 ArrayList
     */
    // 모든 QnA를 데이터베이스에서 선택하여 ArrayList에 저장하여 반환
    // 모든 qna 가져오기
    public ArrayList<QnA> selectAll(){
        // ArrayList 객체 초기화
        ArrayList<QnA> arry = null;

        try{
            // 데이터베이스 연결
            connectDB();
            // SQL 쿼리 실행
            ResultSet rs = stmt.executeQuery("SELECT QNA_ID, QNA_TITLE, QNA_TEXT, QNA_PIC FROM QNA ORDER BY QNA_ID DESC;");
            
            // ArrayList 객체 생성
            arry = new ArrayList<QnA>();

            // 데이터베이스에서 가져온 데이터를 객체에 저장 ( 결과 집합 반복 )
            while(rs.next()){
                // QnA 객체 생성
                QnA qna = new QnA();

                // 데이터베이스에서 가져온 데이터를 객체에 저장 ( 결과에서 데이터 추출하여 QnA 객체에 설정 )
                qna.setQnaId(rs.getInt("qna_id"));
                qna.setQnaTitle(rs.getString("user_id"));
                qna.setQnaTitle(rs.getString("qna_title"));
                qna.setQnaText(rs.getString("qna_text"));
                qna.setQnaPic(rs.getString("qna_pic"));

                // ArrayList에 객체 추가
                arry.add(qna);
            }
        }
        catch(Exception ex){
            //out.println("DB Exception 발생 : " + ex);
        }
        finally{
            try{
                closeDB();
            }
            catch(Exception ex){}
        }
        return arry;
    }

    public ArrayList<QnA> selectRow()
}