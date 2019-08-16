// PERSON
LOAD CSV WITH HEADERS FROM 'file:///Person.csv' AS line CREATE (:Person {
	gender: line.gender,
	firstName: line.firstName,
	lastName: line.lastName,
	age: toInt(line.age),
	bio: line.bio,
	orientation: split(line.orientation, ':'),
	popularity: toInt(line.popularity),
	pics: split(line.pics, ':'),
	mail: line.mail,
	password: line.password,
	geolocalisation: line.geolocalisation,
	confirm: line.confirm,
	interests: split(line.interests, ':')})

MATCH (n:Person {gender: 'Male'})
SET n:Male
REMOVE n.gender;

MATCH (n:Person {gender: 'Female'})
SET n:Female
REMOVE n.gender;

// INTEREST
LOAD CSV WITH HEADERS FROM 'file:///Interest.csv' AS line CREATE (:Interest {name: line.name});

MATCH (a:Person {firstName: 'Jacqueline'})-[r1:LIKES]->(c:Interest)<-[r2:LIKES]-(b:Person {firstName: 'Sonny'}) OPTIONAL MATCH (a)-[d:POTENTIAL]-(b) WITH d, COUNT(r1) AS count SET d.matching = count

MATCH (a:Person)-[r1:LIKES]->(c:Interest)<-[r2:LIKES]-(b:Person) OPTIONAL MATCH (a)-[d:POTENTIAL]-(b) WITH d, COUNT(r1) AS count SET d.matching = count