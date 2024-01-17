/*
function addLocation()
{
    alert("addLocation");
}
*/


let theApp = null;

window.onload = function() { 
    theApp = InitiateApp(window.document);
    
}

// Place class
class Place {
    constructor() {
        this.label="";  // string for a label, e.g. "cool restaurant"
        this.address=""; // string for the address 
    }
}



// PlaceList class 
class PlaceList {
    constructor() {
        this.list = [];
    }
    
	// method to add append a Place at the list
	append(place)
	{
        alert(place.address);
		this.list.push(place);
	}
	
	// delete the list element at position "index". Indexes start from 0.
	deleteByPosition(index)
	{
	
		if (index >= this.list.lenght)
			return;
		
		this.list.splice(index,1);
	}
	
	// delete the list element with label="label"
	deleteByLabel(label)
	{
		for ( i = 0; i < this.list.length; i++ )
		{
			if (list[i].label === label )
				this.deleteByPosition(i);
		}
	}
    
}

class App
{
    constructor(_document) {
        //alert("App");        
        this.placeList = new PlaceList();
        this.view = new View(_document, this);
    }
    
    addPlace()
    {
        var address = this.view.getAddress();
        var place = new Place();
        place.address = address;
        placelist.append(place);
    }

}

class View {

    constructor(document_, presenter){
        this.doc = document_;        
        this.divMap = this.doc.getElementById("divMap");
        this.buttonMap = this.doc.getElementById("buttonMap");
        this.mapVisibility = false; 
           
        this.buttonMap.addEventListener("click", (event)=>    {
                //alert(this.buttonMap.innerHTML);
                if (this.buttonMap.innerHTML == "Show Map"){
                    divMap.style.display = "inherit";
                    divMap.style.visibility = "true"
                    buttonMap.innerHTML = "Hide Map";
                }
                else{
                    divMap.style.display = "none";
                    divMap.style.visibility = "false";
                    buttonMap.innerHTML = "Show Map";                
                }
            });
        this.inputLocation = this.doc.getElementById("location");
        this.buttonAddLocation = this.doc.getElementById("buttonAddLocation");
        this.buttonAddLocation.addEventListener("click", function() { 
            presenter.addPlace(); }
        );
    }
    
    getAddress(){
        return(this.inputLocation.value);
    }

}




function InitiateApp(_document)
{
    let app = new App(_document);
    return app;
}


