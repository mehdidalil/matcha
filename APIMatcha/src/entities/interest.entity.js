/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   interest.entity.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/11/04 00:46:13 by mayday            #+#    #+#             */
/*   Updated: 2019/11/04 22:10:19 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { EntityController } from '.';
import { INTEREST_SCHEME } from '../schemes';

class InterestController extends EntityController {
	constructor() {
		super('Interest', INTEREST_SCHEME);
	}
}

const interestEntity = new InterestController();
export default interestEntity;