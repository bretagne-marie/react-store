import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as StoreLogo } from '../../assets/logoipsum-289.svg';
import { UserContext } from '../../contexts/user.context';

import './navigation.styles.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <StoreLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                    ) : (
                        <span className='nav-link' to='/auth'>Sign In</span>
                    )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;