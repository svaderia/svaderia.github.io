---
title: "Use socat to spawn interactive binaries"
tags: [socat, cmd]
excerpt: "you can do wonders if you know your tools"
---

Did you ever wondered what you can do if you can run an interactive binary on a server 
which can be exposed via tcp to any user in the world? 
As soon as a user initiates the tcp connection, you spin up an instance of the binary, send output
over the network and wait for input over the network. 

This type of deployement is often used in CTF competitions to allow the participants to 
hack a binary remotely. 

Following `socat` command runs a python file every time a tcp-connection is made to the listening port.

```bash
socat tcp-listen:8888,reuseaddr,fork exec:'python pkcs7.py'
```

## Reference
* [socat](https://copyconstruct.medium.com/socat-29453e9fc8a6) 
