
import ClientsMessage from "./clientsMessage/clientsMessage";
import FreelancersMessage from "./freelancersMessage/freelancersMessage";
import "./home.css"


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import MyCarousel from "./carousel/carousel";

const Home = ()=>{
    return (
        <div>

            <MyCarousel />
            
            <Alert variant="info">
            <h2>Here's what our Freelancers say!</h2>
        </Alert>

    
    <FreelancersMessage  variant="danger" name="John Doe" message="This platform provided me with the greatest opportunity to hone my skills in Web Development. I am thankful to Freelance Nepal!"  
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDd_LFpavoNIrdaDqPVDfPu_mcEF6CEoW6qQ&usqp=CAU"
    />
    <FreelancersMessage  variant="secondary" 
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrYpohjhQQnvWmiEpwmAhpgkN-weqRYIjCQ&usqp=CAU" 
    name="Ram Thapa" message="This site gave a good boost to my confidence in music production as i got to defeat my imposter syndrome when i got a peek into actual market of music industry!" />

    <FreelancersMessage  variant="info" name="Shyam Gopal" message="In short and sweet sense, if you're a fresh IT student in Nepal and are looking for a job or project, join Freelance Nepal. "
    image="https://this-person-does-not-exist.com/static/images/fake-2.jpg"
    />

    
    <Alert variant="warning">
    <h2>Also, lets hear from our clients</h2>
        </Alert>
            <ClientsMessage variant="primary" name="Hari Gopal" message="Got what i was looking for in its best possible way!" 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1x_1ueYyzVI5MQ8SZMG6iKA7w-EpP_Q6riA&usqp=CAU" />

<ClientsMessage variant="success" name="Sita Kumari" message="I would recommend Freelance Nepal to anybody looking to complete their projects at the best price & shortes time length!" 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwDZXo3xEb2h6yuNE3lpqgCD4zcFYGzbTS4A&usqp=CAU" />

<ClientsMessage variant="warning" name="Gopal Singh" message="Freelance Nepal is definitely the future of freelancing in Nepal due to its client friendly nature!" 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpBI5Dc-Bsb1F5DyzZOohX9r9QmpcyHH3zQ&usqp=CAU" />
        

        <Alert variant="warning">
    <h2>Checkout Our Photo Gallery</h2>
        </Alert>
        <Card className="bg-dark text-white" id="galleryImg">
      <Card.Img 
      src="https://legaldesire.com/wp-content/uploads/2021/04/AdobeStock_205600667.jpeg" 
      alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white" id="galleryImg">
      <Card.Img 
      src="https://static.jeffbullas.com/wp-content/uploads/2015/01/Are-You-a-Content-Writer-Check-Out-These-10-Amazing-Sites-That-Will-Pay-You-for-Your-Writing.jpg" 
      alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white" id="galleryImg">
      <Card.Img 
      src="https://st2.depositphotos.com/4431055/11856/i/600/depositphotos_118568872-stock-photo-handsome-caucasian-lawyer.jpg" 
      alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
    <hr></hr>
    <Card className="bg-dark text-white" id="galleryImg">
      <Card.Img 
      src="https://cdn.sanity.io/images/7g6d2cj1/production/6b5ebabcc318c675c2e30a4c63895249f391f3e4-1000x604.jpg?h=604&q=70&auto=format" 
      alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white" id="galleryImg">
      <Card.Img 
      src="https://media.istockphoto.com/photos/cheerful-young-brunet-freelancer-is-smiling-typing-on-his-laptop-in-picture-id932763106?k=20&m=932763106&s=612x612&w=0&h=oMBqKHfXjKo0oKIi_cajQ0nVTOY7nGHR7wUVgBNXHB4="
      alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card className="bg-dark text-white" id="galleryImg">
      <Card.Img 
      src="https://c0.wallpaperflare.com/preview/936/202/464/blog-business-copywriter-couch.jpg" 
      alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
        
        
        </div>
      
    )
}

export default Home;