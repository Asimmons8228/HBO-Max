import { userAgent } from 'next/server';
import React , {useContext, useState} from 'react';
import ls from 'local-storage'

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function HBOProvider({children}){
    const [user, setUser] = useState(null)
    const defaultUserImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    const createUserAction= (e) => {
        setUser(e.target.value)
        console.log(user)
    }

    const [sideNavOpen, setSideNavOpen] = useState(false)
    const [accountOpen, setAccountOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [watchList, setWatchList] = useState(ls.get('myList'))

    const addToList= (video) => {
        let myList;
        if (ls('myList') !== null) {
            myList = ls.get('myList')
            myList.push(video)
            ls.set('myList', myList)
            setWatchList(myList)
        } else {
            ls.set('myList', [video])
        }
    }

    const removeFromList = (videoId) => {
        let myList = ls('myList')
        myList = myList.filter((item) => item.mediaId != videoId)
        ls.set('myList', myList)
        setWatchList(myList)
    }

    const thumbTypes = ['large-v', 'small-v', 'large-h', 'small-h']

    return(
        <StateContext.Provider
        value={{
            user,
            createUserAction,
            defaultUserImg,
            sideNavOpen,
            setSideNavOpen,
            accountOpen,
            setAccountOpen,
            searchOpen,
            setSearchOpen,
            thumbTypes,
            addToList,
            removeFromList,
            watchList,
            setWatchList
        }}>
        {children}
        </StateContext.Provider>
    )
}