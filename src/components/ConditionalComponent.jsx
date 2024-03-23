import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent(){
    const display = true;
    return (
        <div>
            {display ? <Welcome/> : <Code/>}
        </div>
    );
}