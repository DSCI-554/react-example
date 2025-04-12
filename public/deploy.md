# Instructions to Deployment on GitHub Pages

This document provides step-by-step instructions to deploy a React App, built with `create-react-app`, on GitHub Pages.

## Create React app repository

### Create an **empty** repository on GitHub

1. Sign into your GitHub account.
2. Visit the project repository.
3. You will need to set the repository to public for GitHub page deployment.
4. Submit the form.

### Create a React app

1. Create a React app named `my-app`:

   > In case you want to use a different name from `my-app` (e.g. `web-ui`), you can accomplish that by replacing all occurrences of `my-app` in this tutorial, with that other name (i.e. `my-app` --> `web-ui`).
   >

   ```shell
   $ npx create-react-app my-app
   ```

2. Enter the newly-created folder:

   ```shell
   $ cd my-app
   ```

At this point, there is a React app on your computer and you are in the folder that contains its source code. All of the remaining commands shown in this tutorial can be run from that folder.

## Deploy to GitHub Pages

### Install the `gh-pages` npm package

1. Install the [`gh-pages`](https://github.com/tschaub/gh-pages) npm package and designate it as a [development dependency](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file):

   ```shell
   $ npm install gh-pages --save-dev
   ```

At this point, the `gh-pages` npm package is installed on your computer and the React app's dependence upon it is documented in the React app's `package.json` file.

### Add a `homepage` property to the `package.json` file

1. Open the `package.json` file in a text editor.
2. Add a `homepage` property formatted as shown:

   ```diff
   {
     "name": "my-app",
     "version": "0.1.0",
     "homepage": "https://{username}.github.io/{repo-name}",
     "private": true,
   ```

At this point, the React app's `package.json` file includes a property named `homepage`.

### Add deployment scripts to the `package.json` file

1. Open the `package.json` file in a text editor and add a `predeploy` property and a `deploy` property to the `scripts` object as shown below:

   ```diff
   "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build",
       "start": "react-scripts start",
       "build": "react-scripts build",
   ```

At this point, the  React app's `package.json` file includes deployment scripts.

### Add a "remote" that points to the GitHub repository

1. Add a "[remote](https://git-scm.com/docs/git-remote)" to the local Git repository.

   You can do that by issuing a command in this format:

   ```shell
   $ git remote add origin https://github.com/{username}/{repo-name}.git
   ```

   To customize that command for your situation, replace `{username}` with your GitHub username and replace `{repo-name}` with the name of the GitHub repository you created in Step 1.

   > That command tells Git where I want it to push things whenever I—or the `gh-pages` npm package acting on my behalf—issue the `$ git push` command from within this local Git repository.
   >

At this point, the local repository has a "remote" whose URL points to the GitHub repository you created in Step 1.

### Push the React app to the GitHub repository

1. Push the React app to the GitHub repository

   ```shell
   $ npm run deploy
   ```

   > That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.
   >
   > Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.
   >

   > By default, the new commit on the `gh-pages` branch will have a commit message of "Updates". You can [specify a custom commit message](https://github.com/gitname/react-gh-pages/issues/80#issuecomment-1042449820) via the `-m` option, like this:
   >
   > ```shell
   > $ npm run deploy -- -m "Deploy React app to GitHub Pages"
   > ```
   >

At this point, the GitHub repository contains a branch named `gh-pages`, which contains the files that make up the distributable version of the React app. However, we haven't configured GitHub Pages to _serve_ those files yet.

### Configure GitHub Pages

1. Navigate to the **GitHub Pages** settings page
   1. In your web browser, navigate to the GitHub repository
   2. Above the code browser, click on the tab labeled "Settings"
   3. In the sidebar, in the "Code and automation" section, click on "Pages"
2. Configure the "Build and deployment" settings like this:
   1. **Source**: Deploy from a branch
   2. **Branch**:
      - Branch: `gh-pages`
      - Folder: `/ (root)`
3. Click on the "Save" button

**That's it!** The React app has been deployed to GitHub Pages! 🚀

At this point, the React app is accessible to anyone who visits the `homepage` URL you specified in Step 4. For example, the React app I deployed is accessible at https://gitname.github.io/react-gh-pages.

### Store the React app's _source code_ on GitHub

In a previous step, the `gh-pages` npm package pushed the distributable version of the React app to a branch named `gh-pages` in the GitHub repository. However, the _source code_ of the React app is not yet stored on GitHub.

In this step, I'll show you how you can store the source code of the React app on GitHub.

1. Commit the changes you made while you were following this tutorial, to the `main` branch of the local Git repository; then, push that branch up to the `main` branch of the GitHub repository.

   ```shell
   $ git add .
   $ git commit -m "Configure React app for deployment to GitHub Pages"
   $ git push origin main
   ```

   > I recommend exploring the GitHub repository at this point. It will have two branches: `main` and `gh-pages`. The `main` branch will contain the React app's source code, while the `gh-pages` branch will contain the distributable version of the React app.
   >

## References

1. [The official create-react-app deployment guide](https://create-react-app.dev/docs/deployment/#github-pages)
2. [GitHub blog: Build and deploy GitHub Pages from any branch](https://github.blog/changelog/2020-09-03-build-and-deploy-github-pages-from-any-branch/)
3. [Preserving the CNAME file when using a custom domain](https://github.com/gitname/react-gh-pages/issues/89#issuecomment-1207271670)
4. [Deploying a React App* to GitHub Pages](https://github.com/gitname/react-gh-pages)
5. [GitHub Pages project site](https://pages.github.com/#project-site)
6. [GitHub Pages user site](https://pages.github.com/#user-site)
7. [&#34;GitHub Pages&#34; section of the create-react-app documentation](https://create-react-app.dev/docs/deployment/#github-pages)

## Notes

- Special thanks to GitHub (the company) for providing us with the GitHub Pages hosting service for free.
- And now, time to turn the default React app generated by `create-react-app` into something unique!
- This repository consists of two branches:
  - `main` - the _source code_ of the React app
  - `gh-pages` - the React app _built from_ that source code
