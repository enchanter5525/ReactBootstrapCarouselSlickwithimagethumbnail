import * as React from 'react';
import './style.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
  React.useEffect(() => {
    // let ele = document.getElementsByClassName('carousel-indicators');
    // for (let i = 0; i < ele.length; i++) {
    //   ele[0].children[i].style.height = '2rem';
    //   ele[0].children[i].style.width = '2rem';
    //   ele[0].children[i].style.background =
    //     "url('https://staticimg.titan.co.in/Titan/Catalog/90140SM01_3.jpg?pView=thumb') no-repeat";
    //   ele[0].children[i].style.backgroundPosition = 'center center';
    //   ele[0].children[i].style.backgroundSize = '38px 38px';
    // }
    // ele[0].children[0]?.style['background'] = "url('https://staticimg.titan.co.in/Titan/Catalog/90140SM01_3.jpg?pView=thumb')";
  });

  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.titan.co.in/wps/wcm/connect/titan/e9eec509-6436-4c22-b253-7a457bb0390b/desktop/2500x1000_1.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-e9eec509-6436-4c22-b253-7a457bb0390b-desktop-o2S-3xj&impolicy=pqlow"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.titan.co.in/wps/wcm/connect/titan/e9eec509-6436-4c22-b253-7a457bb0390b/desktop/2500x1000_1.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-e9eec509-6436-4c22-b253-7a457bb0390b-desktop-o2S-3xj&impolicy=pqlow"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.titan.co.in/wps/wcm/connect/titan/e9eec509-6436-4c22-b253-7a457bb0390b/desktop/2500x1000_1.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-e9eec509-6436-4c22-b253-7a457bb0390b-desktop-o2S-3xj&impolicy=pqlow"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
