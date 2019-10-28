/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   neo4j.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/25 08:24:23 by mayday            #+#    #+#             */
/*   Updated: 2019/10/25 10:14:15 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const neo4j = require('neo4j-driver').v1;

/*
function bddConnect()
{
	return 
}
*/

class neo4jController {
	start = () => new Promise((res, rej) => {
		const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "240493"));
		driver.onCompleted = () => {
			res(driver);
		}
		driver.onError = (e) => {
			rej(e);
		}
	});
	connect = this.start()
}

module.exports = new neo4jController();