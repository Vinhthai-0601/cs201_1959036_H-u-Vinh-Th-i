    let card1 = document.querySelector(".card-1");
    let card2 = document.querySelector(".card-2");
    let card3 = document.querySelector(".card-3");
    let card4 = document.querySelector(".card-4");
    let card5 = document.querySelector(".card-5");
    let card6 = document.querySelector(".card-6");

getProducts();

  function getProducts() {
    let url = "https://fakestoreapi.com/products";
    let xhr = new XMLHttpRequest();
    xhr.open("GET",
    url,
    true
  );
    xhr.onload = function(){
      if(this.status == 200) {
        let results = JSON.parse(this.responseText);
        console.log(results);
            let output=`  <img class="card-img-top" src="${results[1].image}" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title">${results[1].title}</h5>
              <p class="card-text">${results[1].text}</p>
              </div>`;

          let  output2=`  <img class="card-img-top" src="${results[2].image}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${results[2].title}</h5>
                <p class="card-text">${results[2].text}</p>
                </div>`;

          let    output3=`  <img class="card-img-top" src="${results[3].image}" alt="Card image cap">
                  <div class="card-body">
                  <h5 class="card-title">${results[3].title}</h5>
                  <p class="card-text">${results[3].text}</p>
                  </div>`;
          let    output4=`  <img class="card-img-top" src="${results[4].image}" alt="Card image cap">
                  <div class="card-body">
                  <h5 class="card-title">${results[4].title}</h5>
                  <p class="card-text">${results[4].text}</p>
                  </div>`;

            let    output5=`  <img class="card-img-top" src="${results[5].image}" alt="Card image cap">
                  <div class="card-body">
                  <h5 class="card-title">${results[5].title}</h5>
                  <p class="card-text">${results[5].text}</p>
                  </div>`;

            let    output6=`  <img class="card-img-top" src="${results[6].image}" alt="Card image cap">
                  <div class="card-body">
                  <h5 class="card-title">${results[6].title}</h5>
                  <p class="card-text">${results[6].text}</p>
                  </div>`;

              card1.innerHTML = output;
              card2.innerHTML = output2;
              card3.innerHTML = output3;
              card4.innerHTML = output4;
              card5.innerHTML = output5;
              card6.innerHTML = output6;
            }
          }
    xhr.send();

  }
