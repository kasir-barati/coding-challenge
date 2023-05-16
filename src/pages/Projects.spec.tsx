import { fireEvent, render, screen } from '@testing-library/react';
import { Projects } from './Projects.page';

// TODO: the React Testing Library is for those taking a more user behavior-centric approach to testing
describe(Projects.name, () => {
    it(`should render ${Projects.name} page`, () => {
        const renderedProjects = render(<Projects />);
        const text = 'Treeconomy - {Application Name}';
        const headerElement = screen.getByText(text);

        expect(renderedProjects).toBeTruthy();
        expect(headerElement).toBeTruthy();
    });

    it(`should change the purchase button color after click`, () => {
        render(<Projects />);
        const button = screen.getAllByRole('button')[0];
        fireEvent.click(button);

        // TODO: Am I testing the right way? or should I test useState and content myself to that BTW I am not convinced that this is a bad test since I do not care about states here, I mean I wanna test my react app state somewhere else not here, At least that's how I think ATM.
        // https://stackoverflow.com/questions/53389956/how-to-test-a-classname-with-the-jest-and-react-testing-library
        expect(
            screen
                .getAllByRole('button')
                .find((btn) =>
                    btn.classList.contains(
                        'MuiButton-containedError',
                    ),
                ),
        ).toBeTruthy();
    });

    it('should change the purchase button color to its normal after double click', () => {
        render(<Projects />);
        const button = screen.getAllByRole('button')[0];
        fireEvent.doubleClick(button);

        // TODO: Am I testing the right way? or should I test useState and content myself to that BTW I am not convinced that this is a bad test since I do not care about states here, I mean I wanna test my react app state somewhere else not here, At least that's how I think ATM.
        // https://stackoverflow.com/questions/53389956/how-to-test-a-classname-with-the-jest-and-react-testing-library
        expect(
            screen
                .getAllByRole('button')
                .find((btn) =>
                    btn.classList.contains(
                        'MuiButton-containedPrimary',
                    ),
                ),
        ).toBeTruthy();
    });
});
