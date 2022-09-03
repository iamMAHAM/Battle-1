
const fs = require("fs")
const { addDoc, collection, getFirestore } = require("firebase/firestore")
const { initializeApp } = require("firebase/app")

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

const path = require("path")

const saveDocs = (collect="", docs=[])=>{
    // Add a new document with a generated id.
    docs.forEach(async (doc) =>{
        const docRef = await addDoc(collection(db, collect), doc)
        console.log("successfully write", docRef.id)
    })
}

const saveFile = (file, collect)=>{
	fs.readFile(file, (err, data)=>{
		err ? console.log(err) : ''
		const loaded = JSON.parse(data.toString())
		saveDocs(`jobs/VRkvZyTfyd7a0VbfAPsz/${collect}`, loaded)
	})
}

const allCategories = [
	'bordeaux',
	'toulouse',
	'lyon',
	'nantes',
	'luxembourg',
]

allCategories.forEach(cat=>{
	saveFile(path.join(__dirname, `../${cat}.json`), cat)
})
