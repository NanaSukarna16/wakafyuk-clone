'use client';

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

import { useEffect } from 'react';
import { Button } from './button';

const firebaseConfig = {
  apiKey: 'AIzaSyA7zwPCv0Lmv2vZBJcse_O0Wv-C4-mMHgE',
  authDomain: 'wakafyuk-102a0.firebaseapp.com',
  projectId: 'wakafyuk-102a0',
  storageBucket: 'wakafyuk-102a0.appspot.com',
  messagingSenderId: '776963877118',
  appId: '1:776963877118:web:0c5f393157cced921e9daf',
  measurementId: 'G-YY9T8H96HR',
};

export default async function Index() {
  function testConnection() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const docRef = doc(db, 'test', 'MZ6lWVfJu0EriEvYNT21');

    getDoc(docRef).then((snap) => {
      alert(snap.get('message'));
    });
  }

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <>
      <h1 className="text-lg text-red-800">Hello Nanas</h1>
      <Button variant="outline">Button</Button>
    </>
  );
}
