import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export const authContex = createContext(null);

const AuthProvider = ({children}) => {
    const [bannerData, setBannerData] = useState([]);
    const [user, setUser] = useState(null);

    // data fatching
    useEffect(() => {
        fetch('/banner.json')
            .then(response => response.json())
            .then(data => setBannerData(data))
    }, [])

    // creat user function
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login function
    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const contexInfo = {
       bannerData,
       creatUser,
       loginUser,
       setUser
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