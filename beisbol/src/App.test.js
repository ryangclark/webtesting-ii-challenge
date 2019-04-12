import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, fireEvent, render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

afterEach(cleanup);

describe('<App />', () => {
  it('Renders without crashing, and sets initial state of balls and strikes to zero', () => {
    render(<App />);
    const { getByTestId } = render(<App />);
    const balls = getByTestId('ball-count');
    const strikes = getByTestId('strike-count');

    expect(balls).toHaveTextContent('0');
    expect(strikes).toHaveTextContent('0');
  });

  it('Increments strikes, and resets both counts if there are three strikes', () => {
    render(<App />);
    const { getByTestId } = render(<App />);
    const balls = getByTestId('ball-count');
    const ballButton = getByTestId('ball-button');
    const strikes = getByTestId('strike-count');
    const strikeButton = getByTestId('strike-button');

    // Initial display
    expect(balls).toHaveTextContent('0');
    expect(strikes).toHaveTextContent('0');

    // Should increment one strike
    fireEvent.click(strikeButton);
    expect(balls).toHaveTextContent('0');
    expect(strikes).toHaveTextContent('1');

    // Should increment to two strikes, ball to one
    fireEvent.click(ballButton);
    fireEvent.click(strikeButton);
    expect(balls).toHaveTextContent('1');
    expect(strikes).toHaveTextContent('2');

    // Should reset both counts
    fireEvent.click(strikeButton);
    expect(balls).toHaveTextContent('0');
    expect(strikes).toHaveTextContent('0');
  });

  it('Increments balls, resetting count if there are four balls', () => {
    const { getByTestId } = render(<App />);
    const balls = getByTestId('ball-count');
    const ballButton = getByTestId('ball-button');
    const strikes = getByTestId('strike-count');
    const strikeButton = getByTestId('strike-button');

    // Initial display
    expect(balls).toHaveTextContent('0');
    expect(strikes).toHaveTextContent('0');

    // Increment balls by one
    fireEvent.click(ballButton);
    expect(balls).toHaveTextContent('1');
    expect(strikes).toHaveTextContent('0');

    // Increment balls to three
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    fireEvent.click(strikeButton);
    expect(balls).toHaveTextContent('3');
    expect(strikes).toHaveTextContent('1');

    // Increment balls to four and reset count
    fireEvent.click(ballButton);
    expect(balls).toHaveTextContent('0');
    expect(strikes).toHaveTextContent('0');
  });

  it('Fouls increment strikes to two, but not to three', () => {
    const { getByTestId } = render(<App />);
    const balls = getByTestId('ball-count');
    const ballButton = getByTestId('ball-button');
    const foulButton = getByTestId('foul-button');
    const strikes = getByTestId('strike-count');

    // Initial display
    expect(balls).toHaveTextContent('0');
    expect(strikes).toHaveTextContent('0');

    // Increment strikes by one
    fireEvent.click(ballButton);
    fireEvent.click(foulButton);
    expect(balls).toHaveTextContent('1');
    expect(strikes).toHaveTextContent('1');

    // Increment strikes to two, balls to one
    fireEvent.click(foulButton);
    expect(balls).toHaveTextContent('1');
    expect(strikes).toHaveTextContent('2');

    // Fouls cannot increment beyond two
    fireEvent.click(foulButton);
    expect(balls).toHaveTextContent('1');
    expect(strikes).toHaveTextContent('2');
  });
});
