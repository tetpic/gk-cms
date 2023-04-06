export default function LoginUserForm(props:any) {
    return <>
    <form className={props.active}>

        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Name
                <input type="text" className="form-control" placeholder="Your Name"/>
            </label>
        </div>

        <div className="form-group">
            <label htmlFor="formGroupExampleInput">E-mail
                <input type="email" className="form-control" placeholder="Email"/>
            </label>
        </div>

        <div className="form-group mb-4">
            <label htmlFor="formGroupExampleInput2">Password
                <input type="password" className="form-control" placeholder="Password"/>
            </label>
        </div>

        <button type="button" className="btn btn-primary">Send</button>

    </form>
    </>
} 