export default function Signup() {
    return (
        <form className="forms">
            <h1>Login</h1>
            <label>
                <span>Email:</span>
                <input type="email"/>
            </label>
            <label>
                <span>Benuzername:</span>
                <input type="text"/>
            </label>
            <label>
                <span>Passwort:</span>
                <input type="password"/>
            </label>
            <button className="btn">Login</button>
        </form>
    )
}
