package proj.one.beans;

public class Manager {
	
	public Manager(int managerId, String managerUser, String managerPass, String managerFirst, String managerLast) {
		super();
		this.managerId = managerId;
		this.managerUser = managerUser;
		this.managerFirst = managerFirst;
		this.managerLast = managerLast;
	}

	int managerId;
	static String managerUser;
	String managerFirst;
	String managerLast;
	
	public int getManagerId() {
		return managerId;
	}
	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}
	public static String getManagerUser() {
		return managerUser;
	}
	public void setManagerUser(String managerUser) {
		this.managerUser = managerUser;
	}
	
	
	@Override
	public String toString() {
		return "Manager [managerId=" + managerId + ", managerUser=" + managerUser + ", "
				+ "managerFirst=" + managerFirst + ", managerLast=" + managerLast + "]";
	}
	public String getManagerFirst() {
		return managerFirst;
	}
	public void setManagerFirst(String managerFirst) {
		this.managerFirst = managerFirst;
	}
	public String getManagerLast() {
		return managerLast;
	}
	public void setManagerLast(String managerLast) {
		this.managerLast = managerLast;
	}

}
