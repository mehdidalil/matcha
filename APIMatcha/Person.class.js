/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Person.class.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/08/16 05:01:00 by mayday            #+#    #+#             */
/*   Updated: 2019/08/17 00:51:08 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fieldsPerson = require('./fieldsPerson.json');
const checkValue = require('./form.js');

class Person {
	constructor(node = null) {
		if (!node)
			return ;
		try {
			this.id = node.identity.low;
			this.labels = node.labels;
			this.firstName = node.properties.firstName;
			this.lastName = node.properties.lastName;
			this.age = node.properties.age.low;
			this.gender = node.properties.gender;
			this.bio = node.properties.bio;
			this.orientation = node.properties.orientation;
			this.popularity = node.properties.popularity.low;
			this.pics = node.properties.pics;
			this.mail = node.properties.mail;
			this.password = node.properties.password;
			this.geolocalisation = node.properties.geolocalisation;
		}
		catch (e) {
			console.log(`${e.name}: ${e.message}`);
		}
	}
	get firstName() {
		return this._firstName;
	}
	set firstName(val) {
		try {
			this._firstName = checkValue(val, fieldsPerson.firstName);
		} catch (e) {
			console.log(`${e.name}: ${e.message}`);
		}
	};
	set lastName(val) {
		try {
			this._lastName = checkValue(val, fieldsPerson.lastName);
		} catch (e) {
			console.log(`${e.name}: ${e.message}`);
		}
	};
	set age(val) {
		try {
			this._age = checkValue(val, fieldsPerson.age);
		} catch (e) {
			console.log(`${e.name}: ${e.message}`);
		}
	}
	set gender(val) {
		try {
			this._gender = checkValue(val, fieldsPerson.gender);
		} catch (e) {
			console.log(`${e.name}: ${e.message}`)
		}
	}
	set bio(val) {
		try { this._bio = checkValue(val, fieldsPerson.bio) }
		catch (e) { console.log(`${e.name}: ${e.message}`) }
	}
	set orientation(val) {
		try { this._orientation = checkValue(val, fieldsPerson.orientation) }
		catch (e) { console.log(`${e.name}: ${e.message}`) }
	}
	set pics(val) {
		try { this._pics = checkValue(val, fieldsPerson.pics) }
		catch (e) { console.log(`${e.name}: ${e.message}`) }
	}
	set mail(val) {
		try { this._mail = checkValue(val, fieldsPerson.mail) }
		catch (e) { console.log(`${e.name}: ${e.message}`) }
	}
	set password(val) {
		try { this._password = checkValue(val, fieldsPerson.password) }
		catch (e) { console.log(`${e.name}: ${e.message}`) }
	}
}

module.exports = Person;

/*
jai declare les attribut en undefined pour meviter de faire un if ('firstName' in node) a chaque fois et plutot pouvoir verifier directement si 
il est defined avec if (node.firstName), a voir

	_id = undefined;
	_labels = undefined;
	_firstName = undefined
	_lastName = undefined;
	_age = undefined;
	_gender = undefined;
	_bio = undefined;
	_orientation = undefined;
	_popularity = undefined;
	_pics = undefined;
	_mail = undefined;
	_password = undefined;
	_geolocalisation = undefined;

	tenter de faire une classe parent
*/