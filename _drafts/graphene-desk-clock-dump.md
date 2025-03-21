# 27th February, Debugging session with Atto

## AFU - Unlocked - Killed
Set Alarm
Kill the clock app, confirmed in the Android process dialogue. 
System UI didn’t play the ringtone 🙂
Clock App was restarted with another PID and played ringtone. 
We think it might be launched by the notification system and that plates it.

## AFU - Locked - Live
Set Alarm
Lock the phone, Clock is running in background. 
System UI didn’t play the ringtone 🙂
Clock App played the ringtone. 

## AFU - Locked - Killed
Set Alarm
Lock the phone, Clock is *not* running in the background. 
System UI didn’t play the ringtone 🙂
Clock App played the ringtone. 


## BFU
Set Alarm


## The files of interest
Ringtone.java

RingtoneManager.java

MediaPlayer.java: Intresting line: 1103, line: 500......


ContentResolver.java: 2567, acquireUnstableProvider().

ContextImpl.java: 

ActivityThread.

ContentProviderHelper.java: 392, cpi == null, so return null

interestingly !providerRunning


PackageManagerService.java


class Computer

server/pm/ComputerEngine.java: Implementes the Computer.

ComponenetResolverApi.getProvider()

ComponentResolverBase.java: 

PackageUserStateUtils.java: isMatch()
    We think it tries check if the provider is DirectBootAware and it returns
    "false"

"com.android.provider.media.module" is not directbootaware
"com.android.provider.contacts" is not directbootaware
"com.android.provider.settings" is aware.

ProviderInfo


WE NEED TO FIND OUT WHICH ALL PROVIDERS ARE DIRECTBOOTAWARE.
WE ONLY KNOW SETTINGS.

https://developer.android.com/reference/androidx/core/content/FileProvider


As another option we can just not use content provider. Read more about
FileProvider. Or SettingsProvider. Or something else.


## Observation
* If the ringtone is Default && BFU => we are chilling. Clock app plays the
  thing itself.

* If the rington is Argon && BFu => we aren't chilling. Clock app tries to do
  SetDataSource() and throws an exception. 
  * So now the localMediaPlayer = NULL
  * and mRemotePlayer = true
  * So it passes the responsibility to SystemUI:
  * Where SystemUI also tries to do the same thing with local media player, but
    fails
  * It is not allowed to send it to Remote, since it is the remote.
  * SO IT PLAYS THE BONG

* ringtone is Default & BFU


URI for Argon: content://media/internal/audio/medio/216?title=argon&canonical=1
URI for Default: content://settings/system/alarm_alert

### THE THINGY: We think
framework/base/services/core/java/com/android/server/am/ActivityManagerService.java

framework/base/core/res/res/raw/fallbackring.ogg


## Write down the story.

> Angry Email about Native Debugging thingy.

UnstableProvider vs StableProvider



## Desk clock debugging
acquireProvider:7962, ActivityThread (android.app)
acquireUnstableProvider:3980, ContextImpl$ApplicationContentResolver (android.app)
acquireUnstableProvider:2574, ContentResolver (android.content)
openTypedAssetFileDescriptor:2052, ContentResolver (android.content)
openAssetFileDescriptor:1883, ContentResolver (android.content)
openAssetFileDescriptor:1798, ContentResolver (android.content)
attemptDataSource:1153, MediaPlayer (android.media)
setDataSource:1119, MediaPlayer (android.media)
setDataSource:1047, MediaPlayer (android.media)
createLocalMediaPlayer:226, Ringtone (android.media)
getRingtone:863, RingtoneManager (android.media)
getRingtone:846, RingtoneManager (android.media)
getRingtone:769, RingtoneManager (android.media)
play:492, AsyncRingtonePlayer$RingtonePlaybackDelegate (com.android.deskclock)
handleMessage:143, AsyncRingtonePlayer$1 (com.android.deskclock)
dispatchMessage:109, Handler (android.os)
loopOnce:232, Looper (android.os)
loop:317, Looper (android.os)
run:85, HandlerThread (android.os)



## System server debugging
reportIfDebug:0, PackageUserStateUtils (com.android.server.pm.pkg)
isMatch:82, PackageUserStateUtils (com.android.server.pm.pkg)
isMatch:40, PackageUserStateUtils (com.android.server.pm.pkg)
isEnabledAndMatches:61, PackageStateUtils (com.android.server.pm.pkg)
resolveContentProvider:4818, ComputerEngine (com.android.server.pm)
resolveContentProvider:1128, IPackageManagerBase (com.android.server.pm)
getContentProviderImpl:384, ContentProviderHelper (com.android.server.am)
getContentProvider:150, ContentProviderHelper (com.android.server.am)
getContentProvider:7082, ActivityManagerService (com.android.server.am)
onTransact:2965, IActivityManager$Stub (android.app)
onTransact:2679, ActivityManagerService (com.android.server.am)
execTransactInternal:1436, Binder (android.os)
execTransact:1375, Binder (android.os)


## A potential place that could have alarm databse:
bluejay:/data/user_de/0/com.android.deskclock/databases # ls -ltr
total 20
-rw------- 1 u0_a97 u0_a97     0 2025-03-12 17:51 alarms.db-journal
-rw-rw---- 1 u0_a97 u0_a97 20480 2025-03-16 17:05 alarms.db
bluejay:/data/user_de/0/com.android.deskclock/databases # ls
alarms.db  alarms.db-journal



## A potential place where most of the default audio is stored:
bluejay:/product/media/audio # ls -ltr
total 16
drwxr-xr-x 2 root root 4096 2025-03-12 12:25 ui
drwxr-xr-x 2 root root 4096 2025-03-12 12:25 ringtones
drwxr-xr-x 2 root root 4096 2025-03-12 12:25 notifications
drwxr-xr-x 2 root root 4096 2025-03-12 12:25 alarms



## find on anything related to alarm in the project
$find . -name "*alarm*"

./sys/devices/platform/acpm_mfd_bus@17500000/i2c-20/20-001f/s2mpg10-rtc/rtc/rtc0/wakealarm
./sys/devices/platform/acpm_mfd_bus@17500000/i2c-20/20-001f/s2mpg10-rtc/rtc/rtc0/alarmtimer.1.auto
./sys/devices/platform/google,charger/thermal_dc_fan_alarm
./sys/fs/selinux/class/cap2_userns/perms/wake_alarm
./sys/fs/selinux/class/capability2/perms/wake_alarm
./sys/bus/platform/devices/alarmtimer.1.auto
./sys/bus/platform/drivers/alarmtimer
./sys/bus/platform/drivers/alarmtimer/alarmtimer.1.auto
./system/lib/libalarm_jni.so
./system/lib64/libalarm_jni.so
./data_mirror/data_de/null/0/com.android.deskclock/databases/alarms.db
./data_mirror/data_de/null/0/com.android.deskclock/databases/alarms.db-journal
./proc/irq/328/rtc-alarm0
./product/media/audio/alarms
./data/system/alarms
./data/system_de/0/ringtones/alarm_alert_cache
./data/user_de/0/com.android.deskclock/databases/alarms.db
./data/user_de/0/com.android.deskclock/databases/alarms.db-journal


### Ivan's Edge Case to consider
What if you add a custom ringtone, 
    * What if you replace the file from the files app ( a new file with the same
      name as old one, or delete a file and add a new one with same name. )
        * What happens BFU and AFU ?
