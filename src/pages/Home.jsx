import React from 'react';
import '../App.css';
import featurePhotoOne from '../images/feature-photo-one.jpg';
import featurePhotoTwo from '../images/feature-photo-two.jpg';
import { v4 as uuidv4 } from "uuid";

import { featureSets, sponsors } from '../data';



function FeatureInfo({title,detail,buttonTitle}) {
    return (
        
        <div key={uuidv4()} className='feature-info'>
            <h2>{title}</h2>
            <p>{detail}</p>
            <button className='feature-button'>{buttonTitle}</button>
        </div>
        
    )
}

export default function Home() {
   return (
    <>
        <div className='banner'>
            <div key={uuidv4()} className='banner-info'>
                <FeatureInfo {...featureSets[0]} />
            </div>
        </div>
        <div key={uuidv4()} className='features'>
            <img className='feature-photo' src={featurePhotoOne} alt='Starbucks Featured drinks watermelon'/>
            <FeatureInfo {...featureSets[1]}/>
        </div>
        <div key={uuidv4()} className='features'>
            <FeatureInfo {...featureSets[2]}/>
            <img className='feature-photo' src={featurePhotoTwo} alt='Starbucks Featured drinks oatmilk coffee'/>
        </div>
        <div className='sponsors'>
            
            {sponsors.map(sponsor => 
                 (<div key={uuidv4()} className='sponsor-logo-container'>
                    <img src={sponsor.logo} alt="starbucks logo"/>
                    </div>
                )
            )}
            
        </div>

    </>
   )
}