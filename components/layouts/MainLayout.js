import Header from "../UI/Header"
import SideNav from "../UI/SideNav"

const MainLayout = (props) =>{
    return(
        <div style={{background: 'rgb(2, 27, 64)', background:'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1)100%)', minHeight: '100vh'}}>
        <Header />
        <SideNav />
        <section className="content-container">
            {props.children}
        </section>
        </div>
    )
}

export default MainLayout