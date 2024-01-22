import GreetingsComponent from "../components/greetingsComponent.js";

const Index = () => {
    return (
        <div className={"grid grid-cols-2 content-center justify-items-center h-full"}>
            <GreetingsComponent/>
        </div>
    );
}
export default Index;