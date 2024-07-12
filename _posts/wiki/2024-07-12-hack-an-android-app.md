---
title: "Hack an Android app"
tags: [ctf, android]
excerpt: "first ctf challange :)"
---


So you can use [skylot/jadx](https://github.com/skylot/jadx) to decompile the apk. 
This will allow you to get the `Manifest.xml` etc. from the apk.

First challange was finding about which permissions the app required, the answer was evident from the `Manifest.xml`.

Second challange required you to read the `resource`, get some values and then make a CURL request. This was not that hard, requried you to read the code. 

Third and Fourth challanges were interesting. The app stored data into a local sqlite database. 
When you are emulating the app, the data is stored in `/data/data/<package-name>/databases`. 
From Android studio, you can open this with `View -> Tool Windows -> Device File explorer`. There is a way to do it with `adb` as well.

Copy the `sqlite.db3` file to another directory. Now open the data with `sqlitebrowser sqlite.db3` and that helped answer the questions. 

The files reuqired for the fifth question were also present in the same directory structure. We were required to do something with it, but I couldn't attempt it since I had already exhausted my tries to submit the flags.


