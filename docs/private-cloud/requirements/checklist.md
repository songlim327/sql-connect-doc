---
sidebar_position: 2
---

# Checklist

1. Make sure the client has fiber internet (e.g. **MAXIS**, **UNIFI**, **TIME**).
:::caution Notes
**STRICTLY NO STREAMYX/BROADBAND/UNIFI LITE ARE ALLOWED**
:::
2. Prepare a clean server with at least minimum spec below:
    - **CPU**: Intel i5 (5th gen) or AMD Ryzen 5
    - **RAM**: 8GB
    - **Disk**: Solid state drive (SSD)
3. Reserve 2 local IP Address:
    - 1 for Windows & 1 for Debian 9 Virtual Machine
    - If no special requirements, may leave it empty in the checklist. We will assign them accordingly.
4. Port forwarding will be done on the Debian 9 VM.
    - If not sure how to configure this, may leave it empty in the checklist. We will help in configuring it.
5. Enable virtualization in the BIOS. Here's how you can check if you have enabled it.
    - If it is not enabled, you may need to enter BIOS to switch it on. [Guide on how to enter BIOS](https://www.laptopmag.com/articles/access-bios-windows-10)

6. Enable Hyper-V after the above has been done.
    - [Guide on how to enable Hyper-V Manager](https://www.nextofwindows.com/how-to-enable-configure-and-use-hyper-v-on-windows-10)

7. Get **Dynamic DNS (DDNS)/ Fixed WAN IP** ready.
    - If you are getting one from *NO-IP*, you may set it up using the client provided. [NO-IP Dynamic Update Client](https://www.noip.com/download?page=win)
    - Refer to [Dynamic DNS (DDNS)](./ddns) if you are new to this.
8. Make sure the server has **Ethernet** connection.
:::caution Notes
**STRICTLY NO WIFI IS ALLOWED**
:::
9. Download and install Firebird Server. [Firebird Downloads](https://firebirdsql.org/en/firebird-3-0-6/)
10. Make sure there is no antivirus other than Windows Defender.
11. Fill in the checklist and send it to us. [Checklist](https://docs.google.com/spreadsheets/d/1iqCgQMDHGcTYtt0HSgAsEAPTED1eltnQj8ywJdwYYx0/edit?usp=sharing)
