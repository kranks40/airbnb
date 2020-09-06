import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className='home'>
            <Banner/>

            <div className="home__section">
                <Card
                src='https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720'
                title='Online Experiences'
                description='Unique activities we can do together, led by a world of hosts.'
                />

                <Card
                src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720'
                title='Unique stays'
                description='Spaces that are more than just a place to sleep.'
                />

                <Card
                src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720'
                title='Entire homes'
                description='Private places, with room for friends or family.'
                />
            </div>

            <div className="home__section">
                <Card
                 src='https://cdn.sandals.com/sandals/v11/media/sls/accommodations/medium/sls-001-medium.jpg?im_w=720'
                 title='3 bedroom flat in Lance Axpine'
                 description='Superhost with a tunning view of the beachside in asunny Bournemouth.'
                 price='XCD130/night'
                />
                <Card
                 src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720'
                 title='Penthouse in Grenadau'
                 description='Enjoy the amazing sights of London with this stunning penthouse.'
                 price='XCD350/night'
                />
                <Card
                 src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720'
                 title='Entire homes'
                 description='Superhost with great amenities and a fabolous shopping complex nearby.'
                 price='XCD70/night'
                />
            </div>

        </div>
    )
}

export default Home;



