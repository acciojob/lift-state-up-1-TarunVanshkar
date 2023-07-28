import React from "react";

const Child = (props) => {
    return(
        <div className="child">
            <h2>Child Component</h2>
            {
                props.show && 
                <div>
                    <h3>Modal Content</h3>
                    <p>This is the modal content.</p>
                </div>
            }
        </div>
    );
}
export default Child;