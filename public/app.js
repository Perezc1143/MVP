 
$(document).ready(() => {
    // getting customer
        var $button = $('.submit');
        $button.click((e) => {
            var $input = $('.search-customer');
            var data = $input.val();
            $.get(`/customer/${data}`, (res) => {
                for(var customer of res){
                  var h1 = $("<div></div>", {id: "card-title",text:customer.name});
                  var h2 = $("<div></div>", {id: "card-title",text:customer.address});
                  var h3 = $("<div></div>", {id: "card-title",text:customer.new_customer});
                  var h4 = $("<div></div>", {id: "card-title",text:customer.phone_number});
                  var h5 = $("<div></div>", {id: "card-title",text:customer.make});
                  var h6 = $("<div></div>", {id: "card-title",text:customer.model});
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
          //getting vehicle info
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
        // making an post 
        var $newCustomerButton = $('.newCustomer');
        $newCustomerButton.click((e) => {
            var $main = $(".main")

            var $inputName = $('#name');
            var $inputPhone = $('#phone-number');
            var $inputAddress = $('#address');
            var $inputNewCust = $('#new-customer')
            var custName = $inputName.val();
            var custPhone = $inputPhone.val();
            var custAddress= $inputAddress.val();
            var custNew = $inputNewCust.val();
            var newInput = {
                name: custName,
                phone: custPhone,
                address: custAddress,
                new_customer : custNew
            };
            $.ajax({
                type:"POST",
                url: "http://localhost:3000/customer",
                data: newInput,
                success: function(newCust){
                    $main.append("<li> name:" + newCust.name +'phone:'+ newCust.phone +'address:'+ newCust.address +'new customer:' + newCust.new_customer + '</li>')
                }
            })
            e.preventDefault();
        })
});
        
        
        
        


