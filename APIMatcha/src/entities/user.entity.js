/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   user.entity.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/11/04 00:41:12 by mayday            #+#    #+#             */
/*   Updated: 2019/11/07 02:30:54 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { EntityController } from '.';
import { USER_SCHEME } from '../schemes';
import interestEntity from './interest.entity';
import { addRelationship, createPotentialLink } from '../algo';

class UserController extends EntityController {
	constructor() {
		super('User', USER_SCHEME);
	}
	add(elem) {
		return super.add(elem)
			.then(() => Promise.all(elem.interests.map((interest) => interestEntity.merge({name: interest}))))
			.then(() => Promise.all(elem.interests.map((interest) => addRelationship({label: 'INTERESTED_IN', value: 10}, elem, {name: interest}))))
			//.then(() => createPotentialLink(elem));
	}
}

const userEntity = new UserController();
export default userEntity;