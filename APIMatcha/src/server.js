/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   server.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/08/09 19:21:59 by mayday            #+#    #+#             */
/*   Updated: 2019/11/07 03:25:33 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import './utils';
import express from 'express';
import bodyParser from 'body-parser';
import { userEntity, EntityController } from './entities';
import neo4jInstance from './database';
import { createPotentialLink } from './algo';
import { users } from './globals';
import router from './route/users';

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());


neo4jInstance.DEV_reset()
	.then(() => {
		Promise.all(users.map((u) => userEntity.add(u)))
			.then(() => {
				Promise.all(users.map((u) => createPotentialLink(u)));
			})
			.catch(err => console.error(err.message));
	
	});

/*
createPotentialLink({mail: 'mehdi@gmail.com'})
	.then(res => console.log(res))
	.catch(err => console.error(err));*/
	
app.use('/users', router);

// EntityController.search({password: '24041993abc'})
// 	.then(result => console.log(result))
// 	.catch(err => console.error(err));

// EntityController.findById(176)
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

app.listen(port, () => {
	console.log(`connected to port ${port}`);
});