


var timelineData = [[{"Year":"1872","Event":"The Yellowstone National Park Act passed,\nestablishing the first national park."},
{"Year":"1916","Event":"The Organic Act passed, establishing the\nNational Park Service."},
{"Year":"1964","Event":"The Wilderness Preservation Act passed, \nprotecting wilderness areas to enjoy."},
{"Year":"1968","Event":"The National Trails System Act passed, \ndesignating national scenic trails."},
{"Year":"1969","Event":"The National Environmental Policy Act \nwas implemented to reduce harm done to
the environment by federal agencies."},
{"Year":"1970","Event":"The United States Environmental "},
{"Year":"Protection Agency was established.","Event":""},
{"Year":"1973","Event":"The Endangered Species Act passed, \nprotecting endangered species from
potential harm by federal agencies."},
{"Year":"1978","Event":"The National Parks and Recreation act\nadded an addition 15 units to the
National Park System in the United States."},
{"Year":"2016","Event":"August 25, 2016 marked the \nNational Park Service’s 100th birthday."}]];

var timeline_div = document.getElementById("timeline_div");

for (var i=0; i<timelineData.length; i++) {
  timeline_div.innerHTML = timeline_div.innerHTML + '<div class="timeline_item">' + '<span>' + timelineData[i].year + '</span>' + '<p>' + timelineData[i].event + '</p>' + '</div>'
}
