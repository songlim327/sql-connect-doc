---
sidebar_position: 3
---

# Advanced Usage

## Copy Image into Rich Text Editor
- Firstly, [*upload*](./basic#upload) the image file to SQL Connect 
- In SQL Account / SQL Payroll, go to `View > File Explorer`
- Navigate to `This PC > SQL Drive on SQL Connect > double click to open your image file`
- Select All (or press `Ctrl + A`), and then copy it.
- Go to the rich text editor, paste the image you just copy.

![Copy Image Rich 1](../../static/img/general/copy-image-rich-1.png)
![Copy Image Rich 2](../../static/img/general/copy-image-rich-2.png)
![Copy Image Rich 3](../../static/img/general/copy-image-rich-3.png)
![Copy Image Rich 4](../../static/img/general/copy-image-rich-4.png)

---
## Delete Files in SQL Drive
![Delete Files 1](../../static/img/general/delete-files-1.png)
![Delete Files 2](../../static/img/general/delete-files-2.png)

---
## Kill Firebird Connections
### Method 1
- To use this method, take note that the last logged in user must be `ADMIN`.

![Kill Firebird Connections 1](../../static/img/general/kill-firebird-connections-1-1.png)

![Kill Firebird Connections 2](../../static/img/general/kill-firebird-connections-1-2.png)

![Kill Firebird Connections 3](../../static/img/general/kill-firebird-connections-1-3.png)

### Method 2
- To use this method, login as `ADMIN`.

![Kill Firebird Connections 1](../../static/img/general/kill-firebird-connections-2-1.png)

![Kill Firebird Connections 2](../../static/img/general/kill-firebird-connections-2-2.png)

![Kill Firebird Connections 3](../../static/img/general/kill-firebird-connections-2-3.png)

---
## Link with SQL Pos
1. This is for **public cloud** users only.
2. Once requested, you will receive a file link. In the file, you can find all the information required to link local SQL Pos with SQL Account. Example on how the file looks like:

	![Link with SQL Pos 1](../../static/img/general/link-with-sql-pos-1.png)

3. In SQL Pos, fill in accordingly.

	![Link with SQL Pos 2](../../static/img/general/link-with-sql-pos-2.png)

---
## Printing Half Page

- Add paper size.

![Half Page 1](../../static/img/general/half-page-1.png)

- Add another printer as norm for **Half Page**.

![Half Page 2](../../static/img/general/half-page-2.png)
![Half Page 3](../../static/img/general/half-page-3.png)
![Half Page 4](../../static/img/general/half-page-4.png)

- Set default paper size.

![Half Page 5](../../static/img/general/half-page-5.png)

- Once you have done with the above settings, login into your SQL Connect session and test print with the following steps:

![Half Page 6](../../static/img/general/half-page-6.png)
![Half Page 7](../../static/img/general/half-page-7.png)

---
## Saving PDF
If you want to download PDF file, save it to the "**Download**" folder in the "**SQL Drive on SQL Connect**"

![Save Pdf 1](../../static/img/general/save-pdf-1.png)

The PDF file will be opened in a new tab, click download and save the file to local PC.

![Save Pdf 2](../../static/img/general/save-pdf-2.png)

---
## Signout (Private Cloud only)
**The is exclusive for private cloud users only.** In private cloud, the user has control over the server. Thus, the admin has the right to signout connections.

![Signout Connection](../../static/img/general/signout-conn.png)

---
## SQL Connect Printing
In SQL Connect, we have two groups of users (Public cloud users & private cloud users). As a private cloud users, you can print directly to your local printer as long as the printer is accessible from your server. In public, the only option you have is to use the "**SQL Connect Printer**" and then forward to your local printer.

![Print 1](../../static/img/general/print-1.png)

By using "**SQL Connect Printer**", you will then able to access the browser print dialog which has the right to utilize your local printer. From there, you can select the printer you want, size you like and so on. After select all the options you wish, click print. Below is an example of chrome print dialog:

![Print 2](../../static/img/general/print-2.png)

---
### Alternative to SQL Connect Printer
![Print Alt 1](../../static/img/general/print-alt-1.png)
![Print Alt 2](../../static/img/general/print-alt-2.png)
![Print Alt 3](../../static/img/general/print-alt-3.png)
![Print Alt 4](../../static/img/general/print-alt-4.png)
![Print Alt 5](../../static/img/general/print-alt-5.png)

---
## SQL Connect Subscription Checker
To check your subscription, you can open the app by following the steps below:

1. Go to `File > Run`
2. Select `SQL Connect Subscription Checker`

![SQL Connect Subscription Checker 1 ](../../static/img/general/sqlconnect-checksub-1.png)

If the app is not there, you can add it manually by following the steps in [SQL Utilities](#sql-utilities)


---
## SQL Utilities
By default, SQL Connect has already generate the list when you connect to a session. But if it didn't show up, you can add them manually by following the steps below:

1. Go to `File > Run > Configure Program...`
2. Add the utilities software from here: `C:\eStream\Utilities`
3. After add successfully, the program should be available at `File > Run > ...`

![Sql Utilities 1 ](../../static/img/general/sql-utilities-1.png)
![Sql Utilities 2 ](../../static/img/general/sql-utilities-2.png)
![Sql Utilities 3 ](../../static/img/general/sql-utilities-3.png)
![Sql Utilities 4 ](../../static/img/general/sql-utilities-4.png)




