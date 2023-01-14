package com.example.MongoSpring;

public class Person {
	private String name;

	public Person(String name) {
		this.name = name;
	}

	String getName() {
		System.out.println(">>>Person Name Read");
		return this.name;
	}

}
