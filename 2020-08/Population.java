package com.edu.domain;

import javax.persistence.*;

@Entity
@Table(name = "population")
public class Population {

	/*
	 * Homework: 1. 根据excel表定义好实体类Population(体力劳动) 2.
	 * *创建处理类，处理Excel表格，把表格数据一条一条转换成Population实体对象，添加到List里(脑力劳动) 3.
	 * 创建一个PopulationDAO，参考TestUserDAO，最后把这个list存储到数据库中(JPA的.saveAll(list)方法)
	 * (copy工作) 4. 写一个PopulationController，可以根据id，查询到这条json数据(测试工作)
	 * 
	 */
	// col=7
	@Id
	private Integer id;
	// col=8
	@Column(length = 20)
	private String city;
	// col=9
	@Column(length = 20)
	private String municipalities;
	// col=10
	private Long totalPopulation;
	// col=11
	private Long totalPopulation0_14;
	// col=12
	private Long totalPopulation15_64;
	// col=13
	private Long totalPopulation65;
	// col=14 外国人人口
	private Long foreigners;
	// col=15 Densely inhabited districts population 人口集中 地区人口
	private Long didp;
	// col=16 出生数
	private Long liveBirths;
	// col=17 死亡数
	private Long deaths;
	// col=18 Number of in-migrants from other municipalities
	private Long noifom;
	// col=19 Number of out-migrants to other municipalities (All nationalities)
	private Long nootom;
	// col=20
	private Long daytimePopulation;
	// col=21
	private Long numberOfHouseholds;
	// col=22
	private Long numberOfPrivateHouseholds;
	// col=23
	private Long nuclearFamilies;
	// col=24
	private Long onePersonHouseholds;
	// col=25 No. of nuclear families with household members 65 years of age and
	// over
	private Long householdMembers65;
	// col=26 No. of aged-couple households (Only aged couple)
	private Long agedCoupleHouseholds;

	// col=27 No. of aged-single-person households (Aged 65 and over)
	private Long agedSinglePersonHouseholds;
	// col=28
	private Long marriages;
	// col=29
	private Long divorces;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getMunicipalities() {
		return municipalities;
	}
	public void setMunicipalities(String municipalities) {
		this.municipalities = municipalities;
	}
	public Long getTotalPopulation() {
		return totalPopulation;
	}
	public void setTotalPopulation(Long totalPopulation) {
		this.totalPopulation = totalPopulation;
	}
	public Long getTotalPopulation0_14() {
		return totalPopulation0_14;
	}
	public void setTotalPopulation0_14(Long totalPopulation0_14) {
		this.totalPopulation0_14 = totalPopulation0_14;
	}
	public Long getTotalPopulation15_64() {
		return totalPopulation15_64;
	}
	public void setTotalPopulation15_64(Long totalPopulation15_64) {
		this.totalPopulation15_64 = totalPopulation15_64;
	}
	public Long getTotalPopulation65() {
		return totalPopulation65;
	}
	public void setTotalPopulation65(Long totalPopulation65) {
		this.totalPopulation65 = totalPopulation65;
	}
	public Long getForeigners() {
		return foreigners;
	}
	public void setForeigners(Long foreigners) {
		this.foreigners = foreigners;
	}
	public Long getDidp() {
		return didp;
	}
	public void setDidp(Long didp) {
		this.didp = didp;
	}
	public Long getLiveBirths() {
		return liveBirths;
	}
	public void setLiveBirths(Long liveBirths) {
		this.liveBirths = liveBirths;
	}
	public Long getDeaths() {
		return deaths;
	}
	public void setDeaths(Long deaths) {
		this.deaths = deaths;
	}
	public Long getNoifom() {
		return noifom;
	}
	public void setNoifom(Long noifom) {
		this.noifom = noifom;
	}
	public Long getNootom() {
		return nootom;
	}
	public void setNootom(Long nootom) {
		this.nootom = nootom;
	}
	public Long getDaytimePopulation() {
		return daytimePopulation;
	}
	public void setDaytimePopulation(Long daytimePopulation) {
		this.daytimePopulation = daytimePopulation;
	}
	public Long getNumberOfHouseholds() {
		return numberOfHouseholds;
	}
	public void setNumberOfHouseholds(Long numberOfHouseholds) {
		this.numberOfHouseholds = numberOfHouseholds;
	}
	public Long getNumberOfPrivateHouseholds() {
		return numberOfPrivateHouseholds;
	}
	public void setNumberOfPrivateHouseholds(Long numberOfPrivateHouseholds) {
		this.numberOfPrivateHouseholds = numberOfPrivateHouseholds;
	}
	public Long getNuclearFamilies() {
		return nuclearFamilies;
	}
	public void setNuclearFamilies(Long nuclearFamilies) {
		this.nuclearFamilies = nuclearFamilies;
	}
	public Long getOnePersonHouseholds() {
		return onePersonHouseholds;
	}
	public void setOnePersonHouseholds(Long onePersonHouseholds) {
		this.onePersonHouseholds = onePersonHouseholds;
	}
	public Long getHouseholdMembers65() {
		return householdMembers65;
	}
	public void setHouseholdMembers65(Long householdMembers65) {
		this.householdMembers65 = householdMembers65;
	}
	public Long getAgedCoupleHouseholds() {
		return agedCoupleHouseholds;
	}
	public void setAgedCoupleHouseholds(Long agedCoupleHouseholds) {
		this.agedCoupleHouseholds = agedCoupleHouseholds;
	}
	public Long getAgedSinglePersonHouseholds() {
		return agedSinglePersonHouseholds;
	}
	public void setAgedSinglePersonHouseholds(Long agedSinglePersonHouseholds) {
		this.agedSinglePersonHouseholds = agedSinglePersonHouseholds;
	}
	public Long getMarriages() {
		return marriages;
	}
	public void setMarriages(Long marriages) {
		this.marriages = marriages;
	}
	public Long getDivorces() {
		return divorces;
	}
	public void setDivorces(Long divorces) {
		this.divorces = divorces;
	}
	
