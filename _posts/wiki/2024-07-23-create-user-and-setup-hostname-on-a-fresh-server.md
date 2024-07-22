---
title: "Create user and setup hostname on a fresh server"
tags: [cmd, linux]
excerpt: "Let's customise it"
---

```bash
# Become root user
sudo -i

# Change the username
usermod -l newname oldname

# Change the home directory name
usermod -m -d /home/newname newname

# Change the group name
groupmod -n newname oldname

# Set the new hostname
hostnamectl set-hostname new-hostname

# Edit /etc/hosts
nano /etc/hosts

# Reboot the system
reboot
```

If you are logged in over SSH, Changing the username might fail with 
*usermod: user is currently used by process pid*, in this case you might want to
ssh as another user, or `root`. 

```bash
# Enable ssh-login using root temporirily
sudo vim /etc/ssh/sshd_config

# Change "#PermitRootLogin prohibit-password" to
# PermitRootLogin yes

# Restart ssh service
sudo systemctl restart ssh

# might or might not need this.
# make sure root is not locked, unlock it with following.
# sudo passwd -u root
```

Please don't forget to revert back the settings in `/etc/ssh/sshd_config` to disable root logins.
