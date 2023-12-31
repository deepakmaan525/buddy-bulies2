import React from 'react'

const HeroSec = () => {
    return (
        <div>
            <header className="bg-header-img min-vh-100 overflow-auto">
                <div className="bg-cover min-h-inherit">
                    <div className="container min-h-inherit d-flex flex-column">
                        <nav className="d-flex justify-content-between pt-4 min-h-84">
                            <p className="text-white lh-150 fw-semibold fs-lg1">Logo</p>
                            <label for="iconbar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                            <input type="checkbox" id="iconbar" hidden />
                            <ul className="d-flex gap-80 align-items-center small-screen">
                                <li><a href="#" className="text-white ff-poppins fw-medium fs-md1">Minting</a></li>
                                <li><a href="#" className="text-white ff-poppins fw-medium fs-md1">Road Map</a></li>
                                <li><a href="#" className="text-white ff-poppins fw-medium fs-md1">Faq</a></li>
                                <li><a href="#" className="text-white ff-poppins fw-medium fs-md1">Team</a></li>
                                <li><a href="#" className="text-white ff-poppins fw-medium fs-md1">Join Us</a></li>
                            </ul>
                        </nav>
                        <div className='flex-grow-1 d-flex flex-column justify-content-center align-items-start '>
                        <h1 className="text-white fw-normal lh-124 fs-xxl1 ff-poppins mx-515">Vitae nunc,<span className="fw-medium"> blandit a odio</span></h1>
                        <p className="text_gray fs-lg mx-547 fw-medium ff-poppins position-relative z-3 mb-0 pb-5 ">Semper in egestas risus id tempus. Pellentesque dolor eros sollicitudin feugiat ut odio semper. Mattis fermentum eget ut vestibulum dolor diam</p>
                        <button className="primary-btn bg-white fs-xl ff-poppins text_light-blue1 position-relative z-3">Get Started</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeroSec
