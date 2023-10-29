import { render, screen } from "@testing-library/react";
import RepositoriesListItem from '../repositories/RepositoriesListItem';
import { MemoryRouter } from "react-router-dom";

jest.mock('../tree/FileIcon.js',()=>{
  return ()=>{
    return 'File Icon Component'
  }
})

const RenderComponent = () => {
  const repository = {
    full_name: "facebook/react",
    language: "Javascript",
    description: "A js library",
    owner: "facebook",
    name: "react",
    html_url: "https://github.com/facebook/react",
  };
  render(
    <MemoryRouter>
        <RepositoriesListItem  repository={repository}/>
    </MemoryRouter>
  )
};
test("shows a link to the github homepage for this repository", () => {
  RenderComponent();
  // screen.findByRole('img',{name:'Javascript'});
});
