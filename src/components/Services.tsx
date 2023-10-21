import React from 'react'

type Props = {
  setCurrentPage: (page:string)=>void
}

export const Services = (props: Props) => {


  const handleServicesClick = (page: string) => {
    props.setCurrentPage(page)
  }

  return (
    <div className='services'>
      <h2>Our Services Include:</h2>

<div className="service septic">
<h3>Septic System Installation:</h3> 
<p>We excel in the installation of new septic systems, ensuring compliance with all regulations and environmental standards. Our attention to detail guarantees a reliable and efficient system for your property.</p>
</div>

<div className="service lateral">
<h3>Lateral Lines, Water Lines, and Sewer Lines:</h3> 
<p>We offer complete solutions for lateral lines, water lines, and sewer lines, employing cutting-edge techniques and materials to enhance the functionality and longevity of your infrastructure.</p>
</div>

<div className="service curtain-drains">
<h3>Curtain Drains and Electric Ditches:</h3> 
<p>We construct curtain drains and electric ditches to effectively manage water runoff, preventing erosion and maintaining the integrity of your property.</p>
</div>

<div className="service drainage-ditch">
<h3>Drainage Ditches:</h3> 
<p>Our expertise extends to the creation of drainage ditches, optimizing water flow and reducing the risk of flooding or water-related damage.</p>
</div>

<div className="service driveway">
<h3>Driveway Construction and Maintenance:</h3> 
<p>Whether you need a new driveway or want to revamp an existing one, our team can handle projects of various sizes. We offer rock and rerock driveway services to enhance both functionality and aesthetics.</p>
</div>

<div className="service drainage">
<h3>House and Barn Drainage:</h3> 
<p>We implement specialized drainage solutions around houses and barns, safeguarding your valuable structures from water damage and ensuring a dry and stable environment.</p>
</div>

<div className="service excavation">
  <h3>Small-Scale Excavation:</h3>
  <p>Our professionals are well-equipped to handle excavation projects on a smaller scale, delivering precise and efficient results for a variety of needs.</p>
</div>

<div className="service contact-us">
  <a onClick={()=>handleServicesClick('contact')} href="#contact">Contact us</a> <p>today to discuss</p> <p>your excavation and utility needs!</p>
</div>
<div className='service'></div>
    </div>
  )
}
