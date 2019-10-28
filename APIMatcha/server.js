/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   server.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/08/09 19:21:59 by mayday            #+#    #+#             */
/*   Updated: 2019/10/25 10:14:53 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const userCreation = require('./userCreation.js');
const neo4jController = require('./neo4j.js');
const express = require('express');
const app = express();

const mehdi = {
	firstName: "Mehdi",
	lastName: "Dalil",
	mail: "dalil.mahdi@gmail.com",
	password: "24041993abc",
	passwordCheck: "24041993abc",
	gender: "Female",
	orientation: ["Male", "Female", "Male"]
};
userCreation.checkUserCreationReq(JSON.stringify(mehdi));

neo4jController.connect.then(() => {
	console.log(neo4jController.driver);
	app.listen(8080, () => {
		console.log("now listening to 8080");
	});
})
/*
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "240493"));
const session = driver.session();
const resultPromise = session.run("MATCH (n) RETURN n LIMIT 1");

resultPromise
	.then((result) => {
	session.close();

	const singleRecord = result.records;
	const person = singleRecord[0].toObject().n.properties;
	console.log(person);
	})
	.catch((err) => {
		console.log('ch' + err);
	})
*/