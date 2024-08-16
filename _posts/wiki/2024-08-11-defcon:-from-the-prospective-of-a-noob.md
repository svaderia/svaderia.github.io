---
title: "DefCon: From the prospective of a noob"
tags: [security, defcon]
excerpt: "Something everyone should experience once"
---

I went to my first every DefCon recently. 
While I don't have background in security, I still find the 
world of exploitation and capture the flag very interesting.
I got introduced to these after I joined CMU. As part of my 
degree I am required to take "Introduction to Information Security" course,
this course along with few labs in 15-513 were enough to pique
my interest in computer security.

So here is what I learned, what I did, and most importantly what I would 
do differently next time.

## Day 1: The day of nothingness
Well, the first day of DefCon has nothing of much importance. There 
aren't any notable events that happens. The villages and talks start
from Day 2.

The LineCon is not what it used to be for the badges, so you would get
your badge pretty fast (took me 40 mins). The cash line this year was 
non-existent, might be a good idea to just buy the badge with cash.

The true LineCon happened for the Merch. The official Merch line was 
very long. Since there isn't much happening, you can spend a while in 
the merch line if you like something you want to buy. Generally the good
items sell out fast, so make sure to be in the line quickly after you get 
your badge.

If you are social, you should look out for Parties that happens on Day 1, 
generally those are the BlackHat parties and ToxicBBQ. There is also the
r/DefCon subreddit meetup that historically happens on Wed-Thurs.
This is a perfect day to catch up with folks you are planning to meet at 
the Con.

### What I could do differently.
* I could actually reach late in the day and pick up my badge on the
Day 2 of the Con.
* I could've pre-planned to catchup with the people.
* I could've spend some meaningful time in the reddit meetup, not just
pick up some swag.
* I could roam around the city.

## Day 2: The day of being lost
It was my first Con, so I would forgive myself. But I was totally lost this 
entire day.
I reached the venue around 9:30PM and stood into the line towards the village
areas on the ground floor. I was excited by the workshops planned in 
Embedded System Village (ESV), so I headed towards it as soon as the door 
opened up.
The workshop was nice and gave some basic understanding of hacking the firmware
of an embedded device and about the MQTT protocol used by embedded device for
communication. 
After that I tried my hand at the ESV CTF, I couldn't get far since it's first
time I was trying to get the access to the device on the network. I learned some 
`nmap` magic using google and got few flags, tbh there was a lot I left on the table
just because my fundamentals are not very strong. 

Afterwards I was lost on what to do, I visited few villages, but didn't interact with 
anyone there. I went to checkout the contest area, but felt very out of place there.
After roaming around aimlessly for a while, I went back to ESV CTF and was able to 
get one more flag. 

I think the highlight of the day happened at the very end with the Awesome 
"Hacker Jeopardy". This was very fun. I said to myself "Don't F*ck it up" and went home
planning for Day 3.

### Do's
* Engage with village staffs. They are friendly and won't kill you for asking questions.
* Go to LHC space, there are equally lonely hackers there.
* Don't "feel" you are the only n00b around.
* Go to the Parties, even if you don't drink, just go be awkward there. Put your phone away,
basically force yourself to engage. The only few conversations you had at Con were quite 
amazing.
* Go to Hacker Jeoaprdy, it's awesome.

### Don't
* Don't be shy.
* Don't hesitate to ask "Can I join?"

## Day 3: The day of rediscovery
I spent some time at the lock picking village in the morning. 
Went to ESV CTF again with a friend, we got one more flag and were so close to getting
another.
Lesson learned is that `nmap` is fricking awesome, get the hang of it and a lot of 
embedded devices just have default id and password for their website access or ssh access.
decoding the firmware is pretty powerful for lower end devices since a lot of sensitive 
information is stored into them, best case you can find the root password, worst case you 
will find the code that houses the web-portal and can expoit some functionalities of that.

Attended a workshop at ESV which talked about how to hack a simulated camera by extracting/
analysing the firmware.

Went to Hardware Hacking and Soldering village, u/MetaN3rd offered to teach some soldering
which was pretty fun. Soldered a nice SAO and another badge.

Went to aerospace village to try my hand at flying the drone, but damn that shit is hard.

While waiting in line for the Jack's party, talked to a guy with RFID Implant in his hand.
Pretty cool, but not sure if I want to do it to myself. You can program the RFID with say
your car key, and you can just wave your hand to open your car.

#### Do's 
* Participate in the village CTFs, basically the ones where you are lost.
* Go to Social Engineering village. They had some awesome stuff.
* Go with friends. Go with purpose.
* Take LAN wire with you if you want to participate in CTF that rely on network.

## Day 4: The day of endings
This is the day when I had most purpose I think. I wanted to attend a talk by 
Andrew "DigitalAndrew" Bellini on "Anyone can hack IoT - a beginner's guid to hacking your
first IoT device". This was a very nice talk. I will post my notes later.

Before the talk I thoroughly visited the IoT village, engaged in the amazing workshops 
they had organised. First workshop was about finding vuln in an already downloaded firmware
and then later it was about how to exploit it. Next workshop was about doing a replay attack
on an BLE lamp to exploit no authorisation.
There was another workshop there where they talked about how to actually get the firmware
from the actual hardware. You can extract the firmware via `SPI` bus from the controller using 
the `Tigard` board and `flashrom`. Now you can unzip it using `binwalk` and then look at the
contents of it. For the specific camera that was being used in the workshop, the root password 
was hardcoded into the firmware. They were also uploading these videos on AWS, and the keys to 
the AWS buckets were also hardcoded.

At the end, I also got signature of *Jack Rhysider* from *Darknet Diaries* on my DefCon badge.

### Do's
* Go and explore Social Engineering Village, I have heard cool stuff about them.
* Go to LHC community room.
* Go to RF village, some cool stuff there.
* Go to Sticker Swap tables, you will find some cool people there and some cool stickers :)
* Go to Hacker Jeopardy.
* Go to parties, even if you don't drink, doesn't matter. It's not your usual party.
* Try to hack some badges during the con, ex. 5nack3y, Alt Beirs.

## Until next time
* Play around with the badge, upload new games, make something cool and take it to the next con.
* Learn `nmap` well before next con.
* Play around with firmware development and analysis, be ready for next ESV CTF.
* Play around with the ESV board.
* Get a Flipper Zero and have fun.
* Create some cool stickers before next con and take them with you.


This was definetly an experience I would advice everyone to have atleast once. Looking forward
to the next con.

## Talks to lookout for
Following talks are something to lookout for when they are released by the DefCon. All of these
are recorded talks.
* Money Laundering talk (find the name)
* Attending Social Engineering like youre picard, by jayson e street.  
* <TBD>

