import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className='home'>
            <Banner/>

            <div className="home__section1">
                <Card
                src='https://media-cdn.tripadvisor.com/media/photo-m/1280/19/72/e9/b8/exterior.jpg'
                title='Radisson Grenada Beach Resort'
                description='Situated along the white sands of Grand Anse Beach, the beautiful Resort offers its guests uncompromising Radisson service and facilities. Wether strolling through the beautiful lush tropical gardens, relaxing in the Swimming Pools and Beachfront Bars, or keeping fit on the Tennis Courts and enjoying the Water Sports; our Team of trained staff will ensure your stay is relaxing and memorable.'
                />

                <Card
                src='https://d1xyolhen8fnqh.cloudfront.net/media/hotels/slideshow_images_staged/large/1076695.jpg'
                title='Spice Island Beach Resort'
                description='Grenada’s two-mile-long Grand Anse Beach is grand indeed. And Spice Island Beach Resort, spanning some eight acres of beachfront real estate, isn’t too shabby either. This family-owned resort was rebuilt after a hurricane a little more than a decade ago, and in the process it was reborn as something rather more high-end — a quietly contemporary, subtly luxurious all-inclusive, all-suite escape.'
                />

                <Card
                src='https://cdn.sandals.com/sandals/v12/images/resorts/sls/home/main-slider/pool-beach-firepit.jpg'
                title='Sandals Grenada, Five Star Luxury on Pink Gin Beach'
                description='Luxury Like You’ve Never Experienced Before. Romance soars to new heights in our SkyPool Suites. Open your bedroom doors to reveal an infinity-edge plunge pool that seamlessly blends with the distant horizon.'
                />
            </div>

            <div className="home__section2">
                <Card
                 src='https://grenadadevelopmentbank.com/assets/images/main-pic-1080x800.jpg'
                 title="Chapel Road Grenville St. Andrew's"
                 description='A lot of land TOGETHER with two-storey building thereon situate at CHAPEL ROAD, GRENVILLE, ST. ANDREW, measuring 12,146 sq ft. 
                            The upper floor is divided into three bedrooms, bathroom, kitchen, living and dining rooms. There is storage on the ground floor and a paved front driveway.               
                            The Lot is gently sloping and is close to local amenities including two schools and shopping facilities.'
                 price='REDUCED RESERVED PRICE: EC$302,537.70'
                />
                <Card
                 src='https://odis.homeaway.com/odis/listing/0879af80-3289-4725-a4b3-53ccfd885c2b.c6.jpg'
                 title="3BR House Vacation Rental Grenville, St. Andrew's"
                 description="Beautiful 3 bedroom furnished property (top floor) located in the heart of Conference, St. Andrew's Grenada for rent. Short-term, Intermediate or Long-term contracts available. This house has been recently renovated." 
                 price='EC$'
                />
                <Card
                 src='http://eastrealgrenada.com/wp-content/uploads/2018/03/IMG-20180224-WA0004.jpg'
                 title='Westerhall Apartment'
                 description="Furnished two (2) bedroom apartment located in the quiet neighbourhood of Westerhall, St. David, Grenada. Includes dining area with dining table, spacious living room and washing machine. Hot & cold shower. Comes with toaster, electrical kettle, pots, iron and ironing board, fan, lamps and chair sets. Spacious area for parking with large yard space. Easy access to public transport."
                 price='EC$1,500/Monthly'
                />
            </div>

            <div className="home__section3">
                <Card
                 src='https://res.cloudinary.com/terracaribbean/image/upload/t_webi_basic/GDAv2/53686D995430C2DB77756C74EF486BBD.jpg?im_w_720'
                 title='Rooms & Suites at Sandals Grenada Resort'
                 description="Available from July 2020 . This modern, spacious, fully furnished apartment sits on the ground floor of a two storey house located in the upscale neighborhood of Fort Jeudy, St. George. "
                 price='$1,500/Monthly'
                />
                <Card
                 src='https://res.cloudinary.com/terracaribbean/image/upload/t_webi_thumb/GDAv2/10709558-DB34-8D40-B164-28FFBE558FBA.jpg?im_w_720'
                 title='Grand Villa Apartment'
                 description='Spacious and attractive 4 bedroom, 3.5 bathroom, first floor apartment in the desirable middle class neighborhood of Morne Jaloux. It commands breathtaking views of the Eastern and Southern parts of Grenada with the sea and valleys in close range.'
                 price='EC$5,433/Monthly'
                />
                <Card
                 src='https://res.cloudinary.com/terracaribbean/image/upload/t_webi_thumb/terra-red/grenada/photos/g19701/0c899a1ccbd59e47a7903b05d790cdec.jpg?im_w_720'
                 title='Holiday Rental House'
                 description="Spacious and attractive 4 bedroom, 3.5 bathroom, first floor apartment in the desirable middle class neighborhood of Morne Jaloux. It commands breathtaking views of the Eastern and Southern parts of Grenada with the sea and valleys in close range. Ideal for a professional with a small family. The location is quiet, private and breezy."
                 price='EC$3,803/Monthly'
                />
            </div>

           

        </div>
    )
}

export default Home;



