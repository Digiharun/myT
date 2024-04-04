package green.myT.dto;

public class User {
	//	User Table을 관리하는 DTO class
	private String uname;
	private String uid;
	private int unum;
	
	public String getUname() {
		return uname;
	}
	
	public void setUname(String uname) {
		this.uname = uname;
	}
	
	public String getUid() {
		return uid;
	}
	
	public void setUid(String uid) {
		this.uid = uid;
	}
	
	public int getUnum() {
		return unum;
	}
	
	public void setUnum(int unum) {
		this.unum = unum;
	}


}
