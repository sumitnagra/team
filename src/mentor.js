import './mentor.css'
import React, { useState, useEffect } from 'react';

const Mentor = () => {
  
    const slideContents = [{
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    }, {
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    }, {
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    }, {
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    }, {
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    }, {
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    }, {
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    }, {
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    },
 {
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    },
 {
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    },
 {
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    },
 {
        name: "Mandar Tornekar",
        image: "https://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg",
        uniName: "GMC Dhule"
    },
];
   
    return (
        <>
            <div className="mentor">
                <h4>Meet Your Mentors</h4>
                <div className='Subject'>
                    <div className="mentorList">
                                {slideContents.map((content) => (
                                   <div className="mentordetails">
                                        <img src={content.image} />
                                        <div >{content.name}</div>
                                        <div>{content.uniName}</div>
                                    </div>
                                ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mentor