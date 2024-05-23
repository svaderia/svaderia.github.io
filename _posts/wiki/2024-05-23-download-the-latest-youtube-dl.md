---
title: "Download the latest youtube-dl"
tags: [cmd]
excerpt: "You need to know what youtube-dl is"
---

For some reason the repository has not cut a new release tag since a while. 
They even suggest that we try out [yt-dlp](https://github.com/yt-dlp/yt-dlp). 

We can install the latest `HEAD` from `main` branch. Let's use `pip`. [^1]


[^1]: You can find more details [here.](https://github.com/ytdl-org/youtube-dl/issues/31530#issuecomment-1435477247)

```
 pip install --upgrade --force-reinstall "git+https://github.com/ytdl-org/youtube-dl.git"
```


[See this comment for more details.](https://github.com/ytdl-org/youtube-dl/issues/31530#issuecomment-1435975611)
> tldr; (and who can blame you?)
> 
> Updating with -U won't work until there is a [new release](https://github.com/ytdl-org/youtube-dl/issues/31585). However, there is now a nightly build of youtube-dl in our repo here: https://github.com/ytdl-org/ytdl-nightly/releases. You can install this in the same ways as [described in the manual](https://github.com/ytdl-org/youtube-dl#user-content-installation), but change the URL for the download to match the appropriate one on the nightly release page. This is the way to go if you want a single file executable build, or if other methods don't succeed. See [my post below](https://github.com/ytdl-org/youtube-dl/issues/31530#issuecomment-1449990989) for a script, or use a package like _python-is-python3_, or make a symbolic link, if your environment is POSIX-like and you don't have a Python called `python`.
> 
> If you installed with a package manager (_apt_, _yum_, _brew_, _winget_, etc), you may find that the maintainers of your package repository have updated the package from a fixed development version (but, eg, Ubuntu so far only has a [PPA update](https://launchpad.net/~forkotov02/+archive/ubuntu/ppa); see below for _brew_). As suggested by @HinTak, you could also ask the packagers of yt-dl in your package or distro repository to update the package from the git master of this repo, though some prefer only release builds.
> 
> If you have a Python installation, use _pip_ to install from the git master of this repo: [#31530 (comment)](https://github.com/ytdl-org/youtube-dl/issues/31530#issuecomment-1435477247).
> 
> If your yt-dl was installed with a package manager that needed admin, the command to update the module will need the same.
> 
> If you installed with _brew_, _brew_ can [now update you](https://github.com/ytdl-org/youtube-dl/issues/31530#issuecomment-1475065132) to a [patched version that doesn't crash, but is not the latest git master](https://github.com/ytdl-org/youtube-dl/issues/31530#issuecomment-1475069872). You can also try the `--HEAD` option to update to the latest master code, similar to the _pip_-based suggestions.
> 
> Or you can try using yt-dlp instead if your environment supports it: https://github.com/yt-dlp/yt-dlp.
> 
> Obviously, if you've tried to update in one of these ways and the original issue persists, the update didn't work: you are still running the release version or a development version that doesn't include the fix. Please check exactly how your yt-dl was installed and update accordingly. It may be easiest just to uninstall it and install the appropriate single file nightly build instead.

