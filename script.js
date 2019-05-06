var immg = [];
var okyuh = [];
var wtff = [];

var currentYOOO = 0;
var YOOO = 0;



$(".add").click(function() {
    
    var itemimg = $(".image").val();
    
    immg.push(itemimg);
    
    
    var pfft = $(".nameyuh").val();
   
    okyuh.push(pfft);
    
    
    YOOO = parseInt($(".price").val());
    wtff.push(YOOO);
    currentYOOO+=YOOO;
    console.log(currentYOOO);
    
    
   
    
    wtff.forEach(function(booger) {
        $(".itemslol").html(okyuh.length);
        $(".total").html(currentYOOO);
    });
    $(".content").append("<div class='aighcool'><div class='imgtarget'> <img src='"+itemimg+"'/> </div><div class='nametarget'><h2>" +pfft+ "</h2></div><div class='pricetarget'><h2>$ " +YOOO+ "</h2></div></div>");
    
});

$(".check").click(function(){
    alert("thanks for buying "+ okyuh[0] +" my g. get your money up not your funny up.");
});





