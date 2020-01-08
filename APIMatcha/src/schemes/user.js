/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   user.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/11/02 03:19:46 by mayday            #+#    #+#             */
/*   Updated: 2019/11/04 00:54:40 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {
	USER_REGEX_PASSWORD,
	USER_REGEX_MAIL,
	USER_REGEX_NAME,
	USER_GENDERS
} from '../globals';
import { INTEREST_SCHEME } from './interest';

export const USER_SCHEME = {
	firstName: {
		required: true,
		type: 'string',
		minLength: 3,
		maxLength: 64,
		match: USER_REGEX_NAME
	},
	lastName: {
		required: true,
		type: 'string',
		minLength: 3,
		maxLength: 64,
		match: USER_REGEX_NAME
	},
	userName: {
		required: true,
		type: 'string',
		minLength: 3,
		maxLength: 64,
		match: USER_REGEX_NAME
	},
	mail: {
		required: true,
		type: 'string',
		minLength: 3,
		maxLength: 64,
		match: USER_REGEX_MAIL
	},
	password: {
		required: true,
		type: 'string',
		minLength: 8,
		maxLength: 64,
		match: USER_REGEX_PASSWORD
	},
	gender: {
		required: true,
		type: 'string',
		list: USER_GENDERS
	},
	orientation: {
		required: true,
		type: Array,
		item: {
			required: true,
			type: 'string',
			list: USER_GENDERS
		}
	},
	interests: {
		required: true,
		type: Array,
		item: INTEREST_SCHEME.name
	},
	bio: {
		type: 'string',
		minLength: 16,
		maxLength: 64
	}
};