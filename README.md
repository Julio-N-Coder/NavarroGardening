## Getting Started

This is a website that I made for my dad's small buisness [`Navarro Gardening`](https://navarrogardening.com/).

I Built this using the [nextjs](https://nextjs.org/docs) framework

I am hosting the backend through lambda functions.

I honestly need a good way to develop lambda functions 
because making one at least the way I did it was a mess

I learned a lot from this project though and will continue to improve my web development skills

update fetch to fetch's from lambda api

zip -r my_deployment_package.zip .

aws lambda update-function-code --function-name Email-Dad \
--zip-file fileb://email-Dad.zip