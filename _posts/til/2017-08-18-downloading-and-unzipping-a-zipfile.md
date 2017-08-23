---
title: Downloading and Unzippig a Zip File 
tags: [Python]
---

There might be a case where you want to download and unzip a file from given URL. Well
`Python` will always come to rescue you in any scenario.
There are multiple ways of doing it. I will document few of them here.  
All these ways codes are tested in `Python3`.

## Downloading a zip and unzipping it
Most basic way of doing it.
We used `/tmp` folder to store our zip file because depending upon the Linux distro it will get cleared.
```python
#!/usr/bin/python3
from urllib.request import urlopen
from zipfile import ZipFile

zipurl = 'Valid URL to zip file'
    # Download the file from the URL
zipresp = urlopen(zipurl)
    # Create a new file on the hard drive
tempzip = open("/tmp/tempfile.zip", "wb")
    # Write the contents of the downloaded file into the new file
tempzip.write(zipresp.read())
    # Close the newly-created file
tempzip.close()
    # Re-open the newly-created file with ZipFile()
zf = ZipFile("/tmp/tempfile.zip")
    # Extract its contents into <extraction_path>
    # note that extractall will automatically create the path
zf.extractall(path = '<extraction_path>')
    # close the ZipFile instance
zf.close()
```

## Using temp file and shutil
In previous solution we went into the trouble of saving the temporary file in `/tmp` folder.
But when you're using `Python` you will get an easy way around to everything.
`Python` has a inbuild module called `tempfile` that can make a temporary file or folder for and do autocleanup afterwards.
We will `shutil` module as well.
```python
from urllib.request import urlopen
from tempfile import NamedTemporaryFile
from shutil import unpack_archive
zipurl = 'http://stash.compjour.org/data/1800ssa.zip'
with urlopen(zipurl) as zipresp, NamedTemporaryFile() as tfile:
    tfile.write(zipresp.read())
    tfile.seek(0)
    unpack_archive(tfile.name, '/tmp/mystuff3', format = 'zip')
```

## Unzipping without saving the zip
Now this method will not create and save any files. It will directly save the extracted file.
```python
from io import BytesIO
from urllib.request import urlopen
from zipfile import ZipFile
zipurl = 'http://stash.compjour.org/data/1800ssa.zip'
with urlopen(zipurl) as zipresp:
    with ZipFile(BytesIO(zipresp.read())) as zfile:
        zfile.extractall('/tmp/mystuff4')
```