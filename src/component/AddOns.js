
const AddOns = ({prevStep, nextStep, userInfo, setUserInfo}) => {

    const {
        osprice, 
        lsprice, 
        cpprice, 
        onlineSer, 
        largeSto, 
        customProfile, 
        yearlyPlan
    } = userInfo;
    


    return (
        <div className="info-side">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>
            <form className="form-addons">
                <div className={`add-ons ${onlineSer && "change-bck"}`}>
                        <input 
                            type="checkbox"
                            id="os" 
                            name="online-service"
                            value={onlineSer}
                            checked={onlineSer}
                            onChange={()=>setUserInfo({...userInfo, onlineSer:!onlineSer})}

                        />
                        <label htmlFor='os'>
                            <h3>Online service</h3>
                            <p>Access to multiplayer game</p>
                        </label>
                        {!yearlyPlan &&<p className='price'>+${osprice}/mo</p>}
                        {yearlyPlan &&<p className='price'>+${osprice * 10}/yr</p>}
                </div>
                <div className={`add-ons ${largeSto && "change-bck"}`}>
                        <input 
                            type="checkbox"
                            id="ls" 
                            name="large-storage"
                            value={largeSto}
                            checked={largeSto}
                            onChange={()=>setUserInfo({...userInfo, largeSto:!onlineSer})}

                        />
                        <label htmlFor='ls'>
                            <h3>Larger storage</h3>
                            <p>Extra 1TB of cloud save</p>
                        </label>
                        {!yearlyPlan &&<p className='price'>+${lsprice}/mo</p>}
                        {yearlyPlan &&<p className='price'>+${lsprice * 10}/yr</p>}
                </div>
                <div className={`add-ons ${customProfile && "change-bck"}`}>
                        <input 
                            type="checkbox"
                            id="cp" 
                            name="customizable-profile"
                            value={customProfile}
                            checked={customProfile}
                            onChange={()=>setUserInfo({...userInfo, customProfile:!customProfile})}

                        />
                        <label htmlFor='cp'>
                            <h3>Customizable profile</h3>
                            <p>Custom theme on your profile</p>
                        </label>
                        {!yearlyPlan &&<p className='price'>+${cpprice}/mo</p>}
                        {yearlyPlan &&<p className='price'>+${cpprice * 10}/yr</p>}
                    
                </div>
            </form>
    
                <button onClick={()=>prevStep()} className='back switch-btn'>Back</button>
                <button onClick={()=>nextStep()} className='next switch-btn'>Next</button>
            
        </div>
    );
}
 
export default AddOns;