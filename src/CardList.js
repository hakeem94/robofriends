import React from 'react';
import Card from './Card';

function CardList({robots}) {

	
	// this function will return the Cards
	return(
		<div>
		{
			robots.map((user,i) => {
				return(
					<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
				);
			})
		}
		</div>
	);
}

export default CardList;