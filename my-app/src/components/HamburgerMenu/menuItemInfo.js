import {BsFillPersonFill, BsLink45Deg, BsFillFolderFill, BsFillFileTextFill} from "react-icons/bs"

const menuItemInfo = 
    [
        {
            minimizedIcon : BsFillPersonFill,
            name : "Personal",
            key : 1,
            link : "/personal"
            
        },
        {
            minimizedIcon: BsFillFolderFill,
            name : "Projects",
            key : 2,
            link : "/projects"

        },
        {
            minimizedIcon : BsFillFileTextFill,
            name : "Resume",
            key : 3,
            link : "/resume"
        },
        {
            minimizedIcon : BsLink45Deg,
            name : "Links and Contact",
            key : 4,
            link : "/links"

        }
    ]
export default menuItemInfo;