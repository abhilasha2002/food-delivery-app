import { render,screen } from "@testing-library/react"
import ContactUs from "../ContactUs";
import '@testing-library/jest-dom';

test("should load contact us page",()=>{
    render(<ContactUs/>);
    const headingName=screen.getByRole('heading');
    expect(headingName).toBeInTheDocument();
});
test("contact page should have submit button",()=>{
    render(<ContactUs/>);
    // const headingName=screen.getByRole('button');
    const button=screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});
test("contact page should have two input boxes",()=>{
    render(<ContactUs/>);

    //Quering
    const inputs=screen.getAllByRole('textbox');
    // const button=screen.getByText("Submit");
    
    //expect(inputs).toBeInTheDocument(inputs.length===2); ---wrong
    //Assertion
    expect(inputs.length).toBe(2);
    //expect(inputs.length).not.toBe(3);
})
