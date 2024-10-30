import './Speakers.css'
import icon from './icon.jpeg'
function Speakers()
{
    return(
        <div className="speakers">
            <div className="chat-container">
            <div className="profile-picture">
                 <img src={icon} alt="Profile" />
               </div>
               <div className="arrow"></div>
               <div className="chat-bubble">
                 {/* Add text or content in the chat bubble here */}
               </div>
             </div>
             <div className="chat-container2">
               <div className="profile-picture2">
                 <img src={icon} alt="Profile" />
               </div>
               <div className="arrow2"></div>
               <div className="chat-bubble">
                 {/* Add text or content in the chat bubble here */}
               </div>
             </div>
             <div className="chat-container">
               <div className="profile-picture">
                 <img src={icon} alt="Profile" />
               </div>
               <div className="arrow"></div>
               <div className="chat-bubble">
                 {/* Add text or content in the chat bubble here */}
               </div>
             </div>
          </div>
    );
}
export default Speakers;