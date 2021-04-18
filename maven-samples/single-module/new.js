<!doctype>
<html>
<head>
<title> Java Script </title>


</head>

<body>




	
	<!-- BASIC OBJECT METHOD-->
	
	<script> 
	
		function basicObjectMethod(){
		
		/* NORMAL OBJECT 
		
			var basicObject={
			
				"firstName": "Lokesh",
				"LastName": "Keerthi", 
				"DateofBirth": "17-11-1994",
				"Email": "lokeshdeepu12@gmail.com"
			}
				//document.getElementById('output').innerHTML=basicObject.firstName + "<br> " +
				//basicObject.LastName+"<br>" + basicObject.Email
				//var Stringy = JSON.stringify(basicObject)
				//var Parsey = JSON.parse(Stringy)
				var Rj = (JSON.stringify(basicObject))
				var Jr = JSON.parse(Rj);
			console.log(Jr);
		*/
			
			//NESTED OBJECT
			
			/* var basicObject={
			
				"firstName": "Lokesh",
				"LastName": "Keerthi", 
				"DateofBirth": "17-11-1994",
				"Email": "lokeshdeepu12@gmail.com",
				"address":{
					
					"City"    : "HYDERABAD" ,
					"Disrtict":	"RANGA REDDY",
					"State"   :	"TELANGANA",
					"Country" :	"INDIA"
				}
			}
			document.getElementById('output').innerHTML= "My Name is " + 
			basicObject.firstName+" "+  
			basicObject.LastName  +"<br>"+"I am from " + 
			basicObject.address.City+"<br>"+ "which is located in "+
			basicObject.address.Disrtict +","+ 
			basicObject.address.State+ "." + "<br>" +"My Country Name is "+ 
			basicObject.address.Country.toUpperCase();
		}		
		*/
		
		//BASIC ARRAY NESTED OBJECT
		/*
		var basicObject={
			
				"firstName": "Lokesh",
				"LastName": "Keerthi", 
				"DateofBirth": "17-11-1994",
				"Email": "lokeshdeepu12@gmail.com",
				"TechnicalSkills":["HTML5","CSS3","BOOTSTRAP4","JavaScript","Angular","React","AngularJS","ReactJS",],
				"address":{
					
					"City"    : "HYDERABAD" ,
					"Disrtict":	"RANGA REDDY",
					"State"   :	"TELANGANA",
					"Country" :	"INDIA"
				}
			}
			document.getElementById('output').innerHTML= "My Name is " + 
			basicObject.firstName+" "+  
			basicObject.LastName  +"<br>"+"I am from " + 
			basicObject.address.City+"<br>"+ "which is located in "+
			basicObject.address.Disrtict +","+ 
			basicObject.address.State+ "." + "<br>" +"My Country Name is "+ 
			basicObject.address.Country.toUpperCase()+ "<br>"+ "I have very Good Knowledge in "+
			basicObject.TechnicalSkills[4  ];
			
			*/
			
			
			
			
		}	
		
		
		
		</script>
				
		
			
		
		<div id="output"> OutPut </div>
			<button onclick="basicObjectMethod();"> Display </button>
		
		
		
		
		
	<!--
	"My Name is "+basicObject.firstName + basicObject.LastName +"<br>"+ 
			"I am from " + basicObject.address.City+ "located in "+basicObject.address.Disrtict + ,","+ state+ "."+ 
			"My Country Name is "+ basicObject.address.Country;
	
	
	
	
	
	
	<!-- FILTER METHOD 
	
	 <script> 
	 
			function basicMethod() {
			
				var basicNumber = [2,24,9,6,55,15,-2,-85,-55,-59,-98,5];
				var basicFilter = basicNumber.filter( function(value) {
				
					if(value>=0) {
						return value;
					}
				});
				
				var sortArray= basicFilter.sort(function(a,b){
				return a-b;
				});
				
				
				
				document.getElementById('output').innerHTML=sortArray;
					
			}
			
	 </script>
		
		<div id="output"> Output</div>
		<button onclick="return basicMethod();"> Display </button>
	 

	
	<!--Map Method 
	
	<script>
	
			function basicMethod(){
			
			var Students=["Raju","Ramesh","Arjun","Abhishek"];
			var mapResults= Students.map((stu)=>{return"<li>"+stu+"<li>"});
			var removeComas= mapResults.join("");
			document.getElementById('output').innerHTML=removeComas;
			}
		 
	</script>
	
		<ul id="output">  
	
		</ul>
		


	<button onclick="return basicMethod();"> display </button>

	-->

