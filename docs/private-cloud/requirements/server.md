---
sidebar_position: 2
---

# Server

Please fulfill the server requirements below.

## Network

1. Make sure to have fiber network (not streamyx, broadband & unifi lite) / low latency internet access. (ping below 20ms to [https://sql.com.my](https://sql.com.my))
2. Reserve 2 IP Address: 1 for Windows & 1 for Debian virtual machine.
3. Must have wired network connection/Ethernet.
4. Will do port forwarding pointing towards the Debian machine as below:

    ```txt
    8822[WAN] : 4822[LAN]
    8122[WAN] : 22[LAN]
    Both entries are in TCP mode.
    NO PORT FORWARDING ON THE WINDOWS.
    ```

5. Have a ready dynamic DNS (DDNS) / Fixed WAN IP Address.

## Hardware

1. CPU model not older than Intel i5 (5th generation) or AMD Ryzen 5.
2. RAM should be at least 8GB.
3. Make sure CPU Virtualization is enabled in the BIOS.
4. We encourage users to switch on the PC for 24/7 so that maintenance work can be carried out without interferring users' work during work time.
5. Must have Solid State Drive (**SSD**).

## Operating System

1. Windows Defender did it's job pretty well in protecting/securing your server. No **third party antivirus** should be installed in the server.
:::note Explanation
Third party antivirus including avast, avira, kaspersky and so on have different behavior. Each of them acts differently towards SQL Connect setup. Besides, if these antivirus update and breaks SQL Connect dependencies, it will take a long time for us to debug and resolve before your service back online. The windows antivirus (Windows Defender) has became very mature and is sufficient in securing your server.
:::
2. If you have used/installed serverlink in the server before, kindly reformat your server.
3. During the setup, automatic **Windows Update** will be disabled. However, users still able to update by clicking on the update in the settings.
4. SQL Connect only support **Windows 10 Professional** (version 1709, 1803, 1809), **Windows 11 Professional** and **Windows Server 2016** (Essential Edition and above).
    - The version mentioned above supports unlimited concurrent users.
    - Others will have a limit of 15 concurrent users login at once.
5. [Enable Hyper-V Virtualization](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)
