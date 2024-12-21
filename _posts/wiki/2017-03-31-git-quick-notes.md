---
title: Git Quick Notes
tags: [git]
excerpt: Git cheat sheet for reference
---
> TODO: This needs to be reviewed and updated for the latest uses I do

## How to check which gitignore rule is ignoring the file
```bash
git check-ignore --verbose <PATH>
```
Quick cheat sheet for the most common and forgettable things.

## Config
{% highlight bash %}
$ git config --global user.name "Shyamal vaderia"   
$ git config --global user.email vaderiashayamal@gmail.com  
$ git config --global core.editor "vim"  
$ git config --list 
{% endhighlight %}

## Staging, Commit and Status
{% highlight bash %}
$ git diff          # Shows what you have changed but haven't staged
$ git diff --cached #Shows what has been staged but not commited
{% endhighlight %}

## Log : commit history
{% highlight bash %}
$ git log --pretty=oneline 
$ git log --since=1.weeks
$ git log --since="2017-04-15" 
$ git log --author="Shyamal Vaderia" 
$ git log --before="2017-04-20" 
{% endhighlight %}

## Amend
Normally done if you forgot to stage a file, or to change the commit message.
{% highlight bash%}
$ git commit --amend
{% endhighlight %}
If you want to stage more file than you have committed previously, just stage
that files first than use this command and this will stage 
the file you forgot as well.  

## Unstage a file
When you want to unstage a file that you have staged.
{% highlight bash %}
$ git reset HEAD <file name>
{% endhighlight %}

## Branching
{% highlight bash %}
$ git branch newBranch        # Ceates new branch
$ git checkout newBranch      # Go to newBranch
$ git checkout -b newBranch   # Same job as the above 2 commands
$ git branch                  # Shows all branches
$ git branch --merged         # Shows all merged branches
$ git branch --no-merged      # Shows unmerged branches
$ git branch -v               # Shows all branches and their last commits
$ git branch -d newBranch     # Deletes merged branches with this
$ git branch -D new           # Deletes unmerged branches
$ git branch -m newBranchName # Renames a branch
$ git merge newBranch         # Merge the branch version with the master
$ git mergetool               # use to solve merge conflicts
{% endhighlight %}

## Rebasing
Rebasing moves a branch to a new ( master / base ) commit. 
This is also referred to as a fast forward merge. 
{% highlight bash %}
$ git rebase master
{% endhighlight %}

## Revert and Reset
Some times you want to eliminate a previous commit, 
but you still want to keep the commit for integrity reasons.
Revert is usefull in this case.
{% highlight bash %}
$ git revert HEAD # You are back to where you started, but the commit was made
{% endhighlight %}
Reset eliminates previous commits and you can never get them back. 
You really should never use it actually.
{% highlight bash %}
$ git reset someFile 
# Removes a file from the staging area, but leave the working directory unchanged
$ git reset 
# Reset the staging area to match the most recent commit while leaving the working directory unchanged
$ git reset aCommit 
# Move back to this previous commit, reseting the staging area, but not the working directory
$ git reset --hard 
# Reset both the staging area and working directory to match the most recent commit
$ git reset --hard aCommit 
# Move back to the commit listed and change staging and working directory
{% endhighlight %}

## Clean
Clean removes untracked files from your directory and is undoable.
{% highlight bash %}
$ git clean -n # Shows which files will be removed
$ git clean -f # Remove untracked files
$ git clean -df 
# Remove untracked files and untracked directories in the current directory
$ git reset --hard # Undoes changes on all tracked files
$ git clean -df # Removes all untracked files
{% endhighlight %}

## Credential helper
Sometimes it is very tedious to enter Username and Password for same repository repeatedly.
Here is a solution to that!
{% highlight bash %}
# Permanently authenticating with Git repositories
$ git config credential.helper store
$ git push https://github.com/repo.git
    Username for 'https://github.com': <USERNAME>
    Password for 'https://USERNAME@github.com': <PASSWORD>
{% endhighlight %}

## Misc
Suppose you are on the `master` branch and you would like to test if the `dev` branch can be merged without conflict into the `master`.
{% highlight bash %}
# In the master branch
$ git merge dev --no-ff --no-commit
{% endhighlight %}
After that, you will be able to know if there's a conflict or not.  
To return in a normal situation, just abort the merge:
{% highlight bash %}
$ git merge --abort
{% endhighlight %}

## Check a pull request locally

```bash
# Fetch the PR from the remote repository
git fetch origin pull/<PR-number>/head:<local-branch-name>

# Checkout the PR branch locally
git checkout <local-branch-name>
```

Make sure to replace `<PR-number>` with the actual pull request number and
`<local-branch-name>` with a descriptive name for the branch you'll check out
locally.
