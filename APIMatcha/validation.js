/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   validation.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/23 03:48:49 by mayday            #+#    #+#             */
/*   Updated: 2019/10/25 07:54:51 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const validator = require('./validation.js');
const genders = ['Male', 'Female'];

function checkName(name)
{
	try {
		name = name.toString();
	}
	catch (e) {
		throw new Error("Name undefined.")
	}
	if (/^(?=.{3,32}$)[a-zA-Z]+(?:['_.\-\s][a-zA-Z]+)*$/.test(name) == false)
		throw new Error("Name not valid.");
	return (name);
}

function checkMail(mail)
{
	try {
		mail = mail.toString();
	}
	catch (e) {
		throw new Error("Mail undefined.")
	}
	if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(mail) == false)
		throw new Error("Mail not valid.");
	if (typeof mail !== 'string')
		throw new Error("Mail should be a string.")
	return (mail);
}

function checkPassword(password)
{
	try {
		password = password.toString();
	}
	catch (e) {
		throw new Error("Password undefined.")
	}
	if (/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9\-]{8,})$/.test(password) == false)
		throw new Error("Password must contain alphanumeric characters and at least 8 characters.");
	return (password);
}

function checkAge(age)
{
	try {
		age = parseInt(age);
	}
	catch (e) {
		throw new Error("Age undefined.")
	}
	if (age < 18 || age > 99)
		throw new Error("Age must be between 18 and 99.");
	if (isNaN(age))
		throw new Error("Age not valid.");
	return (age);
}

function checkBio(bio)
{
	try {
		bio = bio.toString();
	}
	catch (e) {
		throw new Error("Bio undefined.")
	}
	if (bio.length < 16 || bio.length > 64)
		throw new Error("Bio must be between 16 and 64 characters long.");
	return (bio);
}

function checkGender(gender)
{
	try {
		gender = gender.toString();
	}
	catch (e) {
		throw new Error("Gender undefined.")
	}
	if (genders.includes(gender) == false)
		throw new Error("Gender not valid must be Male or Female.");
	return (gender);
}

function checkOrientation(orientation)
{
	try {
		orientation = [...new Set(orientation)];
		orientation.forEach(elem => {
			if (genders.includes(elem) == false)
				throw new Error("Gender not valid.");
		});
	}
	catch (e) {
		throw new Error("Orientation not valid.");
	}
	return (orientation);
}

function checkInterests(interests)
{
	try {
		interests = [...new Set(interests)];
		interests.forEach(elem => {
			if (elem.length < 3)
				throw new Error("Interest must be at least 3 characters.");
		});
	}
	catch (e) {
		throw new Error("Interests not valid.");
	}
	return (true);
}

function sanitizeUser(user)
{
	user.firstName = validator.checkName(user.firstName);
	user.lastName = validator.checkName(user.lastName);
	user.mail = validator.checkMail(user.mail);
	user.password = validator.checkPassword(user.password);
	user.passwordCheck = validator.checkPassword(user.passwordCheck);
	user.gender = validator.checkGender(user.gender);
	user.orientation = validator.checkOrientation(user.orientation);

	return (user);
}

module.exports.checkName = checkName;
module.exports.checkMail = checkMail;
module.exports.checkPassword = checkPassword;
module.exports.checkAge = checkAge;
module.exports.checkBio = checkBio;
module.exports.checkGender = checkGender;
module.exports.checkOrientation = checkOrientation;
module.exports.checkInterests = checkInterests;
module.exports.sanitizeUser = sanitizeUser;