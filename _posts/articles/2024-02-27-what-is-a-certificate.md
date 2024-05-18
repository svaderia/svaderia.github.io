---
title: "What is a Certificate"
tags: [security]
excerpt: "It's not just random numbers"
toc: false
classes: wide
---

A certificate is essentially a wrapper around the public key of an entity, providing guarantees about the authenticity of the key-to-name binding. This ensures that we use the correct public keys for encryption, allowing only the intended party to use its private key for decryption and read our messages.

## How Certificates Work

1. **Trusted Roots**: We have a set of root certificates we trust. These root certificates are pre-configured in your machine or browser.
2. **Certificate Signing**: The trusted root certificates sign other certificates, making them valid. This process, known as certificate signing, creates a digital signature that can be verified to confirm authenticity.
3. **Chain of Trust**: These signed certificates can, in turn, sign additional certificates, creating a chain of trust. This hierarchical structure ensures that each certificate in the chain is authenticated by the one above it, leading back to the trusted root.
4. **Compromise Risks**: If a root certificate is compromised, it can sign malicious certificates, making them appear valid. This can undermine the entire trust system, as any certificate signed by the compromised root will be trusted.
5. **Exploitation**: Depending on how the public and private keys of intermediates are generated, existing certificates can also be exploited.
6. **Revocation**: To mitigate risks from compromised certificates, standards require the use of a Revocation Certificate List (RCL) to remove malicious or harmful trust anchors. These mechanisms ensure that compromised certificates are invalidated and no longer trusted.

The main idea is to only trust a certificate presented to you if it is signed by a trusted entity. You need to verify and trace the entire chain to a **Trusted Root** to ensure that the certificate presented to you is valid.

These certificates are essential for TLS/SSL communication, which keeps our internet traffic secure.

## Example: Secure communication using Certificates

Let's imagine a scenario when you want to talk with your bank's website to check your account balance. You visit the bank's website and the website returns you a certificate. 

* You verify if the entire chain of certificates are signed correctly and by a valid **Trusted Root**. 
* You use the Public Key from the certificate to establish a secure session with the bank. 
* Once the secure, encrypted session is established, you send in your credentials to log in to the bank's website and perform other operations.

Fortunately, this entire setup is handled by your browser, sparing you the complexity of the process.

## Attack: Violating privacy with fake but trusted certificate.
Now imagine one of the **Trusted Roots** or an **Intermediary Root** is compromised. An attacker gains the ability to create fake certificates with their private key, which will be trusted since the entire chain is trusted.

* The attacker creates a fake website that looks like the legitimate bank's website.
* You are somehow redirected to this fake site and trust the website's certificate, believing it provides the public key of your bank (not the attacker).
* This means the attacker can decrypt your entire communication and learn all your private credentials.

## Referneces
* [DEF CON 19 - Moxie Marlinspike - SSL And The Future Of Authenticity](https://www.youtube.com/watch?v=UawS3_iuHoA)
* [Chain of Fools: An Exploration of Certificate Chain Validation Mishaps](https://youtu.be/gmYcsdXT3W8?si=VBSFGVuv9rORepSz)
* [Final Report on DigiNotar Hack Shows Total Compromise of CA Servers](https://threatpost.com/final-report-diginotar-hack-shows-total-compromise-ca-servers-103112/77170/)
