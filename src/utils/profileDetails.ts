import profileImage1 from '../assets/svgs/profileImage1.png'
import profileImage2 from '../assets/svgs/profileImage2.png'
import profileImage3 from '../assets/svgs/profileImage3.png'
import profileImage4 from '../assets/svgs/profileImage4.png'
import profileImage5 from '../assets/svgs/profileImage5.png'
import profileImage6 from '../assets/svgs/profileImage6.png'

//Type definition for profile objects using interface


export interface Profile{
    name:string,
    image:string
}


const profile:Profile[] = [
    {name:'Adil',image:profileImage1},
    {name:'Kishan',image:profileImage2},
    {name:'Dasappan',image:profileImage3},
    {name:'Safana',image:profileImage5},
    {name:'Rehana',image:profileImage4},
    {name:'Asjad',image:profileImage6},
    
]
export default profile;
 