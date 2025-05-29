---
title: Chapter 2 - Security Checks in CI/CD
layout: custom
parent: Topic 3 - DevSecOps
has_children: true
has_toc: false
nav_order: 2
---

# Chapter 2 - Security Checks in CD/CD

## The Importance of Security Checks in Each Stage of The Pipeline


A key component of DevSecOps is the introduction of a secure CI/CD pipeline. As you read in previous chapters, CI/CD is critical to DevSecOps because it:
>> * Automates and embeds security checks early in the development process
* Ensures rapid feedback regarding potential vulnerabilities
* Facilitates a proactive approach to security throughout the lifecycle of the application.

Every organization has a different way of defining their pipeline and the stages involved. Regardless of how many stages there are, it is crucial to ensure every stage has security checks from all realms of IT involved. These stages can generally look like:

* **The Planning phase**: The first step is to develop a product roadmap (threat modeling), which will help identify potential security threats. In threat modeling, potential vulnerabilities are identified and countermeasures are set in place to mitigate those risks.

* **Coding**: As developers begin writing code, take measures to make sure that the code is written in accordance with predefined standards and design guidelines. Use source code scanners to detect pieces of code that might be vulnerable to security threats.

* **Building**: As developers begin committing their source code to a shared repository, they need to make sure that automated tests are triggered to verify that the builds comply with requirements. 

* **Testing**: Once a build is successful, test the software for bugs. If new features are added on, more automated testing is performed.


>> {: .highlight }
The stages of SDLC can also be referred as the 6 stages:
1. Project Planning
2. Gathering Code Requirements & Analysis
3. Design and Build
4. Testing
5. Release
6. Deployment/Maintenance

![CI/CD Pipeline](https://qentelli.com/sites/default/files/inline-images/devsecops-pipeline-inside-image.png)

<div style="text-align: center;">
    <p><em>Source: <a href="https://qentelli.com/thought-leadership/insights/devsecops-pipeline-factors">Qentelli</a></em></p>
</div>

Due to the nature of continuous integration, every change needs to be monitored and made sure that it's safe to release. For every stage, there are multiple different controls that can be embedded to the process, whereas tool integrations are not sufficient by themselves for a secure CI/CD pipeline. Tools must be implemented to support the process mentioned above, but it's important to understand which tools to use and when. Understanding **SAST testing vs. DAST testing** espscially during the build stages will help ensure a secure SDLC.

## SAST vs. DAST

<table>
  <tr>
    <th>Category</th>
    <th>SAST</th>
    <th>DAST</th>
  </tr>
  <tr>
    <td><strong>Purpose</strong></td>
    <td>SAST involves analyzing source code, byte code, or binary code of an application without executing it. Its purpose is to detect security vulnerabilities early in the development process by identifying parts of the code that might lead to security breaches.</td>
    <td>DAST involves testing an application’s security by simulating attacks on a running application. It aims to identify vulnerabilities that could be exploited during runtime, such as issues related to user authentication, SQL injection, and cross-site scripting (XSS).</td>

  </tr>
  <tr>
    <td><strong>Timeline</strong></td>
    <td>
      <ul>
        <li>SAST is typically conducted at the very early stages of the development cycle, often integrated into the Integrated Development Environment (IDE) or Continuous Integration/Continuous Deployment (CI/CD) pipeline.</li>
        <li>It is done before the application is run, usually as soon as the code is written.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Conducted later in the development cycle, often after the application is in a stable build and deployed in a testing environment.</li>
        <li>It is performed on the running application in a safe envrionment, mimicking real-world hacking techniques.</li>
      </ul>
    </td>

  </tr>
  <tr>
    <td><strong>Pros</strong></td>
    <td>
      <ul>
        <li>Can detect vulnerabilities early in the development cycle, reducing the cost and effort of fixing them later</li>
        <li>If you can prevent vulnerabilities in software before you launch, you'll have stronger code and a more reliable application</li>
        <li>SAST can show you exactly where to find issues in the code</li>
        <li>Can be automated and integrated into the development process, facilitating early and regular security checks</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Can identify runtime and environmental issues that SAST cannot detect</li>
        <li>Does not require access to source code, making it applicable to any application</li>
        <li>Offers a real-world perspective on how an attacker might exploit vulnerabilities in a live application</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>Cons</strong></td>
    <td>
      <ul>
        <li>Might produce false positives, requiring additional time for developers to sort through and validate issues</li>
        <li>Only identifies potential security issues in the static code, without considering runtime behavior or external interactions</li>
        <li>Requires access to the application's source code, which might not always be possible for third-party actors</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Heavy reliance on experts to write tests, making it difficult to scale</li>
        <li>Might miss certain types of vulnerabilities that can only be detected by analyzing the source code.</li>
        <li>Can lead to false negatives, as some vulnerabilities might not be detectable during a dynamic scan or might depend on specific conditions to trigger.</li>
      </ul>
    </td>

  </tr>
</table>

### Comparison and Integration
Integrating both SAST and DAST in the security testing process provides a more comprehensive approach to application security. SAST can identify vulnerabilities early in the code, while DAST can test the application’s behavior in a runtime environment, catching issues that static analysis might miss. Together, they offer a balanced and thorough method for securing applications throughout the development lifecycle.

## Vulnerability scanning
Vulnerability scanning in a CI/CD pipeline refers to the automated process of identifying security weaknesses in the software code, dependencies, and runtime environments as part of the continuous integration and delivery process. This scanning can detect issues such as insecure coding practices, outdated libraries, misconfigurations, and other vulnerabilities that could potentially be exploited by attackers. You read above the difference between SAST testing and DAST testing. Those processes can be testing using a variety of tools. Some may be cheaper than others, require contracts with experts, or could just be a web plug in. Some of the most popular options you may hear of are listed below

### Examples of widely-used tools in industry

> SonarQube - A comprehensive tool that provides static code analysis, identifying vulnerabilities, bugs, and code smells in several programming languages

> OWASP ZAP (Zed Attack Proxy) - An open-source dynamic application security testing tool that can identify security vulnerabilities in web applications during development and testing phases

> Fortify - Provides static and dynamic application security testing tools to identify vulnerabilities in code and running applications

> Veracode - Offers a suite of security tools, including static, dynamic, and interactive application security testing, to identify and fix vulnerabilities at various stages of the software development lifecycle

> Snyk - Specializes in identifying and fixing vulnerabilities in open-source dependencies and container images, integrating seamlessly with CI/CD pipelines

> GitLab CI/CD Security Scanning - Offers built-in security scanning features in its CI/CD pipelines, including static and dynamic analysis, dependency scanning, and container scanning

> Jenkins with security plugins - Jenkins, a popular automation server, can be configured with various security plugins to perform static and dynamic analysis, as well as other security checks within the CI/CD pipeline

There are countless variations of vulnerability scanners out there and are constantly being innovated. Every software team should take throrough time to research and test as many tools as possible within their budget and timeline to ensure their pipeline is fully covered.

<style>
  .quiz-btn {
      width: 160px;
      background-color: #315EEB;
      color: white;
      border: none;
      padding: 10px 15px;
      text-align: center;
      display: inline-block;
      font-size: 16px;
      margin: 25px 2px;
      cursor: pointer;
      border-radius: 5px;
  }

  .quiz-btn:hover {
      background-color: #1046e9;
  }
</style>

<div style="text-align: center">
  <button class="quiz-btn" onclick="window.location.href='quiz/quiz'">Take Quiz</button>
</div>

### References

<details>
  <summary>Expand</summary>
    <b>1.</b> "What Is CI/CD Security?" <i>Red Hat</i>, <a href="https://www.redhat.com/en/topics/security/what-is-cicd-security#:~:text=CI%2FCD%20security%20is%20used,policies%2C%20and%20ensure%20quality%20assurance." target="_blank">https://www.redhat.com/en/topics/security/what-is-cicd-security/</a>. Accessed 9 Apr. 2024.<br>
    <b>2.</b> "Security in Every Stage of CI/CD Pipeline." <i>AWS</i>, <a href="https://docs.aws.amazon.com/whitepapers/latest/practicing-continuous-integration-continuous-delivery/security-in-every-stage-of-cicd-pipeline.html" target="_blank">https://docs.aws.amazon.com/whitepapers/latest/practicing-continuous-integration-continuous-delivery/security-in-every-stage-of-cicd-pipeline.html</a>. Accessed 9 Apr. 2024.<br>
    <b>3.</b> "SAST, DAST, and IAST Security Testing." <i>Contrast Security</i>, <a href="https://www.contrastsecurity.com/security-influencers/why-the-difference-between-sast-dast-and-iast-matters" target="_blank">https://www.contrastsecurity.com/security-influencers/why-the-difference-between-sast-dast-and-iast-matters</a>. Accessed 9 Apr. 2024.<br>
    <b>4.</b> "How to Use the Jenkins Security Scan." <i>Jenkins</i>, <a href="https://www.jenkins.io/doc/developer/security/scan/" target="_blank">https://www.jenkins.io/doc/developer/security/scan/</a>. Accessed 9 Apr. 2024.<br>
    <b>5.</b> "SonarQube." <i>SonarQube</i>, <a href="https://www.sonarsource.com/products/sonarqube/" target="_blank">https://www.sonarsource.com/products/sonarqube/</a>. Accessed 9 Apr. 2024.<br>
    <b>6.</b> "Snyk Open Source." <i>Snyk</i>, <a href="https://snyk.io/product/open-source-security-management/?utm_medium=paid-search&utm_source=google&utm_campaign=gs_sn:-brand-ecpc&utm_content=br_sca&utm_term=snyk%20sca&gad_source=1&gclid=Cj0KCQjwztOwBhD7ARIsAPDKnkBbO4ZOhhLOMFnW3niLxxHAljuqKD8iOqe82_KTv9t4CDljRWacTd8aAlTxEALw_wcB" target="_blank">https://snyk.io/product/open-source-security-management/</a>. Accessed 9 Apr. 2024.<br>
    <b>7.</b> "Vulnerability Scanner Tools." <i>Veracode</i>, <a href="https://www.veracode.com/security/vulnerability-scanning-tools" target="_blank">https://www.veracode.com/security/vulnerability-scanning-tools</a>. Accessed 9 Apr. 2024.<br>
    <b>8.</b> "What Is Fortify and How It Works? An Overview and Its Use Cases." <i>DevOps School</i>, <a href="https://www.devopsschool.com/blog/what-is-fortify-and-how-it-works-an-overview-and-its-use-cases/" target="_blank">https://www.devopsschool.com/blog/what-is-fortify-and-how-it-works-an-overview-and-its-use-cases/</a>. Accessed 9 Apr. 2024.<br>
</details>