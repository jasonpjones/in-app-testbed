/* globals $ */

var KpiScroller = function() {

};

KpiScroller.prototype = {
    init: function() {
        this._setupEvents();
    },





    buildIt: function(howmany, where) {
        for (var i=0;i<howmany;i++) {
            var theDiv = $("<div>", {class: "fake-kpi" });
            theDiv.append("KPI " + (i + 1).toString());
            $("#" + where).append(theDiv);
        }
    },
    centerIt: function() {
        var $innerEl = $("#bgdiv"),
            $outerEl = $("#contdiv"),
            iW = $innerEl.width(),
            cW = $outerEl.width(),
            newLeft = Math.round(((iW *.5) - (cW * .5)) * -1 ); // assumes inner is bigger than outer

        $innerEl.css("left", newLeft.toString() + "px")
    },
    scrollRight: function() {


        var rightEdge = $("")


        //


    },
    scrollLeft: function() {

    },
    _setupEvents: function() {
        $(".arrow-right").on("click", this.scrollRight);
    }

};

