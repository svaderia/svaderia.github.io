---
title: "How to Run Interactive Commands in Background: Unix Shell Tips"
tags: [cmd]
excerpt: Use `CTRL + Z` and `bg` to send interactive commands to the background.
toc: false
classes: wide
---
> **TLDR**: In Unix-like shells, directly appending `&` to a command needing user input, such as a password, often results in an exit code `1` due to stdin disconnection. A more secure method involves temporarily suspending the command with `CTRL + Z` (which sends `SIGTSTP`), and then resuming it in the background with `bg %`. This approach is especially useful for sensitive operations like SSH tunneling, allowing input without exposing it on the terminal. The `%` in `bg %` represents the most recent suspended job. 

### Scenario: Running Interactive Commands in Background

Occasionally, you might need to run a command in the background that requires initial input, such as a password or configuration parameter. Directly appending `&` to such commands often leads to an exit code of `1`. This happens because, once in the background, the command loses access to `stdin` and cannot receive the necessary input.

### Why Not Just Use Scripts?

A common workaround is to encapsulate the command in a bash script, passing the input as an argument. While this works for non-sensitive inputs, it's a security risk for passwords, as it involves echoing them in the terminal.

### A Practical Example: SSH Tunneling

Let's illustrate this with SSH tunneling. Consider the command:

```bash
ssh -D 8888 -C -q -N tunnel@example.com
```

Upon execution, this command prompts for a password. Instead of entering the password and leaving the process in the foreground, you can:

1. Start the command normally and enter the password.
2. Press `CTRL + Z` to trigger a `SIGTSTP` signal, suspending the process and sending it to the background.

#### Managing Background Processes

You can view the suspended background job by using `jobs` command in terminal. With the process suspended, you have two options:

- `fg %`: Resumes the recently suspended process in the foreground.
- `bg %`: Resumes the recently suspended process in the background.

For our SSH tunnel example, use `bg %` to continue running the tunnel in the background. When `%` is used with `bg`, it typically refers to the most recently suspended job. You can also use `%` with specific job numbers (e.g., `%1`, `%2`) to refer to a particular job listed under the `jobs` command.

### Additional Considerations

- **Security**: Be cautious with sensitive inputs. Avoid techniques that expose them in the terminal or scripts.
- **Process Management**: Remember that background processes are tied to your shell session. Closing the session will terminate these processes.
- **Job Control**: Familiarize yourself with job control commands (`jobs`, `fg`, `bg`, `kill`) for efficient process management.
