const FinishingUp = ({prevStep, nextStep, userInfo, takeToPlans}) => {

    const {
        plan, 
        yearlyPlan, 
        arcadeprice,
        proprice,
        advancedprice,
        osprice,
        onlineSer,
        largeSto,
        customProfile,
        lsprice,
        cpprice
        } = userInfo;

        const handleCalc = () => {
            let result = 0;
          
            const itemAddons = [
              { state: onlineSer, price: osprice },
              { state: largeSto, price: lsprice },
              { state: customProfile, price: cpprice }
            ];
          
            result = itemAddons.reduce((total, itemAddon) => {

              if (itemAddon.state === true) {
                return total + itemAddon.price;

              }
              return total; // explicitly return total even if condition is not met
            }, 0);
          
            let sum = 0;

            switch(plan){
                
                case 'arcade':
                    return sum = result + arcadeprice;
                case 'advanced':
                    return sum = result + advancedprice;
                case 'pro':
                    return sum = result + proprice;
            }
            
          }

          
          

        

    return (
        <div className="info-side">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>

            <div className="finish-wrapper">
                <div className="finish-plan-wrapper">
                    {plan ==='arcade' &&<div className="finish-plan">
                        <div className="plann">
                            <p>{plan} {!yearlyPlan ?<span>(Monthly)</span>:<span>(Yearly)</span>}</p>
                            <div onClick={()=>takeToPlans()}>change</div>
                        </div>
                        {!yearlyPlan &&<p>{`$${arcadeprice}/mo`}</p>}
                        {yearlyPlan &&<p>{`$${arcadeprice* 10}/yr`}</p>}
                    </div>}

                    {plan ==='advanced' &&<div className="finish-plan">
                        <div className="plann">
                            <p>{plan} {!yearlyPlan ?<span>(Monthly)</span>:<span>(Yearly)</span>}</p>
                            <div onClick={()=>takeToPlans()}>change</div>
                        </div>
                        {!yearlyPlan &&<p>{`$${advancedprice}/mo`}</p>}
                        {yearlyPlan &&<p>{`$${advancedprice* 10}/yr`}</p>}
                    </div>}

                    {plan ==='pro' &&<div className="finish-plan">
                        <div className="plann">
                            <p>{plan} {!yearlyPlan ?<span>(Monthly)</span>:<span>(Yearly)</span>}</p>
                            <div onClick={()=>takeToPlans()}>change</div>
                        </div>
                        
                        {!yearlyPlan &&<p>{`$${proprice}/mo`}</p>}
                        {yearlyPlan &&<p>{`$${proprice* 10}/yr`}</p>}
                    </div>}
                </div>
                <div className="finish-addons-wrapper">
                    {onlineSer &&<div className="finish-addons">
                        <p>Online service</p>
                        {!yearlyPlan &&<p className="prices">+${osprice}/mo</p>}
                        {yearlyPlan &&<p className="prices">+${osprice*10}/yr</p>}
                    </div>}

                    {largeSto &&<div className="finish-addons">
                        <p>Larger storage</p>
                        {!yearlyPlan &&<p className="prices">+${lsprice}/mo</p>}
                        {yearlyPlan &&<p className="prices">+${lsprice*10}/yr</p>}
                    </div>}

                    {customProfile &&<div className="finish-addons">
                        <p>Customizable profile</p>
                        {!yearlyPlan &&<p className="prices">+${cpprice}/mo</p>}
                        {yearlyPlan &&<p className="prices">+${cpprice*10}/yr</p>}
                    </div>}
                </div>
            </div>

            {!yearlyPlan && <div className="total-price">
                <p>Total (per month)</p>
                <p className="prize">{`+$${handleCalc()}/mo`}</p>
            </div>}

            {yearlyPlan && <div className="total-price">
                <p>Total (per year)</p>
                <p className="prize">{`+$${handleCalc() * 10}/yr`}</p>
            </div>}

            {/* {!yearlyPlan &&<h1>{`+${handleCalc()}/mon`}</h1>}
            {yearlyPlan &&<h1>{`+${handleCalc() * 10}/yr`}</h1>} */}
    
                <button onClick={()=>prevStep()} className='back switch-btn'>Back</button>
                <button onClick={()=>nextStep()} className='next switch-btn'>Next</button>
            
        </div>
    );
}
 
export default FinishingUp;