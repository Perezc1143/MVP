 
$(document).ready(() => {
    function getCustomer(){
        var $button = $('.submit');
        $button.click((e) => {
            var $input = $('.search-customer');
            var data = $input.val();
            $.get(`/customer/${data}`, (res) => {
                for(var customer of res){
                  var h1 = $("<h1></h1>", {id: "card-title",text:customer.name});
                  var h2 = $("<h2></h2>", {id: "card-title",text:customer.address});
                  var h3 = $("<h3></h3>", {id: "card-title",text:customer.new_customer});
                  var h4 = $("<h4></h4>", {id: "card-title",text:customer.phone_number});
                  var h5 = $("<h5></h5>", {id: "card-title",text:customer.make});
                  var h6 = $("<h6></h6>", {id: "card-title",text:customer.model});
                  var result = document.getElementsByClassName('main');
                  h1.appendTo(result);
                  h2.appendTo(result);
                  h3.appendTo(result);
                  h4.appendTo(result);
                  h5.appendTo(result);
                  h6.appendTo(result);
                }
            })
            $(".main").empty();
              e.preventDefault();
          })
          var $buttonTwo = $('.submit-vehicle');
          $buttonTwo.click((e) => {
              var $input = $('.search-vehicle');
              var data = $input.val();
              $.get(`/vehicle/${data}`, (res) => {
                  for(var vehicle of res){
                      var div1 = $("<div></div>", {id: "vehicle-info",text:vehicle.make});
                      var div2 = $("<div></div>", {id: "vehicle-info",text:vehicle.model});
                      var div3 = $("<div></div>", {id: "vehicle-info",text:vehicle.year});
                      var div4 = $("<div></div>", {id: "vehicle-info",text:vehicle.mileage});
                      var div5 = $("<div></div>", {id: "vehicle-info",text:vehicle.under_warranty});
                      var result = document.getElementsByClassName('right-sidebar');
                      div1.appendTo(result);
                      div2.appendTo(result);
                      div3.appendTo(result);
                      div4.appendTo(result);
                      div5.appendTo(result);
                    }
                })
                $(".right-sidebar").empty();
                e.preventDefault();
            })
        };
});
        
        
        
        


