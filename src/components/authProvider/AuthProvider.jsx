import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const authContex = createContext(null);

const AuthProvider = ({children}) => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        fetch('/banner.json')
            .then(response => response.json())
            .then(data => setBannerData(data))
    }, [])

    const contexInfo = {
       bannerData
    }

    return (
        <authContex.Provider value={contexInfo}>
            {children}
        </authContex.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;