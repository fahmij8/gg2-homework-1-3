import { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div className="my-8 mx-6">
                <h2 className="text-3xl text-center mt-14 font-semibold text-white">
                    Login first to use the service
                </h2>
                <a
                    href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000&scope=playlist-modify-private`}
                    className="bg-green-500 hover:bg-green-600 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white block mx-auto w-fit mt-5 transition ease-in-out duration-75 hover:scale-105"
                >
                    Login
                </a>
            </div>
        );
    }
}

export default Login;