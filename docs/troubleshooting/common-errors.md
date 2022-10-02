---
sidebar_position: 1
---

# Common Errors

Some solutions to common errors in SQL Connect

---

## There is no default printer selected

- Do a reset on the user session: [Reset Session](../general/basic#logout-reset)

---

## Sign in error

![Google Error 1](../../static/img/troubleshooting/google-error-1.png)
![Google Error 2](../../static/img/troubleshooting/google-error-2.png)

- if you see errors like above, you will have to check your email's **date of birth**. Google classifies email which has an age less than **18 years old as child**. With a child email, you are **forbidden** from entering many websites available in the web including our SQL Connect services.
- Besides, make sure no **Family Link** email is used.

---

## Empty Homepage

![Not Registered](../../static/img/troubleshooting/not-registered.png)

- If you see the above screen, it indicates that your account is not activated yet. Kindly contact your dealer or our support team for further checking.

---

## Private Cloud: "Access Denied" when login SQL Account / SQL Payroll

:::note
**Only applies to Private Cloud.**
:::

![Access Denied 1 ](../../static/img/troubleshooting/access-denied-1.png)

- If you face the above error, kindly change the "*Database Engine*" in `.dcf` file from **Firebird Standalone Database** to **Firebird Server**.

![Access Denied 2 ](../../static/img/troubleshooting/access-denied-2.png)

---

## Black / Blank Screen

- Perform session reset following the steps: [Reset Session](../general/basic#logout-reset)

---

## Certificate Issues

### Windows 7

1. Download the certificate from [ISRG-ROOT-X1](https://x1.i.lencr.org).
2. Run the certificate file, you will see a windows as below.

    ![Windows 7 Certificate Issue 1](../../static/img/troubleshooting/windows-7-certificate-issue-1.png)

3. Install the certificate. Select the second option, click `Browse`.

    ![Windows 7 Certificate Issue 2](../../static/img/troubleshooting/windows-7-certificate-issue-2.png)

4. Select `Trusted Root Certificate Authorities`.

    ![Windows 7 Certificate Issue 3](../../static/img/troubleshooting/windows-7-certificate-issue-3.png)

5. Reboot PC.

### Windows 10

1. Update to latest Windows 10.

    ![Windows 10 Certificate Issue 1](../../static/img/troubleshooting/windows-10-certificate-issue-1.png)

2. Download the certificate from [ISRG-ROOT-X1](https://x1.i.lencr.org).
3. Run the certificate file, you will see a windows as below

    ![Windows 10 Certificate Issue 2](../../static/img/troubleshooting/windows-10-certificate-issue-2.png)

4. Install the certificate on Local Machine.

    ![Windows 10 Certificate Issue 3](../../static/img/troubleshooting/windows-10-certificate-issue-3.png)

5. Select the second option, click `Browse`.

    ![Windows 10 Certificate Issue 4](../../static/img/troubleshooting/windows-10-certificate-issue-4.png)

6. Select `Trusted Root Certificate Authorities`.

    ![Windows 10 Certificate Issue 5](../../static/img/troubleshooting/windows-10-certificate-issue-5.png)

7. Reboot PC.
