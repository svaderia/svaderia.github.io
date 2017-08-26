---
title: Script to generate python scripts
tags: [Python]
header:
      image: /assets/images/python.jpg
      teaser: /assets/images/python.png
---

This post has been **Updated** for generating a script with functions that can run on `Python2` and `Python3`.  
{: .notice--success}
Recently I got habit of writing `shebang` and my name in all the python script I create. On the top of that, habit of writing a python 
script that can run on both version of python was increasing copy and pasting of same function.
To save my time and to create something useful I came up with a simple script that can generate my python scripts.

```python
#!/usr/bin/env python3
# @author = 53 68 79 61 6D 61 6C
# date	  = 08/06/2017

# Import the modules needed to run the script.
from os.path import exists
from time import strftime
import sys

def main():
    # Checks if version is specified seprately or not
    version = -1    
    if len(sys.argv) > 1:
        if sys.argv[1] in ['2','3']:
            version = int(sys.argv[1])
        else:
            print('Version is not valid, so creating file with deafult version')
    
    title = input("Enter a title for your script: ")

    # Add .py to the end of the script.
    title = title + '.py'

    # Convert all letters to lower case.
    title = title.lower()

    # Remove spaces from the title.
    title = title.replace(' ', '_')

    # Check to see if the file exists to not overwrite it.
    if exists(title):
        print("\nA script with this name already exists.")
        exit(1)


    name = "53 68 79 61 6D 61 6C "

    # Create a file that can be written to.
    filename = open(title, 'w')

    # Set the date automatically.
    date = strftime("%d/%m/%Y")

    # Write the data to the file.
    if version > 0:
        filename.write('#!/usr/bin/env python{}'.format(str(version)))
    else:
        filename.write('#!/usr/bin/env python')
    string = \
"""

from __future__ import print_function
import sys

def input():
    # redefine input so that it works with both python2 and python3
    return sys.stdin.readline().rstrip()





def main():
    pass

if __name__ == "__main__":
    main()
"""

    filename.write('\n# @author = ' + name)
    filename.write('\n# date\t  = ' + date)
    filename.write(string)
    
    # Close the file after writing to it.
    filename.close()

if __name__ == "__main__":
	main()
```

I gave execution permission to my script using `chmod +x pyscript.py` 
and added `alias py = '~/pyscript.py'` in my `.bashrc`. Now if I execute `py 2` in any folder it will create a new 
python script with the following format.

```python
#!/usr/bin/env python2
# @author = 53 68 79 61 6D 61 6C 
# date	  = 23/08/2017

from __future__ import print_function
import sys

def input():
    # redefine input so that it works with both python2 and python3
    return sys.stdin.readline().rstrip()





def main():
    pass

if __name__ == "__main__":
    main()
```