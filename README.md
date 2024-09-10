//COMMANDS TO USE AT THE START OF PROJECT.
echo "# yuki-capstone-project-qd4jy1hdc35uw4f11caqhpnnzktada1hei4khe55r" >> README.md
git init
git add README.md
git config user.name "yuki-konn"
git config user.email "type email here"
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yuki-konn/yuki-capstone-project-qd4jy1hdc35uw4f11caqhpnnzktada1hei4khe55r.git
curl -sS https://webi.sh/gh | sh
gh auth login
git push -u origin main



<!-- GIT SOURCE CONTROL TERMINAL COMMANDS-->


//USE THESE 3 COMMANDS TO SAVE TO GITHUB AFTER MAKING CHANGES.

//ADD CHANGES TO ALL FILES AND FOLDERS:
git add .

//CREATE A MEMO AND ADD TO SAVE POINT:
git commit -m "type memo here"

//SYNC TO GITHUB:
git push


//COPY THE FILES FROM GITHUB AND SETS AS DEFAULT PARAMETERS (FOR WHEN USING VSCODE OR OTHER IDE)
git pull --set-upstream origin main

//COPY THE FILES FROM GITHUB WITH THE DEFAULT PARAMETERS
git pull



//ADD CHANGES TO SINGLE FILE:
git add README.md

//VIEW THE VALUE OF ORIGIN:
git remote -v

//HOW TO CHANGE THE ORIGIN URL:
git remote set-url origin https://github.com/yuki-konn

//CHECKS WHAT VERSION OF GIT YOU ARE ON:
git --version



//INITIALIZE OR ACTIVATE GIT SOURCE CONTROL:
git init

//SETS USER NAME AND EMAIL. TYPE INSIDE THE PARENTHESIS:
git config user.name "type username here"
git config user.email "type email here"

//RENAMES CURRENT BRANCH TO MAIN:
git branch -M main

//ASSIGNS A URL TO THE ORIGIN VARIABLE:
git remote add origin https://github.com/yuki-konn

//WEBI FOR GLITCH:
curl -sS https://webi.sh/gh | sh

//PUSHES CHANGES TO THE ORIGIN'S MAIN BRANCH AND SAVES THE PARAMETERS
git push -u origin main OR git push --set-upstream origin main




