import './InfoSection.css';

const InfoSection = ({topic, body, img, even}) => {
    return (
        <div className={even ? "info-container container" : "info-container bg-secondary text-white"}>
            <div className={even ? "container-lg d-flex justify-content-between" : "container-lg d-flex justify-content-between flex-row-reverse"} >
                <div className="p-3">
                    <h3 className="display-6" >{topic}</h3>
                    <p className="py-2">{body}</p>
                </div>
                <div className="p-3">
                    <img src={img} width={"150em"} height={"150em"} alt="earth icon to represent global access"/>
                </div>
            </div>
        </div>
    );
}
 
export default InfoSection;