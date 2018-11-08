(() => {


        let addicts = document.querySelectorAll(".dataRef");


    // define a waypoint and run some animation
    // var waypoint = new Waypoint ({
    //     element: document.querySelector("#cargoShip").querySelector(".svgGraphic"),
    //     handler: function(direction) {
    //         //console.log('scrolled to element !', this.element),
    //         runAnimation(this.element, ["Cargo_1", "Cargo_2"]);
    //     },
    //     offset: 200
    // });


    function getData() {

        let targetURL = `./includes/connect.php?addicts=${this.id}`;
        console.log(targetURL);
        // THIS LINE OF CODE
    
        fetch(targetURL) //go get the data and bring it back
        .then(res => res.json()) //Turn the result into a plain JS object
        .then(data => {
            //Run a function to parse our data
            showAddictData(data[0]);
        }) //Lets see what we got
        .catch(function(error) {
            console.log(error); //If anything broke, log it into the console
        });
    }

    function showAddictData(data) {
        const {addicts_label, addicts_headline, addicts_copy} = data;
        document.getElementById("ajaxInfo").innerHTML = addicts_copy;
    }




    function runAnimation(parent, elements) {
        // debugger;
        //console.log(parent, elements);

        // get the svg ref from the parent
        innerSVG = parent.contentDocument; // svg inside of the object tag

        let animProps = {};

        switch(parent.id) {
            case "Cargo_1", "Cargo_2":
            animProps = {scaleX: 1.5, scaleY: 1.5, rotation: 360, transformOrigin:'50% 50%'};
            break;

            case "glasses":
            animProps = {scaleX: 1.5, scaleY: 1.5};
            break;

            case "barrels":
            //run some other animation here
            break;

            default:
            //do nothing
            break;
        }

        // run an animation with Greensock
        elements.forEach(el => {
            let target = innerSVG.querySelector(`#${el}`);
            TweenMax.to(target, 0.6, animProps);
        });
    }



    // EVENT HANDLING

    addicts.forEach( singleAddict => singleAddict.addEventListener('mouseover', getData));


    document.querySelector('#cargoShip').addEventListener("mouseover", function() {
        runAnimation(this.querySelector('.svgGraphic'), ['Cargo_1', 'Cargo_2']);
    });

})();