import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default function SocialMedia({icon, link}) {

    return (
      <div>
        <div>
          <a
          href={link}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        </div>
        
      </div>
    )
  }