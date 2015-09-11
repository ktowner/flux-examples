var mixins = {
	makeContentObject: function(obj) {
		var content = {};
		var contentProps = ["title", "media", "copy", "links"];
		for( var prop in obj){
			if(contentProps.indexOf(prop) >= 0){
				content[prop] = obj[prop];
			}
		}
	
		return content;
	}
}

module.exports = mixins.makeContentObject;