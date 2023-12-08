import React from 'react';
import teamImg1 from '../assets/images/team1.png'
import teamImg2 from '../assets/images/team2.png'
import teamImg3 from '../assets/images/team3.png'

const TeamCard = [
    {
        image: teamImg1,
        heading: 'Prime Bullister ',
        para: 'Pruduct Designer',
    },
    {
        image: teamImg2,
        heading: 'Solvador Bulli',
        para: 'Artist',
    },
    {
        image: teamImg3,
        heading: 'Meta Bully',
        para: 'Developer',
    },
]
const TeamCards = () => {
    const list = TeamCard.map((TeamCard) => (
        <div data-aos="flip-up" className="col-lg-4 col-md-6 col-12 mt-5">
            <div className="team-card">
                <img className='pb-5 w-100 h-312 object-fit-contain' src={TeamCard.image} alt="mint-img-1" />
                <p className="text-white fw-semibold fs-xl1 ff-poppins lh-136 text-center">{TeamCard.heading}</p>
                <p className="text-white lh-36 ff-poppins fs-md1 text-center fw-normal">{TeamCard.para}</p>
            </div>
        </div>
    ))
    return (
        <div>
            <div className="row pt-4">
                {list}
            </div>
        </div>
    )
}

export default TeamCards
