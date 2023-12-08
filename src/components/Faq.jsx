import React from 'react'
import TeamCards from './TeamCards'

const Faq = () => {
  return (
    <div>
      <section class="bg-dark-blue position-relative z-index overflow-x-clip" id="faq">
        <div className="faq-ellipse"></div>
        <div class="container position-relative">
            <h2 class="fs-xxl fw-semibold lh-136 ff-poppins text-white d-flex justify-content-center py-5">FAQs</h2>
            <div class="accordion margin-x-auto " id="accordionExample">
                <div data-aos="fade-right" class="accordion-item mb-26">
                    <h2 class="accordion-header"><button class="accordion-button fs-lg fw-medium ff-monterset text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> What’s the blockchain the buddybullies call home ? </button></h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body fs-md fw-medium ff-monterset text_gray4"> Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                    </div>
                </div>
                <div data-aos="fade-left" class="accordion-item mb-26">
                    <h2 class="accordion-header"><button class="accordion-button collapsed fs-lg fw-medium ff-monterset text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What’s the blockchain the buddybullies call home ?</button></h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body fs-md fw-medium ff-monterset text_gray4">Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                    </div>
                </div>
                <div data-aos="fade-right" class="accordion-item mb-26">
                    <h2 class="accordion-header"><button class="accordion-button collapsed fs-lg fw-medium ff-monterset text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What’s the blockchain the buddybullies call home ? </button></h2>
                    <div id="collapseThree" class="accordion-collapse collapse fs-lg fw-medium ff-monterset text-white" data-bs-parent="#accordionExample">
                        <div class="accordion-body fs-md fw-medium ff-monterset text_gray4">Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                    </div>
                </div>
                <div data-aos="fade-left" class="accordion-item">
                    <h2 class="accordion-header"><button class="accordion-button collapsed fs-lg fw-medium ff-monterset text-white" type="button" data-bs-toggle="collapse"data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What’s the blockchain the buddybullies call home ?</button></h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body fs-md fw-medium ff-monterset text_gray4">Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                    </div>
                </div>
            </div>
        </div>    
     <div id="team">
        <div class="container pt-sm-5 ">
            <h2 class="fs-xxl text-white fw-semibold d-flex justify-content-center pt-5">Our Team</h2>
        <TeamCards/>
        </div>
     </div>
    </section>
    </div>
  )
}

export default Faq