	public Population(Integer id, String city, String municipalities, Long totalPopulation, Long totalPopulation0_14,
			Long totalPopulation15_64, Long totalPopulation65, Long foreigners, Long didp, Long liveBirths, Long deaths,
			Long noifom, Long nootom, Long daytimePopulation, Long numberOfHouseholds, Long numberOfPrivateHouseholds,
			Long nuclearFamilies, Long onePersonHouseholds, Long householdMembers65, Long agedCoupleHouseholds,
			Long agedSinglePersonHouseholds, Long marriages, Long divorces) {
		super();
		this.id = id;
		this.city = city;
		this.municipalities = municipalities;
		this.totalPopulation = totalPopulation;
		this.totalPopulation0_14 = totalPopulation0_14;
		this.totalPopulation15_64 = totalPopulation15_64;
		this.totalPopulation65 = totalPopulation65;
		this.foreigners = foreigners;
		this.didp = didp;
		this.liveBirths = liveBirths;
		this.deaths = deaths;
		this.noifom = noifom;
		this.nootom = nootom;
		this.daytimePopulation = daytimePopulation;
		this.numberOfHouseholds = numberOfHouseholds;
		this.numberOfPrivateHouseholds = numberOfPrivateHouseholds;
		this.nuclearFamilies = nuclearFamilies;
		this.onePersonHouseholds = onePersonHouseholds;
		this.householdMembers65 = householdMembers65;
		this.agedCoupleHouseholds = agedCoupleHouseholds;
		this.agedSinglePersonHouseholds = agedSinglePersonHouseholds;
		this.marriages = marriages;
		this.divorces = divorces;
	}
	
	public Population() {
	}
	
	public Population(Integer id, String city, String municipalities) {
		super();
		this.id = id;
		this.city = city;
		this.municipalities = municipalities;
	}
	
	public void setNumbers(long numbers[]) {
		this.totalPopulation = numbers[0];
		this.totalPopulation0_14 = numbers[1];
		this.totalPopulation15_64 = numbers[2];
		this.totalPopulation65 = numbers[3];
		this.foreigners = numbers[4];
		this.didp = numbers[5];
		this.liveBirths = numbers[6];
		this.deaths = numbers[7];
		this.noifom = numbers[8];
		this.nootom = numbers[9];
		this.daytimePopulation = numbers[10];
		this.numberOfHouseholds = numbers[11];
		this.numberOfPrivateHouseholds = numbers[12];
		this.nuclearFamilies = numbers[13];
		this.onePersonHouseholds = numbers[14];
		this.householdMembers65 = numbers[15];
		this.agedCoupleHouseholds = numbers[16];
		this.agedSinglePersonHouseholds = numbers[17];
		this.marriages = numbers[18];
		this.divorces = numbers[19];
	}
	@Override
	public String toString() {
		return "Population [id=" + id + ", city=" + city + ", municipalities=" + municipalities + ", totalPopulation="
				+ totalPopulation + ", totalPopulation0_14=" + totalPopulation0_14 + ", totalPopulation15_64="
				+ totalPopulation15_64 + ", totalPopulation65=" + totalPopulation65 + ", foreigners=" + foreigners
				+ ", didp=" + didp + ", liveBirths=" + liveBirths + ", deaths=" + deaths + ", noifom=" + noifom
				+ ", nootom=" + nootom + ", daytimePopulation=" + daytimePopulation + ", numberOfHouseholds="
				+ numberOfHouseholds + ", numberOfPrivateHouseholds=" + numberOfPrivateHouseholds + ", nuclearFamilies="
				+ nuclearFamilies + ", onePersonHouseholds=" + onePersonHouseholds + ", householdMembers65="
				+ householdMembers65 + ", agedCoupleHouseholds=" + agedCoupleHouseholds
				+ ", agedSinglePersonHouseholds=" + agedSinglePersonHouseholds + ", marriages=" + marriages
				+ ", divorces=" + divorces + "]";
	}
}
