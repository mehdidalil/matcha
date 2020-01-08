/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/11/07 01:15:15 by mayday            #+#    #+#             */
/*   Updated: 2019/11/07 03:30:01 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { userEntity } from '../entities';

export function createUser(req, res) {
	userEntity.add(req.body)
		.then(() => res.send('User added'))
		.catch((err) => res.status(400).send(err.message));
}

export function getUserById(req, res) {
	userEntity.findById(req.params.id)
		.then((result) => res.send(result))
		.catch((err) => res.status(400).send(err));
}

export function getUsersByHint(req, res) {
	userEntity.search(req.query)
		.then((result) => res.send(result))
		.catch((err) => res.status(400).send(err));
}

export function deleteUser(req, res) {
	userEntity.delete(req.params.id)
		.then(() => res.send('User deleted'))
		.catch((err) => res.status(400).send(err.message));
}