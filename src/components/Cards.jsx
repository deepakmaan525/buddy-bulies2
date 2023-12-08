import React from 'react';
import mintImg1 from '../assets/images/mint-img1.png'
import mintImg2 from '../assets/images/mint-img2.png'
import mintImg3 from '../assets/images/mint-img3.png'
import mintImg4 from '../assets/images/mint-img4.png'
import mintImg5 from '../assets/images/mint-img5.png'
import mintImg6 from '../assets/images/mint-img6.png'

const Mintcard = [
    {
        image: mintImg1,
        heading: 'ART COLLECTION',
        para: 'Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.',
    },
    {
        image: mintImg2,
        heading: 'SPECIAL BULLIES',
        para: '20 Buddybullies out of 10k will have a very special and ersonalized resembling of famous people who are into NFTs those will be available after the minting.',
    },
    {
        image: mintImg3,
        heading: 'BREEDING',
        para: 'BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully for free.',
    },
    {
        image: mintImg4,
        heading: 'DIGITALMARKETS',
        para: 'Communicate with all the digital markets available in the Solana NFT world for getting our collection successfully listed.',
    },
    {
        image: mintImg5,
        heading: 'MERCH',
        para: 'working on the future merch</span> thet will be available for the community members directly on our webpage.',
    },
    {
        image: mintImg6,
        heading: 'CHARITY',
        para: 'We will be giving 30% of the royalties to charity permanently and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards.',
    },
]

const Cards = () => {
    const list = Mintcard.map((Mintcard) => (
        <div data-aos="flip-up" className="col-lg-4 col-md-6 col-12 mt-5">
            <div className="info-card">
                <img className='pb-5' src={Mintcard.image} alt="mint-img-1" />
                <p className="text-white fw-semibold fs-xl1 ff-poppins lh-100">{Mintcard.heading}</p>
                <p className="text_gray2 lh-150 ff-poppins fs-md">{Mintcard.para}</p>
            </div>
        </div>
    ))
    return (
        <div>
            <div className="row pt-md-5">
                {list}
            </div>
        </div>
    )
}

export default Cards
