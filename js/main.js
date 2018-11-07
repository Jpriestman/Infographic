(() => {

    // define a waypoint and run some animation
    // var waypoint = new Waypoint ({
    //     element: document.querySelector("#cargoShip").querySelector(".svgGraphic"),
    //     handler: function(direction) {
    //         //console.log('scrolled to element !', this.element),
    //         runAnimation(this.element, ["Cargo_1", "Cargo_2"]);
    //     },
    //     offset: 200
    // });


    function runAnimation(parent, elements) {
        // debugger;
        console.log(parent, elements);

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
    document.querySelector('#cargoShip').addEventListener("mouseover", function() {
        runAnimation(this.querySelector('.svgGraphic'), ['Cargo_1', 'Cargo_2']);
    });

})();