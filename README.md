# servicesHub - NodeJS boilerplate


## Get started

1. Install Docker on your local machine (it's easy): https://www.docker.com/products/docker

1. Clone this repository: `git clone https://github.com/Bacto/servicesHub-boilerplate-nodejs`

1. Start the development server: `./start.sh` then wait to see "Server is running"

1. Go to "http://localhost:9090/helloWorld" to see your first service working :)


## Register your micro service to servicesHub

You have to register your micro service to servicesHub only the first time you want to deploy it.

1. Send your __micro service name__ AND __SSH public key__ by email to `serviceshub at bacto dot net` and wait for a confirmation

1. When you'll have an email with the confirmation, add servicesHub remote: `git remote add servicesHub git+ssh://gitolite@serviceshub1.bacto.net:2222/<SERVICE_NAME>.git`

1. Deploy your micro service :)


## Deploy your micro service to servicesHub

1. Push your micro service to servicesHub: `git push -u servicesHub master`

1. Wait a few minutes and go to your servicesHub URL to use your micro service

1. Enjoy :)



## Change the default port

The default port we use on your local machine is 9090. If you want to change it, DO NOT EDIT server.js

You can change the port in script `start.sh`
