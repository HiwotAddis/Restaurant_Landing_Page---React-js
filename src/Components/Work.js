import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'
const Work = () => {
  const workInfoData=[
    {
      image: PickMeals,
      title:"Pick Meals",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa "
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa "
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa "
    },

  ]
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>work</p>
        <h1 className='primary-heading'>How It Works</h1>
        <p className='primary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div>
      <div className='work-section-bottom'>
        {
          workInfoData.map((data)=>(
            <div className='work-section-info' key={data.title}>
              <div className='info-boxes-img-container'>
                <img src={data.image} alt=''/>
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Work
