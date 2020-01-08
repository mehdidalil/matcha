/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   relationship.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/11/03 06:30:42 by mayday            #+#    #+#             */
/*   Updated: 2019/11/03 22:49:31 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export const RELATIONSHIP_SCHEME = {
	label: {
		required: true,
		type: 'string',
		minLength: 3,
		maxLength: 64
	}
};