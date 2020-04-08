$(document).ready(function(){

$(".Hover1").hide();
$(".Hover2").hide();
$(".Hover3").hide();
$(".Hover4").hide();
$(".Hover5").hide();

$(".FindHere1").mouseover(function(){
  $(".Hover1").show();
});
$(".Attractions").mouseover(function(){
  $(".Hover2").show();
});
$(".Lodging").mouseover(function(){
  $(".Hover3").show();
});
$(".Resturants").mouseover(function(){
  $(".Hover4").show();
});
$(".Activities").mouseover(function(){
  $(".Hover5").show();
});
$(".FindHere1").mouseleave(function(){
  $(".Hover1").hide();
});
$(".Attractions").mouseleave(function(){
  $(".Hover2").hide();
});
$(".Lodging").mouseleave(function(){
  $(".Hover3").hide();
});
$(".Resturants").mouseleave(function(){
  $(".Hover4").hide();
});
$(".Activities").mouseleave(function(){
  $(".Hover5").hide();
});
$("#ReadMore").click(function(){
  $(".FindUsD p").html("Duluth is located on the tip of Lake Superior about 150 miles north of Minneapolis. Know as one of the Twin Ports (Superior, Wisconsin) Duluth is know for its rich shipping industry. With a current population around 90,000 Duluth offers the perfect place for getting a little bit of everything. Explore the other pages such as Activites, Attractions, Resturants to find something new and unique during your stay in Duluth.");
});
$("h1").mouseover(function(){
  $("h1").css("font-style", "italic");
});
$("h1").mouseleave(function(){
  $("h1").css("font-style", "inherit");
});




});
