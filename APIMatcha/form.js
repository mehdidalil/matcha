/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   form.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mayday <mayday@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/08/16 09:30:21 by mayday            #+#    #+#             */
/*   Updated: 2019/08/17 00:04:05 by mayday           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function checkValue(value, rules) {
	rules.forEach((rule) => {
		if ("type" in rule)
		{
			if (rule.type == "array" && !Array.isArray(value))
				throw Error(rule.errorMessage);
			else if (typeof value != rule.type && rule.type != "array")
				throw Error(rule.errorMessage);
		}
		if ("minLength" in rule)
		{
			if (value.length < rule.minLength)
				throw Error(rule.errorMessage);
		}
		if ("maxLength" in rule)
		{
			if (value.length > rule.maxLength)
				throw Error(rule.errorMessage);
		}
		if ("minValue" in rule)
		{
			if (value < rule.minValue)
				throw Error(rule.errorMessage);
		}
		if ("maxValue" in rule)
		{
			if (value > rule.maxValue)
				throw Error(rule.errorMessage);
		}
		if ("values" in rule)
		{
			if (typeof value == "string")
			{
				if (!rule.values.includes(value))
					throw Error(rule.errorMessage);
			}
			else
			{
				value.forEach((val) => {
					if (!rule.values.includes(val))
						throw Error(rule.errorMessage);
				})
			}
		}
		if ("regex" in rule)
		{
			if (!value.match(rule.regex))
				throw Error(rule.errorMessage);
		}
	})
	return (value);
}

module.exports = checkValue;