
// named function sytanx
function Home(){
    return (
        <> {/* fragments: avoids extra space dom creation */}
        <h1>Home</h1>
        <NavbarComponent/>
        </>
    )
}

export function NavbarComponent(){
    return(
        <>
        <h3>Navbar</h3>
        
        </>
    )
}

export function FooterComponent(){
    return(
        <>
        <h3>footer</h3>
        </>
    )
}

export default Home