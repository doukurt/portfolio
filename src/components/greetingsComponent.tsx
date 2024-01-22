const GreetingsComponent = () => {
    return (
        <div>
            <div className="mb-16">
                <div className="text-lg text-off-white">Hello, I am</div>
                <div className="text-6xl text-off-white">Doğukan Kurt</div>
                <div className="text-3xl text-new-purple">{"> Computer Engineer"}</div>
            </div>
            <div>// check my github account</div>
            <div>// h</div>
            <div className="text-white"><span className="text-new-purple">const</span> <span
                className="text-green-500">githubLink</span> = <a
                onClick={() => window.open('https://github.com/doukurt', '_blank')}
                className="text-orange-500 cursor-pointer underline">"https://github.com/doukurt"</a></div>
        </div>
    )
}
export default GreetingsComponent;