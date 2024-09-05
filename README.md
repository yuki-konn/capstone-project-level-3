// Glitch github setup

echo "# yuki-capstone-project-qd4jy1hdc35uw4f11caqhpnnzktada1hei4khetiv" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yuki-konn/yuki-capstone-project-qd4jy1hdc35uw4f11caqhpnnzktada1hei4khetiv.git
curl -sS https://webi.sh/gh | sh
gh auth login
git push -u origin main
