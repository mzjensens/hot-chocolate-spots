# DITA-OT publishing with GitHub Actions

Template site for publishing Bootstrap-themed HTML and PDF using the DITA Open Toolkit with GitHub Actions.

## Instructions for ENGL 4814 students

1. Click on the "Use this template" green button on the top of this page
2. Create a new repository based on the template.
3. Be sure to select the "Include all branches" option. We need all branches of the repository.

### Next steps and requirements
- Now, the Actions will automatically publish a Bootstrap-themed HTML and a PDF using the DITA Open Toolkit
- You must have a file named `index.dita` inside the `dita` folder
- You must name your main DITA map `document.ditamap`
  - Of course, you can rename them, but that also requires renaming them inside the workflow file (and you don't want to do that... do you?)
- Customize your header file to replace banner title and icon
- Change your theme for PDF and HTML styles.

####  Ensure GITHUB_TOKEN Has Sufficient Permissions
- Navigate to Settings → Actions → General in your repository
- Under Workflow permissions, ensure that Read and write permissions is selected. This gives the GITHUB_TOKEN the necessary permission to push to the gh-pages branch.

## Credits

Thanks to the following DITA-OT experts:
- Jason Fox
- Roger Sheen.
