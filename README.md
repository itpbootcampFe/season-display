# season-display

season display react app according to your location

https://itpbootcampfe.github.io/season-display

### gh-pages

- `yarn add -D gh-pages`
- then add to pakage.json :
  {
  ...
  script:{
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  },
  ...
  "homepage": "https://yourwebadress.com"
  }
- to deploy to github run `yarn deploy`
- go to github repo settings and select gh-page branch fror your github pages repo.
