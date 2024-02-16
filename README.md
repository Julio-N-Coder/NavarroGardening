# Navarro Gardening Website

## This is a website that I made for my dad's small buisness [`Navarro Gardening`](https://www.navarrogardening.com/).

I Built this using the [nextjs](https://nextjs.org/docs) framework

I am hosting the backend through a **lambda function**.

I honestly need a good way to develop lambda functions 
because making one at least the way I did it was a mess
but I guess this was my first time messing with them

I learned a lot from this project though and will continue to improve my web development skills

# About this code

### mostly Static
Even though this code is built on nextjs which is a usually server side framework,
this website is mostly static besides the contact me page which does make a fetch request to
a lambda function to send the email to my dad. to generate the static pages with Nextjs
I first updated the **next.config.js**, and then I ran the same next build command via 
npm with **npm run build**. this generated static files to an out directory which I just
uploaded to an **S3** bucket and hosted those pages using **AWS cloudfront**

### The backend
The backend which is in the **lambda-server** directory is just a lambda function that 
gets a request from the front end and runs and returns the right things in the function.
At first I added an nodejs server in the file **script.ts** to act as a backend, but next
time I don't think I will be doing this because I just had to write that function many more
times that I probably should have. The actual function is in the directory **lambda-function**
and it's the **index.ts** file. To Improve it next time, I might do this samething but I won't
be installing it's own dependancies as you can see in it's directory. What I will do next time
is keep track of the dependencies it depends on and then install those for the actual lambda
function that the typescript compiller makes. I also wrote test for the function in the 
directory **test**. this was my first time writing test and it might be to much but I learned 
how to use it while building it.

# Conclusion
I hope you enjoy my first website project that I have made. I am not going to lie, it was
originally not like this and at first I was going to host it as a server side website.
with aws amplify. Then I realized that this was honestly not necessary and I made this to be
a mostly static website. I learned a lot while making this and to whoever reads this, I hope
you have a nice day!
