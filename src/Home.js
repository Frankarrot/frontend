import logo from "./logo.svg";
import {useState} from "react";

function Home() {
    const [loginStatus, setLoginStatus] = useState(false);

    setTimeout(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken !== null) {
            setLoginStatus(true);
        }
    }, 1);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {loginStatus === true ?
                    <div>로그인 되었습니다 :)</div>
                    :
                    <button type="button">
                        <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_OAUTH_CLIENT_ID}`}>
                            Sign in with Github
                        </a>
                    </button>
                }
                Frankarrot🥕
            </header>
        </div>
    );
}

export default Home;
