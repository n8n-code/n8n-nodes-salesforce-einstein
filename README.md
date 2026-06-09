# @n8n-dev/n8n-nodes-salesforce-einstein

![salesforce-einstein Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-salesforce-einstein.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-salesforce-einstein)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing salesforce-einstein API integrations by hand.**

Every time you connect n8n to salesforce-einstein, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to salesforce-einstein took 5 minutes, not half a day?**

This node gives you **12+ resources** out of the box: **Check API Usage**, **Authorization**, **Vision Datasets**, **Vision Examples**, **Vision Training**, and 7 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-salesforce-einstein
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-salesforce-einstein`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **salesforce-einstein API** → paste your API key
3. Drag the **salesforce-einstein** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Check API Usage</b> (1 operations)</summary>

- Get API Isage

</details>

<details>
<summary><b>Authorization</b> (2 operations)</summary>

- Post Generate an OAUTH Token
- Delete a Refresh Token

</details>

<details>
<summary><b>Vision Datasets</b> (7 operations)</summary>

- Get All Datasets
- Post Create a Dataset
- Post Create a Dataset From a Zip File Asynchronously
- Post Create a Dataset From a Zip File Synchronously
- Delete a Dataset
- Get a Dataset
- Get Deletion Status

</details>

<details>
<summary><b>Vision Examples</b> (6 operations)</summary>

- Put Create Feedback Examples From a Zip File
- Get All Examples
- Post Create an Example
- Put Create Examples From a Zip File
- Get All Examples for Label
- Post Create a Feedback Example

</details>

<details>
<summary><b>Vision Training</b> (3 operations)</summary>

- Post Retrain a Dataset
- Post Train a Dataset
- Get Training Status

</details>

<details>
<summary><b>Vision Models</b> (4 operations)</summary>

- Get All Models
- Delete a Model
- Get Model Metrics
- Get Model Learning Curve

</details>

<details>
<summary><b>Vision Prediction</b> (3 operations)</summary>

- Post Detection with Image File
- Post Detect Text
- Post Make Prediction

</details>

<details>
<summary><b>Language Datasets</b> (6 operations)</summary>

- Get All Datasets
- Post Create a Dataset From a File Asynchronously
- Post Create a Dataset From a File Synchronously
- Delete a Dataset
- Get a Dataset
- Get Deletion Status

</details>

<details>
<summary><b>Language Examples</b> (4 operations)</summary>

- Get All Examples
- Put Create Examples From a File
- Get All Examples for Label
- Post Create a Feedback Example

</details>

<details>
<summary><b>Language Training</b> (3 operations)</summary>

- Post Retrain a Dataset
- Post Train a Dataset
- Get Training Status

</details>

<details>
<summary><b>Language Models</b> (4 operations)</summary>

- Get All Models
- Delete a Model
- Get Model Metrics
- Get Model Learning Curve

</details>

<details>
<summary><b>Language Prediction</b> (2 operations)</summary>

- Post Prediction for Intent
- Post Prediction for Sentiment

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from salesforce-einstein docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official salesforce-einstein OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **salesforce-einstein** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the salesforce-einstein API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
