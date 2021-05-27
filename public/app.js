$(document).ready(() => {
    var $button = $('.submit');
    // function getCustomer(){
        $button.click((e) => {
            var $input = $('.search');
            var data = $input.val();
            $.get(`/customer/${data}`, (data) => {
              var resultsContainer = $('.results');
              for(var i =0; i< data.length; i++){
                  var name = data[i].name;
                  var address = data[i].address;
                  var new_customer = data[i].new_customer;
                  var phone_number = data[i].phone_number;
                  var make = data[i].make;
                  var model = data[i].model;
                  var mileage = data[i].mileage;
                  var year = data[i].year;
                  var under_warranty = data[i].warranty;
                  var h1 = $("<h1></h1>", {id: "card-title",text:name});
                  var h2 = $("<h2></h2>", {id: "card-title",text:address});
                  var h3 = $("<h3></h3>", {id: "card-title",text:new_customer});
                  var h4 = $("<h4></h4>", {id: "card-title",text:phone_number});
                  var h5 = $("<h5></h5>", {id: "card-title",text:make});
                  var h6 = $("<h6></h6>", {id: "card-title",text:model});
                  var h7 = $("<h7></h7>", {id: "card-title",text:year});
                  var h8 = $("<h8></h8>", {id: "card-title",text:under_warranty});
                  var h9 = $("<h9></h9>", {id: "card-title",text:mileage});
                //   var resultCard = $("<div></div>", {class:"result-card"});
                  h1.appendTo('.main');
                  h2.appendTo('.main');
                  h3.appendTo('.main');
                  h4.appendTo('.main');
                  h5.appendTo('.main');
                  h6.appendTo('.main');
                  h7.appendTo('.main');
                  h8.appendTo('.main');
                  h9.appendTo('.main');
                  resultsContainer.append('.main')
                }
            })
            $(".results").empty();
              e.preventDefault();
          })
      // };
  });

                  
    


