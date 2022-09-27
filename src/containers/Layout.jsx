//Esto es nuestro template
//ffc
//Podemos usar children para que se rendirece mi estructura, los parametros que reciban
import Header from "../components/Header";
import Nav from "../components/Nav"
import Footer from "../components/Footer";

function Layout({children}) {
    return (  
        <>
        <Header></Header>
        <Nav></Nav>
        {children}  
        <Footer></Footer>
        </>
    );
}

export default Layout;