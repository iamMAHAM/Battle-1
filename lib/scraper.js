const axios = require("axios")
const { JSDOM } = require('jsdom')
const fs = require("fs")
let cardInfos = []
card_jobsid  = "job_1d4fb9a254059094"

// const scraper = (
//     url="https://emplois.be.indeed.com/"
//     )=>{
//         axios.get(url).then((res)=>{
//             const { document } = new JSDOM(res.data).window
//             Array.from(document.querySelectorAll(".cardOutline")).map(div=>{
// 				div.querySelectorAll("a")
// 				cardInfos.push({
// 					id: '',
// 					title: '',
// 					image: '',
// 					description: '',
// 			})
// 			fs.writeFile("jobs.json", JSON.stringify(cardInfos, null, space=2), (err)=>{
// 				err ? console.log(err) : console.log("write done !")
// 			})
//             })
// }
// )}

const scraper = (info)=>{
	const url = `https://fr.jooble.org/emploi/${info}`
	const all = []
	axios.get(url).then(res=>{
		const { document } = new JSDOM(res.data).window
		Array.from(document.querySelectorAll("article")).map(div=>{
			const prerequis =  []
			const el = div.querySelector("._3WwyPu") ? div.querySelector("._3WwyPu").children : ""
			Array.from(el).map((c) => c ? prerequis.push(c.textContent)  : prerequis.push("Disponible"))
			let info = {
				id: div.id,
				title: div.querySelector("._3862j6").textContent,
				salaire: div.querySelector(".jNebTl") ? div.querySelector(".jNebTl").textContent : "2000 €",
				prerequis: prerequis,
				ville: "Lyon",
				image: ["https://nl.jooble.org/logo/8383252489321933707.png",
				"https://fr.jooble.org/css/images/plogo/16.gif", 
				"https://nl.jooble.org/logo/-1627309242045827130.png",
				"https://fr.jooble.org/css/images/plogo/665.gif",
				"https://nl.jooble.org/logo/-8699880108866039771.png",
				"https://nl.jooble.org/logo/-7604445549185675036.png"
				][Math.floor(Math.random() * 5)]
			}
			all.push(info)
		})
		fs.writeFile(`${info.toLowerCase()}.json`, JSON.stringify(all, '', 2), (err)=>{
			err ? console.log("error") : console.log("write done")
		})
	})
	.catch(e=>console.log(e))
}

scraper("Luxembourg")