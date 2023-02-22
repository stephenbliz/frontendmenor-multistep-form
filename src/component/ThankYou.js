import thankYou from '../images/icon-thank-you.svg';

const ThankYou = ({prevStep}) => {
    return (
        <div className="info-side">
            <div className="thank-you-wrapper">
                <div className="thank-image-wrapper">
                    <img src={thankYou} alt="" className="thank-image" />
                </div>
                <h1>Thank you!</h1>
                <p>
                    Thanks for confirming your subscription. We hope you
                    have fun using our platform. If you ever need support,
                    please feel free to contact us at support@loremgaming.com.

                </p>
            </div>
        
                <button onClick={()=>prevStep()} className='back switch-btn'>Back</button>
            
        </div>
    );
}
 
export default ThankYou;