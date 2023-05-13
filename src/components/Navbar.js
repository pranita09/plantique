import './Navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Navbar = () =>{
    return(
        <>
            <div className='navbar'>
                <div className='nav-left'>
                    <span className='app-name'>Plantique</span>
                </div>
                <div className='nav-search'>
                    <SearchOutlinedIcon className='nav-icon search-icon'/>
                    <input placeholder='Search'/>
                </div>
                <div className='nav-right'>
                    <div className='nav-icon'><LocalMallOutlinedIcon/></div>
                    <div className='nav-icon'><AccountCircleOutlinedIcon/></div>
                    <div className='nav-icon'><FavoriteBorderOutlinedIcon/></div>
                    <div className='nav-icon'><ShoppingCartOutlinedIcon/></div>
                </div>
            </div>
        </>
    )
}
export default Navbar;