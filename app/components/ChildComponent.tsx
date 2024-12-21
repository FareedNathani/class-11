const ChildComponent = (props: any) => {
    console.log(props); // Logs props for debugging

    return (
        <div>
            <h1 className="text-7xl">{props.name}</h1> {/* Render name */}
            <p className="text-2xl">Age: {props.age}</p> {/* Render age */}
            <p className="text-2xl">City: {props.city}</p> {/* Render city */}
        </div>
    );
};

export default ChildComponent;
