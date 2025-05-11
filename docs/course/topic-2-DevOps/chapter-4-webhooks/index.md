---
title: Chapter 4 - Webhooks
layout: custom
parent: Topic 2 - DevOps
has_children: true
has_toc: false
nav_order: 4
---

## Utilizing Web Hooks for Continuous Integration
### What is a Web Hook?
When deploying code, you want to make sure it is automatically running through several relevant tests without you triggering them every single time. A webhook is like a notification for your CI/CD tests, that you have done something with your code. To set up a webhook, you first need to define rules that it follows:

1. **Choose Trigger Events:** During the webhook setup process in GitHub, you specify which events will trigger the webhook. This could be a variety of actions, such as:
- **Pushes:** Every time someone pushes code to the repository.
- **Pull Requests:** When a new pull request is opened, closed, or merged.
- **Releases:** When a new release is created.
- **Branch or Tag Creation:** When a new branch or tag is created.

2. **Set the Payload URL:** This is where you want GitHub to send the notification. The URL is provided by the service you want to notify (your CI/CD platform, for example).

3. **Configure Content Type:** This determines how the data is formatted when sent to the receiver. JSON is a common format.

4. **Determine Security Options:** If your receiving service requires it, you might also set up a secret token that GitHub will use to sign the data, adding a layer of security to ensure the data is only accepted if it’s verified as coming from GitHub.

Then, once you want to make a change, the following happens:
1. **You push code to GitHub** - This is you updating your repository with new changes.
2. **GitHub sends a webhook** - Because of the rule you set up, GitHub notifies your CI/CD tool that something happened (like a code push).
3. **CI/CD tool starts tests** - The CI/CD tool, now informed by the webhook, starts running the tests or actions you've configured it to perform upon receiving such a notification.

### References 
<details>
  <Summary>Expand</Summary>
      <b>1.</b> “About Webhooks.” <i>GitHub Docs</i>, <a href="https://docs.github.com/en/webhooks/about-webhooks" target="_blank">https://docs.github.com/en/webhooks/about-webhooks</a>. Accessed 11 Apr. 2024.<br>
      <b>2.</b> “What Are Webhooks and How Do They Work.” <i>What Are Webhooks And How Do They Work</i>, 14 Aug. 2021, <a href="https://hookdeck.com/webhooks/guides/what-are-webhooks-how-they-work" target="_blank">https://hookdeck.com/webhooks/guides/what-are-webhooks-how-they-work</a>.<br>
      <b>3.</b> “What Is a Webhook? Webhooks for Beginners.” <i>YouTube</i>, YouTube, 30 Nov. 2021, <a href="https://www.youtube.com/watch?v=mrkQ5iLb4DM" target="_blank">https://www.youtube.com/watch?v=mrkQ5iLb4DM</a>.<br>
      <b>4.</b> “What Is a Webhook?” <i>Red Hat - We Make Open Source Technologies for the Enterprise</i>, <a href="https://www.redhat.com/en/topics/automation/what-is-a-webhook" target="_blank">https://www.redhat.com/en/topics/automation/what-is-a-webhook</a>. Accessed 11 Apr. 2024.<br>
</details>
