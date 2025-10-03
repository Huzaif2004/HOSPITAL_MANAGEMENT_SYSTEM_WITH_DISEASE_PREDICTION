
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Department = () => {
    const departmentsArray = [
        {
          name: "Pediatrics",
          imageUrl: "https://img.freepik.com/free-photo/portrait-female-pediatrician-work_23-2151686708.jpg?t=st=1730051274~exp=1730054874~hmac=a874a22b53e3a03700b063deac84cb0f229591a6b7be678f1c949ecb3ed04968&w=1380",
        },
        {
          name: "Orthopedics",
          imageUrl: "https://img.freepik.com/free-photo/orthopedic-specialist-explaining-bones-injury-human-skeleton-woman-medical-cabinet-physician-pointing-spinal-cord-osteopathy-model-show-anatomy-structure-diagnosis_482257-38551.jpg?t=st=1730051377~exp=1730054977~hmac=5bd3b452063679b721b7f400b628bece4cb33eaeb076bc560fc5de8bfa7b72ab&w=1060",
        },
        {
          name: "Cardiology",
          imageUrl: "https://img.freepik.com/free-photo/person-holding-anatomic-heart-model-educational-purpose_23-2149894493.jpg?t=st=1730051434~exp=1730055034~hmac=a4d7e5b431ae7a887da37050d107fffe9a443c5505527d1cf2c6865a07797583&w=1060",
        },
        {
          name: "Neurology",
          imageUrl: "https://img.freepik.com/free-vector/realistic-brain-set_1284-68084.jpg?t=st=1730051476~exp=1730055076~hmac=cbbc7cea0de0197e143277acdaae83cdf285090bd85b1870533c527aaa3e86ef&w=1380",
        },
        {
          name: "Oncology",
          imageUrl: "https://img.freepik.com/free-photo/health-assistant-taking-care-female-patient_23-2148981270.jpg?t=st=1730051522~exp=1730055122~hmac=a71a23ca61632b13b69dc0099306f335f0b7e59fb1f312fed078311d57d91880&w=1060",
        },
        {
          name: "Radiology",
          imageUrl: "https://img.freepik.com/free-photo/doctor-looking-ct-scan_23-2149367428.jpg?t=st=1730051562~exp=1730055162~hmac=245272ead28e9682178f42af90c40a68ce8a43f3c26f4d646525b7445cb38ce3&w=1060",
        },
        {
          name: "Physical Therapy",
          imageUrl: "https://img.freepik.com/free-photo/nurse-taking-care-patient_23-2149277888.jpg?t=st=1730051639~exp=1730055239~hmac=8347abf158ac74645513ec4be6dd0debe7be49c04e4c9fea9c618a16bc26fa25&w=1060",
        },
        {
          name: "Dermatology",
          imageUrl: "https://img.freepik.com/free-photo/adult-male-doing-follicular-unit-extraction_23-2149106334.jpg?t=st=1730051734~exp=1730055334~hmac=494b110da14106dda6a7564b697f21b68fb42c1a888aebf2ad7e5b1950892f98&w=1060",
        },
        {
          name: "ENT",
          imageUrl: "https://img.freepik.com/free-photo/hearing-exam-otolaryngologist-doctor-checking-woman-s-ear-using-otoscope-auriscope-medical-clinic_657921-262.jpg?t=st=1730051830~exp=1730055430~hmac=f36e23e982fdb4923ed86a5fa6ef85ae85b66b0f4da5e8430847e7ded7c66a25&w=1060",
        },
      ];
    const responsive = {
        extraLarge: {
          breakpoint: { max: 3000, min: 1324 },
          items: 4,
          slidesToSlide: 1, // optional, default to 1.
        },
        large: {
          breakpoint: { max: 1324, min: 1005 },
          items: 3,
          slidesToSlide: 1, // optional, default to 1.
        },
        medium: {
          breakpoint: { max: 1005, min: 700 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
        small: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };  
  return (
    <>
    <div className="container departments">
        <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={[
          // "superLargeDesktop",
          // "desktop",
          "tablet",
          "mobile",
        ]}>
            {departmentsArray.map((depart,index)=>{
                return(
                    <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
                )
            })}
        </Carousel>


    </div>
    </>
  )
}

export default Department