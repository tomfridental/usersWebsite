import React from 'react';
import Card from './Card';


export default ( {list_data,pick,doneFetch} ) => {
	if(!doneFetch){
		return(
			<div className="list_loader_div">
			<img src="http://www.ifmo.ru/images/loader.gif" className="list_loader" />
			</div>
		)
	}
	else{
    return (
      <div className="cards-list">
				<ul>
					{
						list_data.map( item =>  
							<li key={item.id} className="card-item" onClick={()=>pick(item)} > 
								<Card {...item} /> 
							</li> 
						)
					}
				</ul>
			</div>
    )}
}
