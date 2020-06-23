var hotel = {
    haswireless : true,
    hasDisablesAccess : true ,
    hasParking : false
};

if ((hotel.hasParking !== undefined && hotel.hasParking !== null )  && (hotel.hasParking)  ){
    console.log("if True segment the value is"+hotel.hasParking);
} else {
    console.log("if false segment the value is "+hotel.hasParking);
}

console.log("type of null is "+typeof(null));