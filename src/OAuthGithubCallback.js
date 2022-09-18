import {useSearchParams} from "react-router-dom";

function OAuthGithubCallback() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");

    fetch(`${process.env.REACT_APP_API_HOST}/api/login/github?code=${code}`, {method: 'POST'})
        .then(response => response.json())
        .then(json => {
            localStorage.setItem('accessToken', json.accessToken);
            window.location.href = '/';
        })
        .catch(error => console.log('error', error));

    return (
        <div className="App">
            <header className="App-header">
                로그인 중입니다
            </header>
        </div>
    );
}

export default OAuthGithubCallback;
