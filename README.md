//COMMANDS TO USE AT THE START OF PROJECT.
echo "# yuki-capstone-project-qd4jy1hdc35uw4f11caqhpnnzktada1hei4khe55r" >> README.md
git init
git add README.md
git config user.name "yuki-konn"
git config user.email "email"
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yuki-konn/yuki-capstone-project-qd4jy1hdc35uw4f11caqhpnnzktada1hei4khe55r.git
curl -sS https://webi.sh/gh | sh
gh auth login
git push -u origin main



//GITHUB TERMINAL COMMAND NOTES:

//COMMANDS TO USE TO PUSH TO GITHUB.
//ADD CHANGES TO ALL FILES AND FOLDERS:
git add .

//ADD CHANGES TO SINGLE FILE:
git add README.md

//CREATE A MEMO AND ADD TO SAVE POINT:
git commit -m "insert memo"


//SYNC TO GITHUB:
git push origin main

//VIEW THE VALUE OF ORIGIN:
git remote -v

//ASSIGNS A URL TO THE ORIGIN VARIABLE:
git remote add origin https://github.com/yuki-konn

//HOW TO CHANGE THE ORIGIN:
git remote set-url origin https://github.com/yuki-konn

//INITIALIZE OR ACTIVATE GIT SOURCE CONTROL:
git init

//RENAMES CURRENT BRANCH TO MAIN:
git branch -M main

//CHECKS WHAT VERSION OF GIT YOU ARE ON:
git --version

//SETS USER NAME AND EMAIL. TYPE INSIDE THE PARENTHESIS:
git config user.name "username"
git config user.email "email"

//WEBI FOR GLITCH:
curl -sS https://webi.sh/gh | sh

