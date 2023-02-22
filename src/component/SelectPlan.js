import ArcadeIcon from '../images/icon-arcade.svg';
import AdvancedIcon from '../images/icon-advanced.svg';
import ProIcon from '../images/icon-pro.svg';
import { useRef} from 'react';


const SelectPlan = ({prevStep, nextStep, userInfo, setUserInfo}) => {

    const {
        plan, 
        arcadeprice, 
        advancedprice, 
        proprice, 
        yearlyPlan
    } = userInfo;
    
    const monPlan = useRef();
    const yrPlan = useRef();


    const handleMonthly = () =>{
        
        if(yearlyPlan){
            monPlan.current.style.color='hsl(213, 96%, 18%)'
            yrPlan.current.style.color='hsl(231, 11%, 63%)'
        
        }else if(!yearlyPlan){
            monPlan.current.style.color='hsl(231, 11%, 63%)'
            yrPlan.current.style.color='hsl(213, 96%, 18%)'
            
        }
    }
    
    return (
        <div className="info-side">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
            <form className='form-radio'>
                <div className={`div-radio bck-color ${plan=== 'arcade'? 'bck-color':'white'}`}>
                   <input 
                        type="radio"
                        name='plan'
                        id='arcade'
                        value='arcade'
                        checked={plan === 'arcade'}
                        onChange={(e)=>{
                            setUserInfo({...userInfo, plan: e.target.value})
                            
                        }}
                    /> 
                    <label htmlFor="arcade" >
                        <div className="icon-wrapper"><img src={ArcadeIcon} alt="arcade icon" className="icon" /></div>
                        <p className="plan-details">
                            Arcade { !yearlyPlan &&<span>{`$${arcadeprice}/mo`}</span>}
                                   {yearlyPlan &&<span>{`$${arcadeprice*10}/yr`}</span>}
                                   { yearlyPlan &&<span className='promo'>2 months free</span>}
                        </p>
                    </label>
                </div>
                <div className={`div-radio ${plan=== 'advanced'? 'bck-color':'white'}`}>
                   <input 
                        type="radio"
                        name='plan'
                        id='advanced'
                        value='advanced'
                        checked={plan === 'advanced'}
                        onChange={(e)=>{
                            setUserInfo({...userInfo, plan: e.target.value})
                            
                        }}
                    /> 
                    <label htmlFor="advanced">
                        <div className="icon-wrapper"><img src={AdvancedIcon} alt="advanced icon" className="icon" /></div>
                        <p className="plan-details">
                            Advanced { !yearlyPlan &&<span>{`$${advancedprice}/mo`}</span>}
                                     { yearlyPlan &&<span>{`$${advancedprice*10}/yr`}</span>}
                                     { yearlyPlan &&<span className='promo'>2 months free</span>}
                        </p>
                    </label>
                </div>
                
                <div className={`div-radio ${plan=== 'pro'? 'bck-color':'white'}`}>
                   <input 
                        type="radio"
                        name='plan'
                        id='pro'
                        value='pro'
                        checked={plan === 'pro'}
                        onChange={(e)=>{
                            setUserInfo({...userInfo, plan: e.target.value})
                            
                        }}
                    /> 
                    <label htmlFor="pro">
                        <div className="icon-wrapper"><img src={ProIcon} alt="pro icon" className="icon" /></div>
                        <p className="plan-details">
                            Pro { !yearlyPlan &&<span>{`$${proprice}/mo`}</span>}
                                {yearlyPlan &&<span>{`$${proprice*10}/yr`}</span>}
                                { yearlyPlan &&<span className='promo'>2 months free</span>}
                        </p>
                    </label>
                </div>
            </form>
            
            
            <div className="duration-switch-container">
                <div className="monthly-plan plan-duration" ref={monPlan}>Monthly</div>
                <div className="duration-btn-wrapper">
                    <label htmlFor='sw' className={`duration-btn ${!yearlyPlan ? 'left' : 'right'}`}
                        onClick={()=>{
                            handleMonthly();
                        }}
                    >
                        <input 
                        id='sw'
                    type="checkbox"
                    checked={!yearlyPlan}
                    value={yearlyPlan}
                    className='hidden'
                    onChange={()=> setUserInfo({...userInfo, yearlyPlan: !yearlyPlan})}
                />
                    </label>
                </div>
                
                <div className="yearly-plan plan-duration" ref={yrPlan}>Yearly</div>
            </div>
            
        
                <button onClick={()=>prevStep()} className='back switch-btn'>Back</button>
                <button onClick={()=>nextStep()} className='next switch-btn'>Next</button>
        
        </div>
    );
}
 
export default SelectPlan;