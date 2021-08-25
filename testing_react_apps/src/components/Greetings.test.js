import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

//Test Suite
//It can contain multiple test cases related to each other
describe("Greeting Component Test Suite", () => {
  test("Renders Hello World as a Text", () => {
    //Arrange
    //render the component using render
    render(<Greetings />);

    //Act
    //Nothing here but it is used to perform and check for functions

    //Assert
    //CHeck the element by getting it and storing in the variable and then checking it in the rendered component
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders Welcome to our Web Application!", ()=>{
      render(<Greetings />);

      const outputElement = screen.getByText('Welcome to', {exact: false});
      expect(outputElement).toBeInTheDocument();
  })

  test("Renders Changed as a Text is the button is clicked", ()=>{
      render(<Greetings />);

      //Act
      const button = screen.getByRole('button');
      userEvent.click(button);

      //assert
      const outputElement = screen.getByText('Text Changed!');
      expect(outputElement).toBeInTheDocument();
  })

  test("Don't render Welcome if the button is clicked", ()=>{
      render(<Greetings />);

      //Act
      const button = screen.getByRole('button');
      userEvent.click(button);

      //assert
      const outputElement = screen.queryByText('Welcome', {exact: false});
      expect(outputElement).toBeNull();
  })
});
