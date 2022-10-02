---
sidebar_position: 5
---

import ReactPlayer from "react-player";

# Windows User Access Rights

This tutorial will guide you through the steps on how to limit users' access to only certain database groups for Private Cloud.
Both video & text tutorials are available.

:::note
If you are unsure of which window user the emails have access to, feel free to call our support to get the **email:windows** user mapping.
:::

## Video

Video tutorial here:

<ReactPlayer controls url="https://youtu.be/H78QOIUPd7k" />

## Tutorial

### Prerequisite: Retrieve Windows Users

1. Search `Computer Management`.
   ![Retrieve Windows User 1](../../../static/img/private-cloud/windows-user-access-rights/retrieve-windows-user-1.png)
2. Click `Local Users and Groups > Users`. (Look for username with your company name, those are the users created for SQL Connect - private)
   ![Retrieve Windows User 2](../../../static/img/private-cloud/windows-user-access-rights/retrieve-windows-user-2.png)

### Case Study

#### Environment

1. Two emails registered.
   - example1@gmail.com (has access to windows user example-01)
   - example2@gmail.com (has access to windows user example-02)
2. Two databases in the server.
   - db1
   - db2

#### Assumptions

1. example1@gmail.com can only access to db1.
2. example2@gmail.com can only access to db2.

#### Solutions

- Create two dcf file. (`db1.dcf` has link to db1, `db2.dcf` has link to db2)

![Create dcf 1](../../../static/img/private-cloud/windows-user-access-rights/1-create-dcf.png)

![Create dcf 2](../../../static/img/private-cloud/windows-user-access-rights/1-create-dcf-2.png)

- Right click on `db1.dcf`, select `Properties`.

![Select Properties 1](../../../static/img/private-cloud/windows-user-access-rights/2-select-properties.png)

- Go to `Security`, select `Advanced`.

![Security Advanced 1](../../../static/img/private-cloud/windows-user-access-rights/3-security-advanced.png)

- Click `Disable Inheritance`. (If the button shows `Enable Inheritance`, you may skip this step)

![Disable Inheritance 1](../../../static/img/private-cloud/windows-user-access-rights/4-disable-inheritance.png)

![Disable Inheritance 2](../../../static/img/private-cloud/windows-user-access-rights/4-disable-inheritance-2.png)

![Disable Inheritance 3](../../../static/img/private-cloud/windows-user-access-rights/4-disable-inheritance-3.png)

- Remove principal except `Administrators` and `SYSTEM`.

![Remove Principal 1](../../../static/img/private-cloud/windows-user-access-rights/5-remove-principal.png)

- Next, click `Add`, click `Select a Principal`.

![Add Principal 1](../../../static/img/private-cloud/windows-user-access-rights/6-add-principal.png)

- Search for the windows username you wish. In this case we will search for `example-01`. (Click `Check Names` after key in window username)

![Check 1](../../../static/img/private-cloud/windows-user-access-rights/7-check-1.png)

![Check 2](../../../static/img/private-cloud/windows-user-access-rights/7-check-2.png)

- Configure the permission to `Read` and `Read & execute` only, select `OK`.

![Permissions 1](../../../static/img/private-cloud/windows-user-access-rights/8-permissions.png)

- Repeat the `Add` procedure if you want more users to use this dcf. Press `Apply` and `OK` if there is no more.

![Apply 1](../../../static/img/private-cloud/windows-user-access-rights/9-apply.png)

- Repeat **step 2** to **step 9** for `db2.dcf`.
