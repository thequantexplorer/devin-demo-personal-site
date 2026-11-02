# Devin lab: Build a personal website from an empty repo

**What it shows:** You start with an empty repo. Devin builds a one-page personal website, opens it in its own browser, checks it at phone and desktop sizes, and opens a pull request with screenshots. You merge it and get a live site on GitHub Pages.

**Needs:** A GitHub account and a Devin account. Nothing to install.

**Time:** About 15 to 30 minutes.

More labs: [devinworkshop.dev](https://devinworkshop.dev)

## The problem

This repo has no website yet. There is only a README, this file, and a GitHub Actions workflow that publishes the site.

When you create your copy, GitHub runs the **Pages** workflow once. It fails with a red X, because there is nothing to publish yet. On the **Actions** tab, the **Check site** job shows:

```text
Error: No index.html at the repo root yet, so there is nothing to publish.
Error: Process completed with exit code 1.
```

This is expected. It turns green once Devin adds the site.

## Set it up

1. At the top of this repo on GitHub, click **Use this template**, then **Create a new repository**.
2. Pick your GitHub account as the **Owner**. Keep the name `devin-demo-personal-site`. The prompt below uses that name. Leave it **Public** (GitHub Pages on a free plan needs a public repo). Click **Create repository**.
   Use the template, not a fork. A pull request on a fork goes to the original repo by default.
3. In Devin, open [Settings → Connections → GitHub](https://app.devin.ai/settings/connections/github). If GitHub is not connected yet, click **Add Connection** and follow the steps. Make sure Devin can access your new `devin-demo-personal-site` repo (choose **All repositories**, or add it under **Select repositories**).

## Prompt

Go to [app.devin.ai](https://app.devin.ai), start a new session, and paste this. Replace `<you>` with your GitHub username. You can change the name, bio and email to your own.

```text
In https://github.com/<you>/devin-demo-personal-site, build a one-page personal website. The repo is empty except for a README and a GitHub Pages workflow. Read README.md first.

Follow the design skill in .agents/skills/design/SKILL.md. The result should look like a finished, polished product, not a default template.

About me:
- Name: Alex Rivera
- Bio: I'm a software developer who likes building small, useful tools. I live in Austin and I'm learning how to work with AI coding agents.
- Contact: GitHub https://github.com/<you> and email alex@example.com

The page needs:
1. My name and bio at the top.
2. A Projects section with three sample projects (a title, one sentence and a link each). Say on the page that they are samples I will replace.
3. A Contact section with my links.
4. A button that switches between light and dark mode. Start with my system setting and remember my choice.
5. A layout that works on a phone (375px wide) and on a desktop (1280px wide), with no sideways scrolling.

Use plain HTML, CSS and JavaScript with no build step: index.html, style.css and script.js at the repo root, linked with relative paths.

When it is done, open the page in your browser. Check it at phone width and desktop width, in light and dark mode, and fix anything that looks wrong. Then open a pull request to main and add screenshots of the page at phone and desktop width to the pull request description.
```

## What to watch

- Devin reads the README, then creates `index.html`, `style.css` and `script.js`.
- It opens the page in its own browser and looks at it at phone and desktop sizes before it opens the pull request. Click the **Browser** or **Progress** view in the session to watch.

## Get a live URL

1. In your copy on GitHub, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**. There is nothing else to set or save.
2. Open the pull request Devin made. Wait for the **Check site** check to turn green, then click **Merge pull request** and **Confirm merge**.
3. Open the **Actions** tab. The **Pages** workflow runs again on `main`. When it has a green check (about one minute), your site is live at `https://<you>.github.io/devin-demo-personal-site/`. The link is also on the **Deploy to GitHub Pages** job.

If you merged before you turned on Pages, the deploy job fails with "Get Pages site failed". Do step 1, then open that run on the **Actions** tab and click **Re-run jobs → Re-run all jobs**.

## You're done when

- Devin's pull request has screenshots of the page at phone and desktop width, and the **Check site** check is green.
- The page has your name, bio, projects, contact links and a working light/dark button.
- After you turn on Pages and merge, the site is live at `https://<you>.github.io/devin-demo-personal-site/`.
