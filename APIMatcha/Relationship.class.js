/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Relationship.class.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/08/16 04:57:15 by mayday            #+#    #+#             */
/*   Updated: 2019/08/16 15:20:21 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

class Relationship {
	constructor(relationship = null) {
		if (!relationship)
			return ;
		try {
			this.id = relationship.identity.low;
			this.startNode = relationship.start.low;
			this.endNode = relationship.end.low;
			this.type = relationship.type;
			this.properties = relationship.properties;
		}
		catch (e) {
			console.log(`${e.name}: ${e.message}`);
		}
	}
}

module.exports = Relationship;