/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/11/07 01:07:19 by mayday            #+#    #+#             */
/*   Updated: 2020/01/08 16:16:03 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import express from 'express';
import { usersActions } from '../actions';

const router = express.Router();

router.post('/', usersActions.createUser);
router.get('/:id', usersActions.getUserById);
router.get('/', usersActions.getUsersByHint);
router.delete('/:id', usersActions.deleteUser);

export default router;