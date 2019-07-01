Get Starter for Docker
===

Prerequisites
---

- [Install Docker version 1.13 or higher](https://docs.docker.com/engine/installation/).

Build the app
---

We are ready to build the app. Make sure you are still at the top level of your new directory. Here’s what `ls` should show:

``` bash
$ ls
Dockerfile    app.py      requirements.txt
```

Now run the build command. This creates a Docker image, which we’re going to name using the `--tag` option. Use `-t` if you want to use the shorter option.

``` bash
docker build --tag=friendlyhello .
```

Where is your built image? It’s in your machine’s local Docker image registry:

``` bash
$ docker image ls

REPOSITORY            TAG                 IMAGE ID
friendlyhello         latest              326387cea398
```

Run the app
---

Run the app, mapping your machine’s port 4000 to the container’s published port 80 using `-p`:

``` bash
docker run -p 4000:80 friendlyhello
```

You should see a message that Python is serving your app at `http://0.0.0.0:80`. But that message is coming from inside the container, which doesn’t know you mapped port 80 of that container to 4000, making the correct URL `http://localhost:4000`.

Now let’s run the app in the background, in detached mode:

``` bash
docker run -d -p 4000:80 friendlyhello
```

You get the long container ID for your app and then are kicked back to your terminal. Your container is running in the background. You can also see the abbreviated container ID with `docker container ls` (and both work interchangeably when running commands):

``` bash
$ docker container ls
CONTAINER ID        IMAGE               COMMAND             CREATED
1fa4ab2cf395        friendlyhello       "python app.py"     28 seconds ago
```

Now use docker container stop to end the process, using the CONTAINER ID, like so:

``` bash
docker container stop 1fa4ab2cf395
```
