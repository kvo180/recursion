// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
		var results = [];

		function collectElements(node) {
			if (node.classList && node.classList.contains(className)) {
				results.push(node);
			}

			for (var i = 0; i < node.childNodes.length; i++) {
				if (node.childNodes[i]) {
					collectElements(node.childNodes[i]);
				}
			}
		}

		collectElements(document.body);
		return results;
	};
