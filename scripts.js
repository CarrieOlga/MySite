var active = 0;
		var links = false;
		
		function parseDocument() {
			if (!links) {
				var nodelist = document.getElementById("test").childNodes;
				links = new Array();
				var k = 0;
				for (var i = 0; i < nodelist.length; i++) {
					if (nodelist[i] instanceof HTMLLIElement) {
						var li = nodelist[i].childNodes;
						for (var j = 0; j < li.length; j++) {
							if (li[j] instanceof HTMLAnchorElement) {
								links[k] = li[j];
								k++;
							}
						}
					}
				}
			}
			for (var i = 0; i < links.length; i++) {
				if (i == active) links[i].style.color = "#009999";
				else links[i].style.color = "black";
			}
			if ((active + 1) == links.length) active = 0;
			else active++;
			setTimeout(parseDocument, 100);
		}
// make our ajax request to the server
function submitForm(formData) {
	
	$.ajax({	
		type: 'POST',
		url: 'gogogo.php',		
		data: formData,
		dataType: 'json',
		cache: false,
		timeout: 7000,
		success: function(data) { 			
			
			$('form #response').removeClass().addClass((data.error === true) ? 'error' : 'success')
						.html(data.msg).fadeIn('fast');	
						
			if ($('form #response').hasClass('success')) {
				
				setTimeout("$('form #response').fadeOut('fast')", 5000);
			}
		
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
						
			$('form #response').removeClass().addClass('error')
						.html('<p>There was an<strong> ' + errorThrown +
							  '</strong> error due to a<strong> ' + textStatus +
							  '</strong> condition.</p>').fadeIn('fast');			
		},				
		complete: function(XMLHttpRequest, status) { 			
			
			$('form')[0].reset();
		}
	});	
};
