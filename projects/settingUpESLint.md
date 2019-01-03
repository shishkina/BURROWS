### AirBnB's ESlint!
- Follow these steps to get eslint working in your project!

---

### eslint
- run the command `npm install -g eslint`
  - this command (because of the `-g`) means you want the eslint package installed globally... i.e. everywhere... on your ma

---

### npm
- in your project's repository, enter the command `npm init`
  - this tells your computer this directory will include some packages managed by NPM (node package manager)
- this will ask you several questions about name, version, etc.  Do your best to answer the questions asked.  Note you can modify these answers later
- After this is completed, you'll have a `package.json` file... with all your answers

---

### AirBnb ESLint
- Copy paste the following command (as ONE command) into your terminal
  - You should still be in the repository
- This will install a bunch of node packages
- Fun:  Take a look at your `package.json` now! A bunch of new stuff is added here!
- Cool:  You now have a directory called `node_modules`.  This is where ALL those packages were installed... You NEVER need to edit anything in this directory... EVER.

```sh
(
export PKG=eslint-config-airbnb;
npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
)
```

---

### .gitignore
- create a file called `.gitignore`
  - this file will list the files and directories git should ignore
- The text of the file should be as follows:

```
.gitignore
node_modules
```

---

### .eslintrc
- create a file called `.eslintrc`
  - this file will hold all the rules you want your eslinter to us
- The text of the file should be as follows.
  - This is the file that tells eslint to use all those packages we just installed

```
"extends": "airbnb"
```

---

### Give it a try!
- Now you can create `.js` files.. and have eslint help!
- To check a file... run `eslint fileName.js` in your terminal
  - Alternatively... you can install a linter display into your text editor
    - Below you'll find how to get that set up in the Atom editor

---

### Atom
- `Atom -> preferences -> packages`
- Search for and install `linter`
- Search for and install `linter-eslint`
- With these packages installed... and the .eslintrc file... you should be good to go!

### Sublime
- TBD
