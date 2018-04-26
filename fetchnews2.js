const key = "9b5242dd8e094b52a87a73b4febd6f59"
url = `https://newsapi.org/v2/everything?q=Zlatan AND Ibrahimovic&sortBy=publishedAt&apiKey=${key}`

const recievedNews2 = (newsdata) => {
    const articlesDiv = document.querySelector(".senaste")
    newsdata.articles.forEach((article, index) => {

      if(index < 4){

			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `<h3>${article.title}</h3>`
      articlesDiv.appendChild(div)

			const description = document.createElement("p")
				description.innerHTML = article.description
				div.appendChild(description)

			const link = document.createElement("a")
					link.href = article.url
					link.innerHTML = "Read more"
					div.appendChild(link)

        }

    })
}


//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(recievedNews2)
