package com.react.springboot.project.model;

public class Course {

		  private Long id;
		  private String username;
		  private String description;
		  
		public Course(Long id, String username, String description) {
			super();
			this.setId(id);
			this.setUsername(username);
			this.setDescription(description);
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}
		  
		  
}
