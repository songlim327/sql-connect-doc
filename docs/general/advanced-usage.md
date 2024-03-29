---
sidebar_position: 3
---

# Advanced Usage

## Copy Image into Rich Text Editor

- Firstly, [_upload_](./basic#upload) the image file to SQL Connect
- In SQL Account / SQL Payroll, go to `View > File Explorer`
- Navigate to `This PC > SQL Drive on SQL Connect > double click to open your image file`
- Select All (or press `Ctrl + A`), and then copy it.
- Go to the rich text editor, paste the image you just copy.

<Image path="/img/general/copy-image-rich-1.png" />
<Image path="/img/general/copy-image-rich-2.png" />
<Image path="/img/general/copy-image-rich-3.png" />
<Image path="/img/general/copy-image-rich-4.png" />

---

## Delete Files in SQL Drive

<Image path="/img/general/delete-files-1.png" />
<Image path="/img/general/delete-files-2.png" />

---

## Kill Firebird Connections

### Method 1

- To use this method, take note that the last logged in user must be `ADMIN`.

<Image path="/img/general/kill-firebird-connections-1-1.png" />
<Image path="/img/general/kill-firebird-connections-1-2.png" />
<Image path="/img/general/kill-firebird-connections-1-3.png" />

### Method 2

- To use this method, login as `ADMIN`.

<Image path="/img/general/kill-firebird-connections-2-1.png" />
<Image path="/img/general/kill-firebird-connections-2-2.png" />
<Image path="/img/general/kill-firebird-connections-2-3.png" />

---

## Link with SQL Pos

1. This is for **public cloud** users only.
2. Once requested, you will receive a file link. In the file, you can find all the information required to link local SQL Pos with SQL Account. Example on how the file looks like:

<Image path="/img/general/link-with-sql-pos-1.png" />

3. In SQL Pos, fill in accordingly.

<Image path="/img/general/link-with-sql-pos-2.png" />

---

## Printing Half Page

- Add half page paper size.

<Image path="/img/general/half-page-1.png" />

- Go to **printer preferences**.

<Image path="/img/general/half-page-2.png" />

- Configure the printer to use the paper size we created before.

<Image path="/img/general/half-page-3.png" />

- Next, go to **printer properties**.

<Image path="/img/general/half-page-4.png" />

- Set the default paper size to the custom paper size we created.

<Image path="/img/general/half-page-5.png" />

- Once you have done with the above settings, login into your SQL Connect session and test print with the following steps:

<Image path="/img/general/half-page-6.png" />
<Image path="/img/general/half-page-7.png" />

---

## Saving PDF

If you want to download PDF file, save it to the "**Download**" folder in the "**SQL Drive on SQL Connect**"

<Image path="/img/general/save-pdf-1.png" />

The PDF file will be opened in a new tab, click download and save the file to local PC.

<Image path="/img/general/save-pdf-2.png" />

---

## Signout (Private Cloud only)

**The is exclusive for private cloud users only.** In private cloud, the user has control over the server. Thus, the admin has the right to signout connections.

<Image path="/img/general/signout-conn.png" />

---

## SQL Connect Printing

In SQL Connect, we have two groups of users (Public cloud users & private cloud users). As a private cloud users, you gain an extra option which able to print directly to your local printer as long as the printer is accessible from your server. While for public, you can select any option listed below:

- PDF Print
- SQL Connect Printer
- SQL Drive method

---

### PDF Print

:::info
This feature is available in specific versions:

- SQL Account version 5.2024.976.842 and above
- SQL Payroll version 1.2024.254.204 and above

:::
In SQL Account, go to the report preview, click on the PDF button located at the top left.

<Image path="/img/general/pdf-print-1.png" />

The pdf will be open in your new tab, you can then select your local printer and print.

---

### SQL Connect Printer

<Image path="/img/general/sql-connect-printer-1.png" />

By using "**SQL Connect Printer**", you will then able to access the browser print dialog which has the right to utilize your local printer. From there, you can select the printer you want, size you like and so on. After select all the options you wish, click print. Below is an example of chrome print dialog:

<Image path="/img/general/sql-connect-printer-2.png" />

---

### SQL Drive method

<Image path="/img/general/sql-drive-method-1.png" />
<Image path="/img/general/sql-drive-method-2.png" />
<Image path="/img/general/sql-drive-method-3.png" />
<Image path="/img/general/sql-drive-method-4.png" />
<Image path="/img/general/sql-drive-method-5.png" />

---

## SQL Connect Subscription Checker

To check your subscription, you can open the app by following the steps below:

1. Go to `File > Run`
2. Select `SQL Connect Subscription Checker`

<Image path="/img/general/sqlconnect-checksub-1.png" />

If the app is not there, you can add it manually by following the steps in [SQL Utilities](#sql-utilities)

---

## SQL Utilities

By default, SQL Connect has already generate the list when you connect to a session. But if it didn't show up, you can add them manually by following the steps below:

1. Go to `File > Run > Configure Program...`
2. Add the utilities software from here: `C:\eStream\Utilities`
3. After add successfully, the program should be available at `File > Run > ...`

<Image path="/img/general/sql-utilities-1.png" />
<Image path="/img/general/sql-utilities-2.png" />
<Image path="/img/general/sql-utilities-3.png" />
<Image path="/img/general/sql-utilities-4.png" />
