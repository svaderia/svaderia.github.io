---
title: "What is a Certificate"
tags: [security]
excerpt: "It's not just random numbers"
toc: false
classes: wide
---

A certificate is essentially a wrapper around the public key of an entity, providing guarantees about the authenticity of the key-to-name binding. This ensures that we use the correct public keys for encryption, allowing only the intended party to use its private key for decryption and read our messages.

Here's a high level breakdown of how certificates work:

1. **Trusted Roots**: We have a set of root certificates we trust.
2. **Certificate Signing**: The trusted root certificates sign other certificates, making them valid.
3. **Chain of Trust**: These signed certificates can, in turn, sign additional certificates, creating a chain of trust.
4. **Compromise Risks**: If a root certificate is compromised, it can sign malicious certificates, making them appear valid.
5. **Exploitation**: Depending on how the public and private keys of intermediates are generated, existing certificates can also be exploited.
6. **Revocation**: To mitigate risks from compromised certificates, standards require the use of a Revocation Certificate List (RCL) to remove malicious or harmful trust anchors.
