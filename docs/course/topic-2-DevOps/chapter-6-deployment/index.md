---
title: Chapter 6 - Deployment
layout: custom
parent: Topic 2 - DevOps
has_toc: false
has_children: true
nav_order: 6
---

# Introduction to Deployment
Transitioning from the exploration of DevOps and CI/CD, we now turn our attention to the critical phase of deployment. Deployment is where coding efforts from developers merge, and attempt to integrate into the existing software. With so many people making changes to the same product, there are bound to be inconsistencies and issues when pushing code. That is where deployment best practices within CI/CD come in. 

> **Problem Space**
>
> 🧐 Imagine two developers are both working on projects for several months in a large organization. Ani is working on changing the current API used in the product, and Mariam is pulling from the current state of that API for her code. After working to get their projects working, they both push at the same time.
>
> Narek, a long time user of their site, is looking to buy pants. All of a sudden, the site is down! This was because when Ani and Mariam pushed there was no automatic testing and there were several integration issues:
>   - **Endpoint Mismatch**: Mariam's new features expect certain responses from the API that Ani has since altered or deprecated, leading to unexpected behavior and failures in feature operation.
>   - **Database Schema Changes**: Ani's API update included modifications to the database schema that Mariam's code was not designed to accommodate, resulting in broken database queries and data consistency issues.
>
> It might seem as though it was Ani and Mariam's lack of communication before building and deploying at fault, but imagine they are working in a company as large as Amazon or Boeing. It would be impractical and redundant to expect to know every developer's job.


## Deployment Environments

- **💻 Development Environment:**
  - **Purpose:** Initial coding and testing by developers.
  - **Characteristics:** Runs on local machines or dev server, frequent changes and updates, connected to a test database, debugging tools are enabled.
  - **CI/CD Role:** Starting point in CI/CD process, triggers initial build and unit tests.

- **🚦 Staging Environment:**
  - **Purpose:** Final testing before going live. Acts as a pre-production replica.
  - **Characteristics:** Mimics production environment, stable and isolated for testing, hosts release candidate version.
  - **CI/CD Role:** Used for performance, integration, and user acceptance testing, final checks before production.

- **🌐 Production Environment:**
  - **Purpose:** The live environment used by end-users.
  - **Characteristics:** Most stable and secure, contains real user data and faces the internet, performance monitoring and error logging.
  - **CI/CD Role:** Final stage of the pipeline, code is deployed if all checks pass.

<br>

![image](https://github.com/open-devsecops/open-devsecops.github.io/assets/35845527/6c306e97-b563-4cc7-baff-8d79ddc45bdf)
_Source: [DevOps.com](/https://devops.com/i-want-to-do-continuous-deployment/)_

{: .lab}
[Lab 1 - Configuring a Simple CI/CD Pipeline](./lab/deployment-lab-1){: .btn .btn-purple .btn-fill }

## Deployment Strategies
Deployment strategies are crucial for managing the transition of code from development through to production. Choosing the right strategy ensures that deployments are smooth, risks are minimized, and the user experience remains uninterrupted. Here are some common deployment strategies used in modern software development:

1. 🔄 **Blue-Green Deployment**: Alternating between two identical environments to switch versions.

   | Pros              | Cons                 |
   |-------------------|----------------------|
   | Easy rollback     | Resource intensive   |
   | Minimal downtime  | Complex setup        |

   **Use Case**: Ideal for critical applications where zero downtime is essential.

  
2. 🐦 **Canary Deployment**: Gradually rolling out changes to a small subset of users first.

   | Pros                              | Cons                              |
   |-----------------------------------|-----------------------------------|
   | Low risk with smaller user impact | Requires monitoring and analytics |
   | Real user feedback                | More complex release process      |

   **Use Case**: Best suited for applications with a large user base to gauge the impact of new changes.

3. 🌊 **Rolling Deployment**: Updating application instances in phases, without taking down the entire app.

   | Pros                       | Cons                                 |
   |----------------------------|--------------------------------------|
   | High availability          | Not suitable for database changes    |
   | No need for additional infrastructure | Potential for brief inconsistency |

   **Use Case**: Services requiring constant availability and those with enough instances to support a phased rollout.

4. 🚦 **Feature Toggles**: Releasing features hidden behind toggles, which can be enabled conditionally.

   | Pros                          | Cons                              |
   |-------------------------------|-----------------------------------|
   | Flexible control over features | Complexity in managing toggles    |
   | Easy rollback of features     | Risk of technical debt            |

   **Use Case**: Testing new features in live environments or rolling out features gradually.

5. 🔀 **A/B Testing Deployment**: Deploying two versions to compare which performs better based on specific metrics.

   | Pros                            | Cons                             |
   |---------------------------------|----------------------------------|
   | Data-driven decision making     | Requires traffic segmentation    |
   | Clear insight into user preferences | Increased complexity           |

   **Use Case**: Optimizing user experience and validating hypotheses about user behavior.

6. 🆕 **Immutable Deployments**: Every deployment creates a new environment, and traffic is switched over once ready.

   | Pros                               | Cons                                  |
   |------------------------------------|---------------------------------------|
   | Consistency and reliability       | Higher infrastructure costs           |
   | Simplifies rollback               | Requires automation for efficiency    |

   **Use Case**: Suitable for cloud-native applications where infrastructure can be easily replicated and managed as code.





### References 
<details>
  <Summary>Expand</Summary>
      <b>1.</b> “CI/CD Process: Flow, Stages, and Critical Best Practices.” <i>Codefresh</i>, 26 July 2023, <a href="https://codefresh.io/learn/ci-cd-pipelines/ci-cd-process-flow-stages-and-critical-best-practices/#:~:text=The%20deploy%20stage%20is%20the,it%20accessible%20to%20end%2Dusers" target="_blank">https://codefresh.io/learn/ci-cd-pipelines/ci-cd-process-flow-stages-and-critical-best-practices/#:~:text=The%20deploy%20stage%20is%20the,it%20accessible%20to%20end%2Dusers</a>.<br>
      <b>2.</b> Deployment Strategies - Introduction to Devops on AWS, <i>Amazon Web Services</i>, <a href="https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/deployment-strategies.html" target="_blank">https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/deployment-strategies.html</a>. Accessed 12 Apr. 2024.<br>
      <b>3.</b> “Flow Modeling: How Work Moves through the Enterprise.” <i>Plutora</i>, <a href="https://www.plutora.com/blog/deployment-strategies-6-explained-in-depth" target="_blank">https://www.plutora.com/blog/deployment-strategies-6-explained-in-depth</a>. Accessed 11 Apr. 2024.<br>
      <b>4.</b> Riley, Chris, et al. “‘I Want to Do Continuous Deployment.’” <i>DevOps.Com</i>, 5 Dec. 2016, <a href="https://devops.com/i-want-to-do-continuous-deployment/" target="_blank">https://devops.com/i-want-to-do-continuous-deployment/</a>.<br>
      <b>5.</b> Tremel, Etienne. “Six Strategies for Application Deployment.” <i>The New Stack</i>, 25 Mar. 2021, <a href="https://thenewstack.io/deployment-strategies/" target="_blank">https://thenewstack.io/deployment-strategies/</a>.<br>
      <b>6.</b> Using Blue-Green Deployment to Reduce Downtime | <i>Cloud Foundry Docs</i>, <a href="https://docs.cloudfoundry.org/devguide/deploy-apps/blue-green.html" target="_blank">https://docs.cloudfoundry.org/devguide/deploy-apps/blue-green.html</a>. Accessed 12 Apr. 2024.<br>
</details>
