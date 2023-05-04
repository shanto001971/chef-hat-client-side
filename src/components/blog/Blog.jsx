import React from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {


    const ref = React.createRef();

    return (
        <div className='p-10'>


            <div className="App">

                <div ref={ref} className='p-10'>
                    <h1 className='text-3xl'> 1: Tell us the differences between uncontrolled and controlled components.</h1>
                    <small>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</small>
                    <h1 className='text-3xl' > 2: How to validate React props using PropTypes</h1>
                    <small>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</small>
                    <h1 className='text-3xl' > 3: Tell us the difference between nodejs and express js.</h1>
                    <small>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</small>
                    <h1 className='text-3xl'> 4: What is a custom hook, and why will you create a custom hook?</h1>
                    <small>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code</small>
                </div>
                <div className="mt-5 text-center">
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                </div>
            </div>

        </div>
    );
};

export default Blog;