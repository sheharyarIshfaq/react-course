import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Test Suite containg test of Rending Async Component', ()=>{
    test('Renders list Items', async ()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async ()=>[{id: 'p1', title: 'First Post By Sheharyar'}]
        });
        render(<Async />);

        // const outputElement = await screen.findAllByRole('listitem',{},{timeout: 2000});
        const outputElement = await screen.findAllByRole('listitem');
        expect(outputElement).not.toHaveLength(0);
    })
})