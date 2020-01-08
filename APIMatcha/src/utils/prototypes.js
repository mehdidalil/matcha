/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   prototypes.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/11/02 19:42:02 by mayday            #+#    #+#             */
/*   Updated: 2019/11/05 17:39:30 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

Object.prototype.toNeo4jArgString = function (object = '') {
	return `{ ${Object.keys(this).reduce((a, c) => `${a}${c}: $${object?object + '.':''}${c}, `, '').trim().slice(0, -1)} }`;
};