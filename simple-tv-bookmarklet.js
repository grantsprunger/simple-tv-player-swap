(function(){

	var done = false;
	var script = document.createElement("script");
	script.src = "https://dl.dropboxusercontent.com/s/ythtyd0t9p2ks57/jwplayer-min.js?dl=1&token_hash=AAF1EFY6xNSFf6JzH60Ev0IlW6VpaITitaeaRhxlwxOaaQ";
	script.onload = script.onreadystatechange = function(){
		if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
			done = true;
			swapPlayer();
		}
	};
	document.getElementsByTagName("head")[0].appendChild(script);
	
	function swapPlayer() {
		(window.gsBookmarklet = function() {
			// get the m3u8 file location
			var url = $('#dev-videourl').text();
			var embed = '<div id="grants-player"></div>';
			
			// Remove player if we're on a recording page
			if ($('#video-player-large').length != 0) {
				$('#video-player-large').html(embed);
				jwplayer("grants-player").setup({
			        file: url,
			        autostart: true,
			        height: 480,
			        width: 980
			    });
			// Remove player if we're on the live page
			} else if ($('.placeholder-video').length != 0) {
				$('.placeholder-video').html(embed);
				jwplayer("grants-player").setup({
			        file: url,
			        autostart: true,
			        height: 456,
			        width: 810
			    });
			}

		})();
	}

})();