---
hide:
  - navigation
---
# Troubleshooting
## Common Errors
### There is no default printer selected
- Do a reset on the user session: [Reset Session](general.md#signout)

---
### Sign in error
![Google Error 1](img/troubleshooting/google-error-1.png)
![Google Error 2](img/troubleshooting/google-error-2.png)

- if you see errors like above, you will have to check your email's **date of birth**. Google classifies email which has an age less than **18 years old as child**. With a child email, you are **forbidden** from entering many websites available in the web including our SQL Connect services. 
- Besides, make sure no **Family Link** email is used.     

---
### Empty Homepage
![Not Registered](img/troubleshooting/not-registered.png)

- If you see the above screen, it indicates that your account is not activated yet. Kindly contact your dealer or our support team for further checking. 

---
### Private Cloud: "Access Denied" when login SQL Account / SQL Payroll

- **THIS HAPPENS IN PRIVATE CLOUD ONLY.**

![Access Denied 1 ](img/troubleshooting/access-denied-1.png)

- If you face the above error, kindly change the "*Database Engine*" in `.dcf` file from **Firebird Standalone Database** to **Firebird Server**. 

![Access Denied 2 ](img/troubleshooting/access-denied-2.png)

---
### Black / Blank Screen
- Perform session reset following the steps: [Reset Session](general.md#logout)

---
### Windows 7 Certificate Issue
1. Download the certificate from [ISRG-ROOT-X1](https://x1.i.lencr.org).
2. Run the certificate file, you will see a windows as below.

![Windows 7 Certificate Issue 1](img/troubleshooting/windows-7-certificate-issue-1.png)
	
3. Install the certificate. Select the second option, click `Browse`.

![Windows 7 Certificate Issue 2](img/troubleshooting/windows-7-certificate-issue-2.png)

4. Select `Trusted Root Certificate Authorities`.

![Windows 7 Certificate Issue 3](img/troubleshooting/windows-7-certificate-issue-3.png)

5. Reboot PC.

---
### Windows 10 Certificate Issue
1. Update to latest Windows 10.

![Windows 10 Certificate Issue 1](img/troubleshooting/windows-10-certificate-issue-1.png)

2. Download the certificate from [ISRG-ROOT-X1](https://x1.i.lencr.org).
3. Run the certificate file, you will see a windows as below

![Windows 10 Certificate Issue 2](img/troubleshooting/windows-10-certificate-issue-2.png)

4. Install the certificate on Local Machine. 

![Windows 10 Certificate Issue 3](img/troubleshooting/windows-10-certificate-issue-3.png)

5. Select the second option, click `Browse`.

![Windows 10 Certificate Issue 4](img/troubleshooting/windows-10-certificate-issue-4.png)

6. Select `Trusted Root Certificate Authorities`.

![Windows 10 Certificate Issue 5](img/troubleshooting/windows-10-certificate-issue-5.png)

7. Reboot PC.

---
## Browser Related Issues
### Google Chrome: Blur Font 
- **THIS ISSUE IS RELATED TO GOOGLE CHROME ONLY.**

![Blur Font 1](img/troubleshooting/blur-font-1.png)
![Blur Font 2](img/troubleshooting/blur-font-2.png)
![Blur Font 3](img/troubleshooting/blur-font-3.png)
![Blur Font 4](img/troubleshooting/blur-font-4.png)

---
### Google Chrome: Fail to Print/Download PDF
- **THIS ISSUE IS RELATED TO GOOGLE CHROME ONLY.**

![Chrome Pdf 1](img/troubleshooting/chrome-pdf-1.png)

![Chrome Pdf 2](img/troubleshooting/chrome-pdf-2.png)

![Chrome Pdf 3](img/troubleshooting/chrome-pdf-3.png)

![Chrome Pdf 4](img/troubleshooting/chrome-pdf-4.png)

![Chrome Pdf 5](img/troubleshooting/chrome-pdf-5.png)

---
### Mozilla Firefox: Copy & Paste
- **THIS ISSUE IS RELATED TO FIREFOX ONLY**

![Copy Paste Issue 1](img/troubleshooting/copy-paste-issue-1.png)
![Copy Paste Issue 2](img/troubleshooting/copy-paste-issue-2.png)

---
## Past Issues & Solutions
### Corrupted Excel File Issue (Temp Solution)
- **THIS ISSUE INVOLVES BOTH .xlsx & .xls EXCEL FORMAT. **
- This issue has been resolved since SQL Account (5.2021.900.797) & SQL Payroll (1.2021.195.165). 
- If you still face this issue, kindly contact our support team.

![Excel Issue 1](img/troubleshooting/excel-issue-1.png)
![Excel Issue 2](img/troubleshooting/excel-issue-2.png)
![Excel Issue 3](img/troubleshooting/excel-issue-3.png)
![Excel Issue 4](img/troubleshooting/excel-issue-4.png)

---
### Mouse Missing, Black Box around Mouse, Empty Page print using SQL Connect Printer Solutions
- **THIS ISSUE HAS BEEN RESOLVED ACCORDING TO MICROSOFT. KINDLY UPGRADE YOUR WINDOWS TO THE LATEST VERSION TO PREVENT THIS.**
- These issues are all related and caused by Windows Updates. As far as we researched, it happens in chromium based web browsers only (Google Chrome, Opera, Chromium Edge).

- [Microsoft Official Statement](https://support.microsoft.com/en-us/topic/march-15-2021-kb5001567-os-builds-19041-868-and-19042-868-out-of-band-6e0844a2-7551-4b2d-9c4b-4274a5949bf3)

- Summary:

![Microsoft Statement](img/troubleshooting/microsoft-statement.png)

---
