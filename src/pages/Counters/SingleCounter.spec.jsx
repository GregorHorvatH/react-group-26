import { render, waitFor } from '@testing-library/react';
import SingleCounter, { sum } from './SingleCounter';

describe('sum', () => {
  it('1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2);
  });

  it('10 + 13 = 23', () => {
    expect(sum(10, 13)).toBe(23);
  });

  it('boooom', () => {
    expect(sum(100, 130)).toBe(230);
  });

  it('NaN check 1', () => {
    expect(sum(100)).not.toBeNaN();
    expect(sum()).not.toBeNaN();
    expect(sum()).toBe(0);
  });
});

describe('SingleCounter', () => {
  it('snapshot test', () => {
    const { container } = render(<SingleCounter value={333} />);

    expect(container).toMatchSnapshot();
  });

  it('value test', () => {
    const { getByTestId } = render(<SingleCounter value={333} />);

    expect(getByTestId('value').textContent).toBe('333');
  });

  it('check function call', () => {
    const onIncrement = jest.fn();
    const { getByTestId } = render(<SingleCounter onIncrement={onIncrement} />);

    getByTestId('increment-button').click();
    getByTestId('increment-button').click();
    getByTestId('increment-button').click();
    getByTestId('increment-button').click();
    getByTestId('increment-button').click();

    expect(onIncrement).toBeCalled();
    expect(onIncrement).toBeCalledTimes(5);
  });
});
