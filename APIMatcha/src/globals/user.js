/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   user.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/11/02 00:05:00 by mayday            #+#    #+#             */
/*   Updated: 2019/11/02 03:28:54 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export const USER_REGEX_NAME = /^(?=.{3,32}$)[a-zA-Z]+(?:['_.\-\s][a-zA-Z]+)*$/;
export const USER_REGEX_MAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
export const USER_REGEX_PASSWORD = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9\-]{8,})$/;
export const USER_GENDERS = ['Male', 'Female'];