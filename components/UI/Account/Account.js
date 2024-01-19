import { useStateContext } from "@/components/HBOprovider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ls from 'local-storage'

const Account = (props) =>{
    const router = useRouter()
    const globalState = useStateContext();
  useEffect(() => {
    if (globalState.accountOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [globalState.accountOpen]);

  const watchMedia = (url) => {
        router.push(url)
        globalState.setAccountOpen(!globalState.accountOpen)
  }

  const showWatchList = () => {
    return globalState.watchList.map((item,index) => {
        return(
            <div className="account__watch-video" key={index}>
                            <img src={item.mediaUrl}/>
                            <div className="account__watch-overlay">
                                <div className="account__watch-buttons">
                                        <div className="account__watch-circle" onClick={() => watchMedia(`/${item.mediaType}/${item.mediaId}`)}>
                                            <i className="fas fa-play" />
                                        </div>
                                        <div className="account__watch-circle" onClick={() => globalState.removeFromList(item.mediaId)}>
                                            <i className="fas fa-times" />
                                        </div>   
                                </div>    
                            </div> 
                        </div>
        )
        })
  }
  const signOut = () => {
    ls.remove('users')
    router.push('/create')
  }
    return(
        <div className={`account ${globalState.accountOpen ? 'account--active' : '' }`}>
            <div className="account__details">
                <div className="account__title">My List</div>                            
                <div className="account__watch-list">
                    {showWatchList()}
                </div>
            </div>
            <div className="account__menu">
                <ul className="account__main">
                    <li>
                        <a href="/" className="active">My List</a>
                    </li>
                </ul>
                <div className="side-nav__divider"></div>
                <ul className="account__main">
                    <li>
                        <a onClick={signOut}>Sign Out</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Account;