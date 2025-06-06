# Story time

## Information
URI for Argon: content://media/internal/audio/medio/216?title=argon&canonical=1
URI for Default: content://settings/system/alarm_alert (cached version)

## Options under considerations
Making MediaContentProvider DBA would not be correct.

As another option we can just not use content provider. Read more about
FileProvider. Or SettingsProvider. Or something else.

https://developer.android.com/reference/androidx/core/content/FileProvider

Atto has been making progress here.

## Bug scenarios
### Scenario 1 - AFU, Built-in Ringtone
* Set a new alarm with a built-in ringtone.

#### Code path (story version)
* When the time comes `AsyncRigntonePlayer.java:476, RingtonePlaybackDelegate.play(context, rintoneUri, ..)` would be called.
  * `play()` would eventually call `RingtoneManager.java:850, getRingtone(context,
    ringtoneUri)`
    * create a `Ringtone` object and set `Ringtone` object to `ringtoneUri`.
      * If the Clock app doesn't have an `LocalMediaPlayer`, it would try to create a
        one. It would call `Ringtone.java:216, Ringtone.createLocalMediaPlayer()`
        * create a `MediaPlayer` and call `MediaPlayer.SetDataSource(context,
          RingtoneUri)`
          * This will try do `attemptDataSource()` on `MediaContentProvider`
            (see URI above to understand and explain why `ContentProvider` and why `Media`.
              * Tries to do `ContentResolver.java:2566, acquireUnstableProvider()`
                * Eventually sends RPC to SystemServer
                  * SystemServer finds that the `MediaContentProvider` is either
                    Running, or will attempt to run it. While attempting it
                    would see that we are AFU.
                  * RPC is successfull
                * Happy
              * Happy
            * Happy
          * Happy
        * Happy
      * Happy
    * Happy
  * Happy
* Clock App plays the ringtone

See the stack trace later for failing version to exactly follow the call chain.

### Scenario 2 - AFU, CustomRingtone
* Add a custom Ringtone (TODO: Story version is pending. Estimation, here is
  where we will do the changes)

#### Code path (story version) for additon of ringtone
TODO: Add what happens when you add a custom ringtone.
Preliminary guesses.
1. CustomRingtone's URI gets stored somewhere, likely in the DE database.
2. CustomRingtone's file is not moved from it's original location, so it is
   most likely still in CE storage.

#### Code path (story version) for playing the ringtone 
Would be same as Scenario 1

### Scenario 3 - BFU, Default Ringtone

#### Code path (story version)
* When the time comes `AsyncRigntonePlayer.java:476, RingtonePlaybackDelegate.play(context, rintoneUri, ..)` would be called.
  * `play()` would eventually call `RingtoneManager.java:850, getRingtone(context,
    ringtoneUri)`
    * create a `Ringtone` object and set `Ringtone` object to `ringtoneUri`.
      * If the Clock app doesn't have an `LocalMediaPlayer`, it would try to create a
        one. It would call `Ringtone.java:216, Ringtone.createLocalMediaPlayer()`
        * create a `MediaPlayer` and call `MediaPlayer.SetDataSource(context,
          RingtoneUri)`
          * Somewhere here, there is a distinction between cached version and
            uncached version. (setting uri is cached. if resolved to actual uri,
            it is also a MediaContentProvider)
          * This will try do `attemptDataSource()` on `SettingsContentProvider`
            (see URI above to understand and explain why `ContentProvider` and why `Settings`.
              * Tries to do `ContentResolver.java:2566, acquireUnstableProvider()`
                * Eventually sends RPC to SystemServer
                  * SystemServer finds that the `SettingsContentProvider` is
                    DirectBootAware AND we are in BFU. So it will try to run it
                    if it is not already running.
                  * RPC is successfull
                * Happy
              * Happy
            * Happy
            * Somewhere here we would use the content provider to resolve the
              URI and do `openAssetFileDescriptor`. Since the ContentProvider
              could resolve the URI to a file path, this would work.
          * Happy
        * Happy
      * Happy
    * Happy
  * Happy
* Clock App plays the ringtone



### Scenario 4 - BFU, Built-in Ringtone 

#### Code path (story version)
* When the time comes `AsyncRigntonePlayer.java:476, RingtonePlaybackDelegate.play(context, rintoneUri, ..)` would be called.
  * `play()` would eventually call `RingtoneManager.java:850, getRingtone(context,
    ringtoneUri)`
    * create a `Ringtone` object and set `Ringtone` object to `ringtoneUri`.
      * If the Clock app doesn't have an `LocalMediaPlayer`, it would try to create a
        one. It would call `Ringtone.java:216, Ringtone.createLocalMediaPlayer()`
        * create a `MediaPlayer` and call `MediaPlayer.SetDataSource(context,
          RingtoneUri)`
          * This will try do `attemptDataSource()` on `MediaContentProvider`
            (see URI above to understand and explain why `ContentProvider` and why `Media`.
              * Tries to do `ContentResolver.java:2566, acquireUnstableProvider()`
                * Eventually sends RPC to SystemServer
                  * SystemServer finds that the `MediaContentProvider` is *NOT*
                    DirectBootAware AND we are in BFU. So it will fail and
                    return null.
                  * RPC *Failed*
                * Sad
              * Sad
            * Sad
          * Sad
        * Sad
      * Sad
    * Sad
  * Sad
* Clock App can't play the Ringtone, And it can ask a `RemoteMediaPlayer` to
  play the ringtone, it will try that.
  * Sends an RPC to SystemUI to play the ringtone with the same URI.
    * SystemUI will *FAIL* in the same way as Clock.
      * SystemUI itself is the `RemoteMediaPlayer` so it can't ask anyone else
        for fallback.
        * Hence SystemUI plays the `fallbackringtone.ogg` (BONG).

### Scenario 5 - BFU, Custom Ringtone (ogg, mp3, midi)

#### Code path (story version)
Same story as Scenario 4 with different URI (TODO: Find and confirm the URI)



# Information Dump yard
Things that are more interesting would be moved to other sections.

## Desk clock stack trace on a sad story (Scenario 4, 5)
```
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
```

## System server stack trace on a sad story (Scenario 4, 5)
```
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
```
PackageUserStateUtils.java: isMatch()
    We think it tries check if the provider is DirectBootAware and it returns
    "false"


## A potential place that could have alarm databse:
```
bluejay:/data/user_de/0/com.android.deskclock/databases # ls -ltr
total 20
-rw------- 1 u0_a97 u0_a97     0 2025-03-12 17:51 alarms.db-journal
-rw-rw---- 1 u0_a97 u0_a97 20480 2025-03-16 17:05 alarms.db
bluejay:/data/user_de/0/com.android.deskclock/databases # ls
alarms.db  alarms.db-journal
```

## A potential place where most of the default audio is stored:
```
bluejay:/product/media/audio # ls -ltr
total 16
drwxr-xr-x 2 root root 4096 2025-03-12 12:25 ui
drwxr-xr-x 2 root root 4096 2025-03-12 12:25 ringtones
drwxr-xr-x 2 root root 4096 2025-03-12 12:25 notifications
drwxr-xr-x 2 root root 4096 2025-03-12 12:25 alarms
```

## find on anything related to alarm in the project

```bash
$ find . -name "*alarm*"

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
```


### Ivan's Edge Case to consider
What if you add a custom ringtone, 
    * What if you replace the file from the files app ( a new file with the same
      name as old one, or delete a file and add a new one with same name. )
        * What happens BFU and AFU ?

### Get all the things that have directBootAware

```
build/envsetup.sh
mangrep directBootAware
```

### Interesting thing to note
On an FBE-enabled device, each user of the device has two storage locations available to apps:

*Credential Encrypted (CE) storage*, which is the default storage location and only available after the user has unlocked the device.
*Device Encrypted (DE) storage*, which is a storage location available both during Direct Boot mode and after the user has unlocked the device.


`/data/user_de/` is the place (i think) where DE data is stored.
`/data/user_ce/` is the place (i think) where DE data is stored.

### Open source app of interest? 

https://github.com/BlackyHawky/Clock -- check with dave if it's okay to install
and run this?  

https://github.com/Batlin/DeskClock -- less interesting tbh

### Location of Bong
`frameworks/base/core/res/res/raw/fallbackring.ogg`

More information about what is BONG and Where is it etc. might be found in 
`frameworks/base/core/res/res/values/symbols.xml`

### Location of other audio files in the build tree.
`frameworks/base/data/sounds/`

Dave wondered during class what would it take to add Bong with default list.
The answer to that may lie in `frameworks/base/data/sounds/README.txt` and
`frameworks/base/data/sounds/AllAudio.mk`

### Content Observers.. This might really be useful

```java
# ./deskclock/data/AlarmModel.java

    AlarmModel(Context context, SettingsModel settingsModel) {
        mSettingsModel = settingsModel;

        // Clear caches affected by system settings when system settings change.
        final ContentResolver cr = context.getContentResolver();
        final ContentObserver observer = new SystemAlarmAlertChangeObserver();
        cr.registerContentObserver(Settings.System.DEFAULT_ALARM_ALERT_URI, false, observer);
    }

<-- snipped -->

    /**
     * This receiver is notified when system settings change. Cached information built on
     * those system settings must be cleared.
     */
    private final class SystemAlarmAlertChangeObserver extends ContentObserver {

        private SystemAlarmAlertChangeObserver() {
            super(new Handler(Looper.myLooper()));
        }

        @Override
        public void onChange(boolean selfChange) {
            super.onChange(selfChange);
            mDefaultAlarmRingtoneUri = null;
        }
    }
```

### How does default ringtone's URI is set to Settings?
It's hardcoded to some extent in the prefs in Deskclock in the following files
`SettingModel.java`
`RingtoneModel.java`


### What happens when you change your default alarm ringtone in settings
1. If it is one of the built-in ringtones, Settings copy it into `/data/system_de/0/ringtones/alarm_alert_cache`
2. If you press on `+Add New` in Settings app, and add a custom ringtone. Then when you select that custom ringtone as Default, the above cache is removed. 
  * Which means, the Custom Default Ringtone is not accessible BFU.
  * If you do above, then the Custom Ringtone is "forever" present in the Setting Menu "Default alarm sound"
3. DeskClock builds a list of "internal" ringtones via RingtoneLoader
```
            ringtoneCursors.add(this.getInternalRingtones());
            ringtoneCursors.add(this.getMediaRingtones());
```
`getMediaRingtones()` is returning the any user added default ringtones to the list.

### How to dump the database on android phone?
```
adb root
adb shell
cd /data/user_de/0/com.android.deskclock/databases
sqlite3 alarms.db
sqlite> .dump
```

Interesting dump with some URIs: 
```
sqlite> .dump
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE android_metadata (locale TEXT);
INSERT INTO android_metadata VALUES('en_US');

CREATE TABLE alarm_templates (_id INTEGER PRIMARY KEY,hour INTEGER NOT NULL, minutes INTEGER NOT NULL, daysofweek INTEGER NOT NULL, enabled INTEGER NOT NULL, vibrate INTEGER NOT NULL, label TEXT NOT NULL, ringtone TEXT, delete_after_use INTEGER NOT NULL DEFAULT 0);
INSERT INTO alarm_templates VALUES(1,8,30,0,0,1,'','content://settings/system/alarm_alert',0);
INSERT INTO alarm_templates VALUES(3,14,0,0,1,1,'','content://media/external/audio/media/1000000028?title=Free_Test_Data_1MB_MP3&canonical=1',0);
INSERT INTO alarm_templates VALUES(4,13,2,0,1,1,'','content://media/internal/audio/media/179?title=BeeBeep%20Alarm&canonical=1',0);
INSERT INTO alarm_templates VALUES(2,9,0,0,0,1,'','content://com.android.externalstorage.documents/document/primary%3ARoot.mp3',0);
INSERT INTO alarm_templates VALUES(3,14,0,0,1,1,'','content://com.android.externalstorage.documents/document/primary%3ARingtones%2FRingtones.mp3',0);
INSERT INTO alarm_templates VALUES(4,13,2,0,1,1,'','content://com.android.externalstorage.documents/document/primary%3ATest%2Ftest.mp3',0);
INSERT INTO alarm_templates VALUES(5,13,11,0,1,1,'','content://com.android.providers.downloads.documents/document/1',0);

CREATE TABLE alarm_instances (_id INTEGER PRIMARY KEY,year INTEGER NOT NULL, month INTEGER NOT NULL, day INTEGER NOT NULL, hour INTEGER NOT NULL, minutes INTEGER NOT NULL, vibrate INTEGER NOT NULL, label TEXT NOT NULL, ringtone TEXT, alarm_state INTEGER NOT NULL, alarm_id INTEGER REFERENCES alarm_templates(_id) ON UPDATE CASCADE ON DELETE CASCADE);
INSERT INTO alarm_instances VALUES(1,2025,3,15,14,0,1,'','content://com.android.externalstorage.documents/document/primary%3ARingtones%2FRingtones.mp3',1,3);
INSERT INTO alarm_instances VALUES(2,2025,3,16,13,2,1,'','content://com.android.externalstorage.documents/document/primary%3ATest%2Ftest.mp3',0,4);
INSERT INTO alarm_instances VALUES(3,2025,3,16,13,11,1,'','content://com.android.providers.downloads.documents/document/1',0,5);
COMMIT;
```

Shared preferences are also magic and should be evaluated.
```
adb root
adb shell
cd /data/user_de/0/com.android.deskclock/shared_prefs
cat com.android.deskclock_preferences.xml
```

Dump of the cat: 
```
<?xml version='1.0' encoding='utf-8' standalone='yes' ?>
<map>
    <int name="selected_tab" value="0" />
    <string name="default_alarm_ringtone_uri">content://settings/system/alarm_alert</string>
    <string name="home_time_zone">America/New_York</string>
    <string name="ringtone_uri_3">content://com.android.externalstorage.documents/document/primary%3ARingtones%2FRingtones.mp3</string>
    <boolean name="display_clock_seconds" value="false" />
    <string name="ringtone_uri_2">content://com.android.externalstorage.documents/document/primary%3ATest%2Ftest.mp3</string>
    <int name="intent.extra.alarm.global.id" value="1" />
    <string name="ringtone_uri_1">content://com.android.externalstorage.documents/document/primary%3ARoot.mp3</string>
    <int name="number_of_cities" value="1" />
    <string name="ringtone_uri_0">content://com.android.providers.downloads.documents/document/1</string>
    <string name="city_id_0">C78</string>
    <set name="ringtone_ids">
        <string>0</string>
        <string>1</string>
        <string>2</string>
        <string>3</string>
    </set>
    <string name="ringtone_title_3">Ringtones</string>
    <string name="ringtone_title_2">test</string>
    <long name="next_ringtone_id" value="4" />
    <string name="ringtone_title_1">Root</string>
    <string name="ringtone_title_0">Donwloads</string>
</map>
```
