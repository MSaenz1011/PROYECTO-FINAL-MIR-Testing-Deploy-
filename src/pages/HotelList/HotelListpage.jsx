import React, { useState, useEffect } from 'react';
import Header from './HotelListHeader';
import HotelCard from './HotelCard';
import './HotelListpage.css';
import SearchBar from './SearchBar';
import HotelListPagination from './HotelListPagination';

function HotelListpage() {
	const [actualPage, setActualPage] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(9);
	const [hotelCardArr, setHotelCardArr] = useState([]);
	const maxNpages = parseInt(hotelCardArr.length / itemsPerPage);

	useEffect(() => {
		for (let i = 0; i < 100; i++) {
			setHotelCardArr([...hotelCardArr, hotelCardArr.push(<HotelCard 
				hotelNum={i + 1}
				hotelRating = {Math.random()*5}
				/>)]);
		}
	}, []);

	return (
		<div className="HotelListpage-ctn">
			<Header />
			<div className="SearchBar-ctn-display">
				<SearchBar />
			</div>

			<div className="HotelList-displayer">
				<div className="filter-ctn">
					<div className="filter-ctn-btns">
						<button>All</button>
						<button>Popular</button>
						<button>Latest</button>
						<button>Trend</button>
					</div>
					<div className="weird-thing">
						<p>☰ latest Filter</p>
					</div>
				</div>
				<div className="card-gallery">
					{hotelCardArr
						.slice(actualPage * itemsPerPage, actualPage * itemsPerPage + itemsPerPage)
						.map((item) => item)}
				</div>
				<HotelListPagination
					maxNpages={maxNpages}
					actualPage={actualPage}
					setActualPage={setActualPage}
				/>
			</div>
		</div>
	);
}

export default HotelListpage;
