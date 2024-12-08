import Header from "./header"
import Footer from "./footer"
import Main from "./main"
function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
            <Main/>
            <Footer />
        </div>
    )
}

export default Layout