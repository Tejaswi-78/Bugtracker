package com.project.BugTracker.Entity;

import java.time.LocalDateTime;


import lombok.Data;

@Data
public class ErrorResponse {

	int status;
	String message;
	LocalDateTime timeStamp;
}

