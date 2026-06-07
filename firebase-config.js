// ==========================================
// firebase-config.js: Firebaseの初期設定と接続
// ==========================================

// Firebaseのコア機能を読み込む（CDN経由）
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// 取得した先生専用のFirebaseキー
const firebaseConfig = {
  apiKey: "AIzaSyCAdJoO1RodOqidiwt9Jk4jdwFYQWBB8v8",
  authDomain: "copeak-realtime.firebaseapp.com",
  projectId: "copeak-realtime",
  storageBucket: "copeak-realtime.firebasestorage.app",
  messagingSenderId: "933256744101",
  appId: "1:933256744101:web:afe0d20ac3e2700739914c"
};

// Firebaseを初期化
const app = initializeApp(firebaseConfig);

// データベース（Firestore）を準備
const db = getFirestore(app);

// 他のファイル（teacher-battle.js等）で使えるようにエクスポート
export { db, collection, addDoc, onSnapshot, query, orderBy, doc, setDoc, updateDoc };

console.log("🔥 Firebase is ready!");