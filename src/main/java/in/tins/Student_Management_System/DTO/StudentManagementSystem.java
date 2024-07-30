package in.tins.Student_Management_System.DTO;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class StudentManagementSystem {
	@Id
	private String appno;
	private String name;
	private long contact;
	private String dob;
	private int age;
	private String address;
	private String districk;
	private String taluk;
	private String village;
	private double english;
	private double tamil;
	private double maths;
	private double science;
	private double social;
	private double total;
	private double avgerage;

	public String getAppno() {
		return appno;
	}

	public void setAppno(String appno) {
		this.appno = appno;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDistrick() {
		return districk;
	}

	public void setDistrick(String districk) {
		this.districk = districk;
	}

	public String getTaluk() {
		return taluk;
	}

	public void setTaluk(String taluk) {
		this.taluk = taluk;
	}

	public String getVillage() {
		return village;
	}

	public void setVillage(String village) {
		this.village = village;
	}

	public double getEnglish() {
		return english;
	}

	public void setEnglish(double english) {
		this.english = english;
	}

	public double getTamil() {
		return tamil;
	}

	public void setTamil(double tamil) {
		this.tamil = tamil;
	}

	public double getMaths() {
		return maths;
	}

	public void setMaths(double maths) {
		this.maths = maths;
	}

	public double getScience() {
		return science;
	}

	public void setScience(double science) {
		this.science = science;
	}

	public double getSocial() {
		return social;
	}

	public void setSocial(double social) {
		this.social = social;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public double getAvgerage() {
		return avgerage;
	}

	public void setAvgerage(double avgerage) {
		this.avgerage = avgerage;
	}

}
