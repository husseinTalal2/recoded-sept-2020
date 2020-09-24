# Project

Now that we have finished implementing the initial designs, there are a few enhancements we’d like to make...

## User Profiles

Users should be able to manage their:

- First Name
- Last Name
- Birthdate
- Brief Bio / About Me text

Create a profile page to allow users to view and edit their profile. (Note: the word “page” here is used from a user’s perspective - depending on your implementation this could be one or two endpoints that serve HTML.) These fields should be optional. If a user doesn’t want to give us this information they shouldn’t have to. How will you store this information?

Wherever we display a username, the website should display the user's first and last names instead (if we have that information), and should link to user's profile view page.

## Change Password

The user should be allowed to visit a page to change their password.

- Users should have to re-enter their current password when they choose a new one. The password they enter here must be correct to proceed.

## Replies

Upvotes are nice, but we want people to be able to reply directly to Posts!

- Support replying to a Post.
- Display a form that allows users to reply to a post on each post view page.
- Display a sorted list of replies on each post view page (most recent first).

## Extra Credit

### Replies-to-Replies

- Allow replying to replies and upvoting replies.

### Better Trending Sort

- Right now Posts can only be trending if they were created in the last 30 days. We would like old posts to become trending again if they start receiving lots of upvotes. Can you design a solution to accomplish this?
