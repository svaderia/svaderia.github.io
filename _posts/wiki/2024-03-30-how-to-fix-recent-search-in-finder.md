---
title: "How to fix Recent search in Finder"
tags: [misc, macos]
excerpt: "Rebuild your Spotlight index"
snippet: true
---

My recent tab in finder was not showing up.  
This could be due to multiple reasons, but one of the reasons I found online was that if the spotlight search index gets corrupted, the recents will not work.  
To validata this, I tried searching for well known files I had on my system and I saw that the search was also not working. So that proved the theory that the spotlight was not working correctly.

To fix this, You go to `General->Spotlight->privacy` setting. Add your entire harddrive to the `ignore directory`. This will force the spotlight to delete the current search index.
Then remove the harddrive from this setting after a while. This wil make spotlight create a new index, this may take a while (maybe up to a day) and then Force quit and Force start the Finder, this fixed the issue for me.

## References 
* [How to fix finder search](https://www.signatureedits.com/how-to-fix-finder-search/)
* [Osx finder gets the dumbing down treatement in high sierra](https://medium.com/@Crom/osx-finder-gets-the-dumbing-down-treatment-in-high-sierra-4e5121e0f0fc)
* [stackexchange: recent items menus have stopped working on my imac](https://apple.stackexchange.com/questions/211471/recent-items-menus-have-stopped-working-on-my-imac)
* [alfredforum: use alfred to observe contents of all my files](https://www.alfredforum.com/topic/8122-use-alfred-to-observe-contents-of-all-my-files/)
