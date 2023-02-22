const SideNav = ({step}) => {

    const navInfos = [
        {name: 'step 1', info: 'Personal info', num:1, id: 1 },
        {name: 'step 2', info: 'Select your plan', num:2, id: 2 },
        {name: 'step 3', info: 'Pick add-ons', num:3, id: 3 },
        {name: 'step 4', info: 'Finishing up', num:4, id: 4 }
    ];
    
    const bckColor = {
        backgroundColor:'hsl(206, 94%, 87%)',
        color:'black'
    };

    return (
        <>
            <div className="side-nav">
                {navInfos.map((navInfo) => (
                    <div className="nav-item" key={navInfo.id}>
                        { step === navInfo.id ?<div className="num" style={bckColor}>{navInfo.num}</div>
                        :<div className="num">{navInfo.num}</div>}
                        <div className="nav-info">
                            <div className="nav-name">{navInfo.name}</div>
                            <div className="info">{navInfo.info}</div>
                        </div>
                    </div>
                ))}
                
            </div>
        </>
    );
}
 
export default SideNav;