
import './about.css'
import BoardTeam from './boardTeam/boardTeam';
import Row from 'react-bootstrap/esm/Row';

const About = ()=>{
    return (
        <div>
            <div class="about-section">
              <h1>About Us Page</h1>
              <p>We are the bridge between skilled manpower and clients!</p>
              <p>Join the community of developers in Nepal to earn a few bucks with your skills</p>
            </div>

           <Row id='about-row'>
           <BoardTeam  id="board-card" name="Aryan Pokharel" post = "CEO & Founder" description = "Aryan is the founder and architect of Freelance Nepal platform." email = "aryanpokharel417@gmail.com" contact = "https://www.facebook.com/aryan.pokharel.167" 
           image="https://t4.ftcdn.net/jpg/03/51/83/61/360_F_351836147_uDNTpTo4Jn5QyxR5zSNgyk7QVSShwckg.jpg"
           />
              
            <BoardTeam name="Mike Ross" post = "Art Director" description = "Mike is the chief designer of arts in this platform." 
            email = "mike123321@example.com" contact = "/about" 
            image="https://www.aljazeera.com/wp-content/uploads/2016/04/6ef4d616b2124e1599aa0f1228b2ecbe_8.jpeg?fit=1170%2C780"
            />

            <BoardTeam name="John Doe" post = "Designer" description = "John designs all the digital arts in this platform" 
            email = "johndoe12345@example.com" contact = "/about" 
            image="http://www.tradekeyindia.com/Pimages/e7b8badd51a16a12806e08544a7c7392"
            />
              

           </Row>
              
             
            
        </div>
    )
}
export default About;