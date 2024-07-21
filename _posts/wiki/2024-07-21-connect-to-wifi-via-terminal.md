---
title: "Connect to wifi via terminal"
tags: [cmd, linux]
excerpt: "when you don't have GUI"
---

1. **List Available Networks**: Use the `nmcli` command to list available Wi-Fi networks.

```bash
nmcli dev wifi list
```

2. **Connect to a Network**: Use the `nmcli` command to connect to a specific network. Replace `<SSID>` with the name of the Wi-Fi network and `<password>` with the Wi-Fi password.

```bash
nmcli dev wifi connect <SSID> password <password>
```

3. **Verify Connection**: Check the connection status to ensure you are connected.

```bash
nmcli dev status
```

### Additional Information

- **Listing All Network Interfaces**: You can list all network interfaces and their statuses using:

```bash
nmcli device
```

- **Disconnecting from a Network**: If you need to disconnect from a Wi-Fi network, use:

```bash
nmcli dev disconnect iface wlan0
```

Replace `wlan0` with the appropriate interface name if it is different.

- **More nmcli Options**: The `nmcli` command offers a wide range of options and functionalities. You can explore more by checking the manual:

```bash
man nmcli
man nmcli-examples
```

