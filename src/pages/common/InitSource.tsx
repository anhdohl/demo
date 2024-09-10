import { RootState } from '@/Store/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoadingCommon from './LoadingCommon';
// import { useLocation, useNavigate } from 'react-router-dom';

import './InitSource.scss'

export default function InitSource() {
    const UsersStore = useSelector((state: RootState) => state.UsersStore)
    // const history = useNavigate();
    // const location = useLocation();

    useEffect(() => {
        // if (UsersStore?.user) {
        //     history('/')
        // } else if (location?.pathname !== '/sign-in') {
        //     history('/sign-in')
        // }
    }, [UsersStore?.user])

    return (
        <div>
            <LoadingCommon />
        </div>
    )
}
