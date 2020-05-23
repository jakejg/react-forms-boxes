import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';


it('renders without crashing', ()=> {
    render(<BoxList />)
});

it('matches snapshot', () => {
  const { asFragment } = render(<BoxList />)
  expect(asFragment()).toMatchSnapshot();
})

it('keeps track of form data', () => {
  const { getByLabelText} = render(<BoxList />);
  const widthInput = (getByLabelText("width"));
  fireEvent.change(widthInput, {target: {value: 2}})

  expect(widthInput.value).toEqual("2")
})


it('input fields clear after submit', () => {
  const { getByLabelText, getByText} = render(<BoxList />);
  const widthInput = getByLabelText("width");
  const btn = getByText("Create a Box");
  fireEvent.change(widthInput, {target: {value: 2}});
  fireEvent.click(btn)

  expect(widthInput.value).toEqual("")

})

it('it should adds a box to the DOM', () => {
  const { getByLabelText, getByText} = render(<BoxList />);
  const widthInput = getByLabelText("width");
  const heightInput = getByLabelText("height");
  const colorInput = getByLabelText("backgroundColor");
  const btn = getByText("Create a Box");
  fireEvent.change(widthInput, {target: {value: 2}});
  fireEvent.change(heightInput, {target: {value: 2}});
  fireEvent.change(colorInput, {target: {value: "blue"}});
  fireEvent.click(btn)  

  expect(getByText("X").previousSibling).toHaveStyle(`
  width: 2px;
  height: 2px;
  background-color: blue;
  `)

})

it('should delete a box from the DOM', () => {
  const { getByLabelText, getByText} = render(<BoxList />);
  const widthInput = getByLabelText("width");
  const heightInput = getByLabelText("height");
  const colorInput = getByLabelText("backgroundColor");
  const createBoxBtn = getByText("Create a Box");
  fireEvent.change(widthInput, {target: {value: 2}});
  fireEvent.change(heightInput, {target: {value: 2}});
  fireEvent.change(colorInput, {target: {value: "blue"}});
  fireEvent.click(createBoxBtn);

  const box = getByText("X").previousSibling
  const deleteBtn = getByText("X");
  fireEvent.click(deleteBtn)

  expect(box).not.toBeInTheDocument;

});
