package com.shinn.service.model;

import java.io.Serializable;
import java.util.Date;

public class Transaction implements Serializable{
    public static final String TABLE_NAME = "tx_rental";
	
	private Integer id;
	private Integer aptId;
	private Integer roomId;
	private Integer renterId;
	private Date dueDate;
	private Date txDate;
	private Date startDate;
	private Date endDate;
	private Double deposit;
	private Double balance;
	private Double amount;
	private String txType;
	private String provider;
	private String status;
	private Integer userId;
	/**
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * @return the aptId
	 */
	public Integer getAptId() {
		return aptId;
	}
	/**
	 * @param aptId the aptId to set
	 */
	public void setAptId(Integer aptId) {
		this.aptId = aptId;
	}
	/**
	 * @return the roomId
	 */
	public Integer getRoomId() {
		return roomId;
	}
	/**
	 * @param roomId the roomId to set
	 */
	public void setRoomId(Integer roomId) {
		this.roomId = roomId;
	}
	/**
	 * @return the renterId
	 */
	public Integer getRenterId() {
		return renterId;
	}
	/**
	 * @param renterId the renterId to set
	 */
	public void setRenterId(Integer renterId) {
		this.renterId = renterId;
	}
	/**
	 * @return the dueDate
	 */
	public Date getDueDate() {
		return dueDate;
	}
	/**
	 * @param dueDate the dueDate to set
	 */
	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
	/**
	 * @return the txDate
	 */
	public Date getTxDate() {
		return txDate;
	}
	/**
	 * @param txDate the txDate to set
	 */
	public void setTxDate(Date txDate) {
		this.txDate = txDate;
	}
	/**
	 * @return the startDate
	 */
	public Date getStartDate() {
		return startDate;
	}
	/**
	 * @param startDate the startDate to set
	 */
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	/**
	 * @return the endDate
	 */
	public Date getEndDate() {
		return endDate;
	}
	/**
	 * @param endDate the endDate to set
	 */
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	/**
	 * @return the deposit
	 */
	public Double getDeposit() {
		return deposit;
	}
	/**
	 * @param deposit the deposit to set
	 */
	public void setDeposit(Double deposit) {
		this.deposit = deposit;
	}
	/**
	 * @return the balance
	 */
	public Double getBalance() {
		return balance;
	}
	/**
	 * @param balance the balance to set
	 */
	public void setBalance(Double balance) {
		this.balance = balance;
	}
	/**
	 * @return the amount
	 */
	public Double getAmount() {
		return amount;
	}
	/**
	 * @param amount the amount to set
	 */
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	/**
	 * @return the txType
	 */
	public String getTxType() {
		return txType;
	}
	/**
	 * @param txType the txType to set
	 */
	public void setTxType(String txType) {
		this.txType = txType;
	}
	/**
	 * @return the provider
	 */
	public String getProvider() {
		return provider;
	}
	/**
	 * @param provider the provider to set
	 */
	public void setProvider(String provider) {
		this.provider = provider;
	}
	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}
	/**
	 * @return the userId
	 */
	public Integer getUserId() {
		return userId;
	}
	/**
	 * @param userId the userId to set
	 */
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Transaction [id=" + id + ", aptId=" + aptId + ", roomId=" + roomId + ", renterId=" + renterId
				+ ", dueDate=" + dueDate + ", txDate=" + txDate + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", deposit=" + deposit + ", balance=" + balance + ", amount=" + amount + ", txType=" + txType
				+ ", provider=" + provider + ", status=" + status + ", userId=" + userId + "]";
	}
	
	
	
	
	

}
