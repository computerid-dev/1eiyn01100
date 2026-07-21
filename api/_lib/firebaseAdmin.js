/* ==========================================================
   api/_lib/firebaseAdmin.js
   Init Firebase Admin SEKALI SAJA, dipakai bareng-bareng
   oleh semua Vercel Function di folder /api.
   ========================================================== */

import admin from "firebase-admin";

function getServiceAccount() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;

  if (!raw) {
    throw new Error("Env var FIREBASE_SERVICE_ACCOUNT belum diisi.");
  }

  return JSON.parse(raw);
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(getServiceAccount()),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
  });
}

export const adminAuth = admin.auth();
export const adminDb = admin.firestore();
export const adminBucket = admin.storage().bucket();
export const FieldValue = admin.firestore.FieldValue;
