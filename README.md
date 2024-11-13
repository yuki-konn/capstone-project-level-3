# DESCRIPTION

Capstone Level 2 Project

Folder Structure

- Capstone Project Folder
  - docs
  - res
    - fonts
    - images

Made with HTML, JavaScript, CSS, Bootstrap, and SASS.

# NOTES

In the index.html there is one inline and internal style.

# GIT SOURCE CONTROL TERMINAL COMMANDS

## GIT COMMANDS FOR SAVING CHANGES

### ADD CHANGES TO ALL FILES AND FOLDERS

`git add .`

### CREATE A SAVE POINT AND ADDS A MEMO TO IT

`git commit -m "type memo here"`

### SYNC TO GITHUB

`git push`

### ADD THE CHANGES TO A SINGLE FILE TO THE NEXT SAVE POINT

`git add README.md`

# GIT COMMANDS FOR PULLING

### COPY THE FILES FROM GITHUB AND SETS AS UPSTREAM(DEFAULT ORIGIN AND BRANCH)(FOR WHEN USING VSCODE OR OTHER IDE):

`git pull --set-upstream origin main`

### COPY THE FILES FROM GITHUB WITH THE DEFAULT UPSTREAM(DEFAULT ORIGIN AND BRANCH):

`git pull`

### DISPLAYS THE VALUE OF ORIGIN AND THE URL OF OTHER REMOTE REPOS

`git remote -v`

### CHANGES THE VALUE OF ORIGIN TO THE URL

`git remote set-url origin https://github.com/yuki-konn`

### CHECKS WHAT VERSION OF GIT YOU ARE ON

`git --version`

# GIT COMMANDS TO RUN AT THE BEGINNING

### INITIALIZE OR ACTIVATE GIT SOURCE CONTROL:

`git init`

### SETS USER NAME AND EMAIL. TYPE INSIDE THE PARENTHESIS

```
git config user.name "type username here"
git config user.email "type email here"
```

### RENAMES THE CURRENT BRANCH TO MAIN. GIT MAY NAME THE BRANCH "master" BY DEFAULT

`git branch -M main`

### DECLARES(CREATES) THE ORIGIN VARIABLE, STORES THE URL IN IT, AND ADDS IT TO THE LIST OF REMOTE REPOS:

`git remote add origin https://github.com/yuki-konn`

### WEBI FOR GLITCH:

`curl -sS https://webi.sh/gh | sh`

### PUSHES CHANGES TO THE ORIGIN'S MAIN BRANCH TO THE REPO URL AND SAVES IT AS THE UPSTREAM(DEFAULT ORIGIN AND BRANCH):

`git push -u origin main` OR `git push --set-upstream origin main`