<!--
We have 3 types of Functions.
1) Naming Fucntion
2) Anonymous Function
3) Lambda Expression or fat arrow method

 <script> 
 
 
	// NAMING FUCTION EXAMPLES
	/*
	function add() {
		alert("They are adding")
	}
	add();
	*/
	
	/*
	function add(a,b,c) {
	alert(a+b+c)
	}
	add(4,6,10);
	*/
	
	//ANONYMOUS FUCTION EXAMPLES
	/*
		function add() {
		alert("They are adding")
	}
	add();
	
	var abc = function(a,b){
		alert(a+b)
	}
	abc(1,8);
	*/
	 
	// LAMBDA EXPRESSION "()=>{}"
	/*
	var addTwo = ()=>{
		alert("They are Adding Right!!!!??") 
	}
	addTwo();
	*/
	/*
	var addTwo = (a,b)=>{
		alert(a+b) 
	}
	addTwo(8,2);
	*/
	/*
	var addTwo = a=>alert(a)
	addTwo(8);
	*/
	
	
 
 
 
 </script>
	
	<div id="output"> Output </div>


	<button onclick="add();"> display </button>

-->



<!--
	1)Push Array: Add an Element to the Existing Element in the Last Place
	2)Pop Array: Remove an Element from the Exixting Element in the Last Place
	3)Unshift Array:  Add an Element to the Existing Element in the First Place
	4)Shift Array: Remove an Element from the Exixting Element in the First Place
	5)Sort: Sort Method is use to sort the value of an array in ascending or descending order
-->	
		<!-- 
		<script>
		
			function basicMethod() {
				//Push Array
				/*
				var nameArray = ["Raju", "Sirish", "Ramu" , "Sooraj"];
				var PushArray = nameArray.push ("Ramesh");
				document.getElementById('output') .innerHTML = nameArray;
				*/
				
				//Pop Array 
				/*
				var nameArray = ["Raju", "Sirish", "Ramu" , "Sooraj"];
				var PushArray = nameArray.push ("Ramesh");
				var PushArray = nameArray.pop();
				document.getElementById('output') .innerHTML = nameArray;
				*/
				
				//UnshiftShift Array
				/*
				var nameArray = ["Raju", "Sirish", "Ramu" , "Sooraj"];
				var PushArray = nameArray.unshift("Ramesh");
				document.getElementById('output') .innerHTML = nameArray;
				*/
				
				//shift Array
				/*
				var nameArray = ["Raju", "Sirish", "Ramu" , "Sooraj"];
				var PushArray = nameArray.shift ("Ramesh");
				document.getElementById('output') .innerHTML = nameArray;
				*/
				
				// SORT Method
				//string
				/*
				var basicAscending =["abc","bca","cba"];
				var sortArray= basicAscending.sort();
				console.log(basicAscending);
				//document.getElementById('output').innerHTML=basicAscending
				
				//Numerical
				var basicAscending=[2,8,6,15,15,99,85,45,2,14,5,66,2,845,];
				var sortArray= basicAscending.sort(function(a,b){
				return a-b;
				});
				document.getElementById('output').innerHTML=basicAscending;
				*/
			}
			
		</script>

	<div id="output"> Output </div>


	<button onclick="basicMethod();"> display </button>



	<!--
		<script> 
		
		function basicMethod() {
	
		var nameArray = ["Raju", "Sirish", "Ramu" , "Sooraj"];
		var output='';
		nameArray.forEach(function (DedicatedValue,index) {
		
			//console.log (index+1 + " The Name is " + DedicatedValue );//
			
			output= output+ (index+1)  + " The Name is " + DedicatedValue+ "<br>";
		
		})
			document.getElementById('output'). innerHTML = output
		
		}	
</script>






	<div id="output"> Output </div>


	<button onclick="basicMethod();">display </button>
	
	-->

</body>
</html>






