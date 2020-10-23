# Create react app with typescript

## 1. Setup typescript in your create react app project:

https://create-react-app.dev/docs/adding-typescript

Uninstall existing global create-react-app first.
```bash
npm uninstall -g create-react-app
```

### Create new react app with typescript 
```bash
npx create-react-app name-of-app --template typescript 
```

### Add typescript to existing create react app project
```bash 
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets


## 2. Example codes:
https://github.com/Lemoncode/react-typescript-samples/

https://typeofnan.dev/your-first-react-typescript-project-todo-app/


## 3. Build & Deploy
### Github pages in 2mins
Make sure you do the following:
1. Make your repo public if you are a free github user
2. Go to your repository -> Settings -> Github Pages
3. Select Source as `gh-pages` and select folder (normally `/(root)`) and Save

https://github.com/gitname/react-gh-pages

https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages

### **gh-pages deployment issues:**
https://gist.github.com/cobyism/4730490

1. fatal: A branch named 'gh-pages' already exists

https://stackoverflow.com/questions/63964575/fatal-a-branch-named-gh-pages-already-exists

```bash
rm -rf node_modules/.cache/gh-pages
```

### Netlify in 30seconds?!
https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/


### Heroku in 2mins:
https://blog.heroku.com/deploying-react-with-zero-configuration

https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack

```bash
npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open
```

### Vercel (free account) in 2mins:
https://vercel.com/guides/deploying-react-with-vercel-cra


### Many others: (AWS / azure etc)
https://create-react-app.dev/docs/deployment/


## 4. Additional learning resources:
https://egghead.io/courses/use-typescript-to-develop-react-applications

https://www.typescriptlang.org/play?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react

https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935


## Daily VSCode Tip:

VSCode to open in existing window:
`code -r .` 

Found at: 
https://www.reddit.com/r/vscode/comments/69riyn/how_to_open_a_folder_from_the_integrated_terminal/

Use the `--reuse (-r)` flag.
`code -r your/path`

