import { useRef } from "react";

const PersonalInfo = ({nextStep, userInfo, setUserInfo, pattern, takeToPlans, validation}) => {

    
    const {name, email, phone} = userInfo;
    const field = useRef();

    return (
        <div className="info-side">
            <h1>Personal info</h1>
            <p>
                Please provide your name, email address and phone number.
            </p>
            <form>
                <div className="input-wrapper">
                    <label>Name</label>
                    <input 
                        type="text"
                        required
                        ref={field}
                        placeholder="e.g Stephen Bliss"
                        name="name"
                        value={name}
                        onChange={(e)=>setUserInfo({...userInfo, name: e.target.value})}
                        onKeyUp={(e)=>validation(pattern.name, e.target)}
                     />
                     <p>must include only letters, case insensitve, and may include a space 
                        between names.
                     </p>
                </div>
                <div className="input-wrapper">
                    <label>Email Address</label>
                    <input 
                        type="text"
                        required
                        ref={field}
                        placeholder="e.g uzomaebuka11@gmail.com"
                        name="email"
                        value={email}
                        onChange={(e)=>setUserInfo({...userInfo, email: e.target.value})}
                        onKeyUp={(e)=>validation(pattern.email, e.target)}
                     />
                     <p>
                        must include lower case letters or numbers or _, and must include @ and . extention of the email.
                     </p>
                </div>
                <div className="input-wrapper">
                    <label>Phone Number</label>
                    <input 
                        type="text"
                        required
                        ref={field}
                        name="phone"
                        placeholder="e.g +1234567890"
                        value={phone}
                        onChange={(e)=>setUserInfo({...userInfo, phone: e.target.value})}
                        onKeyUp={(e)=>validation(pattern.phone, e.target)}
                     />
                     <p>
                        must include + followed by your number. No space is required.
                     </p>
                </div>
            </form>
            <button type='submit' onClick={()=>{
                if(field.current.className === 'invalid' || field.current.value.length === 0){
                    takeToPlans(1)
                    // console.log(field.current.value.length)
                    alert('Please fill out the form');
                }else{
                    nextStep();
                }
                }} 
                className='next switch-btn'
            >
                Next Step
            </button>
        </div>
        
    );
}
 
export default PersonalInfo;