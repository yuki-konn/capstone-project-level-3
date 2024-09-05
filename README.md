// Glitch github setup

echo "# yuki-capstone-project-qd4jy1hdc35uw4f11caqhpnnzktada1hei4khetiv" >> README.md
git init

// ADD CHANGES OF THE README
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yuki-konn/yuki-capstone-project-qd4jy1hdc35uw4f11caqhpnnzktada1hei4khetiv.git
curl -sS https://webi.sh/gh | sh
gh auth login
git config user.name "username"
git config user.email "email"
git push -u origin main

//ADD CHANGES TO ALL FILES
git add .

//ATTACH MEMO TO THE SAVE FILE
git commit -m "insert memo"

//PUSHES ALL UPDATES TO MAIN REPO
git push origin main
# yuki-konn-yuki-capstone-project-qd4jy1hdc35uw4f11caqhpnnzktada1hei4khetiv
