$(document).ready(() => {
    const $button = $('.submit');
    // function getCustomer(){
        $button.click((e) => {
            const $input = $('.search');
            const data = $input.val();
            $.get(`/customer/${data}`, (data) => {
              const resultsContainer = $('.results');
              for(var i =0; i< data.length; i++){
                  const name = data[i].name;
                  const address = data[i].address;
                  const new_customer = data[i].new_customer;
                  const phone_number = data[i].phone_number;
                  const make = data[i].make;
                  const model = data[i].model;
                  const mileage = data[i].mileage;
                  const year = data[i].year;
                  const under_warranty = data[i].warranty;
                  const h1 = $("<h1></h1>", {id: "card-title",text:name});
                  const h2 = $("<h2></h2>", {id: "card-title",text:address});
                  const h3 = $("<h3></h3>", {id: "card-title",text:new_customer});
                  const h4 = $("<h4></h4>", {id: "card-title",text:phone_number});
                  const h5 = $("<h5></h5>", {id: "card-title",text:make});
                  const h6 = $("<h6></h6>", {id: "card-title",text:model});
                  const h7 = $("<h7></h7>", {id: "card-title",text:year});
                  const h8 = $("<h8></h8>", {id: "card-title",text:under_warranty});
                  const h9 = $("<h9></h9>", {id: "card-title",text:mileage});
                  const resultCard = $("<div></div>", {class:"result-card"});
                  h1.appendTo(resultCard);
                  h2.appendTo(resultCard);
                  h3.appendTo(resultCard);
                  h4.appendTo(resultCard);
                  h5.appendTo(resultCard);
                  h6.appendTo(resultCard);
                  h7.appendTo(resultCard);
                  h8.appendTo(resultCard);
                  h9.appendTo(resultCard);
                  resultsContainer.append(resultCard)
                }
            })
            $(".results").empty();
              e.preventDefault();
          })
      // };
  });

                  
    


