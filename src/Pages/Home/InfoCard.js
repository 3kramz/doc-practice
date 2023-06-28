import React from 'react';

const InfoCard = (props) => {
    const {title, description, icon, background} = props.item;
    return (
        <div className={`px-5 card lg:card-side bg-base-100 shadow-xl ${background} text-white`}>
            <figure><img src={icon} alt="Album" /></figure>
            <div className="card-body flex flex-col">
                <h2 className="card-title ">{title}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;