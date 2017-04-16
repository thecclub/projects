## OBJECTIVE
Have you ever heard about the [`HACKING`](https://en.wikipedia.org/wiki/Hacking) might be but 70% so called **JANTA** doesn't know how it's done or how to fix it. In this project we are gonna make sure he learns basics of commands like **`ping`, `nslookup`, `ssh` & `ps`**. More specifically learning how to fix if he got hacked.

## Prerequisites
  * SSH client should be installed, putty for windows
  * SSH port should not be blocked

## Running
For running and deploying application you need go through following steps

- Get started with installing dependencies:

      cd src

      # Make sure you have yarn as a package manager globaly installed
      npm install -g yarn forever && yarn

      # Now once the dependencies are resolved start server
      forever start app.js

## Screenshots
![Hacked Website](src/assets/images/hacked.png) ![Main](src/assets/images/main.png)

## Further References

  * [`ping`](https://en.wikipedia.org/wiki/Ping_(networking_utility))
  * [`Nslookup`](https://en.wikipedia.org/wiki/Nslookup)
  * [`ssh`](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server-in-ubuntu)
  * [`Basic Commands Linux`](https://github.com/jlevy/the-art-of-command-line)
