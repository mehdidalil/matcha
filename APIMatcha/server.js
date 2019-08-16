/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   server.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/08/09 19:21:59 by mayday            #+#    #+#             */
/*   Updated: 2019/08/17 00:30:37 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const Person = require('./Person.class.js');
const Relationship = require('./Relationship.class.js');
const express = require('express');
const app = express();

app.listen(8080, () => {
	console.log("now listening to 8080");
});

const kevin = new Person();
kevin.firstName = "Kevin";
console.log(kevin.firstName);
console.log(kevin);

/*
const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "240493"));

const session = driver.session();
const resultPromise = session.run("MATCH ()-[r]-() RETURN r LIMIT 1");

resultPromise
	.then((result) => {
	session.close();

	const singleRecord = result.records;
	console.log(singleRecord[0].toObject());
	const potential = new Relationship(singleRecord[0].toObject().r);
	console.log(potential);
	console.log(Object.keys(potential.properties[0]));
	})
	.catch((err) => {
		console.log(err);
	})
*/