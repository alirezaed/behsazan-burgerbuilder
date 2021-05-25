export function withLog(Component){

    return (props)=>{
        console.log(props);
        return <Component hasLog={true} {...props} />
    };
}