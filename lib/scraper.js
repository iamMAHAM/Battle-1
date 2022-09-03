const axios = require("axios")
const { JSDOM } = require('jsdom')
const fs = require("fs")
let cardInfos = []

const scraper = (
    url="https://www.pharma-gdd.com/fr/medicaments"
    )=>{
        axios.get(url).then((res)=>{
            const { document } = new JSDOM(res.data).window
            Array.from(document.querySelectorAll(".product")).map(div=>{
				const price = parseFloat((parseFloat(div.querySelector(".listing-price span").textContent.replace("&nbsp;€").replace(",", ".")) * 655.59).toFixed(2))
				cardInfos.push({
					state: 'stock',
					title: div.querySelector(".product-brand") ? div.querySelector(".product-brand").textContent : 'product',
					image: div.querySelector(".thumbnail img").getAttribute("data-src"),
					description: div.querySelector(".product-subtitle").textContent,
					price: price ? price :
						parseFloat((parseFloat(div.querySelector(".listing-price:nth-child(2)").textContent.replace("&nbsp;€").replace(",", ".").replace("A partir de", '')) * 655.59).toFixed(2))
				})
			})
			fs.writeFile("drugs.json", JSON.stringify(cardInfos, null, space=2), (err)=>{
				err ? console.log(err) : console.log("write done !")
			})
            })
}

scraper()

