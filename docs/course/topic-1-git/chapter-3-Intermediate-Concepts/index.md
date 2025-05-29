---
title: Chapter 3 - Git Intermediate Concepts
layout: custom
parent: Topic 1 - Git
has_children: true
has_toc: false
nav_order: 3
---

# Chapter 3 - Git Intermediate Concepts
## Branching Strategies

Branching in Git allows multiple developers to work on different tasks simultaneously without interfering with each other's work. Here are some common strategies:

- **Feature Branching**: Create branches for each new feature to keep changes isolated from the main codebase.
- **Release Branching**: Maintain separate branches for release candidates, allowing for bug fixes and preparation for a production release.
- **Hotfix Branching**: Quickly create branches to address urgent bugs in production code.

Each strategy serves a specific purpose and can be chosen based on the team's workflow and project requirements.

## Types of Merging

Merging is the process of integrating changes from one branch into another. Git offers several types of merges:

- **Fast-Forward Merge**: Moves the base branch pointer forward until it equals the feature branch's pointer.
- **Three-Way Merge**: Used when two branches have diverged. A new "merge commit" is created to join the two histories.
- **Squash Merge**: Combines all feature branch commits into a single commit for a cleaner history when merging into the base branch.

Understanding the implications of each merge type is crucial for maintaining a coherent project history.

## Important Concepts

Other intermediate concepts of version control include:

- **Pull Requests (PRs)**: PRs are a feature of hosting services like GitHub and GitLab. They let you tell others about changes you've pushed to a branch in a repository.
- **Workflows**: Workflows like Gitflow and GitHub Flow offer structured methods for branching and merging that fit different types of projects and development cycles.
- **Rebasing**: Rebasing is an alternative to merging, rewriting the commit history to produce a straight, linear progression of changes.
- **Stashing**: Save uncommitted changes in a stack while you switch branches.

By mastering these concepts, developers can collaborate more effectively and maintain a clean, functional codebase.

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
    <b>1.</b> Atlassian. “A Guide to Optimal Branching Strategies in Git.” <i>Atlassian</i>, <a href="https://www.atlassian.com/agile/software-development/branching" target="_blank">www.atlassian.com/agile/software-development/branching</a>. Accessed 15 Apr. 2024.<br>
    <b>2.</b> Marijan, Bosko. “Git Branching Strategies: What Are Different Branching Strategies?” <i>Knowledge Base by phoenixNAP</i>, 19 Dec. 2023, <a href="https://phoenixnap.com/kb/git-branching-strategy" target="_blank">phoenixnap.com/kb/git-branching-strategy</a>.<br>
    <b>3.</b> Merrett, Luke. “Different Merge Types in Git.” <i>Luke Merrett</i>, 7 Aug. 2021, <a href="https://lukemerrett.com/different-merge-types-in-git/" target="_blank">lukemerrett.com/different-merge-types-in-git</a>.<br>
    <b>4.</b> “About Merge Methods on Github.” <i>GitHub Docs</i>, <a href="https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github" target="_blank">docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github</a>. Accessed 15 Apr. 2024.<br>
    <b>5.</b> Price, Taylor R. “Git Merge: To Squash or Fast-Forward?” <i>DEV Community</i>, 23 Mar. 2023, <a href="https://dev.to/trpricesoftware/git-merge-to-squash-or-fast-forward-3791" target="_blank">dev.to/trpricesoftware/git-merge-to-squash-or-fast-forward-3791</a>.<br>
    <b>6.</b> Wright, Mitchell. “What Is Version Control? 13 Key Concepts & Terms to Know.” <i>BloomTech</i>, 28 Feb. 2024, <a href="https://www.bloomtech.com/article/version-control-vocabulary" target="_blank">www.bloomtech.com/article/version-control-vocabulary</a>.<br>
    <b>7.</b> “About Pull Requests.” <i>GitHub Docs</i>, <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" target="_blank">docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests</a>. Accessed 15 Apr. 2024.<br>
    <b>8.</b> “About Git Rebase.” <i>GitHub Docs</i>, <a href="https://docs.github.com/articles/about-git-rebase" target="_blank">docs.github.com/articles/about-git-rebase</a>. Accessed 15 Apr. 2024.<br>
</details>