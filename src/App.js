import SideNav from "./component/SideNav";
import {useState} from "react";
import AddOns from "./component/AddOns";
import FinishingUp from "./component/FinishingUp";
import PersonalInfo from "./component/PersonalInfo";
import SelectPlan from "./component/SelectPlan";
import ThankYou from "./component/ThankYou";



const App = () => {

  const [userInfo, setUserInfo] = useState({
    name:'',
    email:'',
    phone:'',
    plan:'arcade',
    arcadeprice: 9,
    advancedprice: 12,
    yearlyPlan: false,
    proprice: 15,
    osprice: 1, 
    lsprice: 2,
    cpprice: 2,
    onlineSer: false,
    largeSto: false,
    customProfile: false
  })
  
  const [step, setStep] = useState(1);

  const prevStep = () => {
    setStep(step - 1);
  };
  const takeToPlans = ()=>{
    setStep(2);
  }

  const nextStep = () => {
    setStep(step + 1);
  };

  const displayInfo = () => {
    switch(step){
      case 1:
        return(<PersonalInfo
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
          />)
      case 2: 
        return(<SelectPlan
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          step={step}
          prevStep={prevStep}
          nextStep={nextStep} 
          />)
      case 3:
        return(<AddOns
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
          />)
      case 4:
        return(<FinishingUp 
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          step={step}
          takeToPlans={takeToPlans}
          prevStep={prevStep}
          nextStep={nextStep}
          />)
      case 5:
        return(<ThankYou
          prevStep={prevStep} 
          />)
      default:
        return(<div>Invalid Page</div>)
    }
  }

  return (
    <div className="form">
     <SideNav step={step}/>
     {displayInfo()}
    </div>
  );
}

export default App;
