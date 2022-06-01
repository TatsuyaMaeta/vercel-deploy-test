import logo from "./logo.svg";
import "./App.css";
// 追記
import ApiFetch from "./components/ApiFetch";

function App() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* 追記 */}
                    <ApiFetch />
                    {/* 追記 */}
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        G's ACADEMY test
                    </a>
                </header>
            </div>
        </div>
    );
}

export default App;
