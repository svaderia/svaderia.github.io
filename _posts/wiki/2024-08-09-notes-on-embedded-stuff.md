---
title: "Notes on embedded stuff"
tags: [embedded]
excerpt: "very bad notes, from defcon workshops"
snippet: true
---


embedded protocols

Mqtt

it has few security protocols, 
ACLs : READ, WRITE and READWRITE
default is READWRITE

More advanced is PKI certificates, but that's out of scope.


Paho C LIbrary: github.com/eclipse/paho.mqtt.c

## Firmware
binwalk 
    -e extracts
    -m Recursively extract
unzip

grep stuff like password, admin, telnet, etc.


### decrypt
* just try to decript with `gpg -d`

You can do firmware dynamic analysis with QEMU

## CTF stuff

hexedit : to edit an hex file
also do `strings`


