# DITA-OT publishing with GitHub Actions

Template site for publishing Bootstrap-themed HTML and PDF using the DITA Open Toolkit with GitHub Actions.

## Instructions for ENGL 4814 students

1. Fork this repository
2. Give your forked repository a unique and simple name
3. Provide an optional but useful description
4. Unselect the "Copy master branch only" option. We need all branches of the repository
5. Wait and see until your fork is ready
6. Inside your fork, click on the **Actions** link on the top menu bar
7. Click on the button that says "I understand my workflows, go ahead and enable them"
8. Click on the **Settings** link on the top menu bar
9. Click on the **Pages** option on the left menu
10. In the **Source** option, select "Deploy from a branch"
11. Select the `gh-pages` branch
12. Save your branch change.

### Next steps and requirements
- Now, the Actions will automatically publish a Bootstrap-themed HTML and a PDF using the DITA Open Toolkit
- You must to have a file named `index.dita` inside the `dita` folder
- You must to name your main DITA map `document.ditamap`
  - Of course, you can rename them, but that also requires renaming them inside the workflow file.

## Credits

Thanks to the following DITA-OT experts:
- Jason Fox
- Roger Sheen.
