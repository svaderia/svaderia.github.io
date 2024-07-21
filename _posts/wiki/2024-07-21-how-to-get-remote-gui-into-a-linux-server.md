---
title: "How to get remote GUI into a linux server"
tags: [cmd, linux]
excerpt: "You might need to sometimes"
---

Say you have a server running at your home, and you want to access the GUI from another machine.

You can achive this using XRDP, X.ORG and XFCE.

## XRDP
It's an open source implementation of Microsoft's **Remote Desktop Protocol (RDP)** server.
It allows the users to connect to the server using any RDP client.

## XORG (X.Org Server)
Xorg is open source implementation of X window system. It provides fundamental framework for
a GUI environment on Unix-like systems.

Xorg manages the display, keyboard, and mouse input. It communicates with the hardware to draw the windows, 
handle input events and display graphical elements on the screen.

## XFCE
XFCE is a lightweight, open-source desktop environment for Unix-like operating systems.
You can use other desktop environment as well with XRDP, but XFCE is supposed to consume less resource and might work better when 
connecting over network.

## Tying everything together

When you set up remote desktop access on a Linux machine using XRDP, Xorg, and XFCE, here’s what happens:

1. **Xorg** handles the graphical interface, providing the necessary framework for drawing windows and handling input events from your keyboard and mouse.

2. **XFCE** runs on top of Xorg, providing a complete desktop environment that is lightweight and user-friendly. This is the interface you see and interact with when you log in.

3. **XRDP** acts as the bridge between your remote device and the Linux machine. It listens for incoming RDP connections and,
when one is detected, it creates a session for the user. This session uses Xorg to manage the display and XFCE to provide the desktop environment.

When you connect from a remote device using an RDP client (like Microsoft Remote Desktop), XRDP handles the connection and starts a new Xorg session with the XFCE desktop environment. This allows you to use your Linux machine remotely as if you were sitting in front of it.

## Installations
### 1. Install xrdp and a Desktop Environment

```bash
# Update your package list    
sudo apt update

# Install XRDP
sudo apt install xrdp -y

# Install XFCE
sudo apt install xfce4 xfce4-goodies -y

# Configure XRDP to use XFCE
# Create or edit the `.xsession` file in your home directory to start XFCE when connecting via xrdp:
echo "xfce4-session" > ~/.xsession

# Add the xrdp user to the `ssl-cert` group
sudo adduser xrdp ssl-cert

# Restart the XRDP service
sudo systemctl restart xrdp
```

### 2. Allow xrdp through the Firewall

If you have a firewall enabled, you need to allow traffic on port 3389 (the default xrdp port).


```bash
# Allow xrdp through the firewall
sudo ufw allow 3389

# Reload the firewall
sudo ufw reload
```

### 3. Connect to xrdp
Now you can connect to your server from the local area network. 
To access your server from external world, you have few ways.

#### Port forwarding in router
You can set up port forwarding in your router (check your router settings to see if it is supported).
Forward `port` and `TCP` protocol to your local area network server.
The default port for xrdp is `3389`.

Only challange you will face here is that your router's ip address will keep on changing. 
If you have a way to find the router's ip address when you are external, only then this would work.

#### Use VPN
You should be able to use a paid vpn service and set it up. 
I have not personally done it, so I lack experience here.

Once the RDP server is up and running, use RDP client for your OS and connect.
