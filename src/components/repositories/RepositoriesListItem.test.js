import { render, screen } from "@testing-library/react";
import RepositoriesListItem from "../repositories/RepositoriesListItem";
import { MemoryRouter } from "react-router-dom";
import { async } from "validate.js";

// jest.mock('../tree/FileIcon.js',()=>{
//   return ()=>{
//     return 'File Icon Component'
//   }
// })

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
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
  return { repository };
};
test("shows a link to the github homepage for this repository", async () => {
  const { repository } = RenderComponent();
  await screen.findByRole("img", { name: "Javascript" });

  const link = screen.getByRole("link", {
    name: /github repository/i,
  });

  expect(link).toHaveAttribute("href", repository.html_url);
});

test("shows a fileIcon with the appropriate icon", async () => {
  RenderComponent();

  const icon = await screen.findByRole("img", { name: "Javascript" });

  expect(icon).toHaveClass("js-icon");
});
