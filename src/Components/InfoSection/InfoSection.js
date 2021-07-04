import './InfoSection.css';

const InfoSection = ({topic, body, img, even}) => {
    return (
        <div className={even ? "info-container" : "info-container bg-secondary text-white"}>
            <div className={even ? "container-lg d-flex justify-content-between" : "container-lg d-flex justify-content-between flex-row-reverse"} style={{padding: 0}}>
                <div>
                    <h3 className="display-6" >{topic}</h3>
                    <p className="py-2">{body}</p>
                </div>
                <div>
                    <img src={img} width={150} height={150} alt="earth icon to represent global access"/>
                </div>
            </div>
        </div>
    );
}
 
export default InfoSection;