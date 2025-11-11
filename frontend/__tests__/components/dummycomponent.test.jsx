import React from 'react'
import { render, screen } from '@testing-library/react';
import DummyComponent from '../../src/components/dummy.component';
test("renders correctly", ()=>{
    render(<DummyComponent/>)
    expect(screen.getByText("hello")).toBeInTheDocument();
})