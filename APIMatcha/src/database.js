/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   database.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/25 08:24:23 by mayday            #+#    #+#             */
/*   Updated: 2019/11/04 23:12:44 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { v1 as neo4j } from 'neo4j-driver';

class Neo4jController {
	start = () => {
		this.driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', '240493'));
		this.driver.onCompleted = () => console.log('Database successfully connected !');
		this.driver.onError = error => console.log(`Database connection failed <==> ${error.message}`);
	}

	driver = null
	connect = this.start()

	DEV_reset = () => this.run('MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n,r')

	run = (...args) => {
		const session = neo4jInstance.driver.session();

		return session.writeTransaction(tx => tx.run(...args))
			.then(result => {
				session.close();
				return result;
			});
	}
}

const neo4jInstance = new Neo4jController();

export default neo4jInstance;