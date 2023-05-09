import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as StoreLogo } from '../../assets/logoipsum-289.svg';

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <StoreLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        Sign-In
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;