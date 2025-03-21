1. reflink
2. create new project. Add 4 things to the the asfp-config.
3. Make clock debuggable.
4. source build/env.sh
5. lunch bluejay-cur-userdebug
6. 


NOTE DOWN THE SHIT WHERE THINGS GO WRONG PLEASE. 



## Findings
RingtoneModel

CustomRingtoneDAO - addCustomRintone() is interesting, 

SharedPreference is where it stores it.

RingtoneManager - does some things related to getting data out of somewhere

StorageManagerService - Talks something about killing guys
