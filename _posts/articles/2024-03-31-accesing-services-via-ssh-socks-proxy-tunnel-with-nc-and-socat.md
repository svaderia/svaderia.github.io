---
title: "Accesing Services via SSH SOCKS Proxy Tunnel with `nc` and `socat`"
tags: [cmd, ssh, socat]
excerpt: "Use socat to redirect traffic to opened tunnel"
toc: false
classes: wide
---


This guide provides instructions on how to access services on remote servers that can only be reached via a proxy, using `nc` (netcat) and `socat` on an Ubuntu server.

## Setting Up the Proxy Tunnel

First, establish an SSH SOCKS proxy tunnel. This tunnel will allow traffic to pass from your local system through the proxy:

```bash
ssh -D 8123 -C -q -N [Your SSH User and Host]
```

This command creates a SOCKS proxy on port `8123` of your local machine.

## Configuring `socat` Tunnel

Next, set up a `socat` tunnel to listen on a local port and forward traffic through the SOCKS proxy:

```bash
socat TCP-LISTEN:localport,fork SOCKS4A:localhost:target-server.com:targetport,socksport=8123
```

- Replace `localport` with a local port number of your choice where `socat` will listen.
- `target-server.com` should be replaced with the address of the server you're trying to access.
- `targetport` is the port number of the service on the target server.

## Connecting with `nc`

Finally, use `nc` to connect to the local port where `socat` is listening:

```bash
nc localhost localport
```

This setup enables your `nc` traffic to route through the SOCKS proxy, allowing access to services on the remote server that require proxy access.

---

By following these steps, you should be able to access remote services through the SSH SOCKS proxy using `nc` and `socat`. Ensure to replace placeholders like `localport`, `target-server.com`, and `targetport` with actual values relevant to your use case.
