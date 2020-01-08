/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   relationship.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/11/03 22:43:46 by mayday            #+#    #+#             */
/*   Updated: 2019/11/07 02:32:25 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import neo4jInstance from '../database';
import { check } from '../validation';
import { RELATIONSHIP_SCHEME } from '../schemes';

export const addRelationship = (relation, firstNode, secondNode) => new Promise((res, rej) => {
	try {
		check(relation, RELATIONSHIP_SCHEME);
	}
	catch (e) {
		return rej(e);
	}
	const request = `MATCH (n ${firstNode.toNeo4jArgString('firstNode')}), (m ${secondNode.toNeo4jArgString('secondNode')}) 
		WHERE NOT (n)-[:${relation.label}]->(m) 
		CREATE (n)-[r:${relation.label} ${relation.toNeo4jArgString('relation')}]->(m) 
		RETURN r`;

	neo4jInstance
		.run(request, {relation, firstNode, secondNode})
		.then(result => {
			if (result.records.length == 0)
				rej('Relationship not created !');
			else
				res(result.records);		
		})
		.catch(rej);
});

export const createPotentialLink = (user) => new Promise((res, rej) => {
	const request = `MATCH (a:User ${user.toNeo4jArgString()}), (b:User) 
		WHERE a.gender IN b.orientation 
		AND b.gender IN a.orientation 
		AND ID(a) <> ID(b) 
		CREATE UNIQUE (a)-[r:POTENTIAL]->(b)
		RETURN r`;
	neo4jInstance.run(request, user)
		.then(result => {
			if (result.records.length == 0)
				rej(Error('Relationship not created !'));
			else
				res(result.records);
		})
		.catch(rej);
});