const key = "9b5242dd8e094b52a87a73b4febd6f59"
let url = `https://newsapi.org/v2/everything?q=Zlatan AND Ibrahimovic&sortBy=publishedAt&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    newsdata.articles.forEach((article) => {

			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `<h2>${article.title}</h2>
			<hr><h4>${article.author}</h4>`
      articlesDiv.appendChild(div)

			//This fetches and add images to our articles
			const img = document.createElement("img")
            img.src = article.urlToImage
            div.appendChild(img)

			const description = document.createElement("p")
				description.innerHTML = article.description
				div.appendChild(description)

			const link = document.createElement("a")
					link.href = article.url
					link.innerHTML = "Read more"
					div.appendChild(link)

    })
}





//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)
