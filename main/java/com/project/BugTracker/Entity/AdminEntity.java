package com.project.BugTracker.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class AdminEntity {
	
	@Id
	@NotNull(message = "id is mandatory")
	private int id;
	
	@NotNull(message = "name is mandatory")
	private String name;
	
	@NotNull(message = "contact is mandatory")
	private String contact;

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "loginId", referencedColumnName = "email")
	private LoginEntity login;
	
	public AdminEntity() {
		super();
	}

	public AdminEntity(@NotNull(message = "id is mandatory") int id,
			@NotNull(message = "name is mandatory") String name,
			@NotNull(message = "contact is mandatory") String contact) {
		super();
		this.id = id;
		this.name = name;
		this.contact = contact;
	}


	@Override
	public String toString() {
		return "AdminEntity [id=" + id + ", name=" + name + ", contact=" + contact + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public LoginEntity getLogin() {
		return login;
	}

	public void setLogin(LoginEntity login) {
		this.login = login;
	}
	
	
	
}
