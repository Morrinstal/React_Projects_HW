import Park from "../assets/Park.jpg"
import statue from "../assets/StatueOfLiberty.jpg"
import square from "../assets/Times.jpg"
import museum from "../assets/MetMuseum.jpg"

export const CitySightseeings = () => {
    return(
    <>
        <h2>Sightseeings</h2>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <div>
                <img src={statue} alt="Statue of Liberty" style={{ width: '300px', borderRadius: '10px' }} />
                <p><b>Statue of Liberty</b></p>
            </div>
            <div>
                <img src={Park} alt="Central Park" style={{ width: '300px', borderRadius: '10px' }} />
                <p><b>Central Park</b></p>
            </div>
            <div>
                <img src={square} alt="Times Square" style={{ width: '300px', borderRadius: '10px' }} />
                <p><b>Times Square</b></p>
            </div>
            <div>
                <img src={museum} alt="Metropolitan Museum" style={{ width: '300px', borderRadius: '10px' }} />
                <p><b>Metropolitan Museum</b></p>
            </div>
        </div>
    </>)    
};