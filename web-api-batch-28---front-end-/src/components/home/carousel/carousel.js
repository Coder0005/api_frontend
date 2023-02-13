import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = ()=> {
    return (
           
<Carousel>
      <Carousel.Item>
      <img class="card-img" 
                    src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" 
                    alt="Person Dp" />
        <Carousel.Caption>
          <h3>In Search Of Fine Finishing To Your Works?</h3>
          <p>We guarantee to provide you with a pool of skilled human resource, sorted just for your tasks!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1487073240288-854ac7f1bb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZWxhbmNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Got An Idea But Lack The Skills?</h3>
          <p>Don't let your unique ideas to rust away within yourself. Give them a life as we deliver the manpower to transform your ideas into reality!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZWxhbmNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Unable To Capitalize Skills?</h3>
          <p class="text-danger">
            Any skill is precious in today's era. Gain the most out of your skills by working with us!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    )
 
}

export default MyCarousel;