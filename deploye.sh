#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build

# deploye to s3 bucket
aws s3 sync ./dist/ s3://spidertech.in/

# navigate into the build output directory
#cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
#git init
#git add -A
#git commit -m 'deploy'
#git push -f git@github.com:emit077/spidertech-website.git master:gh-pages
#cd -