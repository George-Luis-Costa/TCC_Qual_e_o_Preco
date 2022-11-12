import React from "react";
import {render, fireEvent, queryAllByPlaceholderText} from "@testing-library/react"
import {Card} from "./Card"

it('renderizar corretamente', () =>{
    const {queryByTestId, queryAllByPlaceholderText}  = render(<Card/>)

    expect(queryByTestId("cards")).toBeTruthy()

})