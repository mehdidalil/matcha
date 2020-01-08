/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   validation.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/10/23 03:48:49 by mayday            #+#    #+#             */
/*   Updated: 2019/11/03 03:41:55 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export function check(elem, scheme)
{
	if (typeof elem !== 'object')
		throw new Error('Parameter is not an object !');
	Object.entries(scheme).forEach(([field, rules]) => {
		validateRules(elem, field, rules);
	});
}

function validateRules(elem, field, rules, name = field)
{
	if (!(field in elem) || elem[field] === undefined) {
		if (rules.required) {
			throw new Error(`${name} missing !`);
		} else {
			return;
		}
	}
	if (rules.type && (typeof rules.type === 'string' ? typeof elem[field] !== rules.type : !(elem[field] instanceof rules.type)))
		throw new Error(`${name} is not ${rules.type} !`);
	if (rules.minLength && elem[field].length < rules.minLength)
		throw new Error(`${name} should be at least ${rules.minLength} long !`);
	if (rules.maxLength && elem[field].length > rules.maxLength)
		throw new Error(`${name} should be maximum ${rules.maxLength} long !`);
	if (rules.match
		&& !((rules.match instanceof RegExp
			? rules.match
			: new RegExp(rules.match))
			.test(elem[field]))) {
		throw new Error(`${name} not valid !`);
	}
	if (rules.minValue && elem[field] < rules.minValue)
		throw new Error(`${name} should be over ${rules.minValue} !`);
	if (rules.maxValue && elem[field] > rules.maxValue)
		throw new Error(`${name} should be under ${rules.maxValue} !`);
	if (rules.list && !(rules.list.includes(elem[field])))
		throw new Error(`${name} is invalid !`);
	if (rules.item) {
		elem[field].forEach((d, i) => validateRules(elem[field], i, rules.item, `${field}[${i}]`));
	}
	if (rules.content) {
		check(elem[field], rules.content);
	}
}