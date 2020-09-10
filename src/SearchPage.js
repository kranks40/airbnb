import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResults from './SearchResults';

function SearchPage() {
    return (
        <div className='searchpage'>
            <div className="div searchpage__info">
                <p>62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filters</Button>
            </div>
            <SearchResults
            img='https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937'
            location='Private room in center of London'
            title='The Blue Room in London'
            description='2 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Washing Machine'
            star={4.23}
            price='EC$65 / night'
            total='EC$480 total'
            />

            <SearchResults
            img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_q&usqp=CAU'
            location='Private room in center of London'
            title='Stay at this spacious Edwardian House'
            description='1 guest - 1 bedroom 1 bed - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing Machine'
            star={4.73}
            price='EC$30 / night'
            total='EC$117 total'
            />

            <SearchResults
            img='https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg'
            location='Private room in center of London'
            title='London Studio Apartment'
            description='4 guest - 4 bedroom 4 bed - 2 bathrooms - Free parking - Washing Machine'
            star={3.8}
            price='EC$35 / night'
            total='EC$207 total'
            />

            <SearchResults
            img='https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg'
            location='Private room in center of London'
            title='Spacious Peacful Modern Bedroom'
            description='3 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Free parking - Dry Cleaning'
            star={5.0}
            price='EC$60 / night'
            total='EC$450 total'
            />

            <SearchResults
            img='https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp'
            location='Private room in center of London'
            title='5 Star Luxury Apartment'
            description='3 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Dry Cleaning'
            star={3.85}
            price='EC$90 / night'
            total='EC$450 total'
            />
            </div>
    )
}

export default SearchPage;
