const { initializeApp } = require("firebase/app")
const { getFirestore } = require("firebase/firestore")

const firebaseConfig = {
	apiKey: "AIzaSyBCEF9vBAtys2y4-ByXCW9RCNQ5PZ3GB5M",
	authDomain: "clandestine-73e7b.firebaseapp.com",
	projectId: "clandestine-73e7b",
	storageBucket: "clandestine-73e7b.appspot.com",
	messagingSenderId: "997519519967",
	appId: "1:997519519967:web:f18182b29aaf85d7eb396a",
	measurementId: "G-1RNFLLJ4M6"
  }

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
module.exports = { db}