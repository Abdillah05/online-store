import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png"

const DevicePage = () => {
    const device = {id:1, name:'iphone 12 pro', price: 25000, rating:5, img:'https://www.ixbt.com/img/x780x600/r30/00/02/34/83/IMG8464.jpg'}
const description = [
    {id:1, title:'Operation memory', description: '5 gb'},
    {id:2, title:'Camera', description: '12 mp'},
    {id:3, title:'Processor', description: 'Pentium 3'},
    {id:4, title:'Core count', description: '4'},
    {id:5, title:'Accum', description: '4000'},

]
    return (
  

         <Container className='mt-3'>
             <Row>

                 
<Col md={4}>
<Image width={300} height={300} src={device.img} />

</Col>
<Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
<Col md={4}>
<Card
className='d-flex flex-column align-items-center justify-content-around'
style={{width: 300, height: 300, fontSize:32, border: '5px solid lightgray'}}
>
<h3> От: {device.price}</h3>
<Button variant={'outline-dark'}> Добавить в корзину</Button>
</Card>

</Col>
             </Row>

             <Row className='d-flex flex-column m-3'>
                 <h1>Характеристики</h1>
                 {description.map((info, index) => 
                 <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}}>
                     {info.title} : {info.description}
                 </Row>
                 )}
             </Row>
         </Container>
  
      ); 
  };
  
  
  export default DevicePage