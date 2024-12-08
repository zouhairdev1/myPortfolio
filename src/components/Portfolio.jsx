import Image from "next/image";

export default function Portfolio(){
    return(
        <div id="portfolio">
  <div className="container">
    <h1 className="sub-title">My Work</h1>
    <div className="work-list">
      <div className="work">
        <Image src="./one-peice.jpg" alt="Work 1"/>
        <div className="layer">
          <h3>Social Media App</h3>
          <p>The app connects you yo the talented people around the world. Download it from play store.</p>
          <a href="#"><i className="fas fa-external-link-alt"></i></a>
        </div>
      </div>
      <div className="work">
        <img src="./one-peice.jpg" alt="Work 2"/>
        <div className="layer">
          <h3>Social Media App</h3>
          <p>The app connects you yo the talented people around the world. Download it from play store.</p>
          <a href="#"><i className="fas fa-external-link-alt"></i></a>
        </div>
      </div>
      <div className="work">
        <img src="./one-peice.jpg" alt="Work 3"/>
        <div className="layer">
          <h3>Social Media App</h3>
          <p>The app connects you yo the talented people around the world. Download it from play store.</p>
          <a href="#"><i className="fas fa-external-link-alt"></i></a>
        </div>
      </div>
    </div>
    <a href="#" className="btn"> See more</a>
   
  </div>
</div>
    )
}