import {screen , render} from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('displays primary language of the repository',()=>{
    const repository = {
        language:'Javascript',
        stargazers_count:5,
        open_issues:1, 
        forks:30
    }
    render(<RepositoriesSummary repository={repository}/>);

    const language = screen.getByText('Javascript');

    expect(language).toBeInTheDocument();
})