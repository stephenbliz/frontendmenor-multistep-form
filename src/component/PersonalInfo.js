const PersonalInfo = ({nextStep, userInfo, setUserInfo}) => {

    const {name, email, phone} = userInfo;

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
                        placeholder="e.g Stephen Bliss"
                        name="name"
                        value={name}
                        onChange={(e)=>setUserInfo({...userInfo, name: e.target.value})}
                     />
                </div>
                <div className="input-wrapper">
                    <label>Email Address</label>
                    <input 
                        type="text"
                        required
                        placeholder="e.g uzomaebuka11@gmail.com"
                        name="email"
                        value={email}
                        onChange={(e)=>setUserInfo({...userInfo, email: e.target.value})}
                     />
                </div>
                <div className="input-wrapper">
                    <label>Phone Number</label>
                    <input 
                        type="text"
                        required
                        name="phone"
                        placeholder="e.g +1234567890"
                        value={phone}
                        onChange={(e)=>setUserInfo({...userInfo, phone: e.target.value})}
                     />
                </div>
            </form>
            <button onClick={()=>nextStep()} className='next switch-btn'>Next Step</button>
        </div>
        
    );
}
 
export default PersonalInfo;