import NavBar from "../components/NavBar/NavBar";

export default function AppLayout({children}){
    return (
        <>
            <NavBar>
                      
            </NavBar>
            {children}
        </>
    )
}