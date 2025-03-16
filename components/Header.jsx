import logo from "./../img/logo.png"

export default function Header(){
    return(
        <header>
            <div>
                <img src={logo} alt="" />
                <h1>AI recipe generator</h1>
            </div>
        </header>
    )
}