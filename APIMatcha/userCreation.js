/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   userCreation.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/25 05:13:26 by mayday            #+#    #+#             */
/*   Updated: 2019/10/28 23:16:24 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const validator = require('./validation.js');

function checkUserCreationReq(obj)
{
	try {
		let objCheck = JSON.parse(obj);

		objCheck = validator.sanitizeUser(objCheck);
		console.log(objCheck);
	}
	catch (e) {
		console.log(e.message);
	}
}
function addUserToDB(user)
{
	
}

module.exports.checkUserCreationReq = checkUserCreationReq;