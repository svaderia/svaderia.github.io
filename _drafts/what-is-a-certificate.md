Essentially a certificate is a wrapper around the public key of someone, giving us guarantees around the authenticity of key to name binding. This ensures that we are using right public keys for our encryption so that only the intended party can use it's own private key for the decryption and read our messages. 
We have roots we trust, 
Root signs others and make them valid.
They can sign others to make them valid.
if root is compromised, it sign malicious people and make them valids. 
Depending on how the public and private key of intermediates are generated, It can exploit existing certs as well.
The standards asks us to remove malicious or harmful trust anchor with something called as RCL. Revocation Certificate List.
