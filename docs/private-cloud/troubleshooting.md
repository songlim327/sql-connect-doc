---
sidebar_position: 3
---

# Private Cloud Troubleshooting

Solutions to some common errors in **Private Cloud**.

## Bridge Network Failure

1. Visit `Control Panel > Network and Internet > Network and Sharing Center`
2. Click `Change Adapter Options`

    ![Bridge Network 1](../../static/img/private-cloud/bridge-1.png)

3. Look for adapters named `Ethernet` and `Ethernet (Bridge)`

    ![Bridge Network 2](../../static/img/private-cloud/bridge-2.png)

4. Right click and check the properties of each adapter.
5. For `Ethernet`, it should have the following **check** (Example shown below):
    - Microsoft LLDP Protocol Driver
    - Hyper-V Extensible Virtual Switch

    ![Bridge Network 3](../../static/img/private-cloud/bridge-3.png)

6. For `Ethernet (Bridge)`, it should be the following **uncheck** (Example shown below):
    - Microsoft Network Adapter Multiplexor Protocol
    - Hyper-V Extensible Virtual Switch

    ![Bridge Network 4](../../static/img/private-cloud/bridge-4.png)

---

## Hyper-V Service Not Running

1. Open `Services` (search `services` in Windows search)
2. Look for a service called `Hyper-V Host Compute Service`
3. If the service status is not **Running**, right click and start it.

    ![Hyper-V Status](../../static/img/private-cloud/hyper-v-status.png)

---

## SQL Connect Virtual Machine Not Running

1. Open `Hyper-V Manager` (search `hyper-v` in Windows search)

    ![VM Status 1](../../static/img/private-cloud/vm-status-1.png)

2. Look for a virtual machine with the name **SQL Connect**.
3. Make sure it's running.
4. If it's state is some state other than running, right click on the virtual machine, and click *Start*.

    ![VM Status 2](../../static/img/private-cloud/vm-status-2.png)

---

## Windows Defender Not Running

1. If the service is not running, you have probably install **third party antivirus** in your server.
2. Antivirus like Kaspersky, Avira, Avast and so on are considered as third party antivirus.
3. These antivirus acts differently in different operation and the outcome is unpredictable.
4. What you can do is, uninstall it and restart your server. If the issue persist after uninstall, kindly contact our dealer / support.

