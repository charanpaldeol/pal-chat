// web-chat/src/services/signalcrypto.js

import * as libsignal from 'libsignal';

export async function generateIdentity() {
  const identityKeyPair = await libsignal.KeyHelper.generateIdentityKeyPair();
  const registrationId = await libsignal.KeyHelper.generateRegistrationId();

  return {
    identityKeyPair,
    registrationId,
  };
}

export async function generatePreKeys(start = 1, count = 5) {
  const preKeys = [];
  for (let i = 0; i < count; i++) {
    const key = await libsignal.KeyHelper.generatePreKey(start + i);
    preKeys.push(key);
  }
  return preKeys;
}

export async function generateSignedPreKey(identityKeyPair, keyId = 1) {
  const signedPreKey = await libsignal.KeyHelper.generateSignedPreKey(identityKeyPair, keyId);
  return signedPreKey;
}
