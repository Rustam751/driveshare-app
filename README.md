# DriveShare: HCI course project website

DriveShare was a four-person team project for a Human-Computer Interaction course (Fall 2025). The team explored a peer-to-peer driveway parking idea: homeowners rent out unused driveway space, and drivers reserve it.

This repository is the project website. It presents the concept, the user research and the course deliverables. It is not a working parking app: there is no booking, payment or account system behind it.

Project site: https://driveshare.mukhtarov.dev/

## My role

I was the team's front-end developer. I built this website with Next.js, React, TypeScript and Tailwind CSS.

The product concept, the user research and the prototypes were team work.

## What the team did

- Interviewed students about parking and grouped the findings into four themes
- Wrote four personas, an empathy map and an experience map
- Made a paper prototype, then medium- and high-fidelity prototypes in Figma
- Tested the medium-fidelity prototype with three think-aloud participants
- Reviewed its own design against Nielsen's 10 usability heuristics

## What is on the site

- `/`: the concept (problem, how it would work, trust and safety)
- `/features`: the intended driver and homeowner features
- `/analysis`: research themes, personas, empathy map and experience map
- `/deliverables`: six course documents, the FigJam board and two videos
- `/team`: the team, with links to course blogs

## Intended features (concept, not implemented)

For drivers:

- Search for nearby driveway parking
- See price and availability windows
- Read the house rules before booking
- Reserve a spot and get directions

For homeowners:

- List a driveway and its availability
- Set price and time windows
- State parking rules
- Earn income from unused space

## Tech stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS 4, Lucide icons
- Biome for linting and formatting
- Deployed on Vercel

## Run locally

```bash
npm install
npm run dev
```
