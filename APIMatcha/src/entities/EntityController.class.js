/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   EntityController.class.js                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/11/02 05:51:43 by mayday            #+#    #+#             */
/*   Updated: 2019/11/07 03:25:51 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import neo4jInstance from '../database';
import { check } from '../validation';


export default class EntityController {
	constructor(label, scheme) {
		this.label = label;
		this.scheme = scheme;
	}

	add(elem) {
		return new Promise((res, rej) => {
			try {
				check(elem, this.scheme);
			}
			catch (e) {
				return rej(e);
			}

			neo4jInstance
				.run(`CREATE (n:${this.label} ${elem.toNeo4jArgString()}) RETURN n`, elem)
				.then(result => res(result.records[0].get(0)))
				.catch(rej);
		});
	}

	merge(elem) {
		return new Promise((res, rej) => {
			try {
				check(elem, this.scheme);
			}
			catch (e) {
				return rej(e);
			}

			neo4jInstance
				.run(`MERGE (n:${this.label} ${elem.toNeo4jArgString()}) RETURN n`, elem)
				.then(result => res(result.records[0].get(0)))
				.catch(rej);
		});
	}

	delete(id) {
		return new Promise((res, rej) => {
			neo4jInstance
				.run(`MATCH (n:${this.label}) WHERE ID(n) = toInteger($id) DETACH DELETE n`, { id })
				.then(() => res(`User ${id} deleted !`))
				.catch(rej);
		});
	}
	
	search(hint) {
		return new Promise((res, rej) => {
			neo4jInstance
				.run(`MATCH (n:${this.label} ${hint.toNeo4jArgString()}) RETURN n`, hint)
				.then(result => {
					if (result.records.length == 0)
						rej(`${this.label} not found !`);
					else
						res(result.records.map((rec) => ({
							id: rec.get(0).identity.toNumber(),
							...rec.get(0).properties
						})));
				})
				.catch(rej);
		});
	}

	findById(id) {
		return new Promise((res, rej) => {
			neo4jInstance
				.run(`MATCH (n:${this.label}) WHERE ID(n) = toInteger($id) RETURN n`, { id })
				.then(result => {
					if (result.records.length == 0)
						rej(Error(`${this.label} not found !`));
					else
						res({ id: result.records[0].get(0).identity.toNumber(), ...result.records[0].get(0).properties });
				})
				.catch(rej);
		});
	}
}