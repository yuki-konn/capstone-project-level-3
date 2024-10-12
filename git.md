git init

- Initializes source control

git remote add origin https://github.com/yuki-konn/yuki-capstone-project-qd4jy1hdc35uw4f11caqhpnnzktada1hei4khe55r.git

1. Open Github
2. Open the repository
3. Copy the repository link

git pull origin main

gh auth login

- Connects the project to GitHub

git remote set-url origin https://github.com/yuki-konn/capstone-project-level-2.git

git push --set-upstream origin main

- Pushes files to GitHub and makes origin and main the default options


PUSHING TO GITHUB IN GENERAL

git add .
git commit -m "the changes I made"
git push


IF BRANCH IS MASTER

git branch -M main
- Renames the branch from master to main

git add .
git commit -m "renamed the branch"
git push --set-upstream origin main