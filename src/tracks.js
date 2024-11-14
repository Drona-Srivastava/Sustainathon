import './Tracks.css'
import track1 from './track1p.png'
import track2 from './track2-removebg-preview.png'
import track3 from './track3-removebg-preview.png'
function Tracks()
{
    return(
  <div className="tracks1">
       
        <div className="circle-container">
            
                <div className="border-1"></div>
    <div className="border-2"></div>
    <div className="border-3"></div>
    <div className="blur-circle blur-circle-1"></div>
    <div className="blur-circle blur-circle-2"></div>
    <div className="blur-circle blur-circle-3"></div>
    
    <div className = "white-circle2"></div>
    <div className = "white-circle3"></div>

        <div className="center-circle">
          <div className="tracks">TRACKS</div>
         </div>
         
      </div>

      <div className="circle1">
        <img src = {track2}></img>
       
        </div>
        <div className="circle2">
       <img src = {track1}></img>
        </div>
        <div className="circle3">
       <img src = {track3}></img>
        </div>
  </div>
    
    );
}
export default Tracks