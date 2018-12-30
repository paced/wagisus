# Contribution Guide

> Contributions are welcome if they improve the best practices, SEO, security, or performance of the web application.

## Style Guide

The basic gist of things is to make the code look as similar to Java code as possible:

1. Use semicolons at the end of statements even if not required.
2. Markdown changes use `markdownlint` and must pass for a merge request to be accepted.

## Issues and Merge Requests

Start a merge request in conjunction with an issue. Make sure it is clear which issue is being created and keep the branch related to the issue succinct. Include the index of the issue and the fewest words necessary to make the issue seem unique to the problem in mind.

Branches will be fast-forward merged or rebased into `master` typically. Merge commits are allowed **from** `master` into your branch but not the other way around. Try to rebase from `master` into your branch if possible. Do this to make your branch level with `master` before submitting a merge request.

Squash commits where logical. The end goal is a linear history.

## Lastly

I am a perfectionist: anything to be merged in must be as "good as possible" according to qualimetry and code style.

Thank you for the help!
