package com.project.BugTracker.Exception;

import java.time.LocalDateTime;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.project.BugTracker.Entity.ErrorResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@ControllerAdvice
public class AllExceptionsHandler {

	@ExceptionHandler({ AddressNotFoundException.class, AdminNotFoundException.class, LoginNotFoundException.class,
			UserNotFoundException.class, EmployeeNotFoundException.class, ProjectNotFoundException.class,
			BugNotFoundException.class })
	public ResponseEntity<ErrorResponse> handleEntityNotFoundException(Exception ex) {

		ErrorResponse error = new ErrorResponse();

		error.setStatus(HttpStatus.UNAUTHORIZED.value()); // 401 unauthorized
		error.setMessage(ex.getMessage()); // get message from exception
		error.setTimeStamp(LocalDateTime.now()); // system time

		return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);

	}

}