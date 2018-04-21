pricetolondon =2360;
pricetoams=1189;
sum = pricetolondon + pricetoams;
golden = sum -(sum*10)/100;

document.write("<p>If you want to buy <b>Flight to London</b> and <b>Flight to Amsterdam</b>, it costs:</p>" +"<p>"+sum+"</p>" +"<p>If you want buy a<b>Flight to London</b> and a <b>Flight to Amsterdam</b> as a GoldenCard holder, you will get a 10% discount:</p>"+" <p>"+golden+"EUR</p> ");

document.write("<br>");
