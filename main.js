
			// get slider Items جمع المعلومات 
			
			var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
			
			

			
			
			
			// get number of slides
			
			var slidesCount = sliderImages.length;
	
			
			// set current slide
			
			var currentSlide = 1;
			
			// slide Number string Element
			var slideNumberElement = document.getElementById('slider-number')

			
			// previous and next buttons 
			
			var nextButton = document.getElementById('next');
			var prevButton = document.getElementById('prev');
			
			// Handle Click on Previous and Next Button 
			nextButton.onclick = nextSlide;
			prevButton.onclick = prevSlide;
			
			// Create The Main Element 
			var paginationElement = document.createElement('ul');
			// set Id on created element
			paginationElement.setAttribute('id','pagination-ul');
			
			// Create List Items Based On Array Slide Count
			
			for(let i = 1 ; i <= slidesCount ; i++){
				
				// Create The LI
				var paginationItem = document.createElement('li');
				// set Custom Atribute
				paginationItem.setAttribute('data-index', i);
				// set Item Content 
				paginationItem.appendChild(document.createTextNode(i));
				
				// Appent Items to The Main UL  List
				paginationElement.appendChild(paginationItem)
			};
			
			// Add The Created UL Element to The page
			document.getElementById('indicators').appendChild(paginationElement)
			
			
			// Get The New Created UL
			var paginationUl = document.getElementById('pagination-ul');
			
			// get pagination li 
			
			var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
			
			// loop Through All Bullets Items
			for(let i = 0 ; i < paginationsBullets.length ; i++){
				paginationsBullets[i].onclick = function(){
					currentSlide = parseInt( this.getAttribute('data-index'));
					 theChecker()
				}
			};
			
			// Trigger The Checker function
			 theChecker()
			

			
			// Next slide function
			function nextSlide(){
					if(nextButton.classList.contains('disabled')){
						return false
					}else{
				 currentSlide++
				 theChecker()
					}
			};

			 
			 // prev slide function
			function prevSlide(){
					if(prevButton.classList.contains('disabled')){
						return false
					}else{
				 currentSlide--
				 theChecker()
					}
			};
	
			// Create The Checker function
			
			function theChecker(){
				// set the slide number
				slideNumberElement.textContent = `slide #${currentSlide} of ${slidesCount} `;
				// Remove All Active Classes
				removeAllActive()
				
				//  set Active Class On Current
				sliderImages[currentSlide -1].classList.add('active');
				
				// Set Active Class on Current Pagination Item 
				
				paginationUl.children[currentSlide - 1].classList.add('active');
				
				// Check if Current Slide is The first
				
				if(currentSlide == 1){
					//Add Disabled Class on Previous Button
					prevButton.classList.add('disabled');
				}else{
					//remove Disabled Class from Previous Button
					prevButton.classList.remove('disabled');
				};
				
				// Check if Current Slide is The List
				if(currentSlide == slidesCount){
					//Add Disabled Class on Previous Button
					nextButton.classList.add('disabled');
				}else{
					//remove Disabled Class from Previous Button
					nextButton.classList.remove('disabled');
				};
				
			};
			
			
			
			// Remove All Active Classes From Images and Bullets
			
			function removeAllActive(){
				
				// loop Through Images
				sliderImages.forEach(function(img){
					img.classList.remove('active')
				});
				
				// loop Through pagination Bullets
				paginationsBullets.forEach(function(bullet){
					bullet.classList.remove('active')
				});
}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
	
	
	
	
	
	
	
	