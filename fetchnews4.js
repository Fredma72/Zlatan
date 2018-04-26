url = `https://newsapi.org/v2/everything?q=helena AND zlatan&sortBy=publishedAt&apiKey=${key}`

const recievedNews4 = (newsdata) => {
    const articlesDiv = document.querySelector(".puffvanster")
    newsdata.articles.forEach((article, index) => {

      if(index < 1){

      const div = document.createElement("div")
              div.className = "news"

			//Here we create and add html elements to our html file
      const img = document.createElement("img")
            img.src = article.urlToImage
            div.appendChild(img)

      const heading = document.createElement("h3")
            heading.innerHTML = article.title
            div.appendChild(heading)

      const description = document.createElement("p")
      		  description.innerHTML = article.description
      			div.appendChild(description)

			const link = document.createElement("a")
					  link.href = article.url
					  link.innerHTML = "Read more"
					  div.appendChild(link)

            articlesDiv.appendChild(div)

            }

    })
}


//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(recievedNews4)
