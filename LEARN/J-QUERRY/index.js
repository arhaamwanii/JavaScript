//ADDING CSS

$("h1").css({
    "font-size": "3rem",
    "color": "red",
})
$("button").css("background-color" , "green");

$("h1").addClass("blue")

//ADDING CSS



//checkign calsses   - gives back a boolein

var check = $("h1").hasClass("sex");
console.log(check);


//adding text

$( ".one").text("how you doing brotheer")

//adding innerHTML

$("button").html("<em> how are you today</em>")


$( ".one").text("how you doing brotheer")


//adding attributes     - ".attr"

console.log($("img").attr("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU"));

console.log($("a").attr("href" , "https://yahoo.com"));

//this shit printed all the classes of the given element
console.log($("a").attr("class") )


//ADDING ELEMENTS

$("h1").before("<button> New </button>")
$("h1").append("<button> New </button>")
$("h1").prepend("<button> New </button>")
$("h1").after("<button> New </button>")

//EVENT LISTNERS

$("h1").click(function(){
    $("h1").css("color" , "purple")
    $("img").attr("src" ,  "https://images.news18.com/ibnlive/uploads/2021/08/sun-photo.jpg")
})

