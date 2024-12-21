import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    // Step 2: Define three variables
    let name = "Ghulam Fareed";
    let age = 18;
    let city = "Karachi";

    return (
        <div className="mt-10">
            {/* Step 2.1: Pass props to Child Component */}
            <ChildComponent name={name} age={age} city={city} />
        </div>
    );
};

export default ParentComponent;
